import { Injectable } from '@angular/core';
import sanityClient from '@sanity/client';
import { About } from '../models/about';

@Injectable({
  providedIn: 'root'
})
export class SanityService {
  constructor() { }

  sanityClientCredentials = {
    option: sanityClient({
      projectId: "krj4q3or",
      dataset: "production"
    })
  }

//   urlFor = (source: any) =>
//   imageUrlBuilder(this.sanityClientCredentials.option).image(source);

  async getAbout(): Promise<About> {
    return await this.sanityClientCredentials.option.fetch(
      `*[_type == "about"][0]{
        title,
        subtitle
      }`
    );
  }
}
