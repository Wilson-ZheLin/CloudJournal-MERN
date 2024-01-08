import { getPostsBySearch } from '../controller/posts.js';
import PostMessage from '../model/postMessage.js';

const mockingoose = require('mockingoose');

describe('Posts service', () => {
    describe('getPostsBySearch', () => {
      it ('should return the list of posts', async () => {
        mockingoose(PostMessage).toReturn([
          {
            title: 'title 1',
            message : 'message1'
          },
          {
            title: 'title 2',
            message : 'message2'
          }
        ], 'find');

        var request = new Object();
        request.query = { searchQuery: 'title', tags: '' };
        var response = {
            status: function(code){
                this.code=code;
                return this;
            },
            json: function(data){
                this.data=data;
            },
            getStatus: function() {
                return this.code;
            },
            getData: function() {
                return this.data;
            }
        };

        await getPostsBySearch(request, response);

        expect(response.data.data.length).toBe(2);
      });
    });
  });