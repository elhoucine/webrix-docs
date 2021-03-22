import React, {useState, useRef, useMemo} from 'react';
import {Resizable} from 'webrix/components';
import './SnappingAdvanced.scss';

const {resize, snap, lock, update} = Resizable.Operations;

export default () => {
    const [position, setPosition] = useState({});
    const resizable = useRef();
    const props = Resizable.useResize(useMemo(() => [
        resize(resizable),
        snap(60, 60, 0.3),
        lock(),
        update(setPosition),
    ], []));

    return (
        <div className='resizable-object' style={position} ref={resizable}>
            <Resizable {...props}>
                <Resizable.Resizer.All/>
            </Resizable>
            Resize Me!
        </div>
    );
};