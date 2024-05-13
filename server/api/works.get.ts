import { WORKS } from '~/database/works';
export default defineEventHandler((event) => {
  const query = getQuery(event)
  const page: any = query.page
  const pageSize: any = query.pageSize
  const works_5 = WORKS.slice((page - 1) * pageSize, page * pageSize) //取5个
  // console.log(WORKS)
  return {
    works_5,
  }
})