import type { Schema, Struct } from '@strapi/strapi';

export interface DemoTt extends Struct.ComponentSchema {
  collectionName: 'components_demo_tts';
  info: {
    displayName: 'tt';
  };
  attributes: {
    blow: Schema.Attribute.Blocks;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'demo.tt': DemoTt;
    }
  }
}
