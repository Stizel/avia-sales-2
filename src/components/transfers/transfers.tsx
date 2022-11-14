import transfers from './transfers.module.scss'

export default function Transfers() {
  const transfersLabel: string[] = [
    'Все',
    'Без пересадок',
    '1 пересадка',
    '2 пересадки',
    '3 пересадки',
  ]

  const trans = transfersLabel.map((item) => {
    return (
      <li key={item}>
        <label className={transfers.label}>
          <input className={transfers.input} type='checkbox' />
          {item}
        </label>
      </li>
    )
  })

  return (
    <aside className={transfers.wrapper}>
      <h2 className={transfers.title}>количетво пересадок</h2>
      <ul className={transfers.list}>{trans}</ul>
    </aside>
  )
}
