export function parseCSV(csvData: string): CSVData[] {
  const trimQuotes = (str: string) => {
    if (str.startsWith('"') && str.endsWith('"')) {
      return str.slice(1, -1);
    }
    return str;
  };
  const rows = csvData.split('\n').slice(1); // ヘッダー行をスキップ
  try {
    return rows.map((row) => {
      const [id, name, address] = row.split(',').map(trimQuotes);
      return { id, name, address };
    });
  } catch (error) {
    throw new Error('CSV data structure is not as expected.');
    return [];
  }
}
