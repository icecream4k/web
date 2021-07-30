<template>
    <div>
        <div id="container"></div>
    </div>
</template>

<script>
    import * as Three from 'three'
    // import * as THREE from 'three'z
    import OrbitControls from 'three-orbitcontrols'
    import {
        OBJLoader
    } from 'three-obj-mtl-loader'
    import Stats from 'stats-js'
    export default {
        name: 'ThreeTest',
        data() {
            return {
                camera: null,
                scene: null,
                renderer: null,
                mesh: null
            }
        },
        methods: {
            changeValue: function () {

            },
            init: function () {
                // 获取到页面中ID对应的容器
                var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
                var renderer = new THREE.WebGLRenderer();
                var scene = new THREE.Scene();
                scene.add(camera);
                new OBJLoader().load('../../static/xbot.obj', obj => {
                    scene.add(obj)
                });
                var controls = new OrbitControls(camera);
            },
            animate: function () {
                renderer.render(scene, camera)
                stats.update()
                controls.update()
                requestAnimationFrame(this.animate) //再次调用animate方法实现刷新
            }
        },
        mounted() {
            this.init();
            this.animate()
        }
    }
</script>
<style scoped>
    #container {
        height: 500px;
        cursor: pointer;
    }
</style>