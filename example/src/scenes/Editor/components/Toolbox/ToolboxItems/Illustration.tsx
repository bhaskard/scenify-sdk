import * as React from 'react'
import Icons from '../../icons'
import { Button, SHAPE, KIND, SIZE } from 'baseui/button'
import useAppContext from '../../../../../hooks/useAppContext'
import { SubMenuType } from '../../../../../constants/editor'
import Delete from './components/Delete'
import Duplicate from './components/Duplicate'
import Opacity from './components/Opacity'
import Position from './components/Position'
import Animate from './components/Animate'
import { useActiveObject } from '../../../../../../../src'
import { useEffect } from 'react'
import { groupBy } from 'lodash'
import { HexColorPicker } from 'react-colorful'
import { StatefulPopover } from 'baseui/popover'

function Illustration() {
  const { setActiveSubMenu } = useAppContext()
  const activeObject = useActiveObject()
  const [colors, setColors] = React.useState([])

  useEffect(() => {
    if (activeObject) {
      loadColors(activeObject)
    }
  }, [activeObject])

  const loadColors = vector => {
    const elements = vector._objects[0]._objects
    const grouped = groupBy(elements, 'fill')
    const colors = Object.keys(grouped).map(k => k)
    setColors(colors)
  }

  const applyColors = (prev, next) => {
    // @ts-ignore
    const elements = activeObject._objects[0]._objects
    const grouped = groupBy(elements, 'fill')
    const selectedItems = grouped[prev]
    console.log({ selectedItems })
    if (selectedItems) {
      selectedItems.forEach(selectedItem => {
        selectedItem.fill = next
      })
    }
    // console.log({ grouped, prev, next })
  }
  return (
    <div
      style={{
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 1rem'
      }}
    >
      <div>
        {colors.map(color => {
          return (
            <StatefulPopover
              content={() => (
                <div>
                  <HexColorPicker color={color} onChange={next => applyColors(color, next)} />
                </div>
              )}
              returnFocus
              autoFocus
            >
              <Button
                onClick={() => setActiveSubMenu(SubMenuType.COLOR)}
                size={SIZE.compact}
                kind={KIND.tertiary}
                shape={SHAPE.square}
              >
                <Icons.FillColor size={24} color={color} />
              </Button>
            </StatefulPopover>
          )
        })}
        <Animate />
      </div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Position />
        <Opacity />
        <Duplicate />
        <Delete />
      </div>
    </div>
  )
}

export default Illustration
