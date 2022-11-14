import filter from './filter.module.scss'

export default function Filter() {
  const tabs: string[] = ['Самый дешевый', 'Самый быстрый', 'Оптимальный']

  const tabz = tabs.map((item) => {
    return (
      <button key={item} className={filter.tab} type='button'>
        {item}
      </button>
    )
  })

  return <div className={filter.tabs}>{tabz}</div>
}
