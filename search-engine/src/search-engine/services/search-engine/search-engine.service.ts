import { Injectable } from '@nestjs/common';
import { Client } from '@elastic/elasticsearch';
import { Logger } from '@nestjs/common';
import env from '../../../configs/env-config';

@Injectable()
export class SearchEngineService {
  private readonly esclient: Client;

  private readonly logger = new Logger(SearchEngineService.name);

  constructor() {
    this.esclient = new Client({
      node: env.ELASTICSEARCH_URL,
    });
    this.esclient.ping().catch(err => {
      this.logger.error('Unable to reach Elasticsearch cluster');
    });
  }

  async insertNew(newsDocument) {
    return await this.esclient.index({
      index: env.ELASTICSEARCH_INDEX,
      refresh: 'true',
      body: newsDocument,
    });
  }

  async searchNews(q: string) {
    let searchQuery = {
      body: {
        query: {
          match: {
            type: q,
          },
        },
      },
    };

    if (q === 'all') {
      delete searchQuery['body']['query'];
    }

    const result = await this.esclient.search({
      index: env.ELASTICSEARCH_INDEX,
      ...searchQuery,
    });

    return result.body.hits.hits.map(r => ({
      title: r._source.title,
      body: r._source.body,
    }));
  }
}
