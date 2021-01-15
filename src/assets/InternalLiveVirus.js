(function (PIXI, lib) {

    var MovieClip = PIXI.animate.MovieClip;
    var Container = PIXI.Container;
    var Graphics = PIXI.Graphics;
    var shapes = PIXI.animate.ShapesCache;

    lib.Back = Container.extend(function () {
        Container.call(this);
        var instance1 = new Graphics()
            .drawCommands(shapes.Internal[0]);
        this.addChild(instance1);
    });

    lib.virus_alive_sm = MovieClip.extend(function () {
        MovieClip.call(this, {
            duration: 3
        });
        var instance35 = new Graphics()
            .drawCommands(shapes.Internal[22]);
        var instance34 = new Graphics()
            .drawCommands(shapes.Internal[21]);
        var instance33 = new Graphics()
            .drawCommands(shapes.Internal[20]);
        var instance32 = new Graphics()
            .drawCommands(shapes.Internal[19]);
        var instance31 = new Graphics()
            .drawCommands(shapes.Internal[18]);
        var instance30 = new Graphics()
            .drawCommands(shapes.Internal[17]);
        var instance29 = new Graphics()
            .drawCommands(shapes.Internal[16]);
        var instance28 = new Graphics()
            .drawCommands(shapes.Internal[15]);
        var instance27 = new Graphics()
            .drawCommands(shapes.Internal[14]);
        var instance26 = new Graphics()
            .drawCommands(shapes.Internal[13]);
        var instance25 = new Graphics()
            .drawCommands(shapes.Internal[12]);
        var instance24 = new Graphics()
            .drawCommands(shapes.Internal[11]);
        var instance23 = new Graphics()
            .drawCommands(shapes.Internal[10]);
        var instance22 = new Graphics()
            .drawCommands(shapes.Internal[7]);
        var instance21 = new Graphics()
            .drawCommands(shapes.Internal[7]);
        var instance20 = new Graphics()
            .drawCommands(shapes.Internal[9]);
        var instance19 = new Graphics()
            .drawCommands(shapes.Internal[8]);
        var instance18 = new Graphics()
            .drawCommands(shapes.Internal[9]);
        var instance17 = new Graphics()
            .drawCommands(shapes.Internal[8]);
        var instance16 = new Graphics()
            .drawCommands(shapes.Internal[6]);
        var instance15 = new Graphics()
            .drawCommands(shapes.Internal[6]);
        var instance14 = new Graphics()
            .drawCommands(shapes.Internal[5]);
        var instance13 = new Graphics()
            .drawCommands(shapes.Internal[5]);
        var instance12 = new Graphics()
            .drawCommands(shapes.Internal[7]);
        var instance11 = new Graphics()
            .drawCommands(shapes.Internal[7]);
        var instance10 = new Graphics()
            .drawCommands(shapes.Internal[6]);
        var instance9 = new Graphics()
            .drawCommands(shapes.Internal[6]);
        var instance8 = new Graphics()
            .drawCommands(shapes.Internal[5]);
        var instance7 = new Graphics()
            .drawCommands(shapes.Internal[5]);
        var instance6 = new Graphics()
            .drawCommands(shapes.Internal[4]);
        var instance5 = new Graphics()
            .drawCommands(shapes.Internal[3]);
        var instance4 = new Graphics()
            .drawCommands(shapes.Internal[4]);
        var instance3 = new Graphics()
            .drawCommands(shapes.Internal[3]);
        var instance2 = new Graphics()
            .drawCommands(shapes.Internal[2]);
        var instance1 = new Graphics()
            .drawCommands(shapes.Internal[1]);
        this.addTimedChild(instance35, 0, 2)
            .addTimedChild(instance34, 0, 2, {
                "0": {
                    x: 80.15,
                    y: 62.6,
                    sx: 1.023,
                    sy: 1.023
                }
            })
            .addTimedChild(instance33, 0, 2, {
                "0": {
                    x: -166,
                    y: -114.45,
                    sx: 0.371,
                    sy: 0.371
                }
            })
            .addTimedChild(instance32, 0, 2, {
                "0": {
                    x: -166,
                    y: -114.6,
                    sx: 0.371,
                    sy: 0.371
                }
            })
            .addTimedChild(instance31, 0, 2, {
                "0": {
                    x: -152.35,
                    y: -129.35,
                    sx: 0.371,
                    sy: 0.371,
                    r: 0.109
                }
            })
            .addTimedChild(instance30, 0, 2, {
                "0": {
                    x: -166,
                    y: -114.45,
                    sx: 0.371,
                    sy: 0.371
                }
            })
            .addTimedChild(instance29, 0, 2, {
                "0": {
                    x: 80.15,
                    y: 62.6,
                    sx: 1.023,
                    sy: 1.023
                }
            })
            .addTimedChild(instance28, 0, 2, {
                "0": {
                    x: -166,
                    y: -114.45,
                    sx: 0.371,
                    sy: 0.371
                }
            })
            .addTimedChild(instance27, 0, 2, {
                "0": {
                    x: -165.8,
                    y: -114.5,
                    sx: 0.371,
                    sy: 0.371
                }
            })
            .addTimedChild(instance26, 0, 2, {
                "0": {
                    x: -166,
                    y: -114.45,
                    sx: 0.371,
                    sy: 0.371
                }
            })
            .addTimedChild(instance25, 0, 2, {
                "0": {
                    x: -166.05,
                    y: -114.4,
                    sx: 0.371,
                    sy: 0.371
                }
            })
            .addTimedChild(instance24, 0, 2, {
                "0": {
                    x: -166,
                    y: -114.45,
                    sx: 0.371,
                    sy: 0.371
                }
            })
            .addTimedChild(instance23, 0, 2, {
                "0": {
                    x: -166,
                    y: -114.45,
                    sx: 0.371,
                    sy: 0.371
                }
            })
            .addTimedChild(instance22, 0, 2, {
                "0": {
                    x: -173.214,
                    y: -157.902,
                    sx: 0.371,
                    sy: 0.384
                }
            })
            .addTimedChild(instance21, 0, 2, {
                "0": {
                    x: -166,
                    y: -157.902,
                    sx: 0.371,
                    sy: 0.384
                }
            })
            .addTimedChild(instance20, 0, 2, {
                "0": {
                    x: -176.775,
                    y: -114.45,
                    sx: 0.371,
                    sy: 0.371
                }
            })
            .addTimedChild(instance19, 0, 2, {
                "0": {
                    x: -175.94,
                    y: -114.45,
                    sx: 0.369,
                    sy: 0.371
                }
            })
            .addTimedChild(instance18, 0, 2, {
                "0": {
                    x: -166,
                    y: -114.45,
                    sx: 0.371,
                    sy: 0.371
                }
            })
            .addTimedChild(instance17, 0, 2, {
                "0": {
                    x: -166,
                    y: -114.45,
                    sx: 0.371,
                    sy: 0.371
                }
            })
            .addTimedChild(instance16, 0, 2, {
                "0": {
                    x: -194.319,
                    y: -126.393,
                    sx: 0.352,
                    sy: 0.371
                }
            })
            .addTimedChild(instance15, 0, 2, {
                "0": {
                    x: -190.666,
                    y: -132.625,
                    sx: 0.352,
                    sy: 0.371
                }
            })
            .addTimedChild(instance14, 0, 2, {
                "0": {
                    x: -188.848,
                    y: -93.234,
                    sx: 0.349,
                    sy: 0.367
                }
            })
            .addTimedChild(instance13, 0, 2, {
                "0": {
                    x: -191.927,
                    y: -99.335,
                    sx: 0.347,
                    sy: 0.367
                }
            })
            .addTimedChild(instance12, 0, 2, {
                "0": {
                    x: -173.214,
                    y: -114.45,
                    sx: 0.371,
                    sy: 0.371
                }
            })
            .addTimedChild(instance11, 0, 2, {
                "0": {
                    x: -166,
                    y: -114.45,
                    sx: 0.371,
                    sy: 0.371
                }
            })
            .addTimedChild(instance10, 0, 2, {
                "0": {
                    x: -170.358,
                    y: -108.126,
                    sx: 0.373,
                    sy: 0.371
                }
            })
            .addTimedChild(instance9, 0, 2, {
                "0": {
                    x: -166,
                    y: -114.45,
                    sx: 0.371,
                    sy: 0.371
                }
            })
            .addTimedChild(instance8, 0, 2, {
                "0": {
                    x: -169.728,
                    y: -120.626,
                    sx: 0.371,
                    sy: 0.371
                }
            })
            .addTimedChild(instance7, 0, 2, {
                "0": {
                    x: -166,
                    y: -114.45,
                    sx: 0.371,
                    sy: 0.371
                }
            })
            .addTimedChild(instance6, 0, 2, {
                "0": {
                    x: -176.868,
                    y: -114.45,
                    sx: 0.371,
                    sy: 0.371
                }
            })
            .addTimedChild(instance5, 0, 2, {
                "0": {
                    x: -176.868,
                    y: -114.45,
                    sx: 0.371,
                    sy: 0.371
                }
            })
            .addTimedChild(instance4, 0, 2, {
                "0": {
                    x: -166,
                    y: -114.45,
                    sx: 0.371,
                    sy: 0.371
                }
            })
            .addTimedChild(instance3, 0, 2, {
                "0": {
                    x: -166,
                    y: -114.45,
                    sx: 0.371,
                    sy: 0.371
                }
            })
            .addTimedChild(instance2, 0, 2)
            .addTimedChild(instance1, 0, 2, {
                "0": {
                    x: -0.2,
                    y: -0.1
                }
            });
    });

    lib.eyes = Container.extend(function () {
        Container.call(this);
        var instance8 = new Graphics()
            .drawCommands(shapes.Internal[9])
            .setTransform(-170.323, -105.55, 0.376, 0.376);
        var instance7 = new Graphics()
            .drawCommands(shapes.Internal[8])
            .setTransform(-169.477, -105.55, 0.374, 0.376);
        var instance6 = new Graphics()
            .drawCommands(shapes.Internal[9])
            .setTransform(-159.4, -105.55, 0.376, 0.376);
        var instance5 = new Graphics()
            .drawCommands(shapes.Internal[8])
            .setTransform(-159.4, -105.55, 0.376, 0.376);
        var instance4 = new Graphics()
            .drawCommands(shapes.Internal[4])
            .setTransform(-170.417, -105.55, 0.376, 0.376);
        var instance3 = new Graphics()
            .drawCommands(shapes.Internal[3])
            .setTransform(-170.417, -105.55, 0.376, 0.376);
        var instance2 = new Graphics()
            .drawCommands(shapes.Internal[4])
            .setTransform(-159.4, -105.55, 0.376, 0.376);
        var instance1 = new Graphics()
            .drawCommands(shapes.Internal[3])
            .setTransform(-159.4, -105.55, 0.376, 0.376);
        this.addChild(instance8, instance7, instance6, instance5, instance4, instance3, instance2, instance1);
    });

    lib.body = Container.extend(function () {
        Container.call(this);
        var instance1 = new Graphics()
            .drawCommands(shapes.Internal[22])
            .setTransform(19.2, 17.35, 0.964, 0.967);
        this.addChild(instance1);
    });

    lib.petals = Container.extend(function () {
        Container.call(this);
        var instance12 = new Graphics()
            .drawCommands(shapes.Internal[20])
            .setTransform(-137.65, -88.45, 0.376, 0.376);
        var instance11 = new Graphics()
            .drawCommands(shapes.Internal[19])
            .setTransform(-137.65, -88.45, 0.376, 0.376);
        var instance10 = new Graphics()
            .drawCommands(shapes.Internal[18])
            .setTransform(-112.25, -113.65, 0.376, 0.376, 0.192);
        var instance9 = new Graphics()
            .drawCommands(shapes.Internal[17])
            .setTransform(-137.65, -88.45, 0.376, 0.376);
        var instance8 = new Graphics()
            .drawCommands(shapes.Internal[16])
            .setTransform(111.728, 91.13, 1.036, 1.037);
        var instance7 = new Graphics()
            .drawCommands(shapes.Internal[15])
            .setTransform(-137.65, -88.45, 0.376, 0.376);
        var instance6 = new Graphics()
            .drawCommands(shapes.Internal[14])
            .setTransform(-137.65, -88.45, 0.376, 0.376);
        var instance5 = new Graphics()
            .drawCommands(shapes.Internal[13])
            .setTransform(-137.65, -88.45, 0.376, 0.376);
        var instance4 = new Graphics()
            .drawCommands(shapes.Internal[12])
            .setTransform(-137.65, -88.45, 0.376, 0.376);
        var instance3 = new Graphics()
            .drawCommands(shapes.Internal[11])
            .setTransform(-137.65, -88.45, 0.376, 0.376);
        var instance2 = new Graphics()
            .drawCommands(shapes.Internal[10])
            .setTransform(-137.65, -88.45, 0.376, 0.376);
        var instance1 = new Graphics()
            .drawCommands(shapes.Internal[12])
            .setTransform(199.75, -87.65, 0.376, 0.376, 0, 0, 3.142);
        this.addChild(instance12, instance11, instance10, instance9, instance8, instance7, instance6, instance5, instance4, instance3, instance2, instance1);
    });

    lib.white_squre = Container.extend(function () {
        Container.call(this);
        var instance1 = new Graphics()
            .drawCommands(shapes.Internal[24]);
        this.addChild(instance1);
    });

    lib.fuzzies = Container.extend(function () {
        Container.call(this);
        var instance12 = new Graphics()
            .drawCommands(shapes.Internal[7])
            .setTransform(-154.414, -137.781, 0.376, 0.39);
        var instance11 = new Graphics()
            .drawCommands(shapes.Internal[7])
            .setTransform(-147.1, -137.781, 0.376, 0.39);
        var instance10 = new Graphics()
            .drawCommands(shapes.Internal[6])
            .setTransform(-175.809, -105.816, 0.357, 0.376);
        var instance9 = new Graphics()
            .drawCommands(shapes.Internal[6])
            .setTransform(-172.105, -112.138, 0.357, 0.376);
        var instance8 = new Graphics()
            .drawCommands(shapes.Internal[5])
            .setTransform(-170.263, -72.177, 0.354, 0.372);
        var instance7 = new Graphics()
            .drawCommands(shapes.Internal[5])
            .setTransform(-173.384, -78.367, 0.352, 0.372);
        var instance6 = new Graphics()
            .drawCommands(shapes.Internal[7])
            .setTransform(-154.414, -93.7, 0.376, 0.376);
        var instance5 = new Graphics()
            .drawCommands(shapes.Internal[7])
            .setTransform(-147.1, -93.7, 0.376, 0.376);
        var instance4 = new Graphics()
            .drawCommands(shapes.Internal[6])
            .setTransform(-151.518, -87.284, 0.378, 0.376);
        var instance3 = new Graphics()
            .drawCommands(shapes.Internal[6])
            .setTransform(-147.1, -93.7, 0.376, 0.376);
        var instance2 = new Graphics()
            .drawCommands(shapes.Internal[5])
            .setTransform(-150.879, -99.965, 0.376, 0.376);
        var instance1 = new Graphics()
            .drawCommands(shapes.Internal[5])
            .setTransform(-147.1, -93.7, 0.376, 0.376);
        this.addChild(instance12, instance11, instance10, instance9, instance8, instance7, instance6, instance5, instance4, instance3, instance2, instance1);
    });

    lib.inner_circle = Container.extend(function () {
        Container.call(this);
        var instance1 = new Graphics()
            .drawCommands(shapes.Internal[31]);
        this.addChild(instance1);
    });

    lib.hitmesquare = Container.extend(function () {
        Container.call(this);
        var instance1 = new Graphics()
            .drawCommands(shapes.Internal[32]);
        this.addChild(instance1);
    });

    lib.mouth_virus_normal = Container.extend(function () {
        Container.call(this);
        var instance2 = new Graphics()
            .drawCommands(shapes.Internal[34]);
        var instance1 = new Graphics()
            .drawCommands(shapes.Internal[33]);
        this.addChild(instance2, instance1);
    });

    lib.RightEye_virus = Container.extend(function () {
        Container.call(this);
        var instance8 = new Graphics()
            .drawCommands(shapes.Internal[61]);
        var instance7 = new Graphics()
            .drawCommands(shapes.Internal[60])
            .setTransform(-257.6, -134.7, 0.625, 0.625);
        var instance6 = new Graphics()
            .drawCommands(shapes.Internal[59])
            .setTransform(-257.6, -134.7, 0.625, 0.625);
        var instance5 = new Graphics()
            .drawCommands(shapes.Internal[58])
            .setTransform(-257.6, -134.7, 0.625, 0.625);
        var instance4 = new Graphics()
            .drawCommands(shapes.Internal[57])
            .setTransform(-257.6, -134.7, 0.625, 0.625);
        var instance3 = new Graphics()
            .drawCommands(shapes.Internal[56]);
        var instance2 = new Graphics()
            .drawCommands(shapes.Internal[55])
            .setTransform(-257.6, -134.7, 0.625, 0.625);
        var instance1 = new Graphics()
            .drawCommands(shapes.Internal[54])
            .setTransform(1.8);
        this.addChild(instance8, instance7, instance6, instance5, instance4, instance3, instance2, instance1);
    });

    lib.LeftEye_virus = Container.extend(function () {
        Container.call(this);
        var instance8 = new Graphics()
            .drawCommands(shapes.Internal[61])
            .setTransform(1.1, 1.35);
        var instance7 = new Graphics()
            .drawCommands(shapes.Internal[60])
            .setTransform(-256.48, -133.35, 0.625, 0.625);
        var instance6 = new Graphics()
            .drawCommands(shapes.Internal[67])
            .setTransform(-206.5, -134.35, 0.625, 0.625);
        var instance5 = new Graphics()
            .drawCommands(shapes.Internal[66])
            .setTransform(-206.5, -134.35, 0.625, 0.625);
        var instance4 = new Graphics()
            .drawCommands(shapes.Internal[65])
            .setTransform(2);
        var instance3 = new Graphics()
            .drawCommands(shapes.Internal[64])
            .setTransform(1.4);
        var instance2 = new Graphics()
            .drawCommands(shapes.Internal[63])
            .setTransform(2);
        var instance1 = new Graphics()
            .drawCommands(shapes.Internal[62])
            .setTransform(2);
        this.addChild(instance8, instance7, instance6, instance5, instance4, instance3, instance2, instance1);
    });

    lib.circle_alpha = Container.extend(function () {
        Container.call(this);
        var instance1 = new Graphics()
            .drawCommands(shapes.Internal[71])
            .setTransform(-116, 64.6);
        this.addChild(instance1);
    });

    lib.macro_virus_multiply = MovieClip.extend(function () {
        MovieClip.call(this, {
            duration: 204,
            labels: {
                default: 0,
                death: 1,
                default_stop: 2,
                death_stop: 8,
                duplicate: 9,
                duplicate_stop: 203,
                duplicate_loop: 203
            }
        });
        var instance6 = new Graphics()
            .drawCommands(shapes.Internal[69]);
        var instance10 = new Graphics()
            .drawCommands(shapes.Internal[70]);
        var instance5 = new Graphics()
            .drawCommands(shapes.Internal[68]);
        var instance4 = new lib.RightEye_virus();
        var instance3 = new lib.LeftEye_virus();
        var instance2 = new lib.mouth_virus_normal();
        var instance8 = new Graphics()
            .drawCommands(shapes.Internal[36]);
        var instance7 = new Graphics()
            .drawCommands(shapes.Internal[35]);
        var instance9 = new Graphics()
            .drawCommands(shapes.Internal[37]);
        var instance12 = new Graphics()
            .drawCommands(shapes.Internal[34]);
        var instance11 = new Graphics()
            .drawCommands(shapes.Internal[33]);
        var instance18 = new Graphics()
            .drawCommands(shapes.Internal[169]);
        var instance17 = new Graphics()
            .drawCommands(shapes.Internal[76]);
        var instance20 = new Graphics()
            .drawCommands(shapes.Internal[170]);
        var instance19 = new Graphics()
            .drawCommands(shapes.Internal[77]);
        var instance22 = new Graphics()
            .drawCommands(shapes.Internal[171]);
        var instance21 = new Graphics()
            .drawCommands(shapes.Internal[78]);
        var instance24 = new Graphics()
            .drawCommands(shapes.Internal[172]);
        var instance23 = new Graphics()
            .drawCommands(shapes.Internal[79]);
        var instance26 = new Graphics()
            .drawCommands(shapes.Internal[173]);
        var instance25 = new Graphics()
            .drawCommands(shapes.Internal[80]);
        var instance28 = new Graphics()
            .drawCommands(shapes.Internal[174]);
        var instance27 = new Graphics()
            .drawCommands(shapes.Internal[81]);
        var instance30 = new Graphics()
            .drawCommands(shapes.Internal[175]);
        var instance29 = new Graphics()
            .drawCommands(shapes.Internal[82]);
        var instance32 = new Graphics()
            .drawCommands(shapes.Internal[176]);
        var instance31 = new Graphics()
            .drawCommands(shapes.Internal[83]);
        var instance34 = new Graphics()
            .drawCommands(shapes.Internal[177]);
        var instance33 = new Graphics()
            .drawCommands(shapes.Internal[84]);
        var instance36 = new Graphics()
            .drawCommands(shapes.Internal[178]);
        var instance35 = new Graphics()
            .drawCommands(shapes.Internal[85]);
        var instance38 = new Graphics()
            .drawCommands(shapes.Internal[179]);
        var instance37 = new Graphics()
            .drawCommands(shapes.Internal[86]);
        var instance40 = new Graphics()
            .drawCommands(shapes.Internal[180]);
        var instance39 = new Graphics()
            .drawCommands(shapes.Internal[87]);
        var instance42 = new Graphics()
            .drawCommands(shapes.Internal[181]);
        var instance41 = new Graphics()
            .drawCommands(shapes.Internal[88]);
        var instance44 = new Graphics()
            .drawCommands(shapes.Internal[182]);
        var instance43 = new Graphics()
            .drawCommands(shapes.Internal[89]);
        var instance46 = new Graphics()
            .drawCommands(shapes.Internal[183]);
        var instance45 = new Graphics()
            .drawCommands(shapes.Internal[90]);
        var instance48 = new Graphics()
            .drawCommands(shapes.Internal[184]);
        var instance47 = new Graphics()
            .drawCommands(shapes.Internal[91]);
        var instance50 = new Graphics()
            .drawCommands(shapes.Internal[185]);
        var instance49 = new Graphics()
            .drawCommands(shapes.Internal[92]);
        var instance52 = new Graphics()
            .drawCommands(shapes.Internal[186]);
        var instance51 = new Graphics()
            .drawCommands(shapes.Internal[93]);
        var instance54 = new Graphics()
            .drawCommands(shapes.Internal[187]);
        var instance53 = new Graphics()
            .drawCommands(shapes.Internal[94]);
        var instance56 = new Graphics()
            .drawCommands(shapes.Internal[188]);
        var instance55 = new Graphics()
            .drawCommands(shapes.Internal[95]);
        var instance58 = new Graphics()
            .drawCommands(shapes.Internal[189]);
        var instance57 = new Graphics()
            .drawCommands(shapes.Internal[96]);
        var instance60 = new Graphics()
            .drawCommands(shapes.Internal[190]);
        var instance59 = new Graphics()
            .drawCommands(shapes.Internal[97]);
        var instance62 = new Graphics()
            .drawCommands(shapes.Internal[191]);
        var instance61 = new Graphics()
            .drawCommands(shapes.Internal[98]);
        var instance64 = new Graphics()
            .drawCommands(shapes.Internal[192]);
        var instance63 = new Graphics()
            .drawCommands(shapes.Internal[99]);
        var instance66 = new Graphics()
            .drawCommands(shapes.Internal[193]);
        var instance65 = new Graphics()
            .drawCommands(shapes.Internal[100]);
        var instance68 = new Graphics()
            .drawCommands(shapes.Internal[194]);
        var instance67 = new Graphics()
            .drawCommands(shapes.Internal[101]);
        var instance70 = new Graphics()
            .drawCommands(shapes.Internal[195]);
        var instance69 = new Graphics()
            .drawCommands(shapes.Internal[102]);
        var instance72 = new Graphics()
            .drawCommands(shapes.Internal[196]);
        var instance71 = new Graphics()
            .drawCommands(shapes.Internal[103]);
        var instance74 = new Graphics()
            .drawCommands(shapes.Internal[197]);
        var instance73 = new Graphics()
            .drawCommands(shapes.Internal[104]);
        var instance76 = new Graphics()
            .drawCommands(shapes.Internal[198]);
        var instance75 = new Graphics()
            .drawCommands(shapes.Internal[105]);
        var instance78 = new Graphics()
            .drawCommands(shapes.Internal[199]);
        var instance77 = new Graphics()
            .drawCommands(shapes.Internal[106]);
        var instance80 = new Graphics()
            .drawCommands(shapes.Internal[200]);
        var instance79 = new Graphics()
            .drawCommands(shapes.Internal[107]);
        var instance82 = new Graphics()
            .drawCommands(shapes.Internal[201]);
        var instance81 = new Graphics()
            .drawCommands(shapes.Internal[108]);
        var instance84 = new Graphics()
            .drawCommands(shapes.Internal[202]);
        var instance83 = new Graphics()
            .drawCommands(shapes.Internal[109]);
        var instance86 = new Graphics()
            .drawCommands(shapes.Internal[203]);
        var instance85 = new Graphics()
            .drawCommands(shapes.Internal[110]);
        var instance88 = new Graphics()
            .drawCommands(shapes.Internal[204]);
        var instance87 = new Graphics()
            .drawCommands(shapes.Internal[111]);
        var instance90 = new Graphics()
            .drawCommands(shapes.Internal[205]);
        var instance89 = new Graphics()
            .drawCommands(shapes.Internal[112]);
        var instance92 = new Graphics()
            .drawCommands(shapes.Internal[206]);
        var instance91 = new Graphics()
            .drawCommands(shapes.Internal[113]);
        var instance94 = new Graphics()
            .drawCommands(shapes.Internal[207]);
        var instance93 = new Graphics()
            .drawCommands(shapes.Internal[114]);
        var instance96 = new Graphics()
            .drawCommands(shapes.Internal[208]);
        var instance95 = new Graphics()
            .drawCommands(shapes.Internal[115]);
        var instance101 = new Graphics()
            .drawCommands(shapes.Internal[209]);
        var instance100 = new Graphics()
            .drawCommands(shapes.Internal[116]);
        var instance105 = new Graphics()
            .drawCommands(shapes.Internal[210]);
        var instance104 = new Graphics()
            .drawCommands(shapes.Internal[117]);
        var instance116 = new Graphics()
            .drawCommands(shapes.Internal[118]);
        var instance138 = new Graphics()
            .drawCommands(shapes.Internal[119]);
        var instance139 = new Graphics()
            .drawCommands(shapes.Internal[120]);
        var instance140 = new Graphics()
            .drawCommands(shapes.Internal[121]);
        var instance141 = new Graphics()
            .drawCommands(shapes.Internal[122]);
        var instance142 = new Graphics()
            .drawCommands(shapes.Internal[123]);
        var instance143 = new Graphics()
            .drawCommands(shapes.Internal[124]);
        var instance144 = new Graphics()
            .drawCommands(shapes.Internal[125]);
        var instance145 = new Graphics()
            .drawCommands(shapes.Internal[126]);
        var instance146 = new Graphics()
            .drawCommands(shapes.Internal[127]);
        var instance147 = new Graphics()
            .drawCommands(shapes.Internal[128]);
        var instance148 = new Graphics()
            .drawCommands(shapes.Internal[129]);
        var instance149 = new Graphics()
            .drawCommands(shapes.Internal[130]);
        var instance150 = new Graphics()
            .drawCommands(shapes.Internal[131]);
        var instance151 = new Graphics()
            .drawCommands(shapes.Internal[132]);
        var instance152 = new Graphics()
            .drawCommands(shapes.Internal[133]);
        var instance153 = new Graphics()
            .drawCommands(shapes.Internal[134]);
        var instance154 = new Graphics()
            .drawCommands(shapes.Internal[135]);
        var instance155 = new Graphics()
            .drawCommands(shapes.Internal[136]);
        var instance156 = new Graphics()
            .drawCommands(shapes.Internal[137]);
        var instance157 = new Graphics()
            .drawCommands(shapes.Internal[138]);
        var instance158 = new Graphics()
            .drawCommands(shapes.Internal[139]);
        var instance159 = new Graphics()
            .drawCommands(shapes.Internal[140]);
        var instance160 = new Graphics()
            .drawCommands(shapes.Internal[141]);
        var instance161 = new Graphics()
            .drawCommands(shapes.Internal[142]);
        var instance162 = new Graphics()
            .drawCommands(shapes.Internal[143]);
        var instance163 = new Graphics()
            .drawCommands(shapes.Internal[144]);
        var instance164 = new Graphics()
            .drawCommands(shapes.Internal[145]);
        var instance165 = new Graphics()
            .drawCommands(shapes.Internal[146]);
        var instance166 = new Graphics()
            .drawCommands(shapes.Internal[147]);
        var instance167 = new Graphics()
            .drawCommands(shapes.Internal[148]);
        var instance168 = new Graphics()
            .drawCommands(shapes.Internal[149]);
        var instance169 = new Graphics()
            .drawCommands(shapes.Internal[150]);
        var instance170 = new Graphics()
            .drawCommands(shapes.Internal[151]);
        var instance171 = new Graphics()
            .drawCommands(shapes.Internal[152]);
        var instance172 = new Graphics()
            .drawCommands(shapes.Internal[153]);
        var instance173 = new Graphics()
            .drawCommands(shapes.Internal[154]);
        var instance174 = new Graphics()
            .drawCommands(shapes.Internal[155]);
        var instance175 = new Graphics()
            .drawCommands(shapes.Internal[156]);
        var instance176 = new Graphics()
            .drawCommands(shapes.Internal[157]);
        var instance177 = new Graphics()
            .drawCommands(shapes.Internal[158]);
        var instance179 = new Graphics()
            .drawCommands(shapes.Internal[159]);
        var instance178 = new Graphics()
            .drawCommands(shapes.Internal[72]);
        var instance181 = new Graphics()
            .drawCommands(shapes.Internal[160]);
        var instance180 = new Graphics()
            .drawCommands(shapes.Internal[73]);
        var instance183 = new Graphics()
            .drawCommands(shapes.Internal[161]);
        var instance182 = new Graphics()
            .drawCommands(shapes.Internal[74]);
        var instance185 = new Graphics()
            .drawCommands(shapes.Internal[162]);
        var instance184 = new Graphics()
            .drawCommands(shapes.Internal[75]);
        var instance188 = new Graphics()
            .drawCommands(shapes.Internal[163]);
        var instance187 = new Graphics()
            .drawCommands(shapes.Internal[71]);
        var instance189 = new Graphics()
            .drawCommands(shapes.Internal[164]);
        var instance190 = new Graphics()
            .drawCommands(shapes.Internal[165]);
        var instance191 = new Graphics()
            .drawCommands(shapes.Internal[166]);
        var instance192 = new Graphics()
            .drawCommands(shapes.Internal[167]);
        var instance193 = new Graphics()
            .drawCommands(shapes.Internal[168]);
        var instance194 = new Graphics()
            .drawCommands(shapes.Internal[118]);
        var instance186 = new lib.circle_alpha();
        var instance16 = new lib.LeftEye_virus();
        var instance15 = new lib.RightEye_virus();
        var instance14 = new lib.mouth_virus_normal();
        var instance99 = new lib.mouth_virus_normal();
        this[instance99.name = "mouth"] = instance99;
        var instance103 = new Graphics()
            .drawCommands(shapes.Internal[38]);
        var instance107 = new Graphics()
            .drawCommands(shapes.Internal[39]);
        var instance109 = new Graphics()
            .drawCommands(shapes.Internal[40]);
        var instance111 = new Graphics()
            .drawCommands(shapes.Internal[41]);
        var instance113 = new Graphics()
            .drawCommands(shapes.Internal[42]);
        var instance115 = new Graphics()
            .drawCommands(shapes.Internal[43]);
        var instance117 = new Graphics()
            .drawCommands(shapes.Internal[44]);
        var instance118 = new Graphics()
            .drawCommands(shapes.Internal[45]);
        var instance119 = new Graphics()
            .drawCommands(shapes.Internal[46]);
        var instance120 = new Graphics()
            .drawCommands(shapes.Internal[47]);
        var instance121 = new Graphics()
            .drawCommands(shapes.Internal[48]);
        var instance122 = new Graphics()
            .drawCommands(shapes.Internal[49]);
        var instance123 = new Graphics()
            .drawCommands(shapes.Internal[50]);
        var instance124 = new Graphics()
            .drawCommands(shapes.Internal[51]);
        var instance125 = new Graphics()
            .drawCommands(shapes.Internal[52]);
        var instance131 = new Graphics()
            .drawCommands(shapes.Internal[53]);
        var instance1 = new lib.hitmesquare();
        this[instance1.name = "hittestie3"] = instance1;
        var instance98 = new Graphics()
            .drawCommands(shapes.Internal[25]);
        var instance102 = new Graphics()
            .drawCommands(shapes.Internal[26]);
        var instance106 = new Graphics()
            .drawCommands(shapes.Internal[27]);
        var instance108 = new Graphics()
            .drawCommands(shapes.Internal[28]);
        var instance110 = new Graphics()
            .drawCommands(shapes.Internal[29]);
        var instance112 = new Graphics()
            .drawCommands(shapes.Internal[30]);
        var instance114 = new lib.inner_circle();
        var instance13 = new lib.virus_alive_sm();
        var instance97 = new lib.white_squre();
        var instance130 = new lib.fuzzies();
        var instance129 = new lib.petals();
        var instance128 = new lib.body();
        var instance127 = new Graphics()
            .drawCommands(shapes.Internal[23]);
        var instance133 = new Graphics()
            .drawCommands(shapes.Internal[23]);
        var instance134 = new Graphics()
            .drawCommands(shapes.Internal[23]);
        var instance132 = new Graphics()
            .drawCommands(shapes.Internal[23]);
        var instance136 = new Graphics()
            .drawCommands(shapes.Internal[23]);
        var instance137 = new lib.virus_alive_sm();
        var instance195 = new Graphics()
            .drawCommands(shapes.Internal[23]);
        var instance196 = new Graphics()
            .drawCommands(shapes.Internal[23])
            .setTransform(204.55, 33.45, 0.758, 0.768);
        var instance135 = new Graphics()
            .drawCommands(shapes.Internal[23]);
        var instance126 = new lib.eyes();
        this.addTimedChild(instance6, 0, 2)
            .addTimedChild(instance10, 2, 7)
            .addTimedChild(instance5, 0, 9, {
                "0": {
                    x: -236.95,
                    y: -172.75,
                    sx: 0.625,
                    sy: 0.625
                }
            })
            .addTimedChild(instance4, 0, 9, {
                "0": {
                    x: 20.65,
                    y: -38.05
                }
            })
            .addTimedChild(instance3, 0, 9, {
                "0": {
                    x: -30.45,
                    y: -38.4
                }
            })
            .addTimedChild(instance2, 0, 1, {
                "0": {
                    x: -25.2,
                    y: 18.05
                }
            })
            .addTimedChild(instance8, 1, 1)
            .addTimedChild(instance7, 1, 1, {
                "1": {
                    x: -232.8,
                    y: -166.55,
                    sx: 0.61,
                    sy: 0.61
                }
            })
            .addTimedChild(instance9, 2, 6)
            .addTimedChild(instance12, 8, 1, {
                "8": {
                    x: -25.2,
                    y: 18.05
                }
            })
            .addTimedChild(instance11, 8, 1, {
                "8": {
                    x: -25.189,
                    y: 18.05
                }
            })
            .addTimedChild(instance18, 9, 1)
            .addTimedChild(instance17, 9, 1)
            .addTimedChild(instance20, 10, 1)
            .addTimedChild(instance19, 10, 1)
            .addTimedChild(instance22, 11, 1)
            .addTimedChild(instance21, 11, 1)
            .addTimedChild(instance24, 12, 1)
            .addTimedChild(instance23, 12, 1)
            .addTimedChild(instance26, 13, 1)
            .addTimedChild(instance25, 13, 1)
            .addTimedChild(instance28, 14, 1)
            .addTimedChild(instance27, 14, 1)
            .addTimedChild(instance30, 15, 1)
            .addTimedChild(instance29, 15, 1)
            .addTimedChild(instance32, 16, 1)
            .addTimedChild(instance31, 16, 1)
            .addTimedChild(instance34, 17, 1)
            .addTimedChild(instance33, 17, 1)
            .addTimedChild(instance36, 18, 1)
            .addTimedChild(instance35, 18, 1)
            .addTimedChild(instance38, 19, 1)
            .addTimedChild(instance37, 19, 1)
            .addTimedChild(instance40, 20, 1)
            .addTimedChild(instance39, 20, 1)
            .addTimedChild(instance42, 21, 1)
            .addTimedChild(instance41, 21, 1)
            .addTimedChild(instance44, 22, 1)
            .addTimedChild(instance43, 22, 1)
            .addTimedChild(instance46, 23, 1)
            .addTimedChild(instance45, 23, 1)
            .addTimedChild(instance48, 24, 1)
            .addTimedChild(instance47, 24, 1)
            .addTimedChild(instance50, 25, 1)
            .addTimedChild(instance49, 25, 1)
            .addTimedChild(instance52, 26, 1)
            .addTimedChild(instance51, 26, 1)
            .addTimedChild(instance54, 27, 1)
            .addTimedChild(instance53, 27, 1)
            .addTimedChild(instance56, 28, 1)
            .addTimedChild(instance55, 28, 1)
            .addTimedChild(instance58, 29, 1)
            .addTimedChild(instance57, 29, 1)
            .addTimedChild(instance60, 30, 1)
            .addTimedChild(instance59, 30, 1)
            .addTimedChild(instance62, 31, 1)
            .addTimedChild(instance61, 31, 1)
            .addTimedChild(instance64, 32, 1)
            .addTimedChild(instance63, 32, 1)
            .addTimedChild(instance66, 33, 1)
            .addTimedChild(instance65, 33, 1)
            .addTimedChild(instance68, 34, 1)
            .addTimedChild(instance67, 34, 1)
            .addTimedChild(instance70, 35, 1)
            .addTimedChild(instance69, 35, 1)
            .addTimedChild(instance72, 36, 1)
            .addTimedChild(instance71, 36, 1)
            .addTimedChild(instance74, 37, 1)
            .addTimedChild(instance73, 37, 1)
            .addTimedChild(instance76, 38, 1)
            .addTimedChild(instance75, 38, 1)
            .addTimedChild(instance78, 39, 1)
            .addTimedChild(instance77, 39, 1)
            .addTimedChild(instance80, 40, 1)
            .addTimedChild(instance79, 40, 1)
            .addTimedChild(instance82, 41, 1)
            .addTimedChild(instance81, 41, 1)
            .addTimedChild(instance84, 42, 1)
            .addTimedChild(instance83, 42, 1)
            .addTimedChild(instance86, 43, 1)
            .addTimedChild(instance85, 43, 1)
            .addTimedChild(instance88, 44, 1)
            .addTimedChild(instance87, 44, 1)
            .addTimedChild(instance90, 45, 1)
            .addTimedChild(instance89, 45, 1)
            .addTimedChild(instance92, 46, 1)
            .addTimedChild(instance91, 46, 1)
            .addTimedChild(instance94, 47, 1)
            .addTimedChild(instance93, 47, 1)
            .addTimedChild(instance96, 48, 1)
            .addTimedChild(instance95, 48, 1)
            .addTimedChild(instance101, 49, 1)
            .addTimedChild(instance100, 49, 1)
            .addTimedChild(instance105, 50, 5)
            .addTimedChild(instance104, 50, 5)
            .addTimedChild(instance116, 55, 79)
            .addTimedChild(instance138, 134, 1)
            .addTimedChild(instance139, 135, 1)
            .addTimedChild(instance140, 136, 1)
            .addTimedChild(instance141, 137, 1)
            .addTimedChild(instance142, 138, 1)
            .addTimedChild(instance143, 139, 1)
            .addTimedChild(instance144, 140, 1)
            .addTimedChild(instance145, 141, 1)
            .addTimedChild(instance146, 142, 1)
            .addTimedChild(instance147, 143, 1)
            .addTimedChild(instance148, 144, 1)
            .addTimedChild(instance149, 145, 1)
            .addTimedChild(instance150, 146, 1)
            .addTimedChild(instance151, 147, 1)
            .addTimedChild(instance152, 148, 1)
            .addTimedChild(instance153, 149, 1)
            .addTimedChild(instance154, 150, 1)
            .addTimedChild(instance155, 151, 1)
            .addTimedChild(instance156, 152, 1)
            .addTimedChild(instance157, 153, 1)
            .addTimedChild(instance158, 154, 1)
            .addTimedChild(instance159, 155, 1)
            .addTimedChild(instance160, 156, 1)
            .addTimedChild(instance161, 157, 1)
            .addTimedChild(instance162, 158, 1)
            .addTimedChild(instance163, 159, 1)
            .addTimedChild(instance164, 160, 1)
            .addTimedChild(instance165, 161, 1)
            .addTimedChild(instance166, 162, 1)
            .addTimedChild(instance167, 163, 1)
            .addTimedChild(instance168, 164, 1)
            .addTimedChild(instance169, 165, 1)
            .addTimedChild(instance170, 166, 1)
            .addTimedChild(instance171, 167, 1)
            .addTimedChild(instance172, 168, 1)
            .addTimedChild(instance173, 169, 1)
            .addTimedChild(instance174, 170, 1)
            .addTimedChild(instance175, 171, 1)
            .addTimedChild(instance176, 172, 1)
            .addTimedChild(instance177, 173, 1)
            .addTimedChild(instance179, 174, 1)
            .addTimedChild(instance178, 174, 1)
            .addTimedChild(instance181, 175, 1)
            .addTimedChild(instance180, 175, 1)
            .addTimedChild(instance183, 176, 1)
            .addTimedChild(instance182, 176, 1)
            .addTimedChild(instance185, 177, 1)
            .addTimedChild(instance184, 177, 1)
            .addTimedChild(instance188, 178, 1)
            .addTimedChild(instance187, 178, 1, {
                "178": {
                    x: -0.5
                }
            })
            .addTimedChild(instance189, 179, 1)
            .addTimedChild(instance190, 180, 1)
            .addTimedChild(instance191, 181, 1)
            .addTimedChild(instance192, 182, 1)
            .addTimedChild(instance193, 183, 1)
            .addTimedChild(instance194, 184, 20)
            .addTimedChild(instance186, 178, 7, {
                "178": {
                    x: 116,
                    y: -64.6,
                    sx: 1,
                    sy: 1,
                    a: 1
                },
                "179": {
                    x: 119.162,
                    y: -63.025,
                    sx: 0.938,
                    sy: 0.938,
                    a: 0.83
                },
                "180": {
                    x: 122.323,
                    y: -61.399,
                    sx: 0.877,
                    sy: 0.877,
                    a: 0.67
                },
                "181": {
                    x: 125.485,
                    y: -59.774,
                    sx: 0.815,
                    sy: 0.815,
                    a: 0.5
                },
                "182": {
                    x: 128.646,
                    y: -58.198,
                    sx: 0.754,
                    sy: 0.754,
                    a: 0.33
                },
                "183": {
                    x: 131.758,
                    y: -56.523,
                    sx: 0.692,
                    sy: 0.692,
                    a: 0.17
                },
                "184": {
                    x: 134.9,
                    y: -54.9,
                    sx: 0.631,
                    sy: 0.631,
                    a: 0
                }
            })
            .addTimedChild(instance16, 9, 195, {
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
                }
            })
            .addTimedChild(instance15, 9, 195, {
                "9": {
                    x: 20.65,
                    y: -38.05
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
                }
            })
            .addTimedChild(instance14, 9, 40, {
                "9": {
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
            .addTimedChild(instance99, 49, 1, {
                "49": {
                    x: -16.2,
                    y: 39.05
                }
            })
            .addTimedChild(instance103, 50, 1)
            .addTimedChild(instance107, 51, 1)
            .addTimedChild(instance109, 52, 1)
            .addTimedChild(instance111, 53, 1)
            .addTimedChild(instance113, 54, 1)
            .addTimedChild(instance115, 55, 1)
            .addTimedChild(instance117, 56, 1)
            .addTimedChild(instance118, 57, 1)
            .addTimedChild(instance119, 58, 1)
            .addTimedChild(instance120, 59, 1)
            .addTimedChild(instance121, 60, 1)
            .addTimedChild(instance122, 61, 1)
            .addTimedChild(instance123, 62, 1)
            .addTimedChild(instance124, 63, 1)
            .addTimedChild(instance125, 64, 1)
            .addTimedChild(instance131, 65, 139)
            .addTimedChild(instance1, 0, 204, {
                "0": {
                    x: 95.8,
                    y: -73.95,
                    sx: 3.742,
                    sy: 5.041,
                    a: 0
                }
            })
            .addTimedChild(instance98, 49, 1)
            .addTimedChild(instance102, 50, 1)
            .addTimedChild(instance106, 51, 1)
            .addTimedChild(instance108, 52, 1)
            .addTimedChild(instance110, 53, 1)
            .addTimedChild(instance112, 54, 1)
            .addTimedChild(instance114, 55, 30, {
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
            .addTimedChild(instance13, 9, 56, {
                "9": {
                    x: 95.85,
                    y: -9.35
                },
                "10": {
                    x: 93.05,
                    y: -8.95
                },
                "11": {
                    x: 90.25,
                    y: -8.6
                },
                "12": {
                    x: 87.45,
                    y: -8.2
                },
                "13": {
                    x: 84.65,
                    y: -7.85
                },
                "14": {
                    x: 81.85,
                    y: -7.45
                },
                "15": {
                    x: 79.05,
                    y: -7.1
                },
                "16": {
                    x: 76.25,
                    y: -6.7
                },
                "17": {
                    x: 73.45,
                    y: -6.35
                },
                "18": {
                    x: 70.65,
                    y: -5.95
                },
                "19": {
                    x: 67.85,
                    y: -5.6
                },
                "20": {
                    x: 64.35,
                    y: -5.4
                },
                "21": {
                    x: 60.9,
                    y: -5.25
                },
                "22": {
                    x: 57.45,
                    y: -5.05
                },
                "23": {
                    x: 53.95,
                    y: -4.9
                },
                "24": {
                    x: 50.5,
                    y: -4.7
                },
                "25": {
                    x: 47,
                    y: -4.55
                },
                "26": {
                    x: 43.55,
                    y: -4.35
                },
                "27": {
                    x: 40.05,
                    y: -4.2
                },
                "28": {
                    x: 36.6,
                    y: -4
                },
                "29": {
                    x: 33.1,
                    y: -3.85
                },
                "30": {
                    x: 31.6,
                    y: -3.05
                },
                "31": {
                    x: 30.05,
                    y: -2.3
                },
                "32": {
                    x: 28.55,
                    y: -1.5
                },
                "33": {
                    x: 27,
                    y: -0.75
                },
                "34": {
                    x: 25.5,
                    y: 0.05
                },
                "35": {
                    x: 23.95,
                    y: 0.8
                },
                "36": {
                    x: 22.45,
                    y: 1.6
                },
                "37": {
                    x: 20.9,
                    y: 2.35
                },
                "38": {
                    x: 19.4,
                    y: 3.15
                },
                "39": {
                    x: 17.85,
                    y: 3.9
                },
                "40": {
                    x: 17.8,
                    y: 4.1
                },
                "41": {
                    x: 17.75,
                    y: 4.25
                },
                "42": {
                    x: 17.7,
                    y: 4.45
                },
                "43": {
                    x: 17.65,
                    y: 4.6
                },
                "44": {
                    x: 17.6,
                    y: 4.8
                },
                "45": {
                    x: 17.55,
                    y: 4.95
                },
                "46": {
                    x: 17.5,
                    y: 5.15
                },
                "47": {
                    x: 17.45,
                    y: 5.3
                },
                "48": {
                    x: 17.4,
                    y: 5.5
                },
                "49": {
                    x: 17.35,
                    y: 5.65
                },
                "55": {
                    x: 18.35,
                    y: 6.3
                },
                "56": {
                    x: 19.35,
                    y: 6.9
                },
                "57": {
                    x: 17.25,
                    y: 6
                },
                "58": {
                    x: 15.2,
                    y: 5.05
                },
                "59": {
                    x: 13.1,
                    y: 4.15
                },
                "60": {
                    x: 13.95,
                    y: 4.5
                },
                "61": {
                    x: 14.8,
                    y: 4.85
                },
                "62": {
                    x: 15.65,
                    y: 5.2
                },
                "63": {
                    x: 16.5,
                    y: 5.55
                },
                "64": {
                    x: 17.35,
                    y: 5.9
                }
            })
            .addTimedChild(instance97, 49, 6, {
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
            .addTimedChild(instance130, 65, 55, {
                "65": {
                    x: -4.85,
                    y: -16.3,
                    sx: 1,
                    sy: 1
                },
                "66": {
                    x: -4.467,
                    y: -15.921,
                    sx: 0.983,
                    sy: 0.983
                },
                "67": {
                    x: -4.084,
                    y: -15.541,
                    sx: 0.966,
                    sy: 0.966
                },
                "68": {
                    x: -3.701,
                    y: -15.162,
                    sx: 0.949,
                    sy: 0.949
                },
                "69": {
                    x: -3.368,
                    y: -14.783,
                    sx: 0.931,
                    sy: 0.931
                },
                "70": {
                    x: -2.984,
                    y: -14.403,
                    sx: 0.914,
                    sy: 0.914
                },
                "71": {
                    x: -2.601,
                    y: -14.024,
                    sx: 0.897,
                    sy: 0.897
                },
                "72": {
                    x: -2.268,
                    y: -13.645,
                    sx: 0.88,
                    sy: 0.88
                },
                "73": {
                    x: -1.885,
                    y: -13.266,
                    sx: 0.863,
                    sy: 0.863
                },
                "74": {
                    x: -1.502,
                    y: -12.936,
                    sx: 0.846,
                    sy: 0.846
                },
                "75": {
                    x: -1.169,
                    y: -12.557,
                    sx: 0.829,
                    sy: 0.829
                },
                "76": {
                    x: -0.786,
                    y: -12.178,
                    sx: 0.812,
                    sy: 0.812
                },
                "77": {
                    x: -0.403,
                    y: -11.798,
                    sx: 0.794,
                    sy: 0.794
                },
                "78": {
                    x: -0.07,
                    y: -11.419,
                    sx: 0.777,
                    sy: 0.777
                },
                "79": {
                    x: 0.314,
                    y: -11.04,
                    sx: 0.76,
                    sy: 0.76
                },
                "80": {
                    x: 0.697,
                    y: -10.66,
                    sx: 0.743,
                    sy: 0.743
                },
                "81": {
                    x: 1.08,
                    y: -10.281,
                    sx: 0.726,
                    sy: 0.726
                },
                "82": {
                    x: 1.413,
                    y: -9.902,
                    sx: 0.709,
                    sy: 0.709
                },
                "83": {
                    x: 1.796,
                    y: -9.572,
                    sx: 0.692,
                    sy: 0.692
                },
                "84": {
                    x: 2.15,
                    y: -9.2,
                    sx: 0.674,
                    sy: 0.674
                },
                "106": {
                    x: 1.674,
                    y: -9.667,
                    sx: 0.698,
                    sy: 0.698
                },
                "107": {
                    x: 1.198,
                    y: -10.184,
                    sx: 0.721,
                    sy: 0.721
                },
                "108": {
                    x: 0.672,
                    y: -10.702,
                    sx: 0.744,
                    sy: 0.744
                },
                "109": {
                    x: 0.197,
                    y: -11.219,
                    sx: 0.767,
                    sy: 0.767
                },
                "110": {
                    x: -0.329,
                    y: -11.686,
                    sx: 0.791,
                    sy: 0.791
                },
                "111": {
                    x: -0.805,
                    y: -12.203,
                    sx: 0.814,
                    sy: 0.814
                },
                "112": {
                    x: -1.281,
                    y: -12.721,
                    sx: 0.837,
                    sy: 0.837
                },
                "113": {
                    x: -1.807,
                    y: -13.238,
                    sx: 0.86,
                    sy: 0.86
                },
                "114": {
                    x: -2.283,
                    y: -13.755,
                    sx: 0.884,
                    sy: 0.884
                },
                "115": {
                    x: -2.809,
                    y: -14.222,
                    sx: 0.907,
                    sy: 0.907
                },
                "116": {
                    x: -3.285,
                    y: -14.739,
                    sx: 0.93,
                    sy: 0.93
                },
                "117": {
                    x: -3.81,
                    y: -15.257,
                    sx: 0.953,
                    sy: 0.953
                },
                "118": {
                    x: -4.286,
                    y: -15.774,
                    sx: 0.977,
                    sy: 0.977
                },
                "119": {
                    x: -4.85,
                    y: -16.3,
                    sx: 1,
                    sy: 1
                }
            })
            .addTimedChild(instance129, 65, 55, {
                "65": {
                    x: -14.2,
                    y: -21.75,
                    sx: 1,
                    sy: 1,
                    a: 1
                },
                "66": {
                    x: -15.588,
                    y: -22.927,
                    sx: 1.045,
                    sy: 1.045,
                    a: 0.95
                },
                "67": {
                    x: -16.976,
                    y: -24.154,
                    sx: 1.09,
                    sy: 1.09,
                    a: 0.89
                },
                "68": {
                    x: -18.364,
                    y: -25.381,
                    sx: 1.135,
                    sy: 1.135,
                    a: 0.84
                },
                "69": {
                    x: -19.751,
                    y: -26.608,
                    sx: 1.18,
                    sy: 1.18,
                    a: 0.79
                },
                "70": {
                    x: -21.139,
                    y: -27.835,
                    sx: 1.225,
                    sy: 1.225,
                    a: 0.74
                },
                "71": {
                    x: -22.527,
                    y: -29.062,
                    sx: 1.27,
                    sy: 1.27,
                    a: 0.68
                },
                "72": {
                    x: -23.915,
                    y: -30.289,
                    sx: 1.314,
                    sy: 1.314,
                    a: 0.63
                },
                "73": {
                    x: -25.353,
                    y: -31.516,
                    sx: 1.359,
                    sy: 1.359,
                    a: 0.58
                },
                "74": {
                    x: -26.741,
                    y: -32.743,
                    sx: 1.404,
                    sy: 1.404,
                    a: 0.53
                },
                "75": {
                    x: -28.128,
                    y: -33.97,
                    sx: 1.449,
                    sy: 1.449,
                    a: 0.47
                },
                "76": {
                    x: -29.516,
                    y: -35.197,
                    sx: 1.494,
                    sy: 1.494,
                    a: 0.42
                },
                "77": {
                    x: -30.904,
                    y: -36.424,
                    sx: 1.539,
                    sy: 1.539,
                    a: 0.37
                },
                "78": {
                    x: -32.292,
                    y: -37.651,
                    sx: 1.584,
                    sy: 1.584,
                    a: 0.32
                },
                "79": {
                    x: -33.68,
                    y: -38.878,
                    sx: 1.629,
                    sy: 1.629,
                    a: 0.26
                },
                "80": {
                    x: -35.118,
                    y: -40.105,
                    sx: 1.674,
                    sy: 1.674,
                    a: 0.21
                },
                "81": {
                    x: -36.505,
                    y: -41.331,
                    sx: 1.719,
                    sy: 1.719,
                    a: 0.16
                },
                "82": {
                    x: -37.893,
                    y: -42.509,
                    sx: 1.764,
                    sy: 1.764,
                    a: 0.11
                },
                "83": {
                    x: -39.281,
                    y: -43.736,
                    sx: 1.809,
                    sy: 1.809,
                    a: 0.05
                },
                "84": {
                    x: -40.7,
                    y: -45,
                    sx: 1.853,
                    sy: 1.853,
                    a: 0
                },
                "106": {
                    x: -38.81,
                    y: -43.269,
                    sx: 1.792,
                    sy: 1.792,
                    a: 0.07
                },
                "107": {
                    x: -36.921,
                    y: -41.638,
                    sx: 1.731,
                    sy: 1.731,
                    a: 0.14
                },
                "108": {
                    x: -35.033,
                    y: -39.959,
                    sx: 1.671,
                    sy: 1.671,
                    a: 0.21
                },
                "109": {
                    x: -33.094,
                    y: -38.278,
                    sx: 1.61,
                    sy: 1.61,
                    a: 0.29
                },
                "110": {
                    x: -31.205,
                    y: -36.648,
                    sx: 1.549,
                    sy: 1.549,
                    a: 0.36
                },
                "111": {
                    x: -29.317,
                    y: -34.968,
                    sx: 1.488,
                    sy: 1.488,
                    a: 0.43
                },
                "112": {
                    x: -27.429,
                    y: -33.339,
                    sx: 1.427,
                    sy: 1.427,
                    a: 0.5
                },
                "113": {
                    x: -25.54,
                    y: -31.658,
                    sx: 1.366,
                    sy: 1.366,
                    a: 0.57
                },
                "114": {
                    x: -23.651,
                    y: -29.978,
                    sx: 1.305,
                    sy: 1.305,
                    a: 0.64
                },
                "115": {
                    x: -21.763,
                    y: -28.349,
                    sx: 1.244,
                    sy: 1.244,
                    a: 0.71
                },
                "116": {
                    x: -19.874,
                    y: -26.668,
                    sx: 1.183,
                    sy: 1.183,
                    a: 0.79
                },
                "117": {
                    x: -17.985,
                    y: -25.038,
                    sx: 1.122,
                    sy: 1.122,
                    a: 0.86
                },
                "118": {
                    x: -16.097,
                    y: -23.358,
                    sx: 1.061,
                    sy: 1.061,
                    a: 0.93
                },
                "119": {
                    x: -14.2,
                    y: -21.75,
                    sx: 1,
                    sy: 1,
                    a: 1
                }
            })
            .addTimedChild(instance128, 65, 55, {
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
                },
                "106": {
                    c: [
                        0.07,
                        0.78,
                        0.07,
                        0.3,
                        0.07,
                        0
                    ]
                },
                "107": {
                    c: [
                        0.14,
                        0.72,
                        0.14,
                        0.27,
                        0.14,
                        0
                    ]
                },
                "108": {
                    c: [
                        0.21,
                        0.65,
                        0.21,
                        0.25,
                        0.21,
                        0
                    ]
                },
                "109": {
                    c: [
                        0.29,
                        0.6,
                        0.29,
                        0.23,
                        0.29,
                        0
                    ]
                },
                "110": {
                    c: [
                        0.36,
                        0.54,
                        0.36,
                        0.21,
                        0.36,
                        0
                    ]
                },
                "111": {
                    c: [
                        0.43,
                        0.48,
                        0.43,
                        0.18,
                        0.43,
                        0
                    ]
                },
                "112": {
                    c: [
                        0.5,
                        0.42,
                        0.5,
                        0.16,
                        0.5,
                        0
                    ]
                },
                "113": {
                    c: [
                        0.57,
                        0.36,
                        0.57,
                        0.14,
                        0.57,
                        0
                    ]
                },
                "114": {
                    c: [
                        0.64,
                        0.3,
                        0.64,
                        0.11,
                        0.64,
                        0
                    ]
                },
                "115": {
                    c: [
                        0.71,
                        0.24,
                        0.71,
                        0.09,
                        0.71,
                        0
                    ]
                },
                "116": {
                    c: [
                        0.79,
                        0.18,
                        0.79,
                        0.07,
                        0.79,
                        0
                    ]
                },
                "117": {
                    c: [
                        0.86,
                        0.12,
                        0.86,
                        0.05,
                        0.86,
                        0
                    ]
                },
                "118": {
                    c: [
                        0.93,
                        0.06,
                        0.93,
                        0.02,
                        0.93,
                        0
                    ]
                },
                "119": {
                    c: [
                        1,
                        0,
                        1,
                        0,
                        1,
                        0
                    ]
                }
            })
            .addTimedChild(instance127, 65, 1, {
                "65": {
                    x: 204.5,
                    y: 33.1,
                    sx: 0.758,
                    sy: 0.758
                }
            })
            .addTimedChild(instance133, 84, 1, {
                "84": {
                    x: 204.5,
                    y: 33.1,
                    sx: 0.758,
                    sy: 0.758
                }
            })
            .addTimedChild(instance134, 95, 1, {
                "95": {
                    x: 204.5,
                    y: 15.1,
                    sx: 0.758,
                    sy: 0.758
                }
            })
            .addTimedChild(instance132, 84, 13, {
                "84": {
                    x: 204.5,
                    y: 33.1,
                    sx: 0.758,
                    sy: 0.758
                }
            })
            .addTimedChild(instance136, 105, 15, {
                "105": {
                    x: 204.5,
                    y: 35.1,
                    sx: 0.758,
                    sy: 0.758
                }
            })
            .addTimedChild(instance137, 120, 65, {
                "120": {
                    x: 16.45,
                    y: 6.05
                },
                "121": {
                    x: 15.45,
                    y: 2.4
                },
                "122": {
                    x: 17.1,
                    y: -0.45
                },
                "123": {
                    x: 18.95,
                    y: -2.95
                },
                "124": {
                    x: 20.9,
                    y: -5.25
                },
                "125": {
                    x: 22.9,
                    y: -7.25
                },
                "126": {
                    x: 24.9,
                    y: -9.05
                },
                "127": {
                    x: 26.9,
                    y: -10.65
                },
                "128": {
                    x: 28.85,
                    y: -12.1
                },
                "129": {
                    x: 30.75,
                    y: -13.4
                },
                "130": {
                    x: 32.55,
                    y: -14.55
                },
                "131": {
                    x: 34.25,
                    y: -15.55
                },
                "132": {
                    x: 35.85,
                    y: -16.5
                },
                "133": {
                    x: 37.35,
                    y: -17.35
                },
                "134": {
                    x: 38.15
                },
                "135": {
                    x: 39.15
                },
                "136": {
                    x: 40.25
                },
                "137": {
                    x: 41.5
                },
                "138": {
                    x: 42.9
                },
                "139": {
                    x: 44.45
                },
                "140": {
                    x: 46.15
                },
                "141": {
                    x: 48
                },
                "142": {
                    x: 49.95
                },
                "143": {
                    x: 52.1
                },
                "144": {
                    x: 56.9,
                    y: -17.9
                },
                "145": {
                    x: 61.65,
                    y: -18.5
                },
                "146": {
                    x: 66.45,
                    y: -19.05
                },
                "147": {
                    x: 71.2,
                    y: -19.65
                },
                "148": {
                    x: 76,
                    y: -20.2
                },
                "149": {
                    x: 80.75,
                    y: -20.8
                },
                "150": {
                    x: 85.55,
                    y: -21.35
                },
                "151": {
                    x: 90.3,
                    y: -21.95
                },
                "152": {
                    x: 95.05,
                    y: -22.5
                },
                "153": {
                    x: 99.85,
                    y: -23.1
                },
                "154": {
                    x: 101.7,
                    y: -23.85
                },
                "155": {
                    x: 103.5,
                    y: -24.6
                },
                "156": {
                    x: 105.35,
                    y: -25.35
                },
                "157": {
                    x: 107.15,
                    y: -26.1
                },
                "158": {
                    x: 109,
                    y: -26.85
                },
                "159": {
                    x: 110.8,
                    y: -27.6
                },
                "160": {
                    x: 112.6,
                    y: -28.35
                },
                "161": {
                    x: 114.45,
                    y: -29.1
                },
                "162": {
                    x: 116.3,
                    y: -29.85
                },
                "163": {
                    x: 118.1,
                    y: -30.6
                },
                "164": {
                    x: 119.95,
                    y: -30.45
                },
                "165": {
                    x: 121.8,
                    y: -30.3
                },
                "166": {
                    x: 123.65,
                    y: -30.15
                },
                "167": {
                    x: 125.5,
                    y: -30
                },
                "168": {
                    x: 127.35,
                    y: -29.85
                },
                "169": {
                    x: 128.95,
                    y: -30.3
                },
                "170": {
                    x: 130.5,
                    y: -30.75
                },
                "171": {
                    x: 132.1,
                    y: -31.2
                },
                "172": {
                    x: 133.7,
                    y: -31.7
                },
                "173": {
                    x: 135.25,
                    y: -32.15
                },
                "174": {
                    x: 136.85,
                    y: -32.6
                },
                "175": {
                    x: 140
                },
                "176": {
                    x: 143.2
                },
                "177": {
                    x: 146.35
                },
                "178": {
                    x: 147.7,
                    y: -32.8
                },
                "179": {
                    x: 149.05,
                    y: -33.05
                },
                "180": {
                    x: 150.4,
                    y: -33.25
                },
                "181": {
                    x: 151.8,
                    y: -33.45
                },
                "182": {
                    x: 153.15,
                    y: -33.65
                },
                "183": {
                    x: 154.5,
                    y: -33.9
                },
                "184": {
                    x: 155.85,
                    y: -34.1
                }
            })
            .addTimedChild(instance195, 193, 1, {
                "193": {
                    x: 204.5,
                    y: 53.1,
                    sx: 0.758,
                    sy: 0.758
                }
            })
            .addTimedChild(instance196, 203, 1)
            .addTimedChild(instance135, 105, 99, {
                "105": {
                    x: 204.5,
                    y: 53.1,
                    sx: 0.758,
                    sy: 0.758
                }
            })
            .addTimedChild(instance126, 65, 55, {
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
                },
                "106": {
                    a: 0.07
                },
                "107": {
                    a: 0.14
                },
                "108": {
                    a: 0.21
                },
                "109": {
                    a: 0.29
                },
                "110": {
                    a: 0.36
                },
                "111": {
                    a: 0.43
                },
                "112": {
                    a: 0.5
                },
                "113": {
                    a: 0.57
                },
                "114": {
                    a: 0.64
                },
                "115": {
                    a: 0.71
                },
                "116": {
                    a: 0.79
                },
                "117": {
                    a: 0.86
                },
                "118": {
                    a: 0.93
                },
                "119": {
                    a: 1
                }
            })
            .addAction(function () {
                /* stop();
                 */
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
                temp_x = this._parent._x+157;
                temp_y = this._parent._y-34.5;
                //
                this._parent._parent.CreateBuddedVirus(temp_x, temp_y, this._parent.nAngle, this._parent.nVitesse);
                */
            }, 185)
            .addAction(function () {
                /* // loop on the generation of virus animation 
                gotoAndPlay(106);
                */
            }, 203);
    });

    lib.Internal = MovieClip.extend(function () {
        MovieClip.call(this, {
            duration: 1,
            framerate: 30
        });
        var instance10 = new Graphics()
            .drawCommands(shapes.Internal[211]);
        var instance9 = new lib.macro_virus_multiply()
            .setTransform(565.95, 169.3);
        this[instance9.name = "immune1"] = instance9;
        var instance8 = new lib.macro_virus_multiply()
            .setTransform(469.95, 336.8);
        this[instance8.name = "immune2"] = instance8;
        var instance7 = new lib.macro_virus_multiply()
            .setTransform(552.65, 517.35);
        this[instance7.name = "immune3"] = instance7;
        var instance6 = new lib.virus_alive_sm()
            .setTransform(959.65, 200.5);
        this[instance6.name = "live_virus1"] = instance6;
        var instance5 = new lib.virus_alive_sm()
            .setTransform(1039.65, 260.5);
        this[instance5.name = "live_virus2"] = instance5;
        var instance4 = new lib.virus_alive_sm()
            .setTransform(909.65, 300.5);
        this[instance4.name = "live_virus3"] = instance4;
        var instance3 = new lib.virus_alive_sm()
            .setTransform(1009.65, 354.1);
        this[instance3.name = "live_virus4"] = instance3;
        var instance2 = new lib.virus_alive_sm()
            .setTransform(919.65, 400.5);
        this[instance2.name = "live_virus4"] = instance2;
        var instance1 = new lib.Back()
            .setTransform(340, 50);
        this[instance1.name = "back"] = instance1;
        this.addChild(instance10, instance9, instance8, instance7, instance6, instance5, instance4, instance3, instance2, instance1);
    });

    lib.Internal.assets = {
        "Internal": "images/Internal.shapes.txt"
    };
})(PIXI, lib = lib || {});
var lib;
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        stage: lib.Internal,
        background: 0xffffff,
        width: 1624,
        height: 750,
        framerate: 30,
        totalFrames: 1,
        library: lib
    };
}