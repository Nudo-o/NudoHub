/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/const.js":
/*!**********************!*\
  !*** ./src/const.js ***!
  \**********************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   adminLevelText: function() { return /* binding */ adminLevelText; },
/* harmony export */   cursorPoint: function() { return /* binding */ cursorPoint; },
/* harmony export */   discordButton: function() { return /* binding */ discordButton; },
/* harmony export */   discordImage: function() { return /* binding */ discordImage; },
/* harmony export */   forumButton: function() { return /* binding */ forumButton; },
/* harmony export */   forumImage: function() { return /* binding */ forumImage; },
/* harmony export */   globalPoint: function() { return /* binding */ globalPoint; },
/* harmony export */   mainConfig: function() { return /* binding */ mainConfig; },
/* harmony export */   mainContext: function() { return /* binding */ mainContext; },
/* harmony export */   mainScene: function() { return /* binding */ mainScene; },
/* harmony export */   monitoringText1: function() { return /* binding */ monitoringText1; },
/* harmony export */   monitoringText2: function() { return /* binding */ monitoringText2; },
/* harmony export */   nameText: function() { return /* binding */ nameText; },
/* harmony export */   serverButton: function() { return /* binding */ serverButton; },
/* harmony export */   serverText: function() { return /* binding */ serverText; },
/* harmony export */   vkButton: function() { return /* binding */ vkButton; },
/* harmony export */   vkImage: function() { return /* binding */ vkImage; }
/* harmony export */ });
/* harmony import */ var _config_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config.json */ "./src/config.json");
/* harmony import */ var _entities_ButtonBox_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./entities/ButtonBox.js */ "./src/entities/ButtonBox.js");
/* harmony import */ var _entities_CursorPoint_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./entities/CursorPoint.js */ "./src/entities/CursorPoint.js");
/* harmony import */ var _entities_GlobalPoint_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./entities/GlobalPoint.js */ "./src/entities/GlobalPoint.js");
/* harmony import */ var _entities_ImageBox_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./entities/ImageBox.js */ "./src/entities/ImageBox.js");
/* harmony import */ var _entities_TextDraw_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./entities/TextDraw.js */ "./src/entities/TextDraw.js");
/* harmony import */ var _scene_Scene_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./scene/Scene.js */ "./src/scene/Scene.js");
/* harmony import */ var _utils_index_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utils/index.js */ "./src/utils/index.js");









const mainConfig = _config_json__WEBPACK_IMPORTED_MODULE_0__

const mainScene = new _scene_Scene_js__WEBPACK_IMPORTED_MODULE_6__["default"]("#main_canvas")
const mainContext = mainScene.getRenderContext()

const cursorPoint = new _entities_CursorPoint_js__WEBPACK_IMPORTED_MODULE_2__["default"]()
const globalPoint = new _entities_GlobalPoint_js__WEBPACK_IMPORTED_MODULE_3__["default"]()

const nameText = new _entities_TextDraw_js__WEBPACK_IMPORTED_MODULE_5__["default"]("NUDO", mainConfig.map.middleSize[0] + 10, mainConfig.map.middleSize[1] - 200, 120, mainConfig.colors.nicknameFill, mainConfig.colors.nicknameStroke, true, 20)
const adminLevelText = new _entities_TextDraw_js__WEBPACK_IMPORTED_MODULE_5__["default"]("Administrator 3 level", mainConfig.map.middleSize[0] + 1, mainConfig.map.middleSize[1] - 140, 24, mainConfig.colors.adminLevelFill, mainConfig.colors.nicknameStroke, false, 2, 0, null, 8)
const monitoringText1 = new _entities_TextDraw_js__WEBPACK_IMPORTED_MODULE_5__["default"]("Заместитель главного следящего МО", mainConfig.map.middleSize[0] + 1, mainConfig.map.middleSize[1] - 113, 18, mainConfig.colors.monitoringFill[0], mainConfig.colors.nicknameStroke, false, 2, 0, null, 8)
const monitoringText2 = new _entities_TextDraw_js__WEBPACK_IMPORTED_MODULE_5__["default"]("Следящий за слётами", mainConfig.map.middleSize[0] + 1, mainConfig.map.middleSize[1] - 90, 18, mainConfig.colors.monitoringFill[1], mainConfig.colors.nicknameStroke, false, 2, 0, null, 8)
const serverText = new _entities_TextDraw_js__WEBPACK_IMPORTED_MODULE_5__["default"]("Sun City", mainConfig.map.middleSize[0] + 1, mainConfig.map.middleSize[1] + 49, 26, mainConfig.colors.serverFill, mainConfig.colors.serverStroke, false, 2, 0, null, 0)

const vkImage = new _entities_ImageBox_js__WEBPACK_IMPORTED_MODULE_4__["default"]("./assets/images/vkicon.png", -999, -999, 35)
const discordImage = new _entities_ImageBox_js__WEBPACK_IMPORTED_MODULE_4__["default"]("./assets/images/discordicon.png", -999, -999, 38)
const forumImage = new _entities_ImageBox_js__WEBPACK_IMPORTED_MODULE_4__["default"]("./assets/images/forumicon.png", -999, -999, 30)

const serverButton = new _entities_ButtonBox_js__WEBPACK_IMPORTED_MODULE_1__["default"](serverText)
const vkButton = new _entities_ButtonBox_js__WEBPACK_IMPORTED_MODULE_1__["default"](vkImage)
const discordButton = new _entities_ButtonBox_js__WEBPACK_IMPORTED_MODULE_1__["default"](discordImage)
const forumButton = new _entities_ButtonBox_js__WEBPACK_IMPORTED_MODULE_1__["default"](forumImage)

_entities_TextDraw_js__WEBPACK_IMPORTED_MODULE_5__["default"].addTextDraw(nameText, adminLevelText, monitoringText1, monitoringText2, serverText)
_entities_ButtonBox_js__WEBPACK_IMPORTED_MODULE_1__["default"].addButtonBox(serverButton, vkButton, discordButton, forumButton)
_entities_ImageBox_js__WEBPACK_IMPORTED_MODULE_4__["default"].addImageBox(vkImage, discordImage, forumImage)

discordButton.lastShowTextCopied = null

! function() {
    const margin = 10
    const size = 35
    const startX = mainConfig.map.middleSize[0] - (size + margin) * (_entities_ImageBox_js__WEBPACK_IMPORTED_MODULE_4__["default"].imageBoxes.length / 2 - 0.5)

    for (let i = 0; i < _entities_ImageBox_js__WEBPACK_IMPORTED_MODULE_4__["default"].imageBoxes.length; i++) {
        const imageBox = _entities_ImageBox_js__WEBPACK_IMPORTED_MODULE_4__["default"].imageBoxes[i]

        imageBox.setTo(startX + (size + margin) * i + 1, mainConfig.map.middleSize[1] + 82)
    }
}()


/***/ }),

/***/ "./src/entities/ButtonBox.js":
/*!***********************************!*\
  !*** ./src/entities/ButtonBox.js ***!
  \***********************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ ButtonBox; }
/* harmony export */ });
/* harmony import */ var _const_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../const.js */ "./src/const.js");
/* harmony import */ var _utils_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/index.js */ "./src/utils/index.js");
/* harmony import */ var _TextDraw_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TextDraw.js */ "./src/entities/TextDraw.js");




class ButtonBox extends _utils_index_js__WEBPACK_IMPORTED_MODULE_1__["default"].Point {
    static buttonBoxes = []

    constructor(boxDraw) {
        const boxDrawMetrics = boxDraw instanceof _TextDraw_js__WEBPACK_IMPORTED_MODULE_2__["default"] ? boxDraw.getMetrics() : boxDraw
        const x = boxDraw.x - boxDrawMetrics.width / 2
        const y = boxDraw.y - boxDrawMetrics.height / 2

        super(x - boxDraw.padding, y - boxDraw.padding, boxDrawMetrics.width + boxDraw.padding * 2, boxDrawMetrics.height + boxDraw.padding * 2)

        this.boxDraw = boxDraw
        
        this.events = new _utils_index_js__WEBPACK_IMPORTED_MODULE_1__["default"].Emitter()

        this.isClicked = false
        this.isHovered = false

        this.isReadyForClick = false
    }

