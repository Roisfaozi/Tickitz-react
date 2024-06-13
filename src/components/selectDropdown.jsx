/* eslint-disable no-console */
import Select, { Option } from 'rc-select'
import React, { useState } from 'react'
import '../selectDropdown.css'

const children = []
for (let i = 10; i < 36; i += 1) {
  children.push(
    <Option key={i.toString(36) + i} test={i}>
      {i.toString(36) + i}
    </Option>
  )
}

const SelectDropdown = () => {
  const [value, setValue] = useState(['name2', 'name3'])

  const onChange = (newValue, option) => {
    console.log(`changed ${newValue}`, option)
    setValue(newValue)
  }

  const onSelect = (newValue, option) => {
    console.log(`selected ${newValue}`, option.props)
  }

  const onDeselect = (newValue, option) => {
    console.log(`deselected ${newValue}`, option)
  }

  return (
    <div>
      <h2>custom dropdown render select</h2>

      <div>
        <Select
          placeholder='placeholder'
          mode='tags'
          style={{ width: 500 }}
          value={value}
          onChange={onChange}
          onSelect={onSelect}
          onDeselect={onDeselect}
          tokenSeparators={[' ', ',']}
          onFocus={() => console.log('focus')}
          onBlur={() => console.log('blur')}
          dropdownRender={(menu) => (
            <React.Fragment>
              <div
                onClick={() => {
                  console.log('before clicked')
                }}>
                BEFORE
                <a
                  href='http://taobao.com'
                  target='_blank'
                  rel='noopener noreferrer'>
                  TaoBao
                </a>
              </div>

              {menu}

              <div
                onClick={() => {
                  console.log('after clicked')
                }}>
                AFTER
                <input type='text' placeholder='test' />
                <button type='button'>Button</button>
              </div>
            </React.Fragment>
          )}>
          {children}
        </Select>
      </div>
    </div>
  )
}

export default SelectDropdown
/* eslint-enable */
