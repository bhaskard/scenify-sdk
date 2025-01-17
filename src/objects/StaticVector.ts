import { fabric } from 'fabric'

class StaticVectorObject extends fabric.Group {
  static type = 'StaticVector'
  public src: string
  public colorchanges: {}
  //@ts-ignore
  initialize(objects, options, others) {
    this.set('src', others.src)
    this.set('colorchanges', others.colorchanges)
    const object = fabric.util.groupSVGElements(objects, options)
    //@ts-ignore
    super.initialize([object], others)
    return this
  }

  toObject(propertiesToInclude = []) {
    // @ts-ignore
    return super.toObject(propertiesToInclude, {
      src: this.src,
      colorchanges: this.colorchanges
    })
  }
  toJSON(propertiesToInclude = []) {
    // @ts-ignore
    return super.toObject(propertiesToInclude, {
      src: this.src,
      colorchanges: this.colorchanges
    })
  }

  static fromObject(options: any, callback: Function) {
    fabric.loadSVGFromURL(options.src, (objects, opts) => {
      return callback && callback(new fabric.StaticVector(objects, opts, { ...options }))
    })
  }
}

fabric.StaticVector = fabric.util.createClass(StaticVectorObject, {
  type: StaticVectorObject.type
})

fabric.StaticVector.fromObject = StaticVectorObject.fromObject

export type SvgOptions = fabric.Group & { text: string }

declare module 'fabric' {
  namespace fabric {
    class StaticVector extends StaticVectorObject {
      constructor(objects: any, options: any, others: any)
    }
  }
}

export default StaticVectorObject