    checkIsHover() {
        const x = this.x - _const_js__WEBPACK_IMPORTED_MODULE_0__.mainScene.getXOffset()
        const y = this.y - _const_js__WEBPACK_IMPORTED_MODULE_0__.mainScene.getYOffset()

        if (_const_js__WEBPACK_IMPORTED_MODULE_0__.cursorPoint.x >= x && _const_js__WEBPACK_IMPORTED_MODULE_0__.cursorPoint.x <= x + this.width) {
            if (_const_js__WEBPACK_IMPORTED_MODULE_0__.cursorPoint.y >= y && _const_js__WEBPACK_IMPORTED_MODULE_0__.cursorPoint.y <= y + this.height) {
                return true
            }
        }

        return false
    }

    checkIsClick() {
        if (!this.isHovered) return false

        if (this.isReadyForClick && !_const_js__WEBPACK_IMPORTED_MODULE_0__.cursorPoint.isMouseDown) {
            this.isReadyForClick = false

            this.events.emit("click")

            return true
        }

        if (_const_js__WEBPACK_IMPORTED_MODULE_0__.cursorPoint.isMouseDown) {
            this.isReadyForClick = true

            return false
        }
    }

    update() {
        const boxDrawMetrics = this.boxDraw instanceof _TextDraw_js__WEBPACK_IMPORTED_MODULE_2__["default"] ? this.boxDraw.getMetrics() : this.boxDraw
        const x = this.boxDraw.x - boxDrawMetrics.width / 2
        const y = this.boxDraw.y - boxDrawMetrics.height / 2

        this.setTo(x - this.boxDraw.padding, y - this.boxDraw.padding)

        this.isClicked = this.checkIsClick()
        this.isHovered = this.checkIsHover()

        if (!this.isHovered) {
            this.isReadyForClick = false
        }
    }

    static addButtonBox(...buttonBoxes) {
        for (const buttonBox of buttonBoxes) {
            ButtonBox.buttonBoxes.push(buttonBox)
        }
    }

    static updateAllButtonBoxes() {
        for (const buttonBox of ButtonBox.buttonBoxes) {
            buttonBox.update()
        }

        const isCursorToPointer = !ButtonBox.buttonBoxes.every((buttonBox) => !buttonBox.isHovered)

        if (isCursorToPointer) {
            return _const_js__WEBPACK_IMPORTED_MODULE_0__.cursorPoint.setType("button")
        }

        if (_const_js__WEBPACK_IMPORTED_MODULE_0__.globalPoint.isReadyMove) {
            return _const_js__WEBPACK_IMPORTED_MODULE_0__.cursorPoint.setType("dragging")
        }

        _const_js__WEBPACK_IMPORTED_MODULE_0__.cursorPoint.setType("canvas")
    }
}

/***/ }),

/***/ "./src/entities/CursorPoint.js":
/*!*************************************!*\
  !*** ./src/entities/CursorPoint.js ***!
  \*************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ CursorPoint; }
/* harmony export */ });
/* harmony import */ var _const_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../const.js */ "./src/const.js");
/* harmony import */ var _utils_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/index.js */ "./src/utils/index.js");



class CursorPoint extends _utils_index_js__WEBPACK_IMPORTED_MODULE_1__["default"].Point {
    static types = {
        "canvas": "default",
        "button": "pointer",
        "dragging": "grab"
    }

    constructor() {
        super(_const_js__WEBPACK_IMPORTED_MODULE_0__.mainConfig.map.width / 2, _const_js__WEBPACK_IMPORTED_MODULE_0__.mainConfig.map.height / 2, 0, 0)

        this.type = "canvas"

        this.isMouseDown = false
    }

    getType() {
        return this.type
    }

    setType(type) {
        this.type = type

        const cursorType = CursorPoint.types[this.type]

        if (_const_js__WEBPACK_IMPORTED_MODULE_0__.mainScene.view.style.cursor === cursorType) return

        _const_js__WEBPACK_IMPORTED_MODULE_0__.mainScene.view.style.cursor = cursorType
    }
}

/***/ }),

/***/ "./src/entities/GlobalPoint.js":
/*!*************************************!*\
  !*** ./src/entities/GlobalPoint.js ***!
  \*************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ GlobalPoint; }
/* harmony export */ });
/* harmony import */ var _const_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../const.js */ "./src/const.js");
/* harmony import */ var _render_Renderer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../render/Renderer.js */ "./src/render/Renderer.js");
/* harmony import */ var _utils_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/index.js */ "./src/utils/index.js");




class GlobalPoint extends _utils_index_js__WEBPACK_IMPORTED_MODULE_2__["default"].Point {
    constructor() {
        super(_const_js__WEBPACK_IMPORTED_MODULE_0__.mainConfig.map.width / 2, _const_js__WEBPACK_IMPORTED_MODULE_0__.mainConfig.map.height / 2, 0, 0)

        this.xVel = 0
        this.yVel = 0
    }

    isMove() {
        return Boolean(this.xVel || this.yVel)
    }

    collideBorders() {
        if (this.x < 0) this.x = 0
        if (this.x > _const_js__WEBPACK_IMPORTED_MODULE_0__.mainConfig.map.width) this.x = _const_js__WEBPACK_IMPORTED_MODULE_0__.mainConfig.map.width
        if (this.y < 0) this.y = 0
        if (this.y > _const_js__WEBPACK_IMPORTED_MODULE_0__.mainConfig.map.height) this.y = _const_js__WEBPACK_IMPORTED_MODULE_0__.mainConfig.map.height
    }

    decelVelocity() {
        if (this.xVel) {
            this.xVel *= Math.pow(0.993, _render_Renderer_js__WEBPACK_IMPORTED_MODULE_1__["default"].delta)

            if (this.xVel <= 0.01 && this.xVel >= -0.01) this.xVel = 0
        }

        if (this.yVel) {
            this.yVel *= Math.pow(0.993, _render_Renderer_js__WEBPACK_IMPORTED_MODULE_1__["default"].delta)

            if (this.yVel <= 0.01 && this.yVel >= -0.01) this.yVel = 0
        }
    }

    update() {
        if (this.isMove()) {
            this.x += this.xVel
            this.y += this.yVel

            this.decelVelocity()
            this.collideBorders()
        }
    }
}

/***/ }),

/***/ "./src/entities/ImageBox.js":
/*!**********************************!*\
  !*** ./src/entities/ImageBox.js ***!
  \**********************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ ImageBox; }
/* harmony export */ });
/* harmony import */ var _const_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../const.js */ "./src/const.js");
/* harmony import */ var _utils_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/index.js */ "./src/utils/index.js");



class ImageBox extends _utils_index_js__WEBPACK_IMPORTED_MODULE_1__["default"].Point {
    static imageBoxes = []
    
    constructor(imageSrc, x, y, size) {
        super(x, y, size, size)

        this.imageSrc = imageSrc

        this.image = new Image()
        this.image.src = this.imageSrc

        this.image.onload = () => {
            this.image.isLoaded = true
        }

        this.padding = 0
    }

    draw() {
        if (!this.image.isLoaded) return

        _const_js__WEBPACK_IMPORTED_MODULE_0__.mainContext.save()
        _const_js__WEBPACK_IMPORTED_MODULE_0__.mainContext.translate(this.x - _const_js__WEBPACK_IMPORTED_MODULE_0__.mainScene.getXOffset(), this.y - _const_js__WEBPACK_IMPORTED_MODULE_0__.mainScene.getYOffset())
        _const_js__WEBPACK_IMPORTED_MODULE_0__.mainContext.drawImage(this.image, -this.width / 2, -this.height / 2, this.width, this.height)
        _const_js__WEBPACK_IMPORTED_MODULE_0__.mainContext.restore()
    }

    update() {
        this.draw()
    }

    static addImageBox(...imageBoxes) {
        for (const imageBox of imageBoxes) {
            ImageBox.imageBoxes.push(imageBox)
        }
    }

    static updateAllImageBoxes() {
        for (const imageBox of ImageBox.imageBoxes) {
            imageBox.update()
        }
    }
}

/***/ }),

/***/ "./src/entities/TextDraw.js":
/*!**********************************!*\
  !*** ./src/entities/TextDraw.js ***!
  \**********************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ TextDraw; }
/* harmony export */ });
/* harmony import */ var _const_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../const.js */ "./src/const.js");
/* harmony import */ var _utils_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/index.js */ "./src/utils/index.js");



class TextDraw extends _utils_index_js__WEBPACK_IMPORTED_MODULE_1__["default"].Point {
    static textDraws = []

    constructor(text, x, y, fontSize, fillColor, strokeColor, isBold, letterSpacing, rotation, backgroundColor, padding) {
        super(x, y, 0, 0)

        this.text = text
        this.fontSize = fontSize
        this.fillColor = fillColor
        this.strokeColor = strokeColor
        this.isBold = isBold
        this.letterSpacing = letterSpacing
        this.rotation = rotation * (Math.PI / 180)
        this.backgroundColor = backgroundColor

        this.padding = padding === 0 ? padding : padding || 6
    }

    getMetrics() {
        _const_js__WEBPACK_IMPORTED_MODULE_0__.mainContext.save()
        this.setDrawStyles()
        
        const metrics = _const_js__WEBPACK_IMPORTED_MODULE_0__.mainContext.measureText(this.text)
        const actualHeight = metrics.actualBoundingBoxAscent + metrics.actualBoundingBoxDescent

        _const_js__WEBPACK_IMPORTED_MODULE_0__.mainContext.restore()

        return {
            width: metrics.width,
            height: actualHeight
        }
    }
    
    setDrawStyles() {
        _const_js__WEBPACK_IMPORTED_MODULE_0__.mainContext.font = `${this.isBold ? "bold " : ""}${this.fontSize.toPixels()} ${_const_js__WEBPACK_IMPORTED_MODULE_0__.mainConfig.defaultFont}`
        _const_js__WEBPACK_IMPORTED_MODULE_0__.mainContext.strokeStyle = this.strokeColor
        _const_js__WEBPACK_IMPORTED_MODULE_0__.mainContext.lineWidth = 8
        _const_js__WEBPACK_IMPORTED_MODULE_0__.mainContext.textBaseline = "middle"
        _const_js__WEBPACK_IMPORTED_MODULE_0__.mainContext.textAlign = "center"
        _const_js__WEBPACK_IMPORTED_MODULE_0__.mainContext.lineJoin = "round"
        _const_js__WEBPACK_IMPORTED_MODULE_0__.mainContext.lineCap = "round"
        _const_js__WEBPACK_IMPORTED_MODULE_0__.mainContext.letterSpacing = this.letterSpacing.toPixels()
    }

    draw() {
        _const_js__WEBPACK_IMPORTED_MODULE_0__.mainContext.save()
        this.setDrawStyles()

        const metrics = this.getMetrics()

        _const_js__WEBPACK_IMPORTED_MODULE_0__.mainContext.translate(this.x - _const_js__WEBPACK_IMPORTED_MODULE_0__.mainScene.getXOffset(), this.y - _const_js__WEBPACK_IMPORTED_MODULE_0__.mainScene.getYOffset())
        _const_js__WEBPACK_IMPORTED_MODULE_0__.mainContext.rotate(this.rotation)

        if (this.backgroundColor) {
            _const_js__WEBPACK_IMPORTED_MODULE_0__.mainContext.fillStyle = this.backgroundColor

            _const_js__WEBPACK_IMPORTED_MODULE_0__.mainContext.beginPath()
            _const_js__WEBPACK_IMPORTED_MODULE_0__.mainContext.roundRect(-metrics.width / 2 - this.padding, -metrics.height / 2 - this.padding, metrics.width + this.padding * 2, metrics.height + this.padding * 2, 8)
            _const_js__WEBPACK_IMPORTED_MODULE_0__.mainContext.fill()
        }

        _const_js__WEBPACK_IMPORTED_MODULE_0__.mainContext.fillStyle = this.fillColor

        _const_js__WEBPACK_IMPORTED_MODULE_0__.mainContext.strokeText(this.text, 0, 0)
        _const_js__WEBPACK_IMPORTED_MODULE_0__.mainContext.fillText(this.text, 0, 0)
        _const_js__WEBPACK_IMPORTED_MODULE_0__.mainContext.restore()
    }

    update() {
        this.draw()
    }

    static addTextDraw(...textDraws) {
        for (const textDraw of textDraws) {
            TextDraw.textDraws.push(textDraw)
        }
    }

    static updateAllTextDraws() {
        for (const textDraw of TextDraw.textDraws) {
            textDraw.update()
        }
    }
}

/***/ }),

/***/ "./src/events/dom/onMousedown.js":
/*!***************************************!*\
  !*** ./src/events/dom/onMousedown.js ***!
  \***************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _const_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../const.js */ "./src/const.js");
/* harmony import */ var _utils_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/index.js */ "./src/utils/index.js");



function onMousedown(event) {
    _const_js__WEBPACK_IMPORTED_MODULE_0__.cursorPoint.isMouseDown = true
    
    if (_const_js__WEBPACK_IMPORTED_MODULE_0__.globalPoint.isReadyMove) return 

    _const_js__WEBPACK_IMPORTED_MODULE_0__.cursorPoint.setTo(
        event.clientX / _const_js__WEBPACK_IMPORTED_MODULE_0__.mainScene.getScale(), 
        event.clientY / _const_js__WEBPACK_IMPORTED_MODULE_0__.mainScene.getScale()
    )

    _const_js__WEBPACK_IMPORTED_MODULE_0__.globalPoint.isReadyMove = true
    _const_js__WEBPACK_IMPORTED_MODULE_0__.globalPoint.startPoint = new _utils_index_js__WEBPACK_IMPORTED_MODULE_1__["default"].Point(_const_js__WEBPACK_IMPORTED_MODULE_0__.cursorPoint.x, _const_js__WEBPACK_IMPORTED_MODULE_0__.cursorPoint.y, 0, 0)
}

window.addEventListener("touchstart", (event) => onMousedown(event.touches[0]), false)
window.addEventListener("mousedown", (event) => onMousedown(event), false)

/***/ }),

/***/ "./src/events/dom/onMousemove.js":
/*!***************************************!*\
  !*** ./src/events/dom/onMousemove.js ***!
  \***************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _const_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../const.js */ "./src/const.js");
/* harmony import */ var _render_Renderer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../render/Renderer.js */ "./src/render/Renderer.js");
/* harmony import */ var _utils_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/index.js */ "./src/utils/index.js");




function onMousemove(event) {
    _const_js__WEBPACK_IMPORTED_MODULE_0__.cursorPoint.setTo(
        event.clientX / _const_js__WEBPACK_IMPORTED_MODULE_0__.mainScene.getScale(), 
        event.clientY / _const_js__WEBPACK_IMPORTED_MODULE_0__.mainScene.getScale()
    )
    
    if (!_const_js__WEBPACK_IMPORTED_MODULE_0__.globalPoint.isReadyMove) return

    const angle = _const_js__WEBPACK_IMPORTED_MODULE_0__.cursorPoint.angleTo(_const_js__WEBPACK_IMPORTED_MODULE_0__.globalPoint.startPoint)
    const distance = _const_js__WEBPACK_IMPORTED_MODULE_0__.globalPoint.startPoint.distanceTo(_const_js__WEBPACK_IMPORTED_MODULE_0__.cursorPoint)
    const speed = Math.min(distance * .000035 * _render_Renderer_js__WEBPACK_IMPORTED_MODULE_1__["default"].delta, distance)
    
    _const_js__WEBPACK_IMPORTED_MODULE_0__.globalPoint.xVel = speed * _render_Renderer_js__WEBPACK_IMPORTED_MODULE_1__["default"].delta * Math.cos(angle)
    _const_js__WEBPACK_IMPORTED_MODULE_0__.globalPoint.yVel = speed * _render_Renderer_js__WEBPACK_IMPORTED_MODULE_1__["default"].delta * Math.sin(angle)
}

