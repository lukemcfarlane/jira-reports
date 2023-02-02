import { parse } from 'csv-parse/sync'

export default async function handleCsvFileUpload({ target }) {
  const file = target.files[0]
  const text = await file.text()
  const data = parse(text, { columns: true })

  window.data = data

  console.log('finished parsing', data)
}
