(function (PIXI, lib) {

    var MovieClip = PIXI.animate.MovieClip;
    var Container = PIXI.Container;
    var Graphics = PIXI.Graphics;
    var shapes = PIXI.animate.ShapesCache;

    lib.hitmesquare = Container.extend(function () {
        Container.call(this);
        var instance1 = new Graphics()
            .drawCommands(shapes.InternalDeadVirus[0])
            .setTransform(0, 0.85, 1, 1.055);
        this.addChild(instance1);
    });

    lib.virus_dead_sm = Container.extend(function () {
        Container.call(this);
        var instance31 = new Graphics()
            .drawCommands(shapes.InternalDeadVirus[19])
            .setTransform(-88.8, -113.35, 0.366, 0.366);
        var instance30 = new Graphics()
            .drawCommands(shapes.InternalDeadVirus[18])
            .setTransform(0.1, 0.65, 1.004, 1.004);
        var instance29 = new Graphics()
            .drawCommands(shapes.InternalDeadVirus[17])
            .setTransform(-88.8, -113.35, 0.366, 0.366);
        var instance28 = new Graphics()
            .drawCommands(shapes.InternalDeadVirus[16])
            .setTransform(-88.8, -113.35, 0.366, 0.366);
        var instance27 = new Graphics()
            .drawCommands(shapes.InternalDeadVirus[15])
            .setTransform(-88.8, -113.35, 0.366, 0.366);
        var instance26 = new Graphics()
            .drawCommands(shapes.InternalDeadVirus[14])
            .setTransform(-88.8, -113.35, 0.366, 0.366);
        var instance25 = new Graphics()
            .drawCommands(shapes.InternalDeadVirus[13])
            .setTransform(-88.8, -113.35, 0.366, 0.366);
        var instance24 = new Graphics()
            .drawCommands(shapes.InternalDeadVirus[12])
            .setTransform(-88.8, -113.35, 0.366, 0.366);
        var instance23 = new Graphics()
            .drawCommands(shapes.InternalDeadVirus[11])
            .setTransform(-88.8, -113.35, 0.366, 0.366);
        var instance22 = new Graphics()
            .drawCommands(shapes.InternalDeadVirus[10])
            .setTransform(-88.8, -113.35, 0.366, 0.366);
        var instance21 = new Graphics()
            .drawCommands(shapes.InternalDeadVirus[1])
            .setTransform(-88.8, -113.35, 0.366, 0.366);
        var instance20 = new Graphics()
            .drawCommands(shapes.InternalDeadVirus[9])
            .setTransform(-88.8, -113.35, 0.366, 0.366);
        var instance19 = new Graphics()
            .drawCommands(shapes.InternalDeadVirus[8])
            .setTransform(-88.8, -113.35, 0.366, 0.366);
        var instance18 = new Graphics()
            .drawCommands(shapes.InternalDeadVirus[7])
            .setTransform(-95.925, -156.282, 0.366, 0.379);
        var instance17 = new Graphics()
            .drawCommands(shapes.InternalDeadVirus[7])
            .setTransform(-88.8, -156.282, 0.366, 0.379);
        var instance16 = new Graphics()
            .drawCommands(shapes.InternalDeadVirus[6])
            .setTransform(-120.578, -124.34, 0.348, 0.364);
        var instance15 = new Graphics()
            .drawCommands(shapes.InternalDeadVirus[6])
            .setTransform(-116.97, -131.3, 0.348, 0.366);
        var instance14 = new Graphics()
            .drawCommands(shapes.InternalDeadVirus[5])
            .setTransform(-115.798, -92.397, 0.345, 0.362);
        var instance13 = new Graphics()
            .drawCommands(shapes.InternalDeadVirus[5])
            .setTransform(-119.607, -97.818, 0.345, 0.36);
        var instance12 = new Graphics()
            .drawCommands(shapes.InternalDeadVirus[7])
            .setTransform(-95.925, -113.35, 0.366, 0.366);
        var instance11 = new Graphics()
            .drawCommands(shapes.InternalDeadVirus[7])
            .setTransform(-88.8, -113.35, 0.366, 0.366);
        var instance10 = new Graphics()
            .drawCommands(shapes.InternalDeadVirus[6])
            .setTransform(-92.243, -107.104, 0.366, 0.366);
        var instance9 = new Graphics()
            .drawCommands(shapes.InternalDeadVirus[6])
            .setTransform(-88.8, -113.35, 0.366, 0.366);
        var instance8 = new Graphics()
            .drawCommands(shapes.InternalDeadVirus[5])
            .setTransform(-92.024, -119.449, 0.365, 0.366);
        var instance7 = new Graphics()
            .drawCommands(shapes.InternalDeadVirus[5])
            .setTransform(-88.8, -113.35, 0.366, 0.366);
        var instance6 = new Graphics()
            .drawCommands(shapes.InternalDeadVirus[4])
            .setTransform(-100.504, -113.35, 0.367, 0.366);
        var instance5 = new Graphics()
            .drawCommands(shapes.InternalDeadVirus[3])
            .setTransform(-100.504, -113.35, 0.367, 0.366);
        var instance4 = new Graphics()
            .drawCommands(shapes.InternalDeadVirus[4])
            .setTransform(-88.8, -113.35, 0.366, 0.366);
        var instance3 = new Graphics()
            .drawCommands(shapes.InternalDeadVirus[3])
            .setTransform(-88.8, -113.35, 0.366, 0.366);
        var instance2 = new Graphics()
            .drawCommands(shapes.InternalDeadVirus[2])
            .setTransform(-88.8, -113.35, 0.366, 0.366);
        var instance1 = new Graphics()
            .drawCommands(shapes.InternalDeadVirus[1])
            .setTransform(89.5, -112.55, 0.366, 0.366, 0, 0, 3.142);
        this.addChild(instance31, instance30, instance29, instance28, instance27, instance26, instance25, instance24, instance23, instance22, instance21, instance20, instance19, instance18, instance17, instance16, instance15, instance14, instance13, instance12, instance11, instance10, instance9, instance8, instance7, instance6, instance5, instance4, instance3, instance2, instance1);
    });

    lib.virus_dead_antibodies = Container.extend(function () {
        Container.call(this);
        var instance2 = new lib.virus_dead_sm()
            .setTransform(0.05, -0.2);
        var instance1 = new lib.hitmesquare()
            .setTransform(30.65, -19.3, 1.288, 1.309)
            .setAlpha(0);
        this[instance1.name = "hittestie"] = instance1;
        this.addChild(instance2, instance1);
    });

    lib.eyes_dead = Container.extend(function () {
        Container.call(this);
        var instance4 = new Graphics()
            .drawCommands(shapes.InternalDeadVirus[4])
            .setTransform(-88.024, -99.7, 0.352, 0.351);
        var instance3 = new Graphics()
            .drawCommands(shapes.InternalDeadVirus[3])
            .setTransform(-88.024, -99.7, 0.352, 0.351);
        var instance2 = new Graphics()
            .drawCommands(shapes.InternalDeadVirus[4])
            .setTransform(-76.8, -99.7, 0.351, 0.351);
        var instance1 = new Graphics()
            .drawCommands(shapes.InternalDeadVirus[3])
            .setTransform(-76.8, -99.7, 0.351, 0.351);
        this.addChild(instance4, instance3, instance2, instance1);
    });

    lib.body_dead = Container.extend(function () {
        Container.call(this);
        var instance1 = new Graphics()
            .drawCommands(shapes.InternalDeadVirus[19])
            .setTransform(-66.175, -91.849, 0.351, 0.351);
        this.addChild(instance1);
    });

    lib.body = Container.extend(function () {
        Container.call(this);
        var instance1 = new Graphics()
            .drawCommands(shapes.InternalDeadVirus[40]);
        this.addChild(instance1);
    });

    lib.petals_dead = Container.extend(function () {
        Container.call(this);
        var instance12 = new Graphics()
            .drawCommands(shapes.InternalDeadVirus[17])
            .setTransform(-56.5, -82.95, 0.351, 0.351);
        var instance11 = new Graphics()
            .drawCommands(shapes.InternalDeadVirus[16])
            .setTransform(-56.5, -82.95, 0.351, 0.351);
        var instance10 = new Graphics()
            .drawCommands(shapes.InternalDeadVirus[15])
            .setTransform(-56.5, -82.95, 0.351, 0.351);
        var instance9 = new Graphics()
            .drawCommands(shapes.InternalDeadVirus[14])
            .setTransform(-56.5, -82.95, 0.351, 0.351);
        var instance8 = new Graphics()
            .drawCommands(shapes.InternalDeadVirus[13])
            .setTransform(-56.5, -82.95, 0.351, 0.351);
        var instance7 = new Graphics()
            .drawCommands(shapes.InternalDeadVirus[12])
            .setTransform(-56.2, -83.2, 0.35, 0.352);
        var instance6 = new Graphics()
            .drawCommands(shapes.InternalDeadVirus[11])
            .setTransform(-56.4, -83, 0.351, 0.351);
        var instance5 = new Graphics()
            .drawCommands(shapes.InternalDeadVirus[10])
            .setTransform(-56.5, -82.95, 0.351, 0.351);
        var instance4 = new Graphics()
            .drawCommands(shapes.InternalDeadVirus[1])
            .setTransform(-56.5, -82.95, 0.351, 0.351);
        var instance3 = new Graphics()
            .drawCommands(shapes.InternalDeadVirus[9])
            .setTransform(-56.5, -82.95, 0.351, 0.351);
        var instance2 = new Graphics()
            .drawCommands(shapes.InternalDeadVirus[8])
            .setTransform(-56.5, -82.95, 0.351, 0.351);
        var instance1 = new Graphics()
            .drawCommands(shapes.InternalDeadVirus[1])
            .setTransform(114.5, -82.1, 0.351, 0.351, 0, 0, 3.142);
        this.addChild(instance12, instance11, instance10, instance9, instance8, instance7, instance6, instance5, instance4, instance3, instance2, instance1);
    });

    lib.petal_grow = MovieClip.extend(function () {
        MovieClip.call(this, {
            duration: 20
        });
        var instance1 = new Graphics()
            .drawCommands(shapes.InternalDeadVirus[41]);
        var instance2 = new Graphics()
            .drawCommands(shapes.InternalDeadVirus[42]);
        var instance3 = new Graphics()
            .drawCommands(shapes.InternalDeadVirus[43]);
        var instance4 = new Graphics()
            .drawCommands(shapes.InternalDeadVirus[44]);
        var instance5 = new Graphics()
            .drawCommands(shapes.InternalDeadVirus[45]);
        var instance6 = new Graphics()
            .drawCommands(shapes.InternalDeadVirus[46]);
        var instance7 = new Graphics()
            .drawCommands(shapes.InternalDeadVirus[47]);
        var instance8 = new Graphics()
            .drawCommands(shapes.InternalDeadVirus[48]);
        var instance9 = new Graphics()
            .drawCommands(shapes.InternalDeadVirus[49]);
        var instance10 = new Graphics()
            .drawCommands(shapes.InternalDeadVirus[50]);
        var instance11 = new Graphics()
            .drawCommands(shapes.InternalDeadVirus[51]);
        var instance12 = new Graphics()
            .drawCommands(shapes.InternalDeadVirus[52]);
        var instance13 = new Graphics()
            .drawCommands(shapes.InternalDeadVirus[53]);
        var instance14 = new Graphics()
            .drawCommands(shapes.InternalDeadVirus[54]);
        var instance15 = new Graphics()
            .drawCommands(shapes.InternalDeadVirus[55]);
        var instance16 = new Graphics()
            .drawCommands(shapes.InternalDeadVirus[56]);
        var instance17 = new Graphics()
            .drawCommands(shapes.InternalDeadVirus[57]);
        var instance18 = new Graphics()
            .drawCommands(shapes.InternalDeadVirus[58]);
        var instance19 = new Graphics()
            .drawCommands(shapes.InternalDeadVirus[59]);
        var instance20 = new Graphics()
            .drawCommands(shapes.InternalDeadVirus[60]);
        this.addTimedChild(instance1, 0, 1)
            .addTimedChild(instance2, 1, 1)
            .addTimedChild(instance3, 2, 1)
            .addTimedChild(instance4, 3, 1)
            .addTimedChild(instance5, 4, 1)
            .addTimedChild(instance6, 5, 1)
            .addTimedChild(instance7, 6, 1)
            .addTimedChild(instance8, 7, 1)
            .addTimedChild(instance9, 8, 1)
            .addTimedChild(instance10, 9, 1)
            .addTimedChild(instance11, 10, 1)
            .addTimedChild(instance12, 11, 1)
            .addTimedChild(instance13, 12, 1)
            .addTimedChild(instance14, 13, 1)
            .addTimedChild(instance15, 14, 1)
            .addTimedChild(instance16, 15, 1)
            .addTimedChild(instance17, 16, 1)
            .addTimedChild(instance18, 17, 1)
            .addTimedChild(instance19, 18, 1)
            .addTimedChild(instance20, 19, 1)
            .addAction(function () {
                /* stop();*/
            }, 19);
    });

    lib.pedal_grow_anti = Container.extend(function () {
        Container.call(this);
        var instance6 = new lib.petal_grow()
            .setTransform(57, 10.05, 1.303, 1.303, 0.498);
        var instance5 = new lib.petal_grow()
            .setTransform(73.6, 37.3, 1.3, 1.3, 1.408);
        var instance4 = new lib.petal_grow()
            .setTransform(24.1, 11.55, 1.298, 1.298, -0.789);
        var instance3 = new lib.petal_grow()
            .setTransform(10.05, 39.25, 1.296, 1.296, -1.563);
        var instance2 = new lib.petal_grow()
            .setTransform(24.9, 67.4, 1.295, 1.295, -2.709);
        var instance1 = new lib.petal_grow()
            .setTransform(58.55, 66.05, 1.293, 1.293, 0, 3.887, 2.397);
        this.addChild(instance6, instance5, instance4, instance3, instance2, instance1);
    });

    lib.fuzzies = Container.extend(function () {
        Container.call(this);
        var instance12 = new Graphics()
            .drawCommands(shapes.InternalDeadVirus[7])
            .setTransform(-77.216, -138.214, 0.376, 0.39);
        var instance11 = new Graphics()
            .drawCommands(shapes.InternalDeadVirus[7])
            .setTransform(-69.903, -138.214, 0.376, 0.39);
        var instance10 = new Graphics()
            .drawCommands(shapes.InternalDeadVirus[6])
            .setTransform(-102.523, -106.23, 0.357, 0.376);
        var instance9 = new Graphics()
            .drawCommands(shapes.InternalDeadVirus[6])
            .setTransform(-98.819, -112.552, 0.357, 0.376);
        var instance8 = new Graphics()
            .drawCommands(shapes.InternalDeadVirus[5])
            .setTransform(-97.615, -72.591, 0.354, 0.372);
        var instance7 = new Graphics()
            .drawCommands(shapes.InternalDeadVirus[5])
            .setTransform(-101.075, -78.78, 0.352, 0.372);
        var instance6 = new Graphics()
            .drawCommands(shapes.InternalDeadVirus[7])
            .setTransform(-77.216, -94.114, 0.376, 0.376);
        var instance5 = new Graphics()
            .drawCommands(shapes.InternalDeadVirus[7])
            .setTransform(-69.903, -94.114, 0.376, 0.376);
        var instance4 = new Graphics()
            .drawCommands(shapes.InternalDeadVirus[6])
            .setTransform(-73.964, -87.698, 0.378, 0.376);
        var instance3 = new Graphics()
            .drawCommands(shapes.InternalDeadVirus[6])
            .setTransform(-69.903, -94.114, 0.376, 0.376);
        var instance2 = new Graphics()
            .drawCommands(shapes.InternalDeadVirus[5])
            .setTransform(-73.682, -100.379, 0.376, 0.376);
        var instance1 = new Graphics()
            .drawCommands(shapes.InternalDeadVirus[5])
            .setTransform(-69.903, -94.114, 0.376, 0.376);
        this.addChild(instance12, instance11, instance10, instance9, instance8, instance7, instance6, instance5, instance4, instance3, instance2, instance1);
    });

    lib.inner_circle = Container.extend(function () {
        Container.call(this);
        var instance1 = new Graphics()
            .drawCommands(shapes.InternalDeadVirus[67]);
        this.addChild(instance1);
    });

    lib.mouth_virus_normal = Container.extend(function () {
        Container.call(this);
        var instance2 = new Graphics()
            .drawCommands(shapes.InternalDeadVirus[69]);
        var instance1 = new Graphics()
            .drawCommands(shapes.InternalDeadVirus[68]);
        this.addChild(instance2, instance1);
    });

    lib.RightEye_virus = Container.extend(function () {
        Container.call(this);
        var instance8 = new Graphics()
            .drawCommands(shapes.InternalDeadVirus[96]);
        var instance7 = new Graphics()
            .drawCommands(shapes.InternalDeadVirus[95])
            .setTransform(-257.6, -134.7, 0.625, 0.625);
        var instance6 = new Graphics()
            .drawCommands(shapes.InternalDeadVirus[94])
            .setTransform(-257.6, -134.7, 0.625, 0.625);
        var instance5 = new Graphics()
            .drawCommands(shapes.InternalDeadVirus[93])
            .setTransform(-257.6, -134.7, 0.625, 0.625);
        var instance4 = new Graphics()
            .drawCommands(shapes.InternalDeadVirus[92])
            .setTransform(-257.6, -134.7, 0.625, 0.625);
        var instance3 = new Graphics()
            .drawCommands(shapes.InternalDeadVirus[91]);
        var instance2 = new Graphics()
            .drawCommands(shapes.InternalDeadVirus[90])
            .setTransform(-257.6, -134.7, 0.625, 0.625);
        var instance1 = new Graphics()
            .drawCommands(shapes.InternalDeadVirus[89])
            .setTransform(1.8);
        this.addChild(instance8, instance7, instance6, instance5, instance4, instance3, instance2, instance1);
    });

    lib.eye_orange = Container.extend(function () {
        Container.call(this);
        var instance8 = new Graphics()
            .drawCommands(shapes.InternalDeadVirus[99]);
        var instance7 = new Graphics()
            .drawCommands(shapes.InternalDeadVirus[95])
            .setTransform(-267.93, -153.7, 0.625, 0.625);
        var instance6 = new Graphics()
            .drawCommands(shapes.InternalDeadVirus[98])
            .setTransform(-217.95, -154.7, 0.625, 0.625);
        var instance5 = new Graphics()
            .drawCommands(shapes.InternalDeadVirus[97])
            .setTransform(-217.95, -154.7, 0.625, 0.625);
        var instance4 = new Graphics()
            .drawCommands(shapes.InternalDeadVirus[92])
            .setTransform(-267.9, -153.95, 0.625, 0.625);
        var instance3 = new Graphics()
            .drawCommands(shapes.InternalDeadVirus[91])
            .setTransform(-10.251, -19.253, 0.997, 0.999);
        var instance2 = new Graphics()
            .drawCommands(shapes.InternalDeadVirus[90])
            .setTransform(-267.9, -153.95, 0.625, 0.625);
        var instance1 = new Graphics()
            .drawCommands(shapes.InternalDeadVirus[89])
            .setTransform(-8.533, -19.159, 0.997, 0.993);
        this.addChild(instance8, instance7, instance6, instance5, instance4, instance3, instance2, instance1);
    });

    lib.LeftEye_virus = Container.extend(function () {
        Container.call(this);
        var instance8 = new Graphics()
            .drawCommands(shapes.InternalDeadVirus[96])
            .setTransform(1.1, 1.35);
        var instance7 = new Graphics()
            .drawCommands(shapes.InternalDeadVirus[95])
            .setTransform(-256.48, -133.35, 0.625, 0.625);
        var instance6 = new Graphics()
            .drawCommands(shapes.InternalDeadVirus[98])
            .setTransform(-206.5, -134.35, 0.625, 0.625);
        var instance5 = new Graphics()
            .drawCommands(shapes.InternalDeadVirus[97])
            .setTransform(-206.5, -134.35, 0.625, 0.625);
        var instance4 = new Graphics()
            .drawCommands(shapes.InternalDeadVirus[103])
            .setTransform(2);
        var instance3 = new Graphics()
            .drawCommands(shapes.InternalDeadVirus[102])
            .setTransform(1.4);
        var instance2 = new Graphics()
            .drawCommands(shapes.InternalDeadVirus[101])
            .setTransform(2);
        var instance1 = new Graphics()
            .drawCommands(shapes.InternalDeadVirus[100])
            .setTransform(2);
        this.addChild(instance8, instance7, instance6, instance5, instance4, instance3, instance2, instance1);
    });

    lib.white_squre = Container.extend(function () {
        Container.call(this);
        var instance1 = new Graphics()
            .drawCommands(shapes.InternalDeadVirus[107]);
        this.addChild(instance1);
    });

    lib.macro_virus_d = MovieClip.extend(function () {
        MovieClip.call(this, {
            duration: 175,
            labels: {
                intro: 9,
                intro_stop: 174
            }
        });
        var instance10 = new Graphics()
            .drawCommands(shapes.InternalDeadVirus[105]);
        var instance14 = new Graphics()
            .drawCommands(shapes.InternalDeadVirus[106]);
        var instance9 = new Graphics()
            .drawCommands(shapes.InternalDeadVirus[104]);
        var instance8 = new lib.LeftEye_virus();
        var instance7 = new lib.RightEye_virus();
        var instance6 = new lib.mouth_virus_normal();
        var instance12 = new Graphics()
            .drawCommands(shapes.InternalDeadVirus[71]);
        var instance11 = new Graphics()
            .drawCommands(shapes.InternalDeadVirus[70]);
        var instance13 = new Graphics()
            .drawCommands(shapes.InternalDeadVirus[72]);
        var instance20 = new Graphics()
            .drawCommands(shapes.InternalDeadVirus[152]);
        var instance19 = new Graphics()
            .drawCommands(shapes.InternalDeadVirus[108]);
        var instance22 = new Graphics()
            .drawCommands(shapes.InternalDeadVirus[153]);
        var instance21 = new Graphics()
            .drawCommands(shapes.InternalDeadVirus[109]);
        var instance24 = new Graphics()
            .drawCommands(shapes.InternalDeadVirus[154]);
        var instance23 = new Graphics()
            .drawCommands(shapes.InternalDeadVirus[110]);
        var instance26 = new Graphics()
            .drawCommands(shapes.InternalDeadVirus[155]);
        var instance25 = new Graphics()
            .drawCommands(shapes.InternalDeadVirus[111]);
        var instance28 = new Graphics()
            .drawCommands(shapes.InternalDeadVirus[156]);
        var instance27 = new Graphics()
            .drawCommands(shapes.InternalDeadVirus[112]);
        var instance30 = new Graphics()
            .drawCommands(shapes.InternalDeadVirus[157]);
        var instance29 = new Graphics()
            .drawCommands(shapes.InternalDeadVirus[113]);
        var instance32 = new Graphics()
            .drawCommands(shapes.InternalDeadVirus[158]);
        var instance31 = new Graphics()
            .drawCommands(shapes.InternalDeadVirus[114]);
        var instance34 = new Graphics()
            .drawCommands(shapes.InternalDeadVirus[159]);
        var instance33 = new Graphics()
            .drawCommands(shapes.InternalDeadVirus[115]);
        var instance36 = new Graphics()
            .drawCommands(shapes.InternalDeadVirus[160]);
        var instance35 = new Graphics()
            .drawCommands(shapes.InternalDeadVirus[116]);
        var instance38 = new Graphics()
            .drawCommands(shapes.InternalDeadVirus[161]);
        var instance37 = new Graphics()
            .drawCommands(shapes.InternalDeadVirus[117]);
        var instance40 = new Graphics()
            .drawCommands(shapes.InternalDeadVirus[162]);
        var instance39 = new Graphics()
            .drawCommands(shapes.InternalDeadVirus[118]);
        var instance42 = new Graphics()
            .drawCommands(shapes.InternalDeadVirus[163]);
        var instance41 = new Graphics()
            .drawCommands(shapes.InternalDeadVirus[119]);
        var instance44 = new Graphics()
            .drawCommands(shapes.InternalDeadVirus[164]);
        var instance43 = new Graphics()
            .drawCommands(shapes.InternalDeadVirus[120]);
        var instance46 = new Graphics()
            .drawCommands(shapes.InternalDeadVirus[165]);
        var instance45 = new Graphics()
            .drawCommands(shapes.InternalDeadVirus[121]);
        var instance48 = new Graphics()
            .drawCommands(shapes.InternalDeadVirus[166]);
        var instance47 = new Graphics()
            .drawCommands(shapes.InternalDeadVirus[122]);
        var instance50 = new Graphics()
            .drawCommands(shapes.InternalDeadVirus[167]);
        var instance49 = new Graphics()
            .drawCommands(shapes.InternalDeadVirus[123]);
        var instance52 = new Graphics()
            .drawCommands(shapes.InternalDeadVirus[168]);
        var instance51 = new Graphics()
            .drawCommands(shapes.InternalDeadVirus[124]);
        var instance54 = new Graphics()
            .drawCommands(shapes.InternalDeadVirus[169]);
        var instance53 = new Graphics()
            .drawCommands(shapes.InternalDeadVirus[125]);
        var instance56 = new Graphics()
            .drawCommands(shapes.InternalDeadVirus[170]);
        var instance55 = new Graphics()
            .drawCommands(shapes.InternalDeadVirus[126]);
        var instance58 = new Graphics()
            .drawCommands(shapes.InternalDeadVirus[171]);
        var instance57 = new Graphics()
            .drawCommands(shapes.InternalDeadVirus[127]);
        var instance60 = new Graphics()
            .drawCommands(shapes.InternalDeadVirus[172]);
        var instance59 = new Graphics()
            .drawCommands(shapes.InternalDeadVirus[128]);
        var instance62 = new Graphics()
            .drawCommands(shapes.InternalDeadVirus[173]);
        var instance61 = new Graphics()
            .drawCommands(shapes.InternalDeadVirus[129]);
        var instance64 = new Graphics()
            .drawCommands(shapes.InternalDeadVirus[174]);
        var instance63 = new Graphics()
            .drawCommands(shapes.InternalDeadVirus[130]);
        var instance66 = new Graphics()
            .drawCommands(shapes.InternalDeadVirus[175]);
        var instance65 = new Graphics()
            .drawCommands(shapes.InternalDeadVirus[131]);
        var instance68 = new Graphics()
            .drawCommands(shapes.InternalDeadVirus[176]);
        var instance67 = new Graphics()
            .drawCommands(shapes.InternalDeadVirus[132]);
        var instance70 = new Graphics()
            .drawCommands(shapes.InternalDeadVirus[177]);
        var instance69 = new Graphics()
            .drawCommands(shapes.InternalDeadVirus[133]);
        var instance72 = new Graphics()
            .drawCommands(shapes.InternalDeadVirus[178]);
        var instance71 = new Graphics()
            .drawCommands(shapes.InternalDeadVirus[134]);
        var instance74 = new Graphics()
            .drawCommands(shapes.InternalDeadVirus[179]);
        var instance73 = new Graphics()
            .drawCommands(shapes.InternalDeadVirus[135]);
        var instance76 = new Graphics()
            .drawCommands(shapes.InternalDeadVirus[180]);
        var instance75 = new Graphics()
            .drawCommands(shapes.InternalDeadVirus[136]);
        var instance78 = new Graphics()
            .drawCommands(shapes.InternalDeadVirus[181]);
        var instance77 = new Graphics()
            .drawCommands(shapes.InternalDeadVirus[137]);
        var instance80 = new Graphics()
            .drawCommands(shapes.InternalDeadVirus[182]);
        var instance79 = new Graphics()
            .drawCommands(shapes.InternalDeadVirus[138]);
        var instance82 = new Graphics()
            .drawCommands(shapes.InternalDeadVirus[183]);
        var instance81 = new Graphics()
            .drawCommands(shapes.InternalDeadVirus[139]);
        var instance84 = new Graphics()
            .drawCommands(shapes.InternalDeadVirus[184]);
        var instance83 = new Graphics()
            .drawCommands(shapes.InternalDeadVirus[140]);
        var instance86 = new Graphics()
            .drawCommands(shapes.InternalDeadVirus[185]);
        var instance85 = new Graphics()
            .drawCommands(shapes.InternalDeadVirus[141]);
        var instance88 = new Graphics()
            .drawCommands(shapes.InternalDeadVirus[186]);
        var instance87 = new Graphics()
            .drawCommands(shapes.InternalDeadVirus[142]);
        var instance90 = new Graphics()
            .drawCommands(shapes.InternalDeadVirus[187]);
        var instance89 = new Graphics()
            .drawCommands(shapes.InternalDeadVirus[143]);
        var instance92 = new Graphics()
            .drawCommands(shapes.InternalDeadVirus[188]);
        var instance91 = new Graphics()
            .drawCommands(shapes.InternalDeadVirus[144]);
        var instance94 = new Graphics()
            .drawCommands(shapes.InternalDeadVirus[189]);
        var instance93 = new Graphics()
            .drawCommands(shapes.InternalDeadVirus[145]);
        var instance96 = new Graphics()
            .drawCommands(shapes.InternalDeadVirus[190]);
        var instance95 = new Graphics()
            .drawCommands(shapes.InternalDeadVirus[146]);
        var instance98 = new Graphics()
            .drawCommands(shapes.InternalDeadVirus[191]);
        var instance97 = new Graphics()
            .drawCommands(shapes.InternalDeadVirus[147]);
        var instance103 = new Graphics()
            .drawCommands(shapes.InternalDeadVirus[192]);
        var instance102 = new Graphics()
            .drawCommands(shapes.InternalDeadVirus[148]);
        var instance105 = new Graphics()
            .drawCommands(shapes.InternalDeadVirus[149]);
        var instance101 = new lib.white_squre();
        var instance111 = new Graphics()
            .drawCommands(shapes.InternalDeadVirus[150]);
        var instance157 = new Graphics()
            .drawCommands(shapes.InternalDeadVirus[151]);
        var instance172 = new Graphics()
            .drawCommands(shapes.InternalDeadVirus[150])
            .setTransform(-4, -2);
        var instance18 = new lib.LeftEye_virus();
        var instance17 = new lib.RightEye_virus();
        var instance15 = new lib.mouth_virus_normal();
        var instance100 = new lib.mouth_virus_normal();
        this[instance100.name = "mouth"] = instance100;
        var instance123 = new Graphics()
            .drawCommands(shapes.InternalDeadVirus[73]);
        var instance125 = new Graphics()
            .drawCommands(shapes.InternalDeadVirus[74]);
        var instance127 = new Graphics()
            .drawCommands(shapes.InternalDeadVirus[75]);
        var instance129 = new Graphics()
            .drawCommands(shapes.InternalDeadVirus[76]);
        var instance131 = new Graphics()
            .drawCommands(shapes.InternalDeadVirus[77]);
        var instance133 = new Graphics()
            .drawCommands(shapes.InternalDeadVirus[78]);
        var instance135 = new Graphics()
            .drawCommands(shapes.InternalDeadVirus[79]);
        var instance137 = new Graphics()
            .drawCommands(shapes.InternalDeadVirus[80]);
        var instance139 = new Graphics()
            .drawCommands(shapes.InternalDeadVirus[81]);
        var instance141 = new Graphics()
            .drawCommands(shapes.InternalDeadVirus[82]);
        var instance143 = new Graphics()
            .drawCommands(shapes.InternalDeadVirus[83]);
        var instance145 = new Graphics()
            .drawCommands(shapes.InternalDeadVirus[84]);
        var instance147 = new Graphics()
            .drawCommands(shapes.InternalDeadVirus[85]);
        var instance150 = new Graphics()
            .drawCommands(shapes.InternalDeadVirus[86]);
        var instance151 = new Graphics()
            .drawCommands(shapes.InternalDeadVirus[87]);
        var instance154 = new lib.eye_orange();
        var instance155 = new lib.RightEye_virus();
        var instance152 = new Graphics()
            .drawCommands(shapes.InternalDeadVirus[88]);
        var instance156 = new Graphics()
            .drawCommands(shapes.InternalDeadVirus[87]);
        var instance158 = new Graphics()
            .drawCommands(shapes.InternalDeadVirus[86]);
        var instance159 = new Graphics()
            .drawCommands(shapes.InternalDeadVirus[85]);
        var instance160 = new Graphics()
            .drawCommands(shapes.InternalDeadVirus[84]);
        var instance161 = new Graphics()
            .drawCommands(shapes.InternalDeadVirus[83]);
        var instance162 = new Graphics()
            .drawCommands(shapes.InternalDeadVirus[82]);
        var instance163 = new Graphics()
            .drawCommands(shapes.InternalDeadVirus[81]);
        var instance164 = new Graphics()
            .drawCommands(shapes.InternalDeadVirus[80]);
        var instance165 = new Graphics()
            .drawCommands(shapes.InternalDeadVirus[79]);
        var instance166 = new Graphics()
            .drawCommands(shapes.InternalDeadVirus[78]);
        var instance167 = new Graphics()
            .drawCommands(shapes.InternalDeadVirus[77]);
        var instance168 = new Graphics()
            .drawCommands(shapes.InternalDeadVirus[76]);
        var instance169 = new Graphics()
            .drawCommands(shapes.InternalDeadVirus[75]);
        var instance170 = new Graphics()
            .drawCommands(shapes.InternalDeadVirus[74]);
        var instance171 = new Graphics()
            .drawCommands(shapes.InternalDeadVirus[73])
            .setTransform(-9.75, -20.2);
        var instance5 = new lib.hitmesquare()
            .setTransform(61.9, 17, 2.359, 1.461)
            .setAlpha(0);
        this[instance5.name = "hittestie4"] = instance5;
        var instance4 = new lib.hitmesquare()
            .setTransform(7.95, -64.15, 1.734, 0.793)
            .setAlpha(0);
        this[instance4.name = "hittestie1"] = instance4;
        var instance3 = new lib.hitmesquare()
            .setTransform(78.95, -62.15, 1.733, 0.793)
            .setAlpha(0);
        this[instance3.name = "hittestie2"] = instance3;
        var instance2 = new lib.hitmesquare()
            .setTransform(-16.85, -30.75, 0.932, 1.426)
            .setAlpha(0);
        this[instance2.name = "hittestie5"] = instance2;
        var instance1 = new lib.hitmesquare();
        this[instance1.name = "hittestie3"] = instance1;
        var instance99 = new Graphics()
            .drawCommands(shapes.InternalDeadVirus[61]);
        var instance104 = new Graphics()
            .drawCommands(shapes.InternalDeadVirus[62]);
        var instance106 = new Graphics()
            .drawCommands(shapes.InternalDeadVirus[63]);
        var instance107 = new Graphics()
            .drawCommands(shapes.InternalDeadVirus[64]);
        var instance108 = new Graphics()
            .drawCommands(shapes.InternalDeadVirus[65]);
        var instance109 = new Graphics()
            .drawCommands(shapes.InternalDeadVirus[66]);
        var instance110 = new lib.inner_circle();
        var instance16 = new lib.virus_dead_sm();
        var instance116 = new lib.fuzzies();
        var instance115 = new lib.petals_dead();
        var instance114 = new lib.body_dead();
        var instance113 = new Graphics()
            .drawCommands(shapes.InternalDeadVirus[20]);
        var instance117 = new Graphics()
            .drawCommands(shapes.InternalDeadVirus[21]);
        var instance118 = new Graphics()
            .drawCommands(shapes.InternalDeadVirus[22]);
        var instance119 = new Graphics()
            .drawCommands(shapes.InternalDeadVirus[23]);
        var instance120 = new Graphics()
            .drawCommands(shapes.InternalDeadVirus[24]);
        var instance121 = new Graphics()
            .drawCommands(shapes.InternalDeadVirus[25]);
        var instance122 = new Graphics()
            .drawCommands(shapes.InternalDeadVirus[26]);
        var instance124 = new Graphics()
            .drawCommands(shapes.InternalDeadVirus[27]);
        var instance126 = new Graphics()
            .drawCommands(shapes.InternalDeadVirus[28]);
        var instance128 = new Graphics()
            .drawCommands(shapes.InternalDeadVirus[29]);
        var instance130 = new Graphics()
            .drawCommands(shapes.InternalDeadVirus[30]);
        var instance132 = new Graphics()
            .drawCommands(shapes.InternalDeadVirus[31]);
        var instance134 = new Graphics()
            .drawCommands(shapes.InternalDeadVirus[32]);
        var instance136 = new Graphics()
            .drawCommands(shapes.InternalDeadVirus[33]);
        var instance138 = new Graphics()
            .drawCommands(shapes.InternalDeadVirus[34]);
        var instance140 = new Graphics()
            .drawCommands(shapes.InternalDeadVirus[35]);
        var instance142 = new Graphics()
            .drawCommands(shapes.InternalDeadVirus[36]);
        var instance144 = new Graphics()
            .drawCommands(shapes.InternalDeadVirus[37]);
        var instance146 = new Graphics()
            .drawCommands(shapes.InternalDeadVirus[38]);
        var instance149 = new lib.body();
        var instance148 = new Graphics()
            .drawCommands(shapes.InternalDeadVirus[39]);
        var instance112 = new lib.eyes_dead();
        var instance153 = new lib.pedal_grow_anti();
        this.addTimedChild(instance10, 0, 2)
            .addTimedChild(instance14, 2, 7)
            .addTimedChild(instance9, 0, 9, {
                "0": {
                    x: -236.95,
                    y: -172.75,
                    sx: 0.625,
                    sy: 0.625
                }
            })
            .addTimedChild(instance8, 0, 9, {
                "0": {
                    x: -30.45,
                    y: -38.4
                }
            })
            .addTimedChild(instance7, 0, 9, {
                "0": {
                    x: 20.65,
                    y: -38.05
                }
            })
            .addTimedChild(instance6, 0, 1, {
                "0": {
                    x: -25.2,
                    y: 18.05
                }
            })
            .addTimedChild(instance12, 1, 1)
            .addTimedChild(instance11, 1, 1)
            .addTimedChild(instance13, 2, 6)
            .addTimedChild(instance20, 9, 1)
            .addTimedChild(instance19, 9, 1)
            .addTimedChild(instance22, 10, 1)
            .addTimedChild(instance21, 10, 1)
            .addTimedChild(instance24, 11, 1)
            .addTimedChild(instance23, 11, 1)
            .addTimedChild(instance26, 12, 1)
            .addTimedChild(instance25, 12, 1)
            .addTimedChild(instance28, 13, 1)
            .addTimedChild(instance27, 13, 1)
            .addTimedChild(instance30, 14, 1)
            .addTimedChild(instance29, 14, 1)
            .addTimedChild(instance32, 15, 1)
            .addTimedChild(instance31, 15, 1)
            .addTimedChild(instance34, 16, 1)
            .addTimedChild(instance33, 16, 1)
            .addTimedChild(instance36, 17, 1)
            .addTimedChild(instance35, 17, 1)
            .addTimedChild(instance38, 18, 1)
            .addTimedChild(instance37, 18, 1)
            .addTimedChild(instance40, 19, 1)
            .addTimedChild(instance39, 19, 1)
            .addTimedChild(instance42, 20, 1)
            .addTimedChild(instance41, 20, 1)
            .addTimedChild(instance44, 21, 1)
            .addTimedChild(instance43, 21, 1)
            .addTimedChild(instance46, 22, 1)
            .addTimedChild(instance45, 22, 1)
            .addTimedChild(instance48, 23, 1)
            .addTimedChild(instance47, 23, 1)
            .addTimedChild(instance50, 24, 1)
            .addTimedChild(instance49, 24, 1)
            .addTimedChild(instance52, 25, 1)
            .addTimedChild(instance51, 25, 1)
            .addTimedChild(instance54, 26, 1)
            .addTimedChild(instance53, 26, 1)
            .addTimedChild(instance56, 27, 1)
            .addTimedChild(instance55, 27, 1)
            .addTimedChild(instance58, 28, 1)
            .addTimedChild(instance57, 28, 1)
            .addTimedChild(instance60, 29, 1)
            .addTimedChild(instance59, 29, 1)
            .addTimedChild(instance62, 30, 1)
            .addTimedChild(instance61, 30, 1)
            .addTimedChild(instance64, 31, 1)
            .addTimedChild(instance63, 31, 1)
            .addTimedChild(instance66, 32, 1)
            .addTimedChild(instance65, 32, 1)
            .addTimedChild(instance68, 33, 1)
            .addTimedChild(instance67, 33, 1)
            .addTimedChild(instance70, 34, 1)
            .addTimedChild(instance69, 34, 1)
            .addTimedChild(instance72, 35, 1)
            .addTimedChild(instance71, 35, 1)
            .addTimedChild(instance74, 36, 1)
            .addTimedChild(instance73, 36, 1)
            .addTimedChild(instance76, 37, 1)
            .addTimedChild(instance75, 37, 1)
            .addTimedChild(instance78, 38, 1)
            .addTimedChild(instance77, 38, 1)
            .addTimedChild(instance80, 39, 1)
            .addTimedChild(instance79, 39, 1)
            .addTimedChild(instance82, 40, 1)
            .addTimedChild(instance81, 40, 1)
            .addTimedChild(instance84, 41, 1)
            .addTimedChild(instance83, 41, 1)
            .addTimedChild(instance86, 42, 1)
            .addTimedChild(instance85, 42, 1)
            .addTimedChild(instance88, 43, 1)
            .addTimedChild(instance87, 43, 1)
            .addTimedChild(instance90, 44, 1)
            .addTimedChild(instance89, 44, 1)
            .addTimedChild(instance92, 45, 1)
            .addTimedChild(instance91, 45, 1)
            .addTimedChild(instance94, 46, 1)
            .addTimedChild(instance93, 46, 1)
            .addTimedChild(instance96, 47, 1)
            .addTimedChild(instance95, 47, 1)
            .addTimedChild(instance98, 48, 1)
            .addTimedChild(instance97, 48, 1)
            .addTimedChild(instance103, 49, 6)
            .addTimedChild(instance102, 49, 1)
            .addTimedChild(instance105, 50, 5)
            .addTimedChild(instance101, 49, 6, {
                "49": {
                    x: 54.4,
                    y: -19.05,
                    a: 0
                },
                "50": {
                    a: 0.2
                },
                "51": {
                    a: 0.4
                },
                "52": {
                    a: 0.6
                },
                "53": {
                    a: 0.8
                },
                "54": {
                    a: 1
                }
            })
            .addTimedChild(instance111, 55, 105)
            .addTimedChild(instance157, 160, 14, {
                "160": {
                    x: 0,
                    y: 0
                },
                "161": {
                    x: -0.3,
                    y: -0.1
                },
                "162": {
                    x: -0.55,
                    y: -0.25
                },
                "163": {
                    x: -0.8,
                    y: -0.4
                },
                "164": {
                    x: -1.1,
                    y: -0.5
                },
                "165": {
                    x: -1.35,
                    y: -0.65
                },
                "166": {
                    x: -1.6,
                    y: -0.8
                },
                "167": {
                    x: -1.9,
                    y: -0.9
                },
                "168": {
                    x: -2.15,
                    y: -1.05
                },
                "169": {
                    x: -2.4,
                    y: -1.2
                },
                "170": {
                    x: -2.7,
                    y: -1.3
                },
                "171": {
                    x: -2.95,
                    y: -1.45
                },
                "172": {
                    x: -3.2,
                    y: -1.6
                },
                "173": {
                    x: -3.5,
                    y: -1.7
                }
            })
            .addTimedChild(instance172, 174, 1)
            .addTimedChild(instance18, 9, 166, {
                "9": {
                    x: -30.45,
                    y: -38.4
                },
                "10": {
                    x: -31.05
                },
                "11": {
                    x: -31.65
                },
                "12": {
                    x: -32.25
                },
                "13": {
                    x: -32.85
                },
                "14": {
                    x: -33.45
                },
                "15": {
                    x: -34.05
                },
                "16": {
                    x: -34.65
                },
                "17": {
                    x: -35.25
                },
                "18": {
                    x: -35.85
                },
                "19": {
                    x: -36.45
                },
                "20": {
                    x: -37.65,
                    y: -40.3
                },
                "21": {
                    x: -38.85,
                    y: -42.2
                },
                "22": {
                    x: -40.05,
                    y: -44.1
                },
                "23": {
                    x: -41.25,
                    y: -46
                },
                "24": {
                    x: -42.45,
                    y: -47.9
                },
                "25": {
                    x: -43.65,
                    y: -49.8
                },
                "26": {
                    x: -44.85,
                    y: -51.7
                },
                "27": {
                    x: -46.05,
                    y: -53.6
                },
                "28": {
                    x: -47.25,
                    y: -55.5
                },
                "29": {
                    x: -48.45,
                    y: -57.4
                },
                "40": {
                    x: -48.25,
                    y: -57.6
                },
                "41": {
                    x: -48.05,
                    y: -57.8
                },
                "42": {
                    x: -47.85,
                    y: -58
                },
                "43": {
                    x: -47.65,
                    y: -58.2
                },
                "44": {
                    x: -47.45,
                    y: -58.4
                },
                "45": {
                    x: -47.25,
                    y: -58.6
                },
                "46": {
                    x: -47.05,
                    y: -58.8
                },
                "47": {
                    x: -46.85,
                    y: -59
                },
                "48": {
                    x: -46.65,
                    y: -59.2
                },
                "49": {
                    x: -46.45,
                    y: -59.4
                },
                "160": {
                    x: -45.45,
                    y: -58
                },
                "161": {
                    x: -44.45,
                    y: -56.6
                },
                "162": {
                    x: -43.45,
                    y: -55.2
                },
                "163": {
                    x: -42.45,
                    y: -53.8
                },
                "164": {
                    x: -41.45,
                    y: -52.4
                },
                "165": {
                    x: -40.45,
                    y: -51
                },
                "166": {
                    x: -39.45,
                    y: -49.6
                },
                "167": {
                    x: -38.45,
                    y: -48.2
                },
                "168": {
                    x: -37.45,
                    y: -46.8
                },
                "169": {
                    x: -36.45,
                    y: -45.4
                },
                "170": {
                    x: -35.45,
                    y: -44
                },
                "171": {
                    x: -34.45,
                    y: -42.6
                },
                "172": {
                    x: -33.45,
                    y: -41.2
                },
                "173": {
                    x: -32.45,
                    y: -39.8
                },
                "174": {
                    x: -31.45,
                    y: -38.4
                }
            })
            .addTimedChild(instance17, 9, 96, {
                "9": {
                    x: 20.65,
                    y: -38.05,
                    sx: 1,
                    sy: 1,
                    kx: 0,
                    ky: 0,
                    r: 0
                },
                "10": {
                    x: 19.65
                },
                "11": {
                    x: 18.65
                },
                "12": {
                    x: 17.65
                },
                "13": {
                    x: 16.65
                },
                "14": {
                    x: 15.65
                },
                "15": {
                    x: 14.65
                },
                "16": {
                    x: 13.65
                },
                "17": {
                    x: 12.65
                },
                "18": {
                    x: 11.65
                },
                "19": {
                    x: 10.65
                },
                "20": {
                    x: 6.45,
                    y: -35.75
                },
                "21": {
                    x: 2.25,
                    y: -33.45
                },
                "22": {
                    x: -1.95,
                    y: -31.15
                },
                "23": {
                    x: -6.15,
                    y: -28.85
                },
                "24": {
                    x: -10.35,
                    y: -26.55
                },
                "25": {
                    x: -14.55,
                    y: -24.25
                },
                "26": {
                    x: -18.75,
                    y: -21.95
                },
                "27": {
                    x: -22.95,
                    y: -19.65
                },
                "28": {
                    x: -27.15,
                    y: -17.35
                },
                "29": {
                    x: -31.35,
                    y: -15.05
                },
                "30": {
                    x: -32.35,
                    y: -14.45
                },
                "31": {
                    x: -33.35,
                    y: -13.85
                },
                "32": {
                    x: -34.35,
                    y: -13.25
                },
                "33": {
                    x: -35.35,
                    y: -12.65
                },
                "34": {
                    x: -36.35,
                    y: -12.05
                },
                "35": {
                    x: -37.35,
                    y: -11.45
                },
                "36": {
                    x: -38.35,
                    y: -10.85
                },
                "37": {
                    x: -39.35,
                    y: -10.25
                },
                "38": {
                    x: -40.35,
                    y: -9.65
                },
                "39": {
                    x: -41.35,
                    y: -9.05
                },
                "40": {
                    x: -41.75,
                    y: -8.95
                },
                "41": {
                    x: -42.15,
                    y: -8.85
                },
                "42": {
                    x: -42.55,
                    y: -8.75
                },
                "43": {
                    x: -42.95,
                    y: -8.65
                },
                "44": {
                    x: -43.35,
                    y: -8.55
                },
                "45": {
                    x: -43.75,
                    y: -8.45
                },
                "46": {
                    x: -44.15,
                    y: -8.35
                },
                "47": {
                    x: -44.55,
                    y: -8.25
                },
                "48": {
                    x: -44.95,
                    y: -8.15
                },
                "49": {
                    x: -45.35,
                    y: -8.05
                },
                "81": {
                    x: -44.329,
                    y: -12.335,
                    r: 0.115
                },
                "82": {
                    x: -41.029,
                    y: -15.996,
                    r: 0.229
                },
                "83": {
                    x: -37.472,
                    y: -19.319,
                    r: 0.344
                },
                "84": {
                    x: -33.541,
                    y: -22.192,
                    r: 0.459
                },
                "85": {
                    x: -29.374,
                    y: -24.604,
                    r: 0.573
                },
                "86": {
                    x: -24.863,
                    y: -26.504,
                    r: 0.688
                },
                "87": {
                    x: -20.159,
                    y: -27.896,
                    r: 0.803
                },
                "88": {
                    x: -15.27,
                    y: -28.684,
                    r: 0.917
                },
                "89": {
                    x: -10.302,
                    y: -28.836,
                    r: 1.032
                },
                "90": {
                    x: -5.37,
                    y: -28.423,
                    r: 1.147
                },
                "91": {
                    x: -0.44,
                    y: -27.373,
                    sx: 0.999,
                    sy: 0.999,
                    r: 1.261
                },
                "92": {
                    x: 4.321,
                    y: -25.823,
                    r: 1.376
                },
                "93": {
                    x: 8.793,
                    y: -23.769,
                    r: 1.491
                },
                "94": {
                    x: 13.103,
                    y: -21.314,
                    kx: 4.678,
                    ky: 1.605,
                    r: 0
                },
                "95": {
                    x: 17.04,
                    y: -18.467,
                    kx: 4.563,
                    ky: 1.72
                },
                "96": {
                    x: 20.684,
                    y: -15.348,
                    kx: 4.449,
                    ky: 1.835
                },
                "97": {
                    x: 24.019,
                    y: -11.932,
                    kx: 4.334,
                    ky: 1.949
                },
                "98": {
                    x: 26.936,
                    y: -8.252,
                    kx: 4.219,
                    ky: 2.064
                },
                "99": {
                    x: 29.529,
                    y: -4.398,
                    kx: 4.105,
                    ky: 2.179
                },
                "100": {
                    x: 31.643,
                    y: -0.268,
                    kx: 3.99,
                    ky: 2.293
                },
                "101": {
                    x: 33.334,
                    y: 3.841,
                    kx: 3.875,
                    ky: 2.408
                },
                "102": {
                    x: 34.513,
                    y: 8.119,
                    kx: 3.76,
                    ky: 2.523
                },
                "103": {
                    x: 35.196,
                    y: 12.603,
                    kx: 3.646,
                    ky: 2.637
                },
                "104": {
                    x: 36.45,
                    y: 16.8,
                    kx: 3.531,
                    ky: 2.752
                }
            })
            .addTimedChild(instance15, 8, 41, {
                "8": {
                    x: -25.2,
                    y: 18.05
                },
                "20": {
                    x: -24.8,
                    y: 19.25
                },
                "21": {
                    x: -24.4,
                    y: 20.45
                },
                "22": {
                    x: -24,
                    y: 21.65
                },
                "23": {
                    x: -23.6,
                    y: 22.85
                },
                "24": {
                    x: -23.2,
                    y: 24.05
                },
                "25": {
                    x: -22.8,
                    y: 25.25
                },
                "26": {
                    x: -22.4,
                    y: 26.45
                },
                "27": {
                    x: -22,
                    y: 27.65
                },
                "28": {
                    x: -21.6,
                    y: 28.85
                },
                "29": {
                    x: -21.2,
                    y: 30.05
                },
                "30": {
                    x: -20.6,
                    y: 30.95
                },
                "31": {
                    x: -20,
                    y: 31.85
                },
                "32": {
                    x: -19.4,
                    y: 32.75
                },
                "33": {
                    x: -18.8,
                    y: 33.65
                },
                "34": {
                    x: -18.2,
                    y: 34.55
                },
                "35": {
                    x: -17.6,
                    y: 35.45
                },
                "36": {
                    x: -17,
                    y: 36.35
                },
                "37": {
                    x: -16.4,
                    y: 37.25
                },
                "38": {
                    x: -15.8,
                    y: 38.15
                },
                "39": {
                    x: -15.2,
                    y: 39.05
                },
                "40": {
                    x: -15.3
                },
                "41": {
                    x: -15.4
                },
                "42": {
                    x: -15.5
                },
                "43": {
                    x: -15.6
                },
                "44": {
                    x: -15.7
                },
                "45": {
                    x: -15.8
                },
                "46": {
                    x: -15.9
                },
                "47": {
                    x: -16
                },
                "48": {
                    x: -16.1
                }
            })
            .addTimedChild(instance100, 49, 22, {
                "49": {
                    x: -16.2,
                    y: 39.05
                }
            })
            .addTimedChild(instance123, 71, 1)
            .addTimedChild(instance125, 72, 1)
            .addTimedChild(instance127, 73, 1)
            .addTimedChild(instance129, 74, 1)
            .addTimedChild(instance131, 75, 1)
            .addTimedChild(instance133, 76, 1)
            .addTimedChild(instance135, 77, 1)
            .addTimedChild(instance137, 78, 1)
            .addTimedChild(instance139, 79, 1)
            .addTimedChild(instance141, 80, 1)
            .addTimedChild(instance143, 81, 1)
            .addTimedChild(instance145, 82, 1)
            .addTimedChild(instance147, 83, 1)
            .addTimedChild(instance150, 84, 1)
            .addTimedChild(instance151, 85, 1)
            .addTimedChild(instance154, 105, 16, {
                "105": {
                    x: 19.4,
                    y: 5.4,
                    sx: 0.999,
                    sy: 0.999,
                    kx: 3.473,
                    ky: 2.81
                }
            })
            .addTimedChild(instance155, 121, 54, {
                "121": {
                    x: 38.1,
                    y: 12.85,
                    sx: 0.998,
                    sy: 0.998,
                    kx: 3.768,
                    ky: 2.516,
                    r: 0
                },
                "122": {
                    x: 37.567,
                    y: 8.748,
                    kx: 3.86,
                    ky: 2.424
                },
                "123": {
                    x: 36.648,
                    y: 4.78,
                    kx: 3.95,
                    ky: 2.333
                },
                "124": {
                    x: 35.199,
                    y: 1.029,
                    kx: 4.039,
                    ky: 2.244
                },
                "125": {
                    x: 33.536,
                    y: -2.373,
                    kx: 4.126,
                    ky: 2.157
                },
                "126": {
                    x: 31.675,
                    y: -5.605,
                    kx: 4.211,
                    ky: 2.072
                },
                "127": {
                    x: 29.537,
                    y: -8.637,
                    kx: 4.295,
                    ky: 1.988
                },
                "128": {
                    x: 27.287,
                    y: -11.553,
                    kx: 4.378,
                    ky: 1.905
                },
                "129": {
                    x: 24.898,
                    y: -14.182,
                    kx: 4.459,
                    ky: 1.824
                },
                "130": {
                    x: 22.291,
                    y: -16.61,
                    kx: 4.538,
                    ky: 1.745
                },
                "131": {
                    x: 19.689,
                    y: -18.873,
                    kx: 4.616,
                    ky: 1.668
                },
                "132": {
                    x: 16.864,
                    y: -20.91,
                    kx: 4.692,
                    ky: 1.592
                },
                "133": {
                    x: 14.035,
                    y: -22.77,
                    kx: 0,
                    ky: 0,
                    r: 1.517
                },
                "134": {
                    x: 11.126,
                    y: -24.393,
                    r: 1.444
                },
                "135": {
                    x: 8.205,
                    y: -25.828,
                    r: 1.373
                },
                "136": {
                    x: 5.247,
                    y: -27.072,
                    r: 1.303
                },
                "137": {
                    x: 2.264,
                    y: -28.079,
                    r: 1.235
                },
                "138": {
                    x: -0.67,
                    y: -28.901,
                    r: 1.168
                },
                "139": {
                    x: -3.641,
                    y: -29.49,
                    r: 1.103
                },
                "140": {
                    x: -6.532,
                    y: -29.903,
                    r: 1.04
                },
                "141": {
                    x: -9.379,
                    y: -30.148,
                    r: 0.978
                },
                "142": {
                    x: -12.119,
                    y: -30.129,
                    r: 0.918
                },
                "143": {
                    x: -14.792,
                    y: -30.006,
                    r: 0.859
                },
                "144": {
                    x: -17.433,
                    y: -29.687,
                    r: 0.802
                },
                "145": {
                    x: -19.935,
                    y: -29.182,
                    r: 0.747
                },
                "146": {
                    x: -22.339,
                    y: -28.599,
                    r: 0.693
                },
                "147": {
                    x: -24.637,
                    y: -27.899,
                    r: 0.641
                },
                "148": {
                    x: -26.725,
                    y: -27.041,
                    r: 0.59
                },
                "149": {
                    x: -28.796,
                    y: -26.135,
                    r: 0.541
                },
                "150": {
                    x: -30.85,
                    y: -25.25,
                    r: 0.494
                },
                "159": {
                    x: 38.1,
                    y: 12.85,
                    kx: 3.768,
                    ky: 2.516,
                    r: 0
                },
                "160": {
                    x: 40.357,
                    y: 7.689,
                    kx: 3.936,
                    ky: 2.347
                },
                "161": {
                    x: 41.896,
                    y: 2.252,
                    kx: 4.104,
                    ky: 2.179
                },
                "162": {
                    x: 42.848,
                    y: -3.07,
                    kx: 4.272,
                    ky: 2.011
                },
                "163": {
                    x: 43.085,
                    y: -8.339,
                    kx: 4.441,
                    ky: 1.843
                },
                "164": {
                    x: 42.706,
                    y: -13.47,
                    kx: 4.609,
                    ky: 1.674
                },
                "165": {
                    x: 41.741,
                    y: -18.239,
                    kx: 0,
                    ky: 0,
                    r: 1.506
                },
                "166": {
                    x: 40.247,
                    y: -22.641,
                    r: 1.338
                },
                "167": {
                    x: 38.357,
                    y: -26.638,
                    sx: 0.997,
                    sy: 0.997,
                    r: 1.17
                },
                "168": {
                    x: 36.026,
                    y: -30.019,
                    r: 1.002
                },
                "169": {
                    x: 33.424,
                    y: -32.795,
                    r: 0.833
                },
                "170": {
                    x: 30.583,
                    y: -35.014,
                    r: 0.665
                },
                "171": {
                    x: 27.742,
                    y: -36.549,
                    r: 0.497
                },
                "172": {
                    x: 24.991,
                    y: -37.411,
                    r: 0.329
                },
                "173": {
                    x: 22.366,
                    y: -37.687,
                    r: 0.16
                },
                "174": {
                    x: 20.05,
                    y: -37.25,
                    r: -0.008
                }
            })
            .addTimedChild(instance152, 86, 74)
            .addTimedChild(instance156, 160, 1, {
                "160": {
                    x: -0.65,
                    y: -1.35
                }
            })
            .addTimedChild(instance158, 161, 1, {
                "161": {
                    x: -1.3,
                    y: -2.7
                }
            })
            .addTimedChild(instance159, 162, 1, {
                "162": {
                    x: -1.95,
                    y: -4.05
                }
            })
            .addTimedChild(instance160, 163, 1, {
                "163": {
                    x: -2.6,
                    y: -5.4
                }
            })
            .addTimedChild(instance161, 164, 1, {
                "164": {
                    x: -3.25,
                    y: -6.65,
                    sy: 0.998
                }
            })
            .addTimedChild(instance162, 165, 1, {
                "165": {
                    x: -3.9,
                    y: -8.1
                }
            })
            .addTimedChild(instance163, 166, 1, {
                "166": {
                    x: -4.55,
                    y: -9.35,
                    sy: 0.998
                }
            })
            .addTimedChild(instance164, 167, 1, {
                "167": {
                    x: -5.2,
                    y: -10.85,
                    sy: 1.002
                }
            })
            .addTimedChild(instance165, 168, 1, {
                "168": {
                    x: -5.85,
                    y: -12.2,
                    sy: 1.002
                }
            })
            .addTimedChild(instance166, 169, 1, {
                "169": {
                    x: -6.5,
                    y: -13.5
                }
            })
            .addTimedChild(instance167, 170, 1, {
                "170": {
                    x: -7.15,
                    y: -14.8
                }
            })
            .addTimedChild(instance168, 171, 1, {
                "171": {
                    x: -7.8,
                    y: -16.15
                }
            })
            .addTimedChild(instance169, 172, 1, {
                "172": {
                    x: -8.45,
                    y: -17.5
                }
            })
            .addTimedChild(instance170, 173, 1, {
                "173": {
                    x: -9.1,
                    y: -18.8,
                    sy: 0.998
                }
            })
            .addTimedChild(instance171, 174, 1)
            .addTimedChild(instance5)
            .addTimedChild(instance4)
            .addTimedChild(instance3)
            .addTimedChild(instance2)
            .addTimedChild(instance1, 0, 175, {
                "0": {
                    x: 2.2,
                    y: 5.7,
                    sx: 4.676,
                    sy: 5.735,
                    a: 0
                }
            })
            .addTimedChild(instance99, 49, 1)
            .addTimedChild(instance104, 50, 1)
            .addTimedChild(instance106, 51, 1)
            .addTimedChild(instance107, 52, 1)
            .addTimedChild(instance108, 53, 1)
            .addTimedChild(instance109, 54, 1)
            .addTimedChild(instance110, 55, 30, {
                "55": {
                    x: -17.2,
                    y: -29.45,
                    c: [
                        1,
                        0,
                        1,
                        0,
                        1,
                        0
                    ]
                },
                "64": {
                    c: [
                        0,
                        0.87,
                        0,
                        1,
                        0,
                        0
                    ]
                },
                "65": {
                    c: [
                        0,
                        0.87,
                        0,
                        0.96,
                        0,
                        0
                    ]
                },
                "66": {
                    c: [
                        0,
                        0.87,
                        0,
                        0.93,
                        0,
                        0
                    ]
                },
                "67": {
                    c: [
                        0,
                        0.87,
                        0,
                        0.9,
                        0,
                        0
                    ]
                },
                "68": {
                    c: [
                        0,
                        0.86,
                        0,
                        0.86,
                        0,
                        0
                    ]
                },
                "69": {
                    c: [
                        0,
                        0.86,
                        0,
                        0.83,
                        0,
                        0
                    ]
                },
                "70": {
                    c: [
                        0,
                        0.86,
                        0,
                        0.8,
                        0,
                        0
                    ]
                },
                "71": {
                    c: [
                        0,
                        0.86,
                        0,
                        0.76,
                        0,
                        0
                    ]
                },
                "72": {
                    c: [
                        0,
                        0.85,
                        0,
                        0.73,
                        0,
                        0
                    ]
                },
                "73": {
                    c: [
                        0,
                        0.85,
                        0,
                        0.69,
                        0,
                        0
                    ]
                },
                "74": {
                    c: [
                        0,
                        0.85,
                        0,
                        0.66,
                        0,
                        0
                    ]
                },
                "75": {
                    c: [
                        0,
                        0.85,
                        0,
                        0.63,
                        0,
                        0
                    ]
                },
                "76": {
                    c: [
                        0,
                        0.85,
                        0,
                        0.59,
                        0,
                        0
                    ]
                },
                "77": {
                    c: [
                        0,
                        0.85,
                        0,
                        0.56,
                        0,
                        0
                    ]
                },
                "78": {
                    c: [
                        0,
                        0.85,
                        0,
                        0.53,
                        0,
                        0
                    ]
                },
                "79": {
                    c: [
                        0,
                        0.84,
                        0,
                        0.49,
                        0,
                        0
                    ]
                },
                "80": {
                    c: [
                        0,
                        0.84,
                        0,
                        0.46,
                        0,
                        0
                    ]
                },
                "81": {
                    c: [
                        0,
                        0.84,
                        0,
                        0.42,
                        0,
                        0
                    ]
                },
                "82": {
                    c: [
                        0,
                        0.84,
                        0,
                        0.39,
                        0,
                        0
                    ]
                },
                "83": {
                    c: [
                        0,
                        0.84,
                        0,
                        0.36,
                        0,
                        0
                    ]
                },
                "84": {
                    c: [
                        0,
                        0.84,
                        0,
                        0.32,
                        0,
                        0
                    ]
                }
            })
            .addTimedChild(instance16, 9, 56, {
                "9": {
                    x: 99.15,
                    y: -23.95
                },
                "10": {
                    x: 96.3,
                    y: -22.25
                },
                "11": {
                    x: 93.45,
                    y: -20.55
                },
                "12": {
                    x: 90.6,
                    y: -18.85
                },
                "13": {
                    x: 87.75,
                    y: -17.15
                },
                "14": {
                    x: 84.9,
                    y: -15.4
                },
                "15": {
                    x: 82.05,
                    y: -13.7
                },
                "16": {
                    x: 79.2,
                    y: -12
                },
                "17": {
                    x: 76.35,
                    y: -10.3
                },
                "18": {
                    x: 73.5,
                    y: -8.6
                },
                "19": {
                    x: 70.65,
                    y: -6.9
                },
                "20": {
                    x: 67.55,
                    y: -6.75
                },
                "21": {
                    x: 64.4,
                    y: -6.6
                },
                "22": {
                    x: 61.3,
                    y: -6.45
                },
                "23": {
                    x: 58.15,
                    y: -6.3
                },
                "24": {
                    x: 55.05,
                    y: -6.15
                },
                "25": {
                    x: 51.9,
                    y: -6
                },
                "26": {
                    x: 48.8,
                    y: -5.85
                },
                "27": {
                    x: 45.65,
                    y: -5.7
                },
                "28": {
                    x: 42.55,
                    y: -5.55
                },
                "29": {
                    x: 39.4,
                    y: -5.4
                },
                "30": {
                    x: 37.35,
                    y: -4.55
                },
                "31": {
                    x: 35.25,
                    y: -3.7
                },
                "32": {
                    x: 33.2,
                    y: -2.85
                },
                "33": {
                    x: 31.1,
                    y: -2
                },
                "34": {
                    x: 29.05,
                    y: -1.15
                },
                "35": {
                    x: 26.95,
                    y: -0.3
                },
                "36": {
                    x: 24.9,
                    y: 0.55
                },
                "37": {
                    x: 22.8,
                    y: 1.4
                },
                "38": {
                    x: 20.75,
                    y: 2.25
                },
                "39": {
                    x: 18.65,
                    y: 3.1
                },
                "40": {
                    x: 18.55,
                    y: 3.35
                },
                "41": {
                    x: 18.4,
                    y: 3.55
                },
                "42": {
                    x: 18.3,
                    y: 3.8
                },
                "43": {
                    x: 18.15,
                    y: 4
                },
                "44": {
                    x: 18.05,
                    y: 4.25
                },
                "45": {
                    x: 17.9,
                    y: 4.45
                },
                "46": {
                    x: 17.8,
                    y: 4.7
                },
                "47": {
                    x: 17.65,
                    y: 4.9
                },
                "48": {
                    x: 17.55,
                    y: 5.15
                },
                "49": {
                    x: 17.4,
                    y: 5.35
                },
                "50": {
                    x: 17.3,
                    y: 5.65
                },
                "51": {
                    x: 17.2,
                    y: 5.95
                },
                "52": {
                    x: 17.1,
                    y: 6.25
                },
                "53": {
                    x: 17,
                    y: 6.55
                },
                "54": {
                    x: 16.9,
                    y: 6.85
                },
                "55": {
                    x: 18.9,
                    y: 7.25
                },
                "56": {
                    x: 20.9,
                    y: 7.6
                },
                "57": {
                    x: 18.8,
                    y: 6.35
                },
                "58": {
                    x: 16.75,
                    y: 5.1
                },
                "59": {
                    x: 14.65,
                    y: 3.85
                },
                "60": {
                    x: 15,
                    y: 4.2
                },
                "61": {
                    x: 15.35,
                    y: 4.55
                },
                "62": {
                    x: 15.7,
                    y: 4.9
                },
                "63": {
                    x: 16.05,
                    y: 5.25
                },
                "64": {
                    x: 16.4,
                    y: 5.6
                }
            })
            .addTimedChild(instance116, 65, 110, {
                "65": {
                    x: -4.85,
                    y: -16.3,
                    a: 1
                },
                "105": {
                    a: 0.94
                },
                "106": {
                    a: 0.88
                },
                "107": {
                    a: 0.82
                },
                "108": {
                    a: 0.77
                },
                "109": {
                    a: 0.71
                },
                "110": {
                    a: 0.65
                },
                "111": {
                    a: 0.59
                },
                "112": {
                    a: 0.53
                },
                "113": {
                    a: 0.47
                },
                "114": {
                    a: 0.41
                },
                "115": {
                    a: 0.35
                },
                "116": {
                    a: 0.29
                },
                "117": {
                    a: 0.23
                },
                "118": {
                    a: 0.18
                },
                "119": {
                    a: 0.12
                },
                "120": {
                    a: 0.06
                },
                "121": {
                    a: 0
                }
            })
            .addTimedChild(instance115, 65, 39, {
                "65": {
                    x: -12.2,
                    y: -20.25,
                    sx: 1,
                    sy: 1
                },
                "66": {
                    x: -12.948,
                    y: -20.994,
                    sx: 1.024,
                    sy: 1.024
                },
                "67": {
                    x: -13.696,
                    y: -21.689,
                    sx: 1.049,
                    sy: 1.049
                },
                "68": {
                    x: -14.443,
                    y: -22.483,
                    sx: 1.073,
                    sy: 1.073
                },
                "69": {
                    x: -15.191,
                    y: -23.177,
                    sx: 1.098,
                    sy: 1.098
                },
                "70": {
                    x: -15.989,
                    y: -23.972,
                    sx: 1.122,
                    sy: 1.122
                },
                "71": {
                    x: -16.737,
                    y: -24.666,
                    sx: 1.146,
                    sy: 1.146
                },
                "72": {
                    x: -17.485,
                    y: -25.41,
                    sx: 1.171,
                    sy: 1.171
                },
                "73": {
                    x: -18.232,
                    y: -26.204,
                    sx: 1.195,
                    sy: 1.195
                },
                "74": {
                    x: -18.98,
                    y: -26.899,
                    sx: 1.22,
                    sy: 1.22
                },
                "75": {
                    x: -19.778,
                    y: -27.693,
                    sx: 1.244,
                    sy: 1.244
                },
                "76": {
                    x: -20.526,
                    y: -28.388,
                    sx: 1.269,
                    sy: 1.269
                },
                "77": {
                    x: -21.274,
                    y: -29.182,
                    sx: 1.293,
                    sy: 1.293
                },
                "78": {
                    x: -22.022,
                    y: -29.926,
                    sx: 1.317,
                    sy: 1.317
                },
                "79": {
                    x: -22.769,
                    y: -30.62,
                    sx: 1.342,
                    sy: 1.342
                },
                "80": {
                    x: -23.567,
                    y: -31.415,
                    sx: 1.366,
                    sy: 1.366
                },
                "81": {
                    x: -24.315,
                    y: -32.109,
                    sx: 1.391,
                    sy: 1.391
                },
                "82": {
                    x: -25.063,
                    y: -32.903,
                    sx: 1.415,
                    sy: 1.415
                },
                "83": {
                    x: -25.811,
                    y: -33.598,
                    sx: 1.439,
                    sy: 1.439
                },
                "84": {
                    x: -26.6,
                    y: -34.4,
                    sx: 1.464,
                    sy: 1.464
                }
            })
            .addTimedChild(instance114, 65, 19, {
                "65": {
                    x: -3,
                    y: -11.45,
                    c: [
                        1,
                        0,
                        1,
                        0,
                        1,
                        0
                    ]
                },
                "66": {
                    c: [
                        0.95,
                        0.04,
                        0.95,
                        0.02,
                        0.95,
                        0
                    ]
                },
                "67": {
                    c: [
                        0.89,
                        0.09,
                        0.89,
                        0.04,
                        0.89,
                        0
                    ]
                },
                "68": {
                    c: [
                        0.84,
                        0.13,
                        0.84,
                        0.05,
                        0.84,
                        0
                    ]
                },
                "69": {
                    c: [
                        0.79,
                        0.18,
                        0.79,
                        0.07,
                        0.79,
                        0
                    ]
                },
                "70": {
                    c: [
                        0.74,
                        0.22,
                        0.74,
                        0.09,
                        0.74,
                        0
                    ]
                },
                "71": {
                    c: [
                        0.68,
                        0.26,
                        0.68,
                        0.1,
                        0.68,
                        0
                    ]
                },
                "72": {
                    c: [
                        0.63,
                        0.31,
                        0.63,
                        0.12,
                        0.63,
                        0
                    ]
                },
                "73": {
                    c: [
                        0.58,
                        0.35,
                        0.58,
                        0.14,
                        0.58,
                        0
                    ]
                },
                "74": {
                    c: [
                        0.53,
                        0.4,
                        0.53,
                        0.15,
                        0.53,
                        0
                    ]
                },
                "75": {
                    c: [
                        0.47,
                        0.44,
                        0.47,
                        0.17,
                        0.47,
                        0
                    ]
                },
                "76": {
                    c: [
                        0.42,
                        0.48,
                        0.42,
                        0.18,
                        0.42,
                        0
                    ]
                },
                "77": {
                    c: [
                        0.37,
                        0.53,
                        0.37,
                        0.2,
                        0.37,
                        0
                    ]
                },
                "78": {
                    c: [
                        0.32,
                        0.57,
                        0.32,
                        0.22,
                        0.32,
                        0
                    ]
                },
                "79": {
                    c: [
                        0.26,
                        0.62,
                        0.26,
                        0.24,
                        0.26,
                        0
                    ]
                },
                "80": {
                    c: [
                        0.21,
                        0.66,
                        0.21,
                        0.25,
                        0.21,
                        0
                    ]
                },
                "81": {
                    c: [
                        0.16,
                        0.7,
                        0.16,
                        0.27,
                        0.16,
                        0
                    ]
                },
                "82": {
                    c: [
                        0.11,
                        0.75,
                        0.11,
                        0.29,
                        0.11,
                        0
                    ]
                },
                "83": {
                    c: [
                        0.05,
                        0.79,
                        0.05,
                        0.31,
                        0.05,
                        0
                    ]
                }
            })
            .addTimedChild(instance113, 65, 1)
            .addTimedChild(instance117, 66, 1)
            .addTimedChild(instance118, 67, 1)
            .addTimedChild(instance119, 68, 1)
            .addTimedChild(instance120, 69, 1)
            .addTimedChild(instance121, 70, 1)
            .addTimedChild(instance122, 71, 1)
            .addTimedChild(instance124, 72, 1)
            .addTimedChild(instance126, 73, 1)
            .addTimedChild(instance128, 74, 1)
            .addTimedChild(instance130, 75, 1)
            .addTimedChild(instance132, 76, 1)
            .addTimedChild(instance134, 77, 1)
            .addTimedChild(instance136, 78, 1)
            .addTimedChild(instance138, 79, 1)
            .addTimedChild(instance140, 80, 1)
            .addTimedChild(instance142, 81, 1)
            .addTimedChild(instance144, 82, 1)
            .addTimedChild(instance146, 83, 1)
            .addTimedChild(instance149, 84, 1, {
                "84": {
                    x: -3,
                    y: -11.45,
                    c: [
                        0,
                        0.84,
                        0,
                        0.32,
                        0,
                        0
                    ]
                }
            })
            .addTimedChild(instance148, 84, 1)
            .addTimedChild(instance112, 65, 20, {
                "65": {
                    x: 7.65,
                    y: -4.65,
                    a: 1
                },
                "66": {
                    a: 0.95
                },
                "67": {
                    a: 0.89
                },
                "68": {
                    a: 0.84
                },
                "69": {
                    a: 0.79
                },
                "70": {
                    a: 0.74
                },
                "71": {
                    a: 0.68
                },
                "72": {
                    a: 0.63
                },
                "73": {
                    a: 0.58
                },
                "74": {
                    a: 0.53
                },
                "75": {
                    a: 0.47
                },
                "76": {
                    a: 0.42
                },
                "77": {
                    a: 0.37
                },
                "78": {
                    a: 0.32
                },
                "79": {
                    a: 0.26
                },
                "80": {
                    a: 0.21
                },
                "81": {
                    a: 0.16
                },
                "82": {
                    a: 0.11
                },
                "83": {
                    a: 0.05
                },
                "84": {
                    a: 0
                }
            })
            .addTimedChild(instance153, 104, 71, {
                "104": {
                    x: -25.65,
                    y: -35.7,
                    kx: 0,
                    ky: 0,
                    r: 0,
                    a: 1
                },
                "105": {
                    x: -9.764,
                    y: -47.777,
                    r: 0.35,
                    a: 0.97
                },
                "106": {
                    x: 9.56,
                    y: -53.76,
                    r: 0.705,
                    a: 0.95
                },
                "107": {
                    x: 30.127,
                    y: -52.499,
                    r: 1.067,
                    a: 0.91
                },
                "108": {
                    x: 49.177,
                    y: -43.92,
                    r: 1.434,
                    a: 0.89
                },
                "109": {
                    x: 64.077,
                    y: -28.743,
                    kx: 4.475,
                    ky: 1.808,
                    r: 0,
                    a: 0.86
                },
                "110": {
                    x: 72.508,
                    y: -8.83,
                    kx: 4.096,
                    ky: 2.187,
                    a: 0.82
                },
                "111": {
                    x: 72.885,
                    y: 13.124,
                    kx: 3.71,
                    ky: 2.573,
                    a: 0.8
                },
                "112": {
                    x: 64.79,
                    y: 33.821,
                    kx: 3.319,
                    ky: 2.964,
                    a: 0.77
                },
                "113": {
                    x: 49.128,
                    y: 50.142,
                    kx: 0,
                    ky: 0,
                    r: -2.921,
                    a: 0.73
                },
                "114": {
                    x: 28.01,
                    y: 59.208,
                    r: -2.518,
                    a: 0.7
                },
                "115": {
                    x: 4.723,
                    y: 59.163,
                    r: -2.108,
                    a: 0.67
                },
                "116": {
                    x: -16.853,
                    y: 49.664,
                    r: -1.693,
                    a: 0.63
                },
                "117": {
                    x: -32.973,
                    y: 31.941,
                    r: -1.272,
                    a: 0.6
                },
                "118": {
                    x: -40.474,
                    y: 8.808,
                    r: -0.844,
                    a: 0.57
                },
                "119": {
                    x: -37.62,
                    y: -15.69,
                    r: -0.411,
                    a: 0.53
                },
                "120": {
                    x: -24.52,
                    y: -36.868,
                    r: 0.029,
                    a: 0.5
                },
                "121": {
                    x: -3.285,
                    y: -50.62,
                    r: 0.474,
                    a: 0.46
                },
                "122": {
                    x: 22.131,
                    y: -53.867,
                    r: 0.925,
                    a: 0.43
                },
                "123": {
                    x: 46.755,
                    y: -45.54,
                    r: 1.382,
                    a: 0.39
                },
                "124": {
                    x: 65.267,
                    y: -26.909,
                    kx: 4.438,
                    ky: 1.845,
                    r: 0,
                    a: 0.35
                },
                "125": {
                    x: 73.589,
                    y: -1.604,
                    kx: 3.969,
                    ky: 2.315,
                    a: 0.32
                },
                "126": {
                    x: 69.432,
                    y: 25.022,
                    kx: 3.493,
                    ky: 2.79,
                    a: 0.28
                },
                "127": {
                    x: 53.285,
                    y: 47.008,
                    kx: 0,
                    ky: 0,
                    r: -3.012,
                    a: 0.24
                },
                "128": {
                    x: 28.438,
                    y: 59.108,
                    r: -2.525,
                    a: 0.2
                },
                "129": {
                    x: 0.493,
                    y: 58.106,
                    r: -2.032,
                    a: 0.16
                },
                "130": {
                    x: -23.838,
                    y: 43.74,
                    r: -1.533,
                    a: 0.12
                },
                "131": {
                    x: -38.467,
                    y: 19.129,
                    r: -1.028,
                    a: 0.08
                },
                "132": {
                    x: -39.292,
                    y: -9.808,
                    r: -0.517,
                    a: 0.04
                },
                "133": {
                    x: -25.65,
                    y: -35.7,
                    r: 0,
                    a: 0
                }
            })
            .addAction(function () {
                /* stop();
                var myLoop:Number = this._parent.nLoop; //store this for resetting later*/
            }, 0)
            .addAction(function () {
                /* stop();*/
            }, 1)
            .addAction(function () {
                /* stop();*/
            }, 2)
            .addAction(function () {
                /* //
                // send create virus message to the scene
                //
                temp_x = this._parent._x+20;
                temp_y = this._parent._y+3.05;
                //
                this._parent._parent.SpinOffAntibody(temp_x, temp_y, this._parent.nVitesse);

                if (this._parent.nLoop == 0) {
                // go to the final animation
                this._parent.nLoop = myLoop;
                gotoAndPlay(160);
                }*/
            }, 121)
            .addAction(function () {
                /* if (this._parent.nLoop > 0) {
                // loop on the generation of antibody animation
                this._parent.nLoop --;
                gotoAndPlay(85);
                }*/
            }, 157)
            .addAction(function () {
                /* this._parent.bInfected = false;
                 */
            }, 174);
    });

    lib.hittest = Container.extend(function () {
        Container.call(this);
        var instance1 = new Graphics()
            .drawCommands(shapes.InternalDeadVirus[194]);
        this.addChild(instance1);
    });

    lib.antibody = Container.extend(function () {
        Container.call(this);
        var instance2 = new lib.hittest()
            .setTransform(23.5, 22.7)
            .setAlpha(0.05);
        this[instance2.name = "hittestie"] = instance2;
        var instance1 = new Graphics()
            .drawCommands(shapes.InternalDeadVirus[193]);
        this.addChild(instance2, instance1);
    });

    lib.InternalDeadVirus = MovieClip.extend(function () {
        MovieClip.call(this, {
            duration: 1,
            framerate: 24
        });
        var instance10 = new Graphics()
            .drawCommands(shapes.InternalDeadVirus[195]);
        var instance9 = new lib.antibody()
            .setTransform(757.05, 298.8);
        this[instance9.name = "anitbody1"] = instance9;
        var instance8 = new lib.virus_dead_antibodies()
            .setTransform(1062.75, 291);
        this[instance8.name = "dead_virus3"] = instance8;
        var instance7 = new lib.macro_virus_d()
            .setTransform(421.4, 432.05);
        this[instance7.name = "immune3"] = instance7;
        var instance6 = new lib.macro_virus_d()
            .setTransform(582.35, 307.05);
        this[instance6.name = "immune2"] = instance6;
        var instance5 = new lib.macro_virus_d()
            .setTransform(381.4, 176.85);
        this[instance5.name = "immune1"] = instance5;
        var instance4 = new lib.virus_dead_antibodies()
            .setTransform(1062.75, 475.4);
        this[instance4.name = "dead_virus5"] = instance4;
        var instance3 = new lib.virus_dead_antibodies()
            .setTransform(1062.75, 379.9);
        this[instance3.name = "dead_virus4"] = instance3;
        var instance2 = new lib.virus_dead_antibodies()
            .setTransform(1062.75, 131.4);
        this[instance2.name = "dead_virus1"] = instance2;
        var instance1 = new lib.virus_dead_antibodies()
            .setTransform(1062.75, 202.1);
        this[instance1.name = "dead_virus2"] = instance1;
        this.addChild(instance10, instance9, instance8, instance7, instance6, instance5, instance4, instance3, instance2, instance1);
    });

    lib.InternalDeadVirus.assets = {
        "InternalDeadVirus": "images/InternalDeadVirus.shapes.txt"
    };
})(PIXI, lib = lib || {});
var lib;
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        stage: lib.InternalDeadVirus,
        background: 0xffffff,
        width: 1624,
        height: 750,
        framerate: 24,
        totalFrames: 1,
        library: lib
    };
}