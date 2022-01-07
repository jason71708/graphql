const staticParameters = `
  query Media {
    Page(page: 3, perPage: 5) {
      pageInfo {
        total
        perPage
        currentPage
        lastPage
        hasNextPage
      }
      media(seasonYear: 2020) {
        title {
          english
          native
        }
        id
        type
        description
        season
        seasonYear
        episodes
        bannerImage
        coverImage {
          medium
        }
      }
    }
  }
`

const dynamicParameters = `
  query Media($page: Int, $perPage: Int, $seasonYear: Int) {
    Page(page: $page, perPage: $perPage) {
      pageInfo {
        total
        perPage
        currentPage
        lastPage
        hasNextPage
      }
      media(seasonYear: $seasonYear) {
        title {
          english
          native
        }
        id
        type
        description
        season
        seasonYear
        episodes
        bannerImage
        coverImage {
          medium
        }
      }
    }
  }
`

const aliaseQuery = `
  query Media($page: Int, $perPage: Int, $seasonYear: Int) {
    Page(page: $page, perPage: $perPage) {
      pageInfo {
        total
        perPage
        currentPage
        lastPage
        hasNextPage
      }
      media(seasonYear: $seasonYear) {
        title {
          english
          native
        }
        id
        type
        description
        season
        seasonYear
        episodes
        bannerImage
        coverImage {
          medium
        }
      }
    }
    pageNew: Page(page: $page, perPage: $perPage) {
      pageInfo {
        total
        perPage
        currentPage
        lastPage
        hasNextPage
      }
      media(seasonYear: 2022) {
        title {
          english
          native
        }
        id
        type
        description
        season
        seasonYear
        episodes
        bannerImage
        coverImage {
          medium
        }
      }
    }
  }
`

export default {
  staticParameters,
  dynamicParameters,
  aliaseQuery
}
