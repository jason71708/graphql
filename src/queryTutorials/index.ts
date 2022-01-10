// Arguments
const argumentsQuery = `
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
// Variables
const variablesQuery = `
  query Media($page: Int, $perPage: Int = 20, $seasonYear: Int!) {
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
// Aliases
const aliasesQuery = `
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
// Directives
const directivesQuery = `
  query Media($page: Int, $perPage: Int, $seasonYear: Int, $withDetailInfo: Boolean = false) {
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
        popularity @include(if: $withDetailInfo)
        status @include(if: $withDetailInfo)
        averageScore @include(if: $withDetailInfo)
      }
    }
  }
`

export default {
  argumentsQuery,
  variablesQuery,
  aliasesQuery,
  directivesQuery
}
