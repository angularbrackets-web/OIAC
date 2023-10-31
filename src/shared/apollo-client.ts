import { ApolloClient, InMemoryCache, ApolloProvider, gql, useQuery } from '@apollo/client'

const client = new ApolloClient({
    uri: 'https://api-us-west-2.hygraph.com/v2/clo0kf2c97pnm01t4g8sva2ni/master',
    cache: new InMemoryCache(),
  })

export default client

export type DailyPrayerTime = {
    id:string,
    date:string,
    fajrBegins:string
}

export async function getPrayerTimes() {
    const prayerTimes = await client.query({
        query: gql`
        query {
            prayerTimes {
                id
                date
                fajrBegins
            }
        }`
  })
  
  let localPrayerTimes : Array<DailyPrayerTime> = []

  localPrayerTimes = prayerTimes.data.prayerTimes
  
  return localPrayerTimes 
}

export function test(){
    return "Test Content"
}

