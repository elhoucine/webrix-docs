(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"+fHH":function(n,e,t){"use strict";t.r(e),e.default="import React, {useState, useCallback, useRef} from 'react';\nimport {Movable} from 'webrix';\n\nconst snap = num => {\n    const GRID_SIZE = 20;\n    return Math.round(num / GRID_SIZE) * GRID_SIZE;\n};\n\nexport default () => {\n    const [{top, left}, setPosition] = useState({top: 0, left: 0});\n    const initial = useRef({top, left});\n\n    const handleOnBeginMove = useCallback(() => {\n        initial.current = {top, left};\n    }, [top, left]);\n\n    const handleOnMove = useCallback(({dx, dy}) => {\n        // dx/dy represent the change in x/y since the the beginning of the drag.\n        const {top, left} = initial.current;\n        setPosition({top: snap(top + dy), left: snap(left + dx)});\n    }, [setPosition, initial.current]);\n\n    return (\n        <Movable className='movable-object' style={{top, left}} onBeginMove={handleOnBeginMove} onMove={handleOnMove}>\n            I snap to a 20x20 grid\n        </Movable>\n    );\n}"}}]);