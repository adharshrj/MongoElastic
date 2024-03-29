const { Client } = require('@elastic/elasticsearch');
const client = new Client({ node: 'http://localhost:9200' });

const phraseSearch = async (_index, _type, phrase) => {
  const hits = [];

  // only string values are searchable
  const searchResult = await client
    .search({
      index: _index,
      type: _type,
      body: {
        query: {
          multi_match: {
            fields: [
              'name',
              'type'
            ],
            query: phrase,
            type: 'phrase_prefix',
            //lenient: true
          },
        },
        highlight: {
          fields: {
            name: {},
          },
        },
      },
    })
    .catch((e) => console.log('error', e));
  if (
    searchResult &&
    searchResult.body &&
    searchResult.body.hits &&
    searchResult.body.hits.hits &&
    searchResult.body.hits.hits.length > 0
  ) {
    hits.push(...searchResult.body.hits.hits);
  }

  return {
    hitsCount: hits.length,
    hits,
  };
};

module.exports = {
  phraseSearch
};