import { wpquery } from "../graphql/wordpressQuery";

export const getPagesByUries = async () => {
  const getPages = await wpquery({
    query: `
     query NewQuery {
        pages {
          nodes {
            slug
            uri
          }
        }
      }
    `,
  });

  return getPages.pages.nodes;
};

export const getBlocks = async (slug='') => {
  const blocks = await wpquery({
    query: `
    query GetBlocks {
      nodeByUri(uri: "/${slug}") {
        ... on Page {
          blocks
        }
      }
    }
  `,
  });

  return blocks.nodeByUri?.blocks;
};

export const getPost = async (id = 1) => {
  const post = await wpquery({
    query: `
    query GetPost($id: ID!) {
      post(id: $id) {
        id
        title
        content
        featuredImage {
          node {
            sourceUrl
          }
        }
      }
    }
  `,
    variables: {
      id: id,
    },
  });

  return post;
};

export const getTitlePage = async (uri = "") => {
  const pageTitle = await wpquery({
    query: `
    query GetTitlePage {
      nodeByUri(uri: "/${uri}") {
        ... on Page {
          id
          seo {
            title
          }
        }
      }
    }
  `,
  });

  return pageTitle.nodeByUri.seo.title;
};

export const getPostBySlug = async (slug = "home") => {
  const postBySlug = await wpquery({
    query: `
  query GetPostBySlug($slug: String!) {
    postBy(slug: $slug) {
      id
      title
      content
      slug
      featuredImage {
        node {
          sourceUrl
        }
      }
    }
  }
`,
    variables: {
      slug: slug,
    },
  });

  return postBySlug;
};

export const getMetaDescription = async (uri = "") => {
  const pageDescription = await wpquery({
    query: `
    query GetMetaDescription {
      nodeByUri(uri: "/${uri}") {
      ... on Page {
          id
          blocks
          seo {
            metaDesc
            title
          }
        }
      }
    }
  `,
  });

  return pageDescription.nodeByUri.seo.metaDesc;
};


export const getContent = async (slug = "") => {
  const blocks = await wpquery({
    query: `
    query getContent {
      nodeByUri(uri: "/${slug}") {
        ... on Page {
          content
        }
      }
    }
  `,
  });

  return blocks.nodeByUri.content;
};

const data = async(slug='') => {
  const getData = await wpquery({
    query: `
		query PageQuery {
			cssVariables
			nodeByUri(uri: "/${slug}") {
				... on Page {
					id
					title
					content
					blocks
					
				}
			}
		}
	`,
  });
  
  return getData
}