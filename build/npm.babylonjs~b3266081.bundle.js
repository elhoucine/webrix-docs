(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{d0Hj:function(t,e,i){"use strict";i.d(e,"a",(function(){return o}));var s=i("mrSG"),r=i("/SR9"),n=i("y4Ty"),a=i("wAMR");a.a._GroundMeshParser=function(t,e){return o.Parse(t,e)};var o=function(t){function e(e,i){var s=t.call(this,e,i)||this;return s.generateOctree=!1,s}return Object(s.c)(e,t),e.prototype.getClassName=function(){return"GroundMesh"},Object.defineProperty(e.prototype,"subdivisions",{get:function(){return Math.min(this._subdivisionsX,this._subdivisionsY)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"subdivisionsX",{get:function(){return this._subdivisionsX},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"subdivisionsY",{get:function(){return this._subdivisionsY},enumerable:!0,configurable:!0}),e.prototype.optimize=function(t,e){void 0===e&&(e=32),this._subdivisionsX=t,this._subdivisionsY=t,this.subdivide(t);this.createOrUpdateSubmeshesOctree&&this.createOrUpdateSubmeshesOctree(e)},e.prototype.getHeightAtCoordinates=function(t,e){var i=this.getWorldMatrix(),s=r.c.Matrix[5];i.invertToRef(s);var n=r.c.Vector3[8];if(r.e.TransformCoordinatesFromFloatsToRef(t,0,e,s,n),t=n.x,e=n.z,t<this._minX||t>this._maxX||e<this._minZ||e>this._maxZ)return this.position.y;this._heightQuads&&0!=this._heightQuads.length||(this._initHeightQuads(),this._computeHeightQuads());var a=this._getFacetAt(t,e),o=-(a.x*t+a.z*e+a.w)/a.y;return r.e.TransformCoordinatesFromFloatsToRef(0,o,0,i,n),n.y},e.prototype.getNormalAtCoordinates=function(t,e){var i=new r.e(0,1,0);return this.getNormalAtCoordinatesToRef(t,e,i),i},e.prototype.getNormalAtCoordinatesToRef=function(t,e,i){var s=this.getWorldMatrix(),n=r.c.Matrix[5];s.invertToRef(n);var a=r.c.Vector3[8];if(r.e.TransformCoordinatesFromFloatsToRef(t,0,e,n,a),t=a.x,e=a.z,t<this._minX||t>this._maxX||e<this._minZ||e>this._maxZ)return this;this._heightQuads&&0!=this._heightQuads.length||(this._initHeightQuads(),this._computeHeightQuads());var o=this._getFacetAt(t,e);return r.e.TransformNormalFromFloatsToRef(o.x,o.y,o.z,s,i),this},e.prototype.updateCoordinateHeights=function(){return this._heightQuads&&0!=this._heightQuads.length||this._initHeightQuads(),this._computeHeightQuads(),this},e.prototype._getFacetAt=function(t,e){var i=Math.floor((t+this._maxX)*this._subdivisionsX/this._width),s=Math.floor(-(e+this._maxZ)*this._subdivisionsY/this._height+this._subdivisionsY),r=this._heightQuads[s*this._subdivisionsX+i];return e<r.slope.x*t+r.slope.y?r.facet1:r.facet2},e.prototype._initHeightQuads=function(){var t=this._subdivisionsX,e=this._subdivisionsY;this._heightQuads=new Array;for(var i=0;i<e;i++)for(var s=0;s<t;s++){var n={slope:r.d.Zero(),facet1:new r.f(0,0,0,0),facet2:new r.f(0,0,0,0)};this._heightQuads[i*t+s]=n}return this},e.prototype._computeHeightQuads=function(){var t=this.getVerticesData(n.b.PositionKind);if(!t)return this;for(var e=r.c.Vector3[3],i=r.c.Vector3[2],s=r.c.Vector3[1],a=r.c.Vector3[0],o=r.c.Vector3[4],u=r.c.Vector3[5],h=r.c.Vector3[6],c=r.c.Vector3[7],d=r.c.Vector3[8],f=0,l=0,_=0,p=0,y=0,b=0,g=0,v=this._subdivisionsX,m=this._subdivisionsY,x=0;x<m;x++)for(var V=0;V<v;V++){f=3*V,l=x*(v+1)*3,_=(x+1)*(v+1)*3,e.x=t[l+f],e.y=t[l+f+1],e.z=t[l+f+2],i.x=t[l+f+3],i.y=t[l+f+4],i.z=t[l+f+5],s.x=t[_+f],s.y=t[_+f+1],s.z=t[_+f+2],a.x=t[_+f+3],a.y=t[_+f+4],a.z=t[_+f+5],p=(a.z-e.z)/(a.x-e.x),y=e.z-p*e.x,i.subtractToRef(e,o),s.subtractToRef(e,u),a.subtractToRef(e,h),r.e.CrossToRef(h,u,c),r.e.CrossToRef(o,h,d),c.normalize(),d.normalize(),b=-(c.x*e.x+c.y*e.y+c.z*e.z),g=-(d.x*i.x+d.y*i.y+d.z*i.z);var D=this._heightQuads[x*v+V];D.slope.copyFromFloats(p,y),D.facet1.copyFromFloats(c.x,c.y,c.z,b),D.facet2.copyFromFloats(d.x,d.y,d.z,g)}return this},e.prototype.serialize=function(e){t.prototype.serialize.call(this,e),e.subdivisionsX=this._subdivisionsX,e.subdivisionsY=this._subdivisionsY,e.minX=this._minX,e.maxX=this._maxX,e.minZ=this._minZ,e.maxZ=this._maxZ,e.width=this._width,e.height=this._height},e.Parse=function(t,i){var s=new e(t.name,i);return s._subdivisionsX=t.subdivisionsX||1,s._subdivisionsY=t.subdivisionsY||1,s._minX=t.minX,s._maxX=t.maxX,s._minZ=t.minZ,s._maxZ=t.maxZ,s._width=t.width,s._height=t.height,s},e}(a.a)},hSZw:function(t,e,i){"use strict";i.d(e,"a",(function(){return s}));var s=function(){function t(){this.references=0,this.capacity=0,this.is32Bits=!1}return Object.defineProperty(t.prototype,"underlyingResource",{get:function(){return null},enumerable:!0,configurable:!0}),t}()},y4Ty:function(t,e,i){"use strict";i.d(e,"a",(function(){return s})),i.d(e,"b",(function(){return r}));var s=function(){function t(t,e,i,s,r,n,a,o){void 0===s&&(s=0),void 0===r&&(r=!1),void 0===n&&(n=!1),void 0===a&&(a=!1),t.getScene?this._engine=t.getScene().getEngine():this._engine=t,this._updatable=i,this._instanced=n,this._divisor=o||1,this._data=e,this.byteStride=a?s:s*Float32Array.BYTES_PER_ELEMENT,r||this.create()}return t.prototype.createVertexBuffer=function(t,e,i,s,n,a,o){void 0===a&&(a=!1);var u=a?e:e*Float32Array.BYTES_PER_ELEMENT,h=s?a?s:s*Float32Array.BYTES_PER_ELEMENT:this.byteStride;return new r(this._engine,this,t,this._updatable,!0,h,void 0===n?this._instanced:n,u,i,void 0,void 0,!0,this._divisor||o)},t.prototype.isUpdatable=function(){return this._updatable},t.prototype.getData=function(){return this._data},t.prototype.getBuffer=function(){return this._buffer},t.prototype.getStrideSize=function(){return this.byteStride/Float32Array.BYTES_PER_ELEMENT},t.prototype.create=function(t){void 0===t&&(t=null),!t&&this._buffer||(t=t||this._data)&&(this._buffer?this._updatable&&(this._engine.updateDynamicVertexBuffer(this._buffer,t),this._data=t):this._updatable?(this._buffer=this._engine.createDynamicVertexBuffer(t),this._data=t):this._buffer=this._engine.createVertexBuffer(t))},t.prototype._rebuild=function(){this._buffer=null,this.create(this._data)},t.prototype.update=function(t){this.create(t)},t.prototype.updateDirectly=function(t,e,i,s){void 0===s&&(s=!1),this._buffer&&this._updatable&&(this._engine.updateDynamicVertexBuffer(this._buffer,t,s?e:e*Float32Array.BYTES_PER_ELEMENT,i?i*this.byteStride:void 0),this._data=null)},t.prototype.dispose=function(){this._buffer&&this._engine._releaseBuffer(this._buffer)&&(this._buffer=null)},t}(),r=function(){function t(e,i,r,n,a,o,u,h,c,d,f,l,_){if(void 0===f&&(f=!1),void 0===l&&(l=!1),void 0===_&&(_=1),i instanceof s?(this._buffer=i,this._ownsBuffer=!1):(this._buffer=new s(e,i,n,o,a,u,l),this._ownsBuffer=!0),this._kind=r,null==d){var p=this.getData();this.type=t.FLOAT,p instanceof Int8Array?this.type=t.BYTE:p instanceof Uint8Array?this.type=t.UNSIGNED_BYTE:p instanceof Int16Array?this.type=t.SHORT:p instanceof Uint16Array?this.type=t.UNSIGNED_SHORT:p instanceof Int32Array?this.type=t.INT:p instanceof Uint32Array&&(this.type=t.UNSIGNED_INT)}else this.type=d;var y=t.GetTypeByteLength(this.type);l?(this._size=c||(o?o/y:t.DeduceStride(r)),this.byteStride=o||this._buffer.byteStride||this._size*y,this.byteOffset=h||0):(this._size=c||o||t.DeduceStride(r),this.byteStride=o?o*y:this._buffer.byteStride||this._size*y,this.byteOffset=(h||0)*y),this.normalized=f,this._instanced=void 0!==u&&u,this._instanceDivisor=u?_:0}return Object.defineProperty(t.prototype,"instanceDivisor",{get:function(){return this._instanceDivisor},set:function(t){this._instanceDivisor=t,this._instanced=0!=t},enumerable:!0,configurable:!0}),t.prototype._rebuild=function(){this._buffer&&this._buffer._rebuild()},t.prototype.getKind=function(){return this._kind},t.prototype.isUpdatable=function(){return this._buffer.isUpdatable()},t.prototype.getData=function(){return this._buffer.getData()},t.prototype.getBuffer=function(){return this._buffer.getBuffer()},t.prototype.getStrideSize=function(){return this.byteStride/t.GetTypeByteLength(this.type)},t.prototype.getOffset=function(){return this.byteOffset/t.GetTypeByteLength(this.type)},t.prototype.getSize=function(){return this._size},t.prototype.getIsInstanced=function(){return this._instanced},t.prototype.getInstanceDivisor=function(){return this._instanceDivisor},t.prototype.create=function(t){this._buffer.create(t)},t.prototype.update=function(t){this._buffer.update(t)},t.prototype.updateDirectly=function(t,e,i){void 0===i&&(i=!1),this._buffer.updateDirectly(t,e,void 0,i)},t.prototype.dispose=function(){this._ownsBuffer&&this._buffer.dispose()},t.prototype.forEach=function(e,i){t.ForEach(this._buffer.getData(),this.byteOffset,this.byteStride,this._size,this.type,e,this.normalized,i)},t.DeduceStride=function(e){switch(e){case t.UVKind:case t.UV2Kind:case t.UV3Kind:case t.UV4Kind:case t.UV5Kind:case t.UV6Kind:return 2;case t.NormalKind:case t.PositionKind:return 3;case t.ColorKind:case t.MatricesIndicesKind:case t.MatricesIndicesExtraKind:case t.MatricesWeightsKind:case t.MatricesWeightsExtraKind:case t.TangentKind:return 4;default:throw new Error("Invalid kind '"+e+"'")}},t.GetTypeByteLength=function(e){switch(e){case t.BYTE:case t.UNSIGNED_BYTE:return 1;case t.SHORT:case t.UNSIGNED_SHORT:return 2;case t.INT:case t.UNSIGNED_INT:case t.FLOAT:return 4;default:throw new Error("Invalid type '"+e+"'")}},t.ForEach=function(e,i,s,r,n,a,o,u){if(e instanceof Array)for(var h=i/4,c=s/4,d=0;d<a;d+=r){for(var f=0;f<r;f++)u(e[h+f],d+f);h+=c}else{var l=e instanceof ArrayBuffer?new DataView(e):new DataView(e.buffer,e.byteOffset,e.byteLength),_=t.GetTypeByteLength(n);for(d=0;d<a;d+=r){var p=i;for(f=0;f<r;f++){u(t._GetFloatValue(l,n,p,o),d+f),p+=_}i+=s}}},t._GetFloatValue=function(e,i,s,r){switch(i){case t.BYTE:var n=e.getInt8(s);return r&&(n=Math.max(n/127,-1)),n;case t.UNSIGNED_BYTE:n=e.getUint8(s);return r&&(n/=255),n;case t.SHORT:n=e.getInt16(s,!0);return r&&(n=Math.max(n/32767,-1)),n;case t.UNSIGNED_SHORT:n=e.getUint16(s,!0);return r&&(n/=65535),n;case t.INT:return e.getInt32(s,!0);case t.UNSIGNED_INT:return e.getUint32(s,!0);case t.FLOAT:return e.getFloat32(s,!0);default:throw new Error("Invalid component type "+i)}},t.BYTE=5120,t.UNSIGNED_BYTE=5121,t.SHORT=5122,t.UNSIGNED_SHORT=5123,t.INT=5124,t.UNSIGNED_INT=5125,t.FLOAT=5126,t.PositionKind="position",t.NormalKind="normal",t.TangentKind="tangent",t.UVKind="uv",t.UV2Kind="uv2",t.UV3Kind="uv3",t.UV4Kind="uv4",t.UV5Kind="uv5",t.UV6Kind="uv6",t.ColorKind="color",t.MatricesIndicesKind="matricesIndices",t.MatricesWeightsKind="matricesWeights",t.MatricesIndicesExtraKind="matricesIndicesExtra",t.MatricesWeightsExtraKind="matricesWeightsExtra",t}()},yk6c:function(t,e,i){"use strict";i.d(e,"a",(function(){return l}));var s=i("/SR9"),r=i("Xeau"),n=i("UtUh"),a=i("y4Ty"),o=i("C1Wc"),u=i("mzcJ"),h=i("T5H4"),c=i("YKqZ"),d=i("cSa5"),f=i("lJNW"),l=function(){function t(t,e,i,s,r){void 0===s&&(s=!1),void 0===r&&(r=null),this.delayLoadState=0,this._totalVertices=0,this._isDisposed=!1,this._indexBufferIsUpdatable=!1,this.id=t,this.uniqueId=e.getUniqueId(),this._engine=e.getEngine(),this._meshes=[],this._scene=e,this._vertexBuffers={},this._indices=[],this._updatable=s,i?this.setAllVerticesData(i,s):(this._totalVertices=0,this._indices=[]),this._engine.getCaps().vertexArrayObject&&(this._vertexArrayObjects={}),r&&(this.applyToMesh(r),r.computeWorldMatrix(!0))}return Object.defineProperty(t.prototype,"boundingBias",{get:function(){return this._boundingBias},set:function(t){this._boundingBias?this._boundingBias.copyFrom(t):this._boundingBias=t.clone(),this._updateBoundingInfo(!0,null)},enumerable:!0,configurable:!0}),t.CreateGeometryForMesh=function(e){var i=new t(t.RandomId(),e.getScene());return i.applyToMesh(e),i},Object.defineProperty(t.prototype,"extend",{get:function(){return this._extend},enumerable:!0,configurable:!0}),t.prototype.getScene=function(){return this._scene},t.prototype.getEngine=function(){return this._engine},t.prototype.isReady=function(){return 1===this.delayLoadState||0===this.delayLoadState},Object.defineProperty(t.prototype,"doNotSerialize",{get:function(){for(var t=0;t<this._meshes.length;t++)if(!this._meshes[t].doNotSerialize)return!1;return!0},enumerable:!0,configurable:!0}),t.prototype._rebuild=function(){for(var t in this._vertexArrayObjects&&(this._vertexArrayObjects={}),0!==this._meshes.length&&this._indices&&(this._indexBuffer=this._engine.createIndexBuffer(this._indices)),this._vertexBuffers){this._vertexBuffers[t]._rebuild()}},t.prototype.setAllVerticesData=function(t,e){t.applyToGeometry(this,e),this.notifyUpdate()},t.prototype.setVerticesData=function(t,e,i,s){void 0===i&&(i=!1);var r=new a.b(this._engine,e,t,i,0===this._meshes.length,s);this.setVerticesBuffer(r)},t.prototype.removeVerticesData=function(t){this._vertexBuffers[t]&&(this._vertexBuffers[t].dispose(),delete this._vertexBuffers[t])},t.prototype.setVerticesBuffer=function(t,e){void 0===e&&(e=null);var i=t.getKind();if(this._vertexBuffers[i]&&this._vertexBuffers[i].dispose(),this._vertexBuffers[i]=t,i===a.b.PositionKind){var s=t.getData();null!=e?this._totalVertices=e:null!=s&&(this._totalVertices=s.length/(t.byteStride/4)),this._updateExtend(s),this._resetPointsArrayCache();for(var r=this._meshes,n=r.length,o=0;o<n;o++){var u=r[o];u._boundingInfo=new h.a(this._extend.minimum,this._extend.maximum),u._createGlobalSubMesh(!1),u.computeWorldMatrix(!0)}}this.notifyUpdate(i),this._vertexArrayObjects&&(this._disposeVertexArrayObjects(),this._vertexArrayObjects={})},t.prototype.updateVerticesDataDirectly=function(t,e,i,s){void 0===s&&(s=!1);var r=this.getVertexBuffer(t);r&&(r.updateDirectly(e,i,s),this.notifyUpdate(t))},t.prototype.updateVerticesData=function(t,e,i){void 0===i&&(i=!1);var s=this.getVertexBuffer(t);s&&(s.update(e),t===a.b.PositionKind&&this._updateBoundingInfo(i,e),this.notifyUpdate(t))},t.prototype._updateBoundingInfo=function(t,e){if(t&&this._updateExtend(e),this._resetPointsArrayCache(),t)for(var i=0,s=this._meshes;i<s.length;i++){var r=s[i];r._boundingInfo?r._boundingInfo.reConstruct(this._extend.minimum,this._extend.maximum):r._boundingInfo=new h.a(this._extend.minimum,this._extend.maximum);for(var n=0,a=r.subMeshes;n<a.length;n++){a[n].refreshBoundingInfo()}}},t.prototype._bind=function(t,e){if(t){void 0===e&&(e=this._indexBuffer);var i=this.getVertexBuffers();i&&(e==this._indexBuffer&&this._vertexArrayObjects?(this._vertexArrayObjects[t.key]||(this._vertexArrayObjects[t.key]=this._engine.recordVertexArrayObject(i,e,t)),this._engine.bindVertexArrayObject(this._vertexArrayObjects[t.key],e)):this._engine.bindBuffers(i,e,t))}},t.prototype.getTotalVertices=function(){return this.isReady()?this._totalVertices:0},t.prototype.getVerticesData=function(t,e,i){var s=this.getVertexBuffer(t);if(!s)return null;var r=s.getData();if(!r)return null;var n=s.getSize()*a.b.GetTypeByteLength(s.type),o=this._totalVertices*s.getSize();if(s.type!==a.b.FLOAT||s.byteStride!==n){var u=[];return s.forEach(o,(function(t){return u.push(t)})),u}if(!(r instanceof Array||r instanceof Float32Array)||0!==s.byteOffset||r.length!==o){if(r instanceof Array){var h=s.byteOffset/4;return c.b.Slice(r,h,h+o)}if(r instanceof ArrayBuffer)return new Float32Array(r,s.byteOffset,o);h=r.byteOffset+s.byteOffset;if(i||e&&1!==this._meshes.length){var d=new Float32Array(o),f=new Float32Array(r.buffer,h,o);return d.set(f),d}return new Float32Array(r.buffer,h,o)}return i||e&&1!==this._meshes.length?c.b.Slice(r):r},t.prototype.isVertexBufferUpdatable=function(t){var e=this._vertexBuffers[t];return!!e&&e.isUpdatable()},t.prototype.getVertexBuffer=function(t){return this.isReady()?this._vertexBuffers[t]:null},t.prototype.getVertexBuffers=function(){return this.isReady()?this._vertexBuffers:null},t.prototype.isVerticesDataPresent=function(t){return this._vertexBuffers?void 0!==this._vertexBuffers[t]:!!this._delayInfo&&-1!==this._delayInfo.indexOf(t)},t.prototype.getVerticesDataKinds=function(){var t,e=[];if(!this._vertexBuffers&&this._delayInfo)for(t in this._delayInfo)e.push(t);else for(t in this._vertexBuffers)e.push(t);return e},t.prototype.updateIndices=function(t,e,i){if(void 0===i&&(i=!1),this._indexBuffer)if(this._indexBufferIsUpdatable){var s=t.length!==this._indices.length;if(i||(this._indices=t.slice()),this._engine.updateDynamicIndexBuffer(this._indexBuffer,t,e),s)for(var r=0,n=this._meshes;r<n.length;r++){n[r]._createGlobalSubMesh(!0)}}else this.setIndices(t,null,!0)},t.prototype.setIndices=function(t,e,i){void 0===e&&(e=null),void 0===i&&(i=!1),this._indexBuffer&&this._engine._releaseBuffer(this._indexBuffer),this._disposeVertexArrayObjects(),this._indices=t,this._indexBufferIsUpdatable=i,0!==this._meshes.length&&this._indices&&(this._indexBuffer=this._engine.createIndexBuffer(this._indices,i)),null!=e&&(this._totalVertices=e);for(var s=0,r=this._meshes;s<r.length;s++){r[s]._createGlobalSubMesh(!0)}this.notifyUpdate()},t.prototype.getTotalIndices=function(){return this.isReady()?this._indices.length:0},t.prototype.getIndices=function(t,e){if(!this.isReady())return null;var i=this._indices;if(e||t&&1!==this._meshes.length){for(var s=i.length,r=[],n=0;n<s;n++)r.push(i[n]);return r}return i},t.prototype.getIndexBuffer=function(){return this.isReady()?this._indexBuffer:null},t.prototype._releaseVertexArrayObject=function(t){void 0===t&&(t=null),t&&this._vertexArrayObjects&&this._vertexArrayObjects[t.key]&&(this._engine.releaseVertexArrayObject(this._vertexArrayObjects[t.key]),delete this._vertexArrayObjects[t.key])},t.prototype.releaseForMesh=function(t,e){var i=this._meshes,s=i.indexOf(t);-1!==s&&(i.splice(s,1),t._geometry=null,0===i.length&&e&&this.dispose())},t.prototype.applyToMesh=function(t){if(t._geometry!==this){var e=t._geometry;e&&e.releaseForMesh(t);var i=this._meshes;t._geometry=this,this._scene.pushGeometry(this),i.push(t),this.isReady()?this._applyToMesh(t):t._boundingInfo=this._boundingInfo}},t.prototype._updateExtend=function(t){void 0===t&&(t=null),t||(t=this.getVerticesData(a.b.PositionKind)),this._extend=Object(f.a)(t,0,this._totalVertices,this.boundingBias,3)},t.prototype._applyToMesh=function(t){var e=this._meshes.length;for(var i in this._vertexBuffers){1===e&&this._vertexBuffers[i].create();var s=this._vertexBuffers[i].getBuffer();s&&(s.references=e),i===a.b.PositionKind&&(this._extend||this._updateExtend(),t._boundingInfo=new h.a(this._extend.minimum,this._extend.maximum),t._createGlobalSubMesh(!1),t._updateBoundingInfo())}1===e&&this._indices&&this._indices.length>0&&(this._indexBuffer=this._engine.createIndexBuffer(this._indices)),this._indexBuffer&&(this._indexBuffer.references=e),t._syncGeometryWithMorphTargetManager(),t.synchronizeInstances()},t.prototype.notifyUpdate=function(t){this.onGeometryUpdated&&this.onGeometryUpdated(this,t);for(var e=0,i=this._meshes;e<i.length;e++){i[e]._markSubMeshesAsAttributesDirty()}},t.prototype.load=function(t,e){2!==this.delayLoadState&&(this.isReady()?e&&e():(this.delayLoadState=2,this._queueLoad(t,e)))},t.prototype._queueLoad=function(t,e){var i=this;this.delayLoadingFile&&(t._addPendingData(this),t._loadFile(this.delayLoadingFile,(function(s){if(i._delayLoadingFunction){i._delayLoadingFunction(JSON.parse(s),i),i.delayLoadState=1,i._delayInfo=[],t._removePendingData(i);for(var r=i._meshes,n=r.length,a=0;a<n;a++)i._applyToMesh(r[a]);e&&e()}}),void 0,!0))},t.prototype.toLeftHanded=function(){var t=this.getIndices(!1);if(null!=t&&t.length>0){for(var e=0;e<t.length;e+=3){var i=t[e+0];t[e+0]=t[e+2],t[e+2]=i}this.setIndices(t)}var s=this.getVerticesData(a.b.PositionKind,!1);if(null!=s&&s.length>0){for(e=0;e<s.length;e+=3)s[e+2]=-s[e+2];this.setVerticesData(a.b.PositionKind,s,!1)}var r=this.getVerticesData(a.b.NormalKind,!1);if(null!=r&&r.length>0){for(e=0;e<r.length;e+=3)r[e+2]=-r[e+2];this.setVerticesData(a.b.NormalKind,r,!1)}},t.prototype._resetPointsArrayCache=function(){this._positions=null},t.prototype._generatePointsArray=function(){if(this._positions)return!0;var t=this.getVerticesData(a.b.PositionKind);if(!t||0===t.length)return!1;this._positions=[];for(var e=0;e<t.length;e+=3)this._positions.push(s.e.FromArray(t,e));return!0},t.prototype.isDisposed=function(){return this._isDisposed},t.prototype._disposeVertexArrayObjects=function(){if(this._vertexArrayObjects){for(var t in this._vertexArrayObjects)this._engine.releaseVertexArrayObject(this._vertexArrayObjects[t]);this._vertexArrayObjects={}}},t.prototype.dispose=function(){var t,e=this._meshes,i=e.length;for(t=0;t<i;t++)this.releaseForMesh(e[t]);for(var s in this._meshes=[],this._disposeVertexArrayObjects(),this._vertexBuffers)this._vertexBuffers[s].dispose();this._vertexBuffers={},this._totalVertices=0,this._indexBuffer&&this._engine._releaseBuffer(this._indexBuffer),this._indexBuffer=null,this._indices=[],this.delayLoadState=0,this.delayLoadingFile=null,this._delayLoadingFunction=null,this._delayInfo=[],this._boundingInfo=null,this._scene.removeGeometry(this),this._isDisposed=!0},t.prototype.copy=function(e){var i=new n.a;i.indices=[];var s=this.getIndices();if(s)for(var r=0;r<s.length;r++)i.indices.push(s[r]);var a,o=!1,u=!1;for(a in this._vertexBuffers){var c=this.getVerticesData(a);if(c&&(c instanceof Float32Array?i.set(new Float32Array(c),a):i.set(c.slice(0),a),!u)){var d=this.getVertexBuffer(a);d&&(u=!(o=d.isUpdatable()))}}var f=new t(e,this._scene,i,o);for(a in f.delayLoadState=this.delayLoadState,f.delayLoadingFile=this.delayLoadingFile,f._delayLoadingFunction=this._delayLoadingFunction,this._delayInfo)f._delayInfo=f._delayInfo||[],f._delayInfo.push(a);return f._boundingInfo=new h.a(this._extend.minimum,this._extend.maximum),f},t.prototype.serialize=function(){var t={};return t.id=this.id,t.updatable=this._updatable,d.a&&d.a.HasTags(this)&&(t.tags=d.a.GetTags(this)),t},t.prototype.toNumberArray=function(t){return Array.isArray(t)?t:Array.prototype.slice.call(t)},t.prototype.serializeVerticeData=function(){var t=this.serialize();return this.isVerticesDataPresent(a.b.PositionKind)&&(t.positions=this.toNumberArray(this.getVerticesData(a.b.PositionKind)),this.isVertexBufferUpdatable(a.b.PositionKind)&&(t.positions._updatable=!0)),this.isVerticesDataPresent(a.b.NormalKind)&&(t.normals=this.toNumberArray(this.getVerticesData(a.b.NormalKind)),this.isVertexBufferUpdatable(a.b.NormalKind)&&(t.normals._updatable=!0)),this.isVerticesDataPresent(a.b.TangentKind)&&(t.tangets=this.toNumberArray(this.getVerticesData(a.b.TangentKind)),this.isVertexBufferUpdatable(a.b.TangentKind)&&(t.tangets._updatable=!0)),this.isVerticesDataPresent(a.b.UVKind)&&(t.uvs=this.toNumberArray(this.getVerticesData(a.b.UVKind)),this.isVertexBufferUpdatable(a.b.UVKind)&&(t.uvs._updatable=!0)),this.isVerticesDataPresent(a.b.UV2Kind)&&(t.uv2s=this.toNumberArray(this.getVerticesData(a.b.UV2Kind)),this.isVertexBufferUpdatable(a.b.UV2Kind)&&(t.uv2s._updatable=!0)),this.isVerticesDataPresent(a.b.UV3Kind)&&(t.uv3s=this.toNumberArray(this.getVerticesData(a.b.UV3Kind)),this.isVertexBufferUpdatable(a.b.UV3Kind)&&(t.uv3s._updatable=!0)),this.isVerticesDataPresent(a.b.UV4Kind)&&(t.uv4s=this.toNumberArray(this.getVerticesData(a.b.UV4Kind)),this.isVertexBufferUpdatable(a.b.UV4Kind)&&(t.uv4s._updatable=!0)),this.isVerticesDataPresent(a.b.UV5Kind)&&(t.uv5s=this.toNumberArray(this.getVerticesData(a.b.UV5Kind)),this.isVertexBufferUpdatable(a.b.UV5Kind)&&(t.uv5s._updatable=!0)),this.isVerticesDataPresent(a.b.UV6Kind)&&(t.uv6s=this.toNumberArray(this.getVerticesData(a.b.UV6Kind)),this.isVertexBufferUpdatable(a.b.UV6Kind)&&(t.uv6s._updatable=!0)),this.isVerticesDataPresent(a.b.ColorKind)&&(t.colors=this.toNumberArray(this.getVerticesData(a.b.ColorKind)),this.isVertexBufferUpdatable(a.b.ColorKind)&&(t.colors._updatable=!0)),this.isVerticesDataPresent(a.b.MatricesIndicesKind)&&(t.matricesIndices=this.toNumberArray(this.getVerticesData(a.b.MatricesIndicesKind)),t.matricesIndices._isExpanded=!0,this.isVertexBufferUpdatable(a.b.MatricesIndicesKind)&&(t.matricesIndices._updatable=!0)),this.isVerticesDataPresent(a.b.MatricesWeightsKind)&&(t.matricesWeights=this.toNumberArray(this.getVerticesData(a.b.MatricesWeightsKind)),this.isVertexBufferUpdatable(a.b.MatricesWeightsKind)&&(t.matricesWeights._updatable=!0)),t.indices=this.toNumberArray(this.getIndices()),t},t.ExtractFromMesh=function(t,e){var i=t._geometry;return i?i.copy(e):null},t.RandomId=function(){return c.b.RandomId()},t._ImportGeometry=function(e,i){var s=i.getScene(),n=e.geometryId;if(n){var u=s.getGeometryByID(n);u&&u.applyToMesh(i)}else if(e instanceof ArrayBuffer){var h=i._binaryInfo;if(h.positionsAttrDesc&&h.positionsAttrDesc.count>0){var c=new Float32Array(e,h.positionsAttrDesc.offset,h.positionsAttrDesc.count);i.setVerticesData(a.b.PositionKind,c,!1)}if(h.normalsAttrDesc&&h.normalsAttrDesc.count>0){var d=new Float32Array(e,h.normalsAttrDesc.offset,h.normalsAttrDesc.count);i.setVerticesData(a.b.NormalKind,d,!1)}if(h.tangetsAttrDesc&&h.tangetsAttrDesc.count>0){var f=new Float32Array(e,h.tangetsAttrDesc.offset,h.tangetsAttrDesc.count);i.setVerticesData(a.b.TangentKind,f,!1)}if(h.uvsAttrDesc&&h.uvsAttrDesc.count>0){var l=new Float32Array(e,h.uvsAttrDesc.offset,h.uvsAttrDesc.count);i.setVerticesData(a.b.UVKind,l,!1)}if(h.uvs2AttrDesc&&h.uvs2AttrDesc.count>0){var _=new Float32Array(e,h.uvs2AttrDesc.offset,h.uvs2AttrDesc.count);i.setVerticesData(a.b.UV2Kind,_,!1)}if(h.uvs3AttrDesc&&h.uvs3AttrDesc.count>0){var p=new Float32Array(e,h.uvs3AttrDesc.offset,h.uvs3AttrDesc.count);i.setVerticesData(a.b.UV3Kind,p,!1)}if(h.uvs4AttrDesc&&h.uvs4AttrDesc.count>0){var y=new Float32Array(e,h.uvs4AttrDesc.offset,h.uvs4AttrDesc.count);i.setVerticesData(a.b.UV4Kind,y,!1)}if(h.uvs5AttrDesc&&h.uvs5AttrDesc.count>0){var b=new Float32Array(e,h.uvs5AttrDesc.offset,h.uvs5AttrDesc.count);i.setVerticesData(a.b.UV5Kind,b,!1)}if(h.uvs6AttrDesc&&h.uvs6AttrDesc.count>0){var g=new Float32Array(e,h.uvs6AttrDesc.offset,h.uvs6AttrDesc.count);i.setVerticesData(a.b.UV6Kind,g,!1)}if(h.colorsAttrDesc&&h.colorsAttrDesc.count>0){var v=new Float32Array(e,h.colorsAttrDesc.offset,h.colorsAttrDesc.count);i.setVerticesData(a.b.ColorKind,v,!1,h.colorsAttrDesc.stride)}if(h.matricesIndicesAttrDesc&&h.matricesIndicesAttrDesc.count>0){for(var m=new Int32Array(e,h.matricesIndicesAttrDesc.offset,h.matricesIndicesAttrDesc.count),x=[],V=0;V<m.length;V++){var D=m[V];x.push(255&D),x.push((65280&D)>>8),x.push((16711680&D)>>16),x.push(D>>24)}i.setVerticesData(a.b.MatricesIndicesKind,x,!1)}if(h.matricesWeightsAttrDesc&&h.matricesWeightsAttrDesc.count>0){var A=new Float32Array(e,h.matricesWeightsAttrDesc.offset,h.matricesWeightsAttrDesc.count);i.setVerticesData(a.b.MatricesWeightsKind,A,!1)}if(h.indicesAttrDesc&&h.indicesAttrDesc.count>0){var I=new Int32Array(e,h.indicesAttrDesc.offset,h.indicesAttrDesc.count);i.setIndices(I,null)}if(h.subMeshesAttrDesc&&h.subMeshesAttrDesc.count>0){var B=new Int32Array(e,h.subMeshesAttrDesc.offset,5*h.subMeshesAttrDesc.count);i.subMeshes=[];for(V=0;V<h.subMeshesAttrDesc.count;V++){var K=B[5*V+0],U=B[5*V+1],T=B[5*V+2],M=B[5*V+3],E=B[5*V+4];o.b.AddToMesh(K,U,T,M,E,i)}}}else if(e.positions&&e.normals&&e.indices){if(i.setVerticesData(a.b.PositionKind,e.positions,e.positions._updatable),i.setVerticesData(a.b.NormalKind,e.normals,e.normals._updatable),e.tangents&&i.setVerticesData(a.b.TangentKind,e.tangents,e.tangents._updatable),e.uvs&&i.setVerticesData(a.b.UVKind,e.uvs,e.uvs._updatable),e.uvs2&&i.setVerticesData(a.b.UV2Kind,e.uvs2,e.uvs2._updatable),e.uvs3&&i.setVerticesData(a.b.UV3Kind,e.uvs3,e.uvs3._updatable),e.uvs4&&i.setVerticesData(a.b.UV4Kind,e.uvs4,e.uvs4._updatable),e.uvs5&&i.setVerticesData(a.b.UV5Kind,e.uvs5,e.uvs5._updatable),e.uvs6&&i.setVerticesData(a.b.UV6Kind,e.uvs6,e.uvs6._updatable),e.colors&&i.setVerticesData(a.b.ColorKind,r.b.CheckColors4(e.colors,e.positions.length/3),e.colors._updatable),e.matricesIndices)if(e.matricesIndices._isExpanded)delete e.matricesIndices._isExpanded,i.setVerticesData(a.b.MatricesIndicesKind,e.matricesIndices,e.matricesIndices._updatable);else{for(x=[],V=0;V<e.matricesIndices.length;V++){var S=e.matricesIndices[V];x.push(255&S),x.push((65280&S)>>8),x.push((16711680&S)>>16),x.push(S>>24)}i.setVerticesData(a.b.MatricesIndicesKind,x,e.matricesIndices._updatable)}if(e.matricesIndicesExtra)if(e.matricesIndicesExtra._isExpanded)delete e.matricesIndices._isExpanded,i.setVerticesData(a.b.MatricesIndicesExtraKind,e.matricesIndicesExtra,e.matricesIndicesExtra._updatable);else{for(x=[],V=0;V<e.matricesIndicesExtra.length;V++){S=e.matricesIndicesExtra[V];x.push(255&S),x.push((65280&S)>>8),x.push((16711680&S)>>16),x.push(S>>24)}i.setVerticesData(a.b.MatricesIndicesExtraKind,x,e.matricesIndicesExtra._updatable)}e.matricesWeights&&(t._CleanMatricesWeights(e,i),i.setVerticesData(a.b.MatricesWeightsKind,e.matricesWeights,e.matricesWeights._updatable)),e.matricesWeightsExtra&&i.setVerticesData(a.b.MatricesWeightsExtraKind,e.matricesWeightsExtra,e.matricesWeights._updatable),i.setIndices(e.indices,null)}if(e.subMeshes){i.subMeshes=[];for(var F=0;F<e.subMeshes.length;F++){var O=e.subMeshes[F];o.b.AddToMesh(O.materialIndex,O.verticesStart,O.verticesCount,O.indexStart,O.indexCount,i)}}i._shouldGenerateFlatShading&&(i.convertToFlatShadedMesh(),delete i._shouldGenerateFlatShading),i.computeWorldMatrix(!0),s.onMeshImportedObservable.notifyObservers(i)},t._CleanMatricesWeights=function(t,e){if(u.a.CleanBoneMatrixWeights){var i=0;if(t.skeletonId>-1){var s=e.getScene().getLastSkeletonByID(t.skeletonId);if(s){i=s.bones.length;for(var r=e.getVerticesData(a.b.MatricesIndicesKind),n=e.getVerticesData(a.b.MatricesIndicesExtraKind),o=t.matricesWeights,h=t.matricesWeightsExtra,c=t.numBoneInfluencer,d=o.length,f=0;f<d;f+=4){for(var l=0,_=-1,p=0;p<4;p++){l+=y=o[f+p],y<.001&&_<0&&(_=p)}if(h)for(p=0;p<4;p++){var y;l+=y=h[f+p],y<.001&&_<0&&(_=p+4)}if((_<0||_>c-1)&&(_=c-1),l>.001){var b=1/l;for(p=0;p<4;p++)o[f+p]*=b;if(h)for(p=0;p<4;p++)h[f+p]*=b}else _>=4?(h[f+_-4]=1-l,n[f+_-4]=i):(o[f+_]=1-l,r[f+_]=i)}e.setVerticesData(a.b.MatricesIndicesKind,r),t.matricesWeightsExtra&&e.setVerticesData(a.b.MatricesIndicesExtraKind,n)}}}},t.Parse=function(e,i,r){if(i.getGeometryByID(e.id))return null;var o=new t(e.id,i,void 0,e.updatable);return d.a&&d.a.AddTagsTo(o,e.tags),e.delayLoadingFile?(o.delayLoadState=4,o.delayLoadingFile=r+e.delayLoadingFile,o._boundingInfo=new h.a(s.e.FromArray(e.boundingBoxMinimum),s.e.FromArray(e.boundingBoxMaximum)),o._delayInfo=[],e.hasUVs&&o._delayInfo.push(a.b.UVKind),e.hasUVs2&&o._delayInfo.push(a.b.UV2Kind),e.hasUVs3&&o._delayInfo.push(a.b.UV3Kind),e.hasUVs4&&o._delayInfo.push(a.b.UV4Kind),e.hasUVs5&&o._delayInfo.push(a.b.UV5Kind),e.hasUVs6&&o._delayInfo.push(a.b.UV6Kind),e.hasColors&&o._delayInfo.push(a.b.ColorKind),e.hasMatricesIndices&&o._delayInfo.push(a.b.MatricesIndicesKind),e.hasMatricesWeights&&o._delayInfo.push(a.b.MatricesWeightsKind),o._delayLoadingFunction=n.a.ImportVertexData):n.a.ImportVertexData(e,o),i.pushGeometry(o,!0),o},t}()}}]);