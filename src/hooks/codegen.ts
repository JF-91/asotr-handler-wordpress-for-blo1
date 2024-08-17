import type { CodegenConfig } from '@graphql-codegen/cli';
 
const config: CodegenConfig = {
    overwrite: true,
    schema: 'http://localhost/graphql',
    generates: {
        'src/hooks/graphql.ts': {
        plugins: ['typescript'],
        },
        "./graphql.schema.json": {
            plugins: ["introspection"],
        },
  },
};
export default config;