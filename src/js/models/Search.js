import axios from 'axios';
import { key, proxy } from '../config';

// key = 27c1cc379c209335788d1e1ca09ff67a

// https://www.food2fork.com/api/search

export default class Search {
    constructor(query) {
        this.query = query;
    }

    async getResults(query) {

        try {
            const res = await axios(`https://www.food2fork.com/api/search?key=${key}&q=${this.query}`);
            this.result = res.data.recipes;
            //console.log(this.result);
        }
        catch (error) {
            alert(error);
        }
    }
}