window.addEventListener("touchmove", (event) => onMousemove(event.touches[0]), false)
window.addEventListener("mousemove", (event) => onMousemove(event), false)

/***/ }),

/***/ "./src/events/dom/onMouseup.js":
/*!*************************************!*\
  !*** ./src/events/dom/onMouseup.js ***!
  \*************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _const_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../const.js */ "./src/const.js");


function onMouseup(event) {
    _const_js__WEBPACK_IMPORTED_MODULE_0__.cursorPoint.isMouseDown = false
    _const_js__WEBPACK_IMPORTED_MODULE_0__.globalPoint.isReadyMove = false
    _const_js__WEBPACK_IMPORTED_MODULE_0__.globalPoint.startPoint = null
}

window.addEventListener("touchend", onMouseup, false)
window.addEventListener("mouseup", onMouseup, false)

/***/ }),

/***/ "./src/events/dom/onWheel.js":
/*!***********************************!*\
  !*** ./src/events/dom/onWheel.js ***!
  \***********************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _const_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../const.js */ "./src/const.js");
/* harmony import */ var _utils_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/index.js */ "./src/utils/index.js");



function addZoom(max, power) {
    const currentZoom = _const_js__WEBPACK_IMPORTED_MODULE_0__.mainScene.getZoom()
    const isMobile = power !== 0.05

    if (currentZoom >= max) return

    for (let i = 0; i < 5; i++) {
        setTimeout(() => {
            if (currentZoom >= max) return

            let zoom = currentZoom + Math.lerp(power, currentZoom, power)

            if (isMobile) {
                zoom = currentZoom * power
            }

            _const_js__WEBPACK_IMPORTED_MODULE_0__.mainScene.setZoom(zoom)
        }, 5 * i)
    }
}

function subZoom(min, power) {
    const currentZoom = _const_js__WEBPACK_IMPORTED_MODULE_0__.mainScene.getZoom()
    const isMobile = power !== 0.05

    if (currentZoom <= min) return

    for (let i = 0; i < 5; i++) {
        setTimeout(() => {
            if (currentZoom <= min) return

            let zoom = currentZoom - Math.lerp(power, currentZoom, power)

            if (isMobile) {
                zoom = currentZoom / power
            }
            
            _const_js__WEBPACK_IMPORTED_MODULE_0__.mainScene.setZoom(zoom)
        }, 5 * i)
    }
}

let isCanTouchZoom = false
let oldTouchDist = null

window.addEventListener("touchmove", (event) => {
    const max = 2
    const min = 0.1
    const power = 1.1

    if (event.touches.length === 2) {
        const firstPoint = new _utils_index_js__WEBPACK_IMPORTED_MODULE_1__["default"].Point(event.touches[0].pageX, event.touches[0].pageY)
        const secondPoint = new _utils_index_js__WEBPACK_IMPORTED_MODULE_1__["default"].Point(event.touches[1].pageX, event.touches[1].pageY)
        const distance = firstPoint.distanceTo(secondPoint)
        const dif = Math.abs(distance - oldTouchDist)

        _const_js__WEBPACK_IMPORTED_MODULE_0__.globalPoint.isReadyMove = false

        if ((oldTouchDist != null && dif >= 5) || isCanTouchZoom) {
            const index = Number(distance > oldTouchDist)

            isCanTouchZoom = true

            if (index) {
                subZoom(min, power)
            } else {
                addZoom(max, power)
            }
        }

        oldTouchDist = distance
    }
})


window.addEventListener("touchstart", () => {
    oldTouchDist = null
    isCanTouchZoom = false
})
    
window.addEventListener("touchend", () => {
    oldTouchDist = null
    isCanTouchZoom = false
})

window.addEventListener("wheel", (event) => {
    const max = 2
    const min = 0.1
    const power = 0.05

    if (event.deltaY > 0) return addZoom(max, power)

    subZoom(min, power)
}, false)

/***/ }),

/***/ "./src/events/initEvents.js":
/*!**********************************!*\
  !*** ./src/events/initEvents.js ***!
  \**********************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dom_onMousedown_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom/onMousedown.js */ "./src/events/dom/onMousedown.js");
/* harmony import */ var _dom_onMouseup_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom/onMouseup.js */ "./src/events/dom/onMouseup.js");
/* harmony import */ var _dom_onMousemove_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dom/onMousemove.js */ "./src/events/dom/onMousemove.js");
/* harmony import */ var _dom_onWheel_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dom/onWheel.js */ "./src/events/dom/onWheel.js");





/***/ }),

/***/ "./src/events/system/onDiscordButtonClick.js":
/*!***************************************************!*\
  !*** ./src/events/system/onDiscordButtonClick.js ***!
  \***************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ onDiscordButtonClick; }
/* harmony export */ });
/* harmony import */ var _const_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../const.js */ "./src/const.js");


function onDiscordButtonClick() {
    _const_js__WEBPACK_IMPORTED_MODULE_0__.discordButton.lastShowTextCopied = Date.now()

    navigator.clipboard.writeText("nudoo")
}

/***/ }),

/***/ "./src/events/system/onForumButtonClick.js":
/*!*************************************************!*\
  !*** ./src/events/system/onForumButtonClick.js ***!
  \*************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ onForumButtonClick; }
/* harmony export */ });
function onForumButtonClick() {
    window.open("https://forum.arizona-rp.com/members/1735841/", "__blank")
}

/***/ }),

/***/ "./src/events/system/onServerButtonClick.js":
/*!**************************************************!*\
  !*** ./src/events/system/onServerButtonClick.js ***!
  \**************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ onServerButtonClick; }
/* harmony export */ });
function onServerButtonClick() {
    window.open("https://forum.arizona-rp.com/forums/1986/", "__blank")
}

/***/ }),

/***/ "./src/events/system/onVKButtonClick.js":
/*!**********************************************!*\
  !*** ./src/events/system/onVKButtonClick.js ***!
  \**********************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ onVKButtonClick; }
/* harmony export */ });
function onVKButtonClick() {
    window.open("https://vk.com/nohak", "__blank")
}

/***/ }),

/***/ "./src/render/Camera.js":
/*!******************************!*\
  !*** ./src/render/Camera.js ***!
  \******************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Camera; }
/* harmony export */ });
/* harmony import */ var _utils_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/index.js */ "./src/utils/index.js");
/* harmony import */ var _Renderer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Renderer.js */ "./src/render/Renderer.js");



class Camera extends _utils_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].Point {
    constructor(scene) {
        super(0, 0, 0, 0)

        this.tiedScene = scene

        this.xOffset = 0
        this.yOffset = 0
    }

    follow(point) {
        const distance = this.distanceTo(point)
        const angle = this.angleTo(point)
        const speed = Math.min(distance * .01 * _Renderer_js__WEBPACK_IMPORTED_MODULE_1__["default"].delta, distance)

        if (distance > .05) {
            this.x += speed * Math.cos(angle)
            this.y += speed * Math.sin(angle)
        } else {
            this.setTo(point.x, point.y)
        }

        this.xOffset = this.x - (this.tiedScene.getScaledWidth() / 2)
        this.yOffset = this.y - (this.tiedScene.getScaledHeight() / 2)
    }
}

/***/ }),

/***/ "./src/render/Renderer.js":
/*!********************************!*\
  !*** ./src/render/Renderer.js ***!
  \********************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Renderer; }
/* harmony export */ });
/* harmony import */ var _utils_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/index.js */ "./src/utils/index.js");
/* harmony import */ var _RendererEvents_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RendererEvents.js */ "./src/render/RendererEvents.js");



class Renderer extends _utils_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].Emitter {
    static delta = 0
    static currentUpdateTime = 0
    static lastUpdateTime = 0

    constructor(scene) {
        super()

        this.tiedScene = scene

        this.layers = new Array(3).fill(() => null).map(() => new Map())

        this.on("init", _RendererEvents_js__WEBPACK_IMPORTED_MODULE_1__.onInit.bind(this))
        this.on("add-render", _RendererEvents_js__WEBPACK_IMPORTED_MODULE_1__.onAddRender.bind(this))
        this.on("update-layers", _RendererEvents_js__WEBPACK_IMPORTED_MODULE_1__.onUpdateLayers.bind(this))
    }

    update() {
        const context = this.tiedScene.getRenderContext()

        context.save()
        context.clearRect(0, 0, this.tiedScene.getScaledWidth(), this.tiedScene.getScaledHeight())

        this.emit("update-layers", 0)
        context.restore()
    }

    static onFrame(callback) {
        Renderer.currentUpdateTime = Date.now()
        Renderer.delta = Renderer.currentUpdateTime - Renderer.lastUpdateTime
        Renderer.lastUpdateTime = Renderer.currentUpdateTime

        callback()

        requestAnimationFrame(Renderer.onFrame.bind(Renderer, callback))
    }
}

/***/ }),

/***/ "./src/render/RendererEvents.js":
/*!**************************************!*\
  !*** ./src/render/RendererEvents.js ***!
  \**************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   onAddRender: function() { return /* binding */ onAddRender; },
/* harmony export */   onInit: function() { return /* binding */ onInit; },
/* harmony export */   onUpdateLayers: function() { return /* binding */ onUpdateLayers; }
/* harmony export */ });
function onAddRender(layerId, callback) {
    if (!(callback instanceof Function)) return false

    const layer = this.layers[layerId]
    
    return layer.set(layer.size + 1, callback)
}

function onUpdateLayers() {
    for (const layerId in this.layers) {
        const layer = this.layers[layerId]

        layer.forEach((callback) => {
            callback()
        })
    }
}

function onInit() {}

/***/ }),

/***/ "./src/render/components/Drawing.js":
/*!******************************************!*\
  !*** ./src/render/components/Drawing.js ***!
  \******************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Drawing; }
/* harmony export */ });
/* harmony import */ var _utils_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/index.js */ "./src/utils/index.js");
/* harmony import */ var _drawBackground_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./drawBackground.js */ "./src/render/components/drawBackground.js");
/* harmony import */ var _drawTextCopied_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./drawTextCopied.js */ "./src/render/components/drawTextCopied.js");




class Drawing extends _utils_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].Emitter {
    constructor(scene) {
        super()

        this.tiedScene = scene

        this.on("draw-background", _drawBackground_js__WEBPACK_IMPORTED_MODULE_1__["default"].bind(this.tiedScene))
        this.on("draw-text-copied", _drawTextCopied_js__WEBPACK_IMPORTED_MODULE_2__["default"].bind(this.tiedScene))
    }
}

/***/ }),

/***/ "./src/render/components/drawBackground.js":
/*!*************************************************!*\
  !*** ./src/render/components/drawBackground.js ***!
  \*************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ drawBackground; }
/* harmony export */ });
/* harmony import */ var _const_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../const.js */ "./src/const.js");


function drawBackground() {
    const context = this.getRenderContext()

    context.save()
    context.fillStyle = _const_js__WEBPACK_IMPORTED_MODULE_0__.mainConfig.colors.map

    context.fillRect(0, 0, this.getScaledWidth(), this.getScaledHeight())
    context.restore()
}

/***/ }),

/***/ "./src/render/components/drawTextCopied.js":
/*!*************************************************!*\
  !*** ./src/render/components/drawTextCopied.js ***!
  \*************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ drawTextCopied; }
/* harmony export */ });
/* harmony import */ var _const_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../const.js */ "./src/const.js");
/* harmony import */ var _entities_TextDraw_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../entities/TextDraw.js */ "./src/entities/TextDraw.js");



let copiedText = null

function drawTextCopied() {
    if (!copiedText) {
        copiedText = new _entities_TextDraw_js__WEBPACK_IMPORTED_MODULE_1__["default"]("Copied!", _const_js__WEBPACK_IMPORTED_MODULE_0__.discordButton.x + _const_js__WEBPACK_IMPORTED_MODULE_0__.discordButton.width / 2, _const_js__WEBPACK_IMPORTED_MODULE_0__.discordButton.y + _const_js__WEBPACK_IMPORTED_MODULE_0__.discordButton.height * 1.5, 24, _const_js__WEBPACK_IMPORTED_MODULE_0__.mainConfig.colors.discordCopiedFill, _const_js__WEBPACK_IMPORTED_MODULE_0__.mainConfig.colors.nicknameStroke, false, 2)
    }

    copiedText.update()
}

/***/ }),

/***/ "./src/scene/Scene.js":
/*!****************************!*\
  !*** ./src/scene/Scene.js ***!
  \****************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Scene; }
/* harmony export */ });
/* harmony import */ var _const_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../const.js */ "./src/const.js");
/* harmony import */ var _render_Camera_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../render/Camera.js */ "./src/render/Camera.js");
/* harmony import */ var _render_Renderer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../render/Renderer.js */ "./src/render/Renderer.js");
/* harmony import */ var _render_components_Drawing_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../render/components/Drawing.js */ "./src/render/components/Drawing.js");
/* harmony import */ var _utils_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/index.js */ "./src/utils/index.js");
/* harmony import */ var _SceneEvents_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./SceneEvents.js */ "./src/scene/SceneEvents.js");







class Scene extends _utils_index_js__WEBPACK_IMPORTED_MODULE_4__["default"].Emitter {
    constructor(selector, viewport) {
        super()

        this.view = document.querySelector(selector)
        
        this.scale = 1
        this.viewport = viewport || _const_js__WEBPACK_IMPORTED_MODULE_0__.mainConfig.defaultViewport

        this.renderer = new _render_Renderer_js__WEBPACK_IMPORTED_MODULE_2__["default"](this)
        this.camera = new _render_Camera_js__WEBPACK_IMPORTED_MODULE_1__["default"](this)
        this.drawing = new _render_components_Drawing_js__WEBPACK_IMPORTED_MODULE_3__["default"](this)

        this.on("init", _SceneEvents_js__WEBPACK_IMPORTED_MODULE_5__.onInit.bind(this))
        this.on("scene-resize", _SceneEvents_js__WEBPACK_IMPORTED_MODULE_5__.onSceneResize.bind(this))
    }

    getRenderContext() {
        return this.view.getContext("2d")
    }

    getScale() {
        return this.scale
    }

    getZoom() {
        return this.viewport.zoom
    }

    getXOffset() {
        return this.camera.xOffset
    }

    getYOffset() {
        return this.camera.yOffset
    }

    getWidth() {
        return this.view.width
    }

    getHeight() {
        return this.view.height
    }

    getScaledWidth() {
        return this.getWidth() / this.getScale()
    }

    getScaledHeight() {
        return this.getHeight() / this.getScale()
    }

    setScale(scale) {
        if (typeof scale === 'string') {
            scale = scale.toNumber()
        }

        this.scale = scale
    }

    setZoom(zoom) {
        if (typeof zoom === 'string') {
            zoom = zoom.toNumber()
        }

        this.viewport.zoom = zoom

        this.emit("scene-resize")
    }

    setSize(width, height) {
        this.view.width = width
        this.view.height = height

        this.view.style.width = width.toPixels()
        this.view.style.height = height.toPixels()
    }
}

/***/ }),

/***/ "./src/scene/SceneEvents.js":
/*!**********************************!*\
  !*** ./src/scene/SceneEvents.js ***!
  \**********************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   onInit: function() { return /* binding */ onInit; },
/* harmony export */   onSceneResize: function() { return /* binding */ onSceneResize; }
/* harmony export */ });
/* harmony import */ var _const_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../const.js */ "./src/const.js");
/* harmony import */ var _entities_ButtonBox_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../entities/ButtonBox.js */ "./src/entities/ButtonBox.js");
/* harmony import */ var _entities_ImageBox_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../entities/ImageBox.js */ "./src/entities/ImageBox.js");
/* harmony import */ var _entities_TextDraw_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../entities/TextDraw.js */ "./src/entities/TextDraw.js");





