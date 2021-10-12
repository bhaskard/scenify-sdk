import BaseHandler from '../BaseHandler'
import objectToFabric from './objectToFabric'
import { fabric } from 'fabric'
import { Template } from '../../common/interfaces'

class DesignHandler extends BaseHandler {
  public async toDataURL() {
    const staticCanvas = new fabric.StaticCanvas(null)
    const template = this.root.templateHandler.exportTemplate() as Template
    await this.loadTemplate(staticCanvas, template)
    const data = staticCanvas.toDataURL({
      multiplier: 3,
      top: 0,
      left: 0,
      height: staticCanvas.getHeight(),
      width: staticCanvas.getWidth()
    })
    return data
  }

  private async loadTemplate(staticCanvas: fabric.StaticCanvas, template: Template) {
    const { frame, background } = template
    this.setDimensions(staticCanvas, frame)
    this.setBackground(staticCanvas, background)

    for (const object of template.objects) {
      const element = await objectToFabric.run(object)
      if (element) {
        staticCanvas.add(element)
      } else {
        console.log('UNABLE TO LOAD OBJECT: ', object)
      }
    }
  }

  private setDimensions(
    staticCanvas: fabric.StaticCanvas,
    { width, height }: { width: number; height: number }
  ) {
    staticCanvas.setWidth(width).setHeight(height)
  }

  private setBackground(staticCanvas: fabric.StaticCanvas, background: { type: string; value: string }) {
    if (!background) {
      return
    }
    staticCanvas.setBackgroundColor(background.type === 'color' ? background.value : '#ffffff', () => {
      staticCanvas.renderAll()
    })
  }
}

export default DesignHandler