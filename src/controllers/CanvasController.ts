import CanvasHandler from '../handlers/CanvasHandler'

class CanvasController {
  private handler: CanvasHandler
  constructor(handler: CanvasHandler) {
    this.handler = handler
  }

  resize(nextWidth, nextHeight) {
    this.handler.resize(nextWidth, nextHeight)
  }

  renderAll(){
    this.handler.rendrall()
  }

}

export default CanvasController