function onSceneResize() {
    const screenWidth = window.innerWidth
    const screenHeight = window.innerHeight
    const context = this.getRenderContext()
    const scale = Math.max(
        screenWidth / (this.viewport.width * this.getZoom()), 
        screenHeight / (this.viewport.height * this.getZoom())
    )

    this.setScale(scale)
    this.setSize(screenWidth, screenHeight)

    context.scale(scale, scale)
}

function onInit() {
    this.emit("scene-resize")
    this.renderer.emit("init")

    this.renderer.emit("add-render", _const_js__WEBPACK_IMPORTED_MODULE_0__.mainConfig.SYSTEM_LAYER, () => {
        this.camera.follow(_const_js__WEBPACK_IMPORTED_MODULE_0__.globalPoint)

        this.drawing.emit("draw-background")
    })

    this.renderer.emit("add-render", _const_js__WEBPACK_IMPORTED_MODULE_0__.mainConfig.ENTITIES_LAYER, () => {
        _const_js__WEBPACK_IMPORTED_MODULE_0__.globalPoint.update()
        _entities_TextDraw_js__WEBPACK_IMPORTED_MODULE_3__["default"].updateAllTextDraws()
        _entities_ButtonBox_js__WEBPACK_IMPORTED_MODULE_1__["default"].updateAllButtonBoxes()
        _entities_ImageBox_js__WEBPACK_IMPORTED_MODULE_2__["default"].updateAllImageBoxes()
    })

    this.renderer.emit("add-render", _const_js__WEBPACK_IMPORTED_MODULE_0__.mainConfig.ESP_LAYER, () => {
        if (_const_js__WEBPACK_IMPORTED_MODULE_0__.discordButton.lastShowTextCopied) {
            if (Date.now() - _const_js__WEBPACK_IMPORTED_MODULE_0__.discordButton.lastShowTextCopied > 750) {
                _const_js__WEBPACK_IMPORTED_MODULE_0__.discordButton.lastShowTextCopied = null
            } else {
                this.drawing.emit("draw-text-copied")
            }
        }
    })

    window.addEventListener("resize", () => this.emit("scene-resize"))
}

/***/ }),

/***/ "./src/utils/2d/Line.js":
/*!******************************!*\
  !*** ./src/utils/2d/Line.js ***!
  \******************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Vector_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Vector.js */ "./src/utils/2d/Vector.js");


class Line {
    constructor({ x, y, dx, dy }) {
        this.origin = new _Vector_js__WEBPACK_IMPORTED_MODULE_0__["default"](x, y)
        this.direction = new _Vector_js__WEBPACK_IMPORTED_MODULE_0__["default"](dx, dy)
    }
}

/* harmony default export */ __webpack_exports__["default"] = (Line);

/***/ }),

/***/ "./src/utils/2d/Physics.js":
/*!*********************************!*\
  !*** ./src/utils/2d/Physics.js ***!
  \*********************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Vector_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Vector.js */ "./src/utils/2d/Vector.js");


class Physics {
    constructor(x, y, mass = 5, time = 0.9) {
        this.mass = mass
        this.time = time

        this.position = new _Vector_js__WEBPACK_IMPORTED_MODULE_0__["default"](x, y)
        this.velocity = new _Vector_js__WEBPACK_IMPORTED_MODULE_0__["default"]()
        this.acceleration = new _Vector_js__WEBPACK_IMPORTED_MODULE_0__["default"]()
        this.force = new _Vector_js__WEBPACK_IMPORTED_MODULE_0__["default"]()

        this.position.lastX = this.position.x
        this.position.lastY = this.position.y

        this.velocity.lastX = this.velocity.x
        this.velocity.lastY = this.velocity.y
    }

    updatePhysics() {
        this.position.lastX = this.position.x
        this.position.lastY = this.position.y

        this.velocity.lastX = this.velocity.x
        this.velocity.lastY = this.velocity.y

        this.force.div(this.mass)

        this.acceleration.add(this.force.x, this.force.y)
        this.acceleration.mult(this.time)

        this.velocity.add(this.acceleration.x, this.acceleration.y)
        this.velocity.mult(this.time)

        this.position.add(this.velocity.x, this.velocity.y)
    }

    resetPhysics() {
        this.force.reset()
        this.acceleration.reset()
        this.velocity.reset()
    }
}

/* harmony default export */ __webpack_exports__["default"] = (Physics);

/***/ }),

/***/ "./src/utils/2d/Point.js":
/*!*******************************!*\
  !*** ./src/utils/2d/Point.js ***!
  \*******************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Vector_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Vector.js */ "./src/utils/2d/Vector.js");
/* harmony import */ var _Physics_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Physics.js */ "./src/utils/2d/Physics.js");
/* harmony import */ var _toVector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./toVector.js */ "./src/utils/2d/toVector.js");




class Point extends _Physics_js__WEBPACK_IMPORTED_MODULE_1__["default"] {
    constructor(x, y, width, height) {
        height = height || width

        super(x, y)

        this.width = width || 0
        this.height = height || 0
    }

    get x() {
        return this.position.x
    }

    get y() {
        return this.position.y
    }

    get lastX() {
        return this.position.lastX - this.width / 2
    }

    get lastY() {
        return this.position.lastY - this.height / 2
    }

    set x(number) {
        this.position.set(number + this.width / 2, this.position.y)
    }

    set y(number) {
        this.position.set(this.position.x, number + this.height / 2)
    }

    get clone() {
        return new Point(this.position.x, this.position.y, this.width, this.height)
    }

    setTo(x, y) {
        const vector = (0,_toVector_js__WEBPACK_IMPORTED_MODULE_2__["default"])(x, y)
        
        this.position.set(vector)
    }

    copyFrom(point) {
        this.setTo(point.position.x, point.position.y)
    }

    copyTo(point) {
        point.setTo(point.position.x, point.position.y)
    }

    distanceTo(x, y) {
        if (x instanceof Point) {
            x = new _Vector_js__WEBPACK_IMPORTED_MODULE_0__["default"](x.x, x.y)
        }

        const myPoistion = (0,_toVector_js__WEBPACK_IMPORTED_MODULE_2__["default"])(this.x, this.y)
        const otherPosition = (0,_toVector_js__WEBPACK_IMPORTED_MODULE_2__["default"])(x, y)

        return myPoistion.distanceTo(otherPosition)
    }

    angleTo(x, y) {
        if (x instanceof Point) {
            x = new _Vector_js__WEBPACK_IMPORTED_MODULE_0__["default"](x.x, x.y)
        }

        const myPoistion = (0,_toVector_js__WEBPACK_IMPORTED_MODULE_2__["default"])(this.x, this.y)
        const otherPosition = (0,_toVector_js__WEBPACK_IMPORTED_MODULE_2__["default"])(x, y)

        return myPoistion.angleTo(otherPosition)
    }
}

/* harmony default export */ __webpack_exports__["default"] = (Point);

/***/ }),

/***/ "./src/utils/2d/Rect.js":
/*!******************************!*\
  !*** ./src/utils/2d/Rect.js ***!
  \******************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Line_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Line.js */ "./src/utils/2d/Line.js");
/* harmony import */ var _Vector_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Vector.js */ "./src/utils/2d/Vector.js");



class Rect {
    constructor({ x, y, width, height, angle }) {
        this.center = new _Vector_js__WEBPACK_IMPORTED_MODULE_1__["default"](x, y)
        this.size = new _Vector_js__WEBPACK_IMPORTED_MODULE_1__["default"](width, height)
        this.angle = angle
    }

    getAxis() {
        const originX = new _Vector_js__WEBPACK_IMPORTED_MODULE_1__["default"](1, 0)
        const originY = new _Vector_js__WEBPACK_IMPORTED_MODULE_1__["default"](0, 1)
        const rotatedX = originX.getRotate(this.angle)
        const rotatedY = originY.getRotate(this.angle)

        return [
            new _Line_js__WEBPACK_IMPORTED_MODULE_0__["default"]({ x: this.center.x, y: this.center.y, dx: rotatedX.x, dy: rotatedX.y }),
            new _Line_js__WEBPACK_IMPORTED_MODULE_0__["default"]({ x: this.center.x, y: this.center.y, dx: rotatedY.x, dy: rotatedY.y })
        ]
    }

    getCorners() {
        const axis = this.getAxis()
        const rotatedX = axis[0].direction.getMult(this.size.x / 2)
        const rotatedY = axis[1].direction.getMult(this.size.y / 2)

        return [
            this.center.getAdd(rotatedX).getAdd(rotatedY),
            this.center.getAdd(rotatedX).getAdd(rotatedY.getMult(-1)),
            this.center.getAdd(rotatedX.getMult(-1)).getAdd(rotatedY.getMult(-1)),
            this.center.getAdd(rotatedX.getMult(-1)).getAdd(rotatedY)
        ]
    }
}

/* harmony default export */ __webpack_exports__["default"] = (Rect);

/***/ }),

/***/ "./src/utils/2d/Vector.js":
/*!********************************!*\
  !*** ./src/utils/2d/Vector.js ***!
  \********************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _toVector_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toVector.js */ "./src/utils/2d/toVector.js");


class Vector {
    constructor(x = 0, y = 0) {
        this.x = x
        this.y = y
    }

    static random2D(angle, length = 1) {
        return new Vector(length * Math.cos(angle), length * Math.sin(angle))
    }

    get magnitude() {
        return Math.sqrt(this.x ** 2 + this.y ** 2)
    }

    get copy() {
        return new Vector(this.x, this.y)
    }

    getRotate(angle) {
        return new Vector(this.x * Math.cos(angle) - this.y * Math.sin(angle), this.x * Math.sin(angle) + this.y * Math.cos(angle))
    }

    getProject(line) {
        const dot = line.direction.x * (this.x - line.origin.x) + line.direction.y * (this.y - line.origin.y)

        return new Vector(line.origin.x + line.direction.x * dot, line.origin.y + line.direction.y * dot)
    }

    getAdd(x, y) {
        const vector = (0,_toVector_js__WEBPACK_IMPORTED_MODULE_0__["default"])(x, y)
        
        return new Vector(this.x + vector.x, this.y + vector.y)
    }

    getMinus(x, y) {
        const vector = (0,_toVector_js__WEBPACK_IMPORTED_MODULE_0__["default"])(x, y)

        return new Vector(this.x - vector.x, this.y - vector.y)
    }

    getMult(x, y) {
        const vector = (0,_toVector_js__WEBPACK_IMPORTED_MODULE_0__["default"])(x, y)

        return new Vector(this.x * vector.x, this.y * vector.y)
    }

    setMag(length) {
        return this.normalize().mult(length)
    }

    different(x, y) {
        const vector = (0,_toVector_js__WEBPACK_IMPORTED_MODULE_0__["default"])(x, y)

        return new Vector(this.x - vector.x, this.y - vector.y)
    }

    set(x, y) {
        const vector = (0,_toVector_js__WEBPACK_IMPORTED_MODULE_0__["default"])(x, y)

        this.x = vector.x
        this.y = vector.y

        return this
    }

    add(x, y) {
        const vector = (0,_toVector_js__WEBPACK_IMPORTED_MODULE_0__["default"])(x, y)

        this.x += vector.x
        this.y += vector.y

        return this
    }

    sub(x, y) {
        const vector = (0,_toVector_js__WEBPACK_IMPORTED_MODULE_0__["default"])(x, y)

        this.x -= vector.x
        this.y -= vector.y

        return this
    }

    mult(x, y) {
        const vector = (0,_toVector_js__WEBPACK_IMPORTED_MODULE_0__["default"])(x, y)

        this.x *= vector.x
        this.y *= vector.y

        return this
    }

    div(x, y) {
        const vector = (0,_toVector_js__WEBPACK_IMPORTED_MODULE_0__["default"])(x, y)

        this.x /= vector.x
        this.y /= vector.y

        return this
    }

    mulScalar(scalar) {
        const vector = (0,_toVector_js__WEBPACK_IMPORTED_MODULE_0__["default"])(scalar)

        this.x *= vector.x
        this.y *= vector.y

        return this
    }

    normalize() {
        const magnitude = this.magnitude

        if (magnitude <= 0) return this

        return new Vector(this.x, this.y).div(magnitude || 1)
    }

    projection(vector) {
        const normalized = vector.normalize()
        const scalar = this.mulScalar(vector)

        normalized.mult(scalar)

        return normalized
    }

    clamp(min, max) {
		this.x = Math.max(min.x, Math.min(max.x, this.x))
		this.y = Math.max(min.y, Math.min(max.y, this.y))

		return this
	}

    floor() {
		this.x = Math.floor(this.x)
		this.y = Math.floor(this.y)

		return this
	}

    dot(vector) {
		return this.x * vector.x + this.y * vector.y
	}

	cross(vector) {
		return this.x * vector.y - this.y * vector.x
	}

	lengthSq() {
		return this.x * this.x + this.y * this.y
	}

    length() {
        return Math.sqrt(this.x * this.x + this.y * this.y)
    }

    lerp(vector, alpha) {
		this.x += (vector.x - this.x) * -alpha
		this.y += (vector.y - this.y) * -alpha

		return this
	}

    lerpVectors(vector1, vector2, alpha) {
		this.x = vector1.x + (vector2.x - vector1.x) * alpha
		this.y = vector1.y + (vector2.y - vector1.y) * alpha

		return this
	}

    distanceTo(x, y) {
        const vector = (0,_toVector_js__WEBPACK_IMPORTED_MODULE_0__["default"])(x, y)

        return this.copy.sub(vector).length()
    }

    angleTo(x, y) {
        const vector = (0,_toVector_js__WEBPACK_IMPORTED_MODULE_0__["default"])(x, y)
        const copy = vector.copy.sub(this)

        return Math.atan2(copy.y, copy.x)
    }

    random() {
		this.x = Math.random()
		this.y = Math.random()

		return this
	}

    reset() {
        this.x = 0
        this.y = 0

        return this
    }

    log() {
        console.log(this.x, this.y)
    }
}

/* harmony default export */ __webpack_exports__["default"] = (Vector);

/***/ }),

/***/ "./src/utils/2d/getSignedDistance.js":
/*!*******************************************!*\
  !*** ./src/utils/2d/getSignedDistance.js ***!
  \*******************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Vector_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Vector.js */ "./src/utils/2d/Vector.js");


function getSignedDistance(rect, line, corner) {
    const projected = corner.getProject(line)
    const center = projected.getMinus(rect.center)
    const sign = (center.x * line.direction.x) + (center.y * line.direction.y) > 0
    const signedDistance = center.magnitude * (sign ? 1 : -1)

    return signedDistance
}

/* harmony default export */ __webpack_exports__["default"] = (getSignedDistance);

/***/ }),

/***/ "./src/utils/2d/index.js":
/*!*******************************!*\
  !*** ./src/utils/2d/index.js ***!
  \*******************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Line: function() { return /* reexport safe */ _Line_js__WEBPACK_IMPORTED_MODULE_0__["default"]; },
/* harmony export */   Physics: function() { return /* reexport safe */ _Physics_js__WEBPACK_IMPORTED_MODULE_1__["default"]; },
/* harmony export */   Point: function() { return /* reexport safe */ _Point_js__WEBPACK_IMPORTED_MODULE_2__["default"]; },
/* harmony export */   Rect: function() { return /* reexport safe */ _Rect_js__WEBPACK_IMPORTED_MODULE_3__["default"]; },
/* harmony export */   Vector: function() { return /* reexport safe */ _Vector_js__WEBPACK_IMPORTED_MODULE_4__["default"]; },
/* harmony export */   getSignedDistance: function() { return /* reexport safe */ _getSignedDistance_js__WEBPACK_IMPORTED_MODULE_5__["default"]; },
/* harmony export */   toVector: function() { return /* reexport safe */ _toVector_js__WEBPACK_IMPORTED_MODULE_6__["default"]; }
/* harmony export */ });
/* harmony import */ var _Line_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Line.js */ "./src/utils/2d/Line.js");
/* harmony import */ var _Physics_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Physics.js */ "./src/utils/2d/Physics.js");
/* harmony import */ var _Point_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Point.js */ "./src/utils/2d/Point.js");
/* harmony import */ var _Rect_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Rect.js */ "./src/utils/2d/Rect.js");
/* harmony import */ var _Vector_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Vector.js */ "./src/utils/2d/Vector.js");
/* harmony import */ var _getSignedDistance_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./getSignedDistance.js */ "./src/utils/2d/getSignedDistance.js");
/* harmony import */ var _toVector_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./toVector.js */ "./src/utils/2d/toVector.js");










