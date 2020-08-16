#!/bin/sh
# wait-for-elasticsearch.sh
set -e


shift
cmd="$@"


until curl  http://elastic:9200/_cluster/health; do
  >&2 echo "Elastic is sleeping"
  sleep 1
done

>&2 echo "Elastic is up - executing command"
exec $cmd

