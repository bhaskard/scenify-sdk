import { EditorOptions } from './common/interfaces'
import Handlers from './handlers'
import EventManager from './EventManager'

class Editor extends EventManager {
  public handlers: Handlers
  constructor(props: EditorOptions) {
    super()
    this.handlers = new Handlers({ ...props, editor: this })
  }

  // BASIC FUNCTIONS
  public add = (options: any) => {
    this.handlers.objectsHandler.add(options)
  }

  public update = (options: any) => {
    this.handlers.objectsHandler.update(options)
  }

  public copy = () => {
    this.handlers.objectsHandler.copy()
  }

  public cut = () => {
    this.handlers.objectsHandler.cut()
  }

  public paste = () => {
    this.handlers.objectsHandler.paste()
  }

  public clone = () => {
    this.handlers.objectsHandler.clone()
  }

  public delete = () => {
    this.handlers.objectsHandler.remove()
  }

  public clear = () => {
    this.handlers.objectsHandler.clear()
  }

  public deselect = () => {
    this.handlers.objectsHandler.deselect()
  }

  // HISTORY
  public undo = () => {
    this.handlers.historyHandler.undo()
  }
  public redo = () => {
    this.handlers.historyHandler.redo()
  }

  // ZOOM
  public zoomIn = () => {
    this.handlers.zoomHandler.zoomIn()
  }
  public zoomOut = () => {
    this.handlers.zoomHandler.zoomOut()
  }
  public zoomToOne = () => {
    this.handlers.zoomHandler.zoomToOne()
  }
  public zoomToFit = () => {
    this.handlers.zoomHandler.zoomToFit()
  }
  public zoomToRatio = (zoomRatio: number) => {
    this.handlers.zoomHandler.zoomToRatio(zoomRatio)
  }

  // ALIGMENT
  public alignTop = () => {
    this.handlers.objectsHandler.alignTop()
  }
  public alignMiddle = () => {
    this.handlers.objectsHandler.alignMiddle()
  }
  public alignBottom = () => {
    this.handlers.objectsHandler.alignBottom()
  }
  public alignLeft = () => {
    this.handlers.objectsHandler.alignLeft()
  }
  public alignCenter = () => {
    this.handlers.objectsHandler.alignCenter()
  }
  public alignRight = () => {
    this.handlers.objectsHandler.alignRight()
  }

  //LAYERS
  public bringForward = () => {
    this.handlers.objectsHandler.bringForward()
  }
  public bringToFront = () => {
    this.handlers.objectsHandler.bringToFront()
  }
  public sendBackwards = () => {
    this.handlers.objectsHandler.sendBackwards()
  }
  public sendToBack = () => {
    this.handlers.objectsHandler.sendToBack()
  }

  // GROUP
  public group = () => {
    this.handlers.objectsHandler.group()
  }

  public ungroup = () => {
    this.handlers.objectsHandler.ungroup()
  }

  // LOCK - UNLOCK
  public lock = () => {
    this.handlers.objectsHandler.lock()
  }

  public unlock = () => {
    this.handlers.objectsHandler.unlock()
  }

  // GRADIENT
  public setGradient = options => {
    this.handlers.objectsHandler.setGradient(options)
  }

  // SHADOW
  public setShadow = options => {
    this.handlers.objectsHandler.setShadow(options)
  }

  // DESIGN
  public exportToJSON = () => {
    this.handlers.templateHandler.exportToJSON()
  }
  public importFromJSON = data => {
    this.handlers.templateHandler.importFromJSON(data)
  }
  public toSVG = () => {}
  public toPNG = () => {}

  // CONTEXT MENU
  public cancelContextMenu = () => {
    this.handlers.personalizationHandler.context.setContextMenuRequest(null)
  }
}

export default Editor