/***/ }),

/***/ "./src/utils/2d/toVector.js":
/*!**********************************!*\
  !*** ./src/utils/2d/toVector.js ***!
  \**********************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Vector_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Vector.js */ "./src/utils/2d/Vector.js");


function toVector(x, y) {
    let vector = null

    if (arguments[0] instanceof _Vector_js__WEBPACK_IMPORTED_MODULE_0__["default"]) {
        vector = new _Vector_js__WEBPACK_IMPORTED_MODULE_0__["default"](arguments[0].x, arguments[0].y)
    } else if (typeof arguments[0] === 'number' && typeof arguments[1] === 'undefined') {
        vector = new _Vector_js__WEBPACK_IMPORTED_MODULE_0__["default"](arguments[0], arguments[0])
    } else if (typeof arguments[0] === 'number' && typeof arguments[1] === 'number') {
        vector = new _Vector_js__WEBPACK_IMPORTED_MODULE_0__["default"](x, y)
    } else {
        vector = new _Vector_js__WEBPACK_IMPORTED_MODULE_0__["default"](0, 0)
    }

    return vector
}

/* harmony default export */ __webpack_exports__["default"] = (toVector);

/***/ }),

/***/ "./src/utils/Emitter.js":
/*!******************************!*\
  !*** ./src/utils/Emitter.js ***!
  \******************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
class Emitter {
    constructor() {
        this._events = new Map()
    }

    has(eventName) {
        return this._events.has(eventName)
    }

    on(eventName, listener) {
        const listeners = this._events.get(eventName)

        if (!listeners) {
            this._events.set(eventName, [ listener ])

            return
        }

        listeners.push(listener)
    }

    emit(eventName, ...args) {
        if (!this._events.has(eventName)) return

        this._events.get(eventName).forEach((listener) => {
            listener(...args)
        })
    }
}

/* harmony default export */ __webpack_exports__["default"] = (Emitter);

/***/ }),

/***/ "./src/utils/hooks/index.js":
/*!**********************************!*\
  !*** ./src/utils/hooks/index.js ***!
  \**********************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _string_hooks_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./string_hooks.js */ "./src/utils/hooks/string_hooks.js");
/* harmony import */ var _number_hooks_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./number_hooks.js */ "./src/utils/hooks/number_hooks.js");
/* harmony import */ var _math_hooks_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./math_hooks.js */ "./src/utils/hooks/math_hooks.js");




/***/ }),

/***/ "./src/utils/hooks/math_hooks.js":
/*!***************************************!*\
  !*** ./src/utils/hooks/math_hooks.js ***!
  \***************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
Math.lerp = function(value1, value2, amount) {
    return value1 + (value2 - value1) * amount
}

/***/ }),

/***/ "./src/utils/hooks/number_hooks.js":
/*!*****************************************!*\
  !*** ./src/utils/hooks/number_hooks.js ***!
  \*****************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
Number.prototype.toString = function() {
    return String(this)
}

Number.prototype.toPixels = function() {
    return `${(this < 0 ? 0 : this)}px`
}

/***/ }),

/***/ "./src/utils/hooks/string_hooks.js":
/*!*****************************************!*\
  !*** ./src/utils/hooks/string_hooks.js ***!
  \*****************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
String.prototype.toNumber = function() {
    return parseFloat(this)
}

String.prototype.toPixels = function() {
    const number = this.toNumber()

    return `${(number < 0 ? 0 : number)}px`
}

/***/ }),

/***/ "./src/utils/index.js":
/*!****************************!*\
  !*** ./src/utils/index.js ***!
  \****************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _2d_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./2d/index.js */ "./src/utils/2d/index.js");
/* harmony import */ var _Emitter_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Emitter.js */ "./src/utils/Emitter.js");
/* harmony import */ var _hooks_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hooks/index.js */ "./src/utils/hooks/index.js");




const utils = Object.assign({
    Emitter: _Emitter_js__WEBPACK_IMPORTED_MODULE_1__["default"],
    wait(ms) {
        return new Promise((resolve) => setTimeout(resolve, ms))
    }
}, _2d_index_js__WEBPACK_IMPORTED_MODULE_0__)

/* harmony default export */ __webpack_exports__["default"] = (utils);

/***/ }),

/***/ "./src/config.json":
/*!*************************!*\
  !*** ./src/config.json ***!
  \*************************/
/***/ (function(module) {

module.exports = /*#__PURE__*/JSON.parse('{"SYSTEM_LAYER":0,"ENTITIES_LAYER":1,"ESP_LAYER":2,"defaultViewport":{"width":1920,"height":1080,"zoom":0.9},"map":{"width":420,"height":515,"middleSize":[210,257.5]},"colors":{"map":"rgba(13, 13, 13, 1)","mapBorder":"rgba(82, 0, 0, 0.8)","nicknameFill":"rgba(179, 194, 255, 1)","nicknameStroke":"rgba(14, 15, 22, 1)","serverFill":"rgba(241, 224, 70, 1)","serverStroke":"rgba(14, 15, 22, 1)","adminLevelFill":"rgba(227, 134, 53, 1)","discordCopiedFill":"rgba(78, 183, 107, 1)","monitoringFill":["rgba(163, 99, 46, 1)","rgba(49, 140, 115, 1)"]},"defaultFont":"Aldrich, sans-serif"}');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _const_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./const.js */ "./src/const.js");
/* harmony import */ var _render_Renderer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./render/Renderer.js */ "./src/render/Renderer.js");
/* harmony import */ var _utils_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/index.js */ "./src/utils/index.js");
/* harmony import */ var _events_initEvents_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./events/initEvents.js */ "./src/events/initEvents.js");
/* harmony import */ var _events_system_onServerButtonClick_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./events/system/onServerButtonClick.js */ "./src/events/system/onServerButtonClick.js");
/* harmony import */ var _events_system_onVKButtonClick_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./events/system/onVKButtonClick.js */ "./src/events/system/onVKButtonClick.js");
/* harmony import */ var _events_system_onDiscordButtonClick_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./events/system/onDiscordButtonClick.js */ "./src/events/system/onDiscordButtonClick.js");
/* harmony import */ var _events_system_onForumButtonClick_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./events/system/onForumButtonClick.js */ "./src/events/system/onForumButtonClick.js");









window.addEventListener("load", () => {
    _const_js__WEBPACK_IMPORTED_MODULE_0__.mainScene.emit("init")

    _const_js__WEBPACK_IMPORTED_MODULE_0__.serverButton.events.on("click", _events_system_onServerButtonClick_js__WEBPACK_IMPORTED_MODULE_4__["default"])
    _const_js__WEBPACK_IMPORTED_MODULE_0__.vkButton.events.on("click", _events_system_onVKButtonClick_js__WEBPACK_IMPORTED_MODULE_5__["default"])
    _const_js__WEBPACK_IMPORTED_MODULE_0__.discordButton.events.on("click", _events_system_onDiscordButtonClick_js__WEBPACK_IMPORTED_MODULE_6__["default"])
    _const_js__WEBPACK_IMPORTED_MODULE_0__.forumButton.events.on("click", _events_system_onForumButtonClick_js__WEBPACK_IMPORTED_MODULE_7__["default"])

    _render_Renderer_js__WEBPACK_IMPORTED_MODULE_1__["default"].onFrame(() => {
        _const_js__WEBPACK_IMPORTED_MODULE_0__.mainScene.renderer.update()
    })
}, false)

}();
/******/ })()
;
//# sourceMappingURL=bundle.js.map