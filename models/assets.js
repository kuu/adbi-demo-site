// const api = require('../libs/ooyala');
const fs = require('fs');
const path = require('path');

module.exports = {
  getChannels() {
    // return api.get('/v2/assets', {where: `labels='Movie'`}, {recursive: true});
    /*
    return Promise.resolve([
      {
        embed_code: 'xyMXloNzE6WwV1mZvpU19kOekTzne5OK',
        preview_image_url: 'http://ak.c.ooyala.com/xyMXloNzE6WwV1mZvpU19kOekTzne5OK/promo303113571'
      },
      {
        embed_code: 'ZyaG5pNzE6q-YwTZbqGNI9rm3WvFaVAG',
        preview_image_url: 'http://ak.c.ooyala.com/ZyaG5pNzE6q-YwTZbqGNI9rm3WvFaVAG/promo303114739'
      },
      {
        embed_code: 'd4eHQ0NTE6uk-3te5FTyCJ0euBrpZ10E',
        preview_image_url: 'http://ak.c.ooyala.com/d4eHQ0NTE6uk-3te5FTyCJ0euBrpZ10E/promo303114834'
      }
    ]);
    */
    return new Promise((resolve, reject) => {
      const filePath = path.join(__dirname, '../assets.json');
      fs.readFile(filePath, {encoding: 'utf8'}, (err, data) => {
        if (err) {
          reject(err);
        } else {
          try {
            const assets = JSON.parse(data);
            resolve(assets.map(asset => {
              return asset;
            }));
          } catch (err) {
            reject(err);
          }
        }
      });
    });
  }
};
