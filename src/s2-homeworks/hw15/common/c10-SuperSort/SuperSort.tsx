import React from 'react'
import imgdown from './img/down.svg'
import imgup from './img/up.svg'


// добавить в проект иконки и импортировать
const downIcon = imgdown
const upIcon = imgup
const noneIcon =  imgdown

export type SuperSortPropsType = {
    id?: string
    sort: string
    value: string
    onChange: (newSort: string) => void
}

export const pureChange = (sort: string, down: string, up: string) => {
    if (sort === '') return down
    if (sort === down) return up
    if (sort === up) return ''
    return down
}

const SuperSort: React.FC<SuperSortPropsType> = (
  {
      sort, value, onChange, id = 'hw15',
  }
) => {
    const up = '0' + value
    const down = '1' + value

    const onChangeCallback = () => {
        onChange(pureChange(sort, down, up))
    }

    const icon = sort === down
      ? downIcon
      : sort === up
        ? upIcon
        : noneIcon

    return (
      <span
        id={id + '-sort-' + value}
        onClick={onChangeCallback}
      >
          <img src={icon} alt={up} />
        </span>
    )
}

export default SuperSort
