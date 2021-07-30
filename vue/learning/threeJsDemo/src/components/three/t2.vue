<template>
    <div>

    </div>
</template>
<script>
    import * as THREE from 'three';
    import OrbitControls from 'three-orbitcontrols'
    import {
        OBJLoader,
        MTLLoader
    } from 'three-obj-mtl-loader'
    export default {
        name: '',
        mounted() {
            var container,
                camera,
                scene,
                renderer,
                controls,
                clock;

            let init = function () {
                container = document.createElement('div');
                container.id = 'container';
                document.body.appendChild(container);

                renderer = new THREE.WebGLRenderer({
                    antialias: true
                });
                renderer.setPixelRatio(window.devicePixelRatio);
                renderer.setSize(window.innerWidth, window.innerHeight);
                container.appendChild(renderer.domElement);

                scene = new THREE.Scene();
                var gridHelper = new THREE.GridHelper(100, 10, 0x121c35, 0x121c35);
                scene.add(gridHelper);

                scene.add(new THREE.HemisphereLight(0xffffbb, 0x080820, 2));

                camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 200);
                camera.position.set(0, 50, 50);

                controls = new OrbitControls(camera, container);
                controls.autoRotate = true;

                new MTLLoader().load('../../../static/xbot.obj', function (materials) {
                    materials.preload();
                    new OBJLoader().setMaterials(materials).load('../../../static/xbot.obj', function (
                        object) {
                        scene.add(object);
                        animate();
                    });

                });

                window.addEventListener('resize', onWindowResize, false);
            };

            window.onload = init();

            function onWindowResize() {
                let w = window.innerWidth,
                    h = window.innerHeight;
                renderer.setSize(w, h);
                camera.aspect = w / h;
                camera.updateProjectionMatrix();
            }

            function animate() {
                requestAnimationFrame(animate);
                render();
            }

            function render() {
                controls.update();
                renderer.render(scene, camera);
            }
        },
    };
</script>
<style lang='less' scoped>

</style>