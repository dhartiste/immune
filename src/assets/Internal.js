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

    lib.hittestie = Container.extend(function () {
        Container.call(this);
        var instance1 = new Graphics()
            .drawCommands(shapes.Internal[1])
            .setTransform(32.45, -30.8);
        this.addChild(instance1);
    });

    lib.antenae_single = Container.extend(function () {
        Container.call(this);
        var instance3 = new Graphics()
            .drawCommands(shapes.Internal[4])
            .setTransform(-277.05, -95.65);
        var instance2 = new Graphics()
            .drawCommands(shapes.Internal[3])
            .setTransform(-277.05, -95.65);
        var instance1 = new Graphics()
            .drawCommands(shapes.Internal[2])
            .setTransform(-277.05, -95.65);
        this.addChild(instance3, instance2, instance1);
    });

    lib.hitmesquare = Container.extend(function () {
        Container.call(this);
        var instance1 = new Graphics()
            .drawCommands(shapes.Internal[22]);
        this.addChild(instance1);
    });

    lib.eyelash = Container.extend(function () {
        Container.call(this);
        var instance2 = new Graphics()
            .drawCommands(shapes.Internal[25])
            .setTransform(-157.8, -117.1);
        var instance1 = new Graphics()
            .drawCommands(shapes.Internal[24])
            .setTransform(-157.8, -117.1);
        this.addChild(instance2, instance1);
    });

    lib.eye = Container.extend(function () {
        Container.call(this);
        var instance2 = new Graphics()
            .drawCommands(shapes.Internal[27])
            .setTransform(-161.95, -119.45);
        var instance1 = new Graphics()
            .drawCommands(shapes.Internal[26])
            .setTransform(-161.95, -119.45);
        this.addChild(instance2, instance1);
    });

    lib.tail_clip = MovieClip.extend(function () {
        MovieClip.call(this, {
            duration: 30
        });
        var instance1 = new Graphics()
            .drawCommands(shapes.Internal[28]);
        var instance2 = new Graphics()
            .drawCommands(shapes.Internal[29]);
        var instance3 = new Graphics()
            .drawCommands(shapes.Internal[30]);
        var instance4 = new Graphics()
            .drawCommands(shapes.Internal[31]);
        var instance5 = new Graphics()
            .drawCommands(shapes.Internal[32]);
        var instance6 = new Graphics()
            .drawCommands(shapes.Internal[33]);
        var instance7 = new Graphics()
            .drawCommands(shapes.Internal[34]);
        var instance8 = new Graphics()
            .drawCommands(shapes.Internal[35]);
        var instance9 = new Graphics()
            .drawCommands(shapes.Internal[36]);
        var instance10 = new Graphics()
            .drawCommands(shapes.Internal[37]);
        var instance11 = new Graphics()
            .drawCommands(shapes.Internal[38]);
        var instance12 = new Graphics()
            .drawCommands(shapes.Internal[39]);
        var instance13 = new Graphics()
            .drawCommands(shapes.Internal[40]);
        var instance14 = new Graphics()
            .drawCommands(shapes.Internal[41]);
        var instance15 = new Graphics()
            .drawCommands(shapes.Internal[42]);
        var instance16 = new Graphics()
            .drawCommands(shapes.Internal[43]);
        var instance17 = new Graphics()
            .drawCommands(shapes.Internal[44]);
        var instance18 = new Graphics()
            .drawCommands(shapes.Internal[45]);
        var instance19 = new Graphics()
            .drawCommands(shapes.Internal[46]);
        var instance20 = new Graphics()
            .drawCommands(shapes.Internal[47]);
        var instance21 = new Graphics()
            .drawCommands(shapes.Internal[48]);
        var instance22 = new Graphics()
            .drawCommands(shapes.Internal[49]);
        var instance23 = new Graphics()
            .drawCommands(shapes.Internal[50]);
        var instance24 = new Graphics()
            .drawCommands(shapes.Internal[51]);
        var instance25 = new Graphics()
            .drawCommands(shapes.Internal[52]);
        var instance26 = new Graphics()
            .drawCommands(shapes.Internal[53]);
        var instance27 = new Graphics()
            .drawCommands(shapes.Internal[54]);
        var instance28 = new Graphics()
            .drawCommands(shapes.Internal[55]);
        var instance29 = new Graphics()
            .drawCommands(shapes.Internal[56]);
        var instance30 = new Graphics()
            .drawCommands(shapes.Internal[28]);
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
            .addTimedChild(instance21, 20, 1)
            .addTimedChild(instance22, 21, 1)
            .addTimedChild(instance23, 22, 1)
            .addTimedChild(instance24, 23, 1)
            .addTimedChild(instance25, 24, 1)
            .addTimedChild(instance26, 25, 1)
            .addTimedChild(instance27, 26, 1)
            .addTimedChild(instance28, 27, 1)
            .addTimedChild(instance29, 28, 1)
            .addTimedChild(instance30, 29, 1);
    });

    lib.body = Container.extend(function () {
        Container.call(this);
        var instance4 = new Graphics()
            .drawCommands(shapes.Internal[58])
            .setTransform(0.15, -0.55);
        var instance3 = new Graphics()
            .drawCommands(shapes.Internal[57])
            .setTransform(0.15, -0.55);
        var instance2 = new Graphics()
            .drawCommands(shapes.Internal[58]);
        var instance1 = new Graphics()
            .drawCommands(shapes.Internal[57]);
        this.addChild(instance4, instance3, instance2, instance1);
    });

    lib.bacteria_simple = Container.extend(function () {
        Container.call(this);
        var instance13 = new lib.body()
            .setTransform(1.55, 9.75, 0.593, 0.537);
        this[instance13.name = "body"] = instance13;
        var instance12 = new lib.tail_clip()
            .setTransform(109.2, 28.35, 0.593, 0.537);
        var instance11 = new lib.eye()
            .setTransform(20.4, 16, 0.593, 0.537);
        var instance10 = new lib.eyelash()
            .setTransform(17.95, 14.75, 0.593, 0.537);
        var instance9 = new Graphics()
            .drawCommands(shapes.Internal[23])
            .setTransform(-76.2, -48.05, 0.593, 0.537);
        var instance8 = new lib.antenae_single()
            .setTransform(88.5, 2.4, 0.593, 0.537);
        this[instance8.name = "ant7"] = instance8;
        var instance7 = new lib.antenae_single()
            .setTransform(75.2, 1.95, 0.592, 0.538, 0, 0.154, -0.127);
        this[instance7.name = "ant6"] = instance7;
        var instance6 = new lib.antenae_single()
            .setTransform(63.65, 1.95, 0.592, 0.538, 0, 0.154, -0.127);
        this[instance6.name = "ant5"] = instance6;
        var instance5 = new lib.antenae_single()
            .setTransform(39.6, 1.5, 0.591, 0.537, 0, 0.146, -0.12);
        this[instance5.name = "ant3"] = instance5;
        var instance4 = new lib.antenae_single()
            .setTransform(27.45, 1.25, 0.592, 0.539, 0, 0.184, -0.151);
        this[instance4.name = "ant2"] = instance4;
        var instance3 = new lib.antenae_single()
            .setTransform(14.8, 2.8, 0.588, 0.543, 0, 0.346, -0.287);
        this[instance3.name = "ant1"] = instance3;
        var instance2 = new lib.antenae_single()
            .setTransform(51.85, 1.85, 0.592, 0.538, 0, 0.136, -0.112);
        this[instance2.name = "ant4"] = instance2;
        var instance1 = new lib.hitmesquare()
            .setTransform(56.55, 26.3, 3.594, 1.114)
            .setAlpha(0);
        this[instance1.name = "hittestie"] = instance1;
        this.addChild(instance13, instance12, instance11, instance10, instance9, instance8, instance7, instance6, instance5, instance4, instance3, instance2, instance1);
    });

    lib.mac_baceyebrows = Container.extend(function () {
        Container.call(this);
        var instance8 = new Graphics()
            .drawCommands(shapes.Internal[13])
            .setTransform(-318.4, -198.2, 0.872, 0.872);
        var instance7 = new Graphics()
            .drawCommands(shapes.Internal[12])
            .setTransform(-318.4, -198.2, 0.872, 0.872);
        var instance6 = new Graphics()
            .drawCommands(shapes.Internal[11])
            .setTransform(-318.4, -198.2, 0.872, 0.872);
        var instance5 = new Graphics()
            .drawCommands(shapes.Internal[10])
            .setTransform(-318.4, -198.2, 0.872, 0.872);
        var instance4 = new Graphics()
            .drawCommands(shapes.Internal[9])
            .setTransform(-318.4, -198.2, 0.872, 0.872);
        var instance3 = new Graphics()
            .drawCommands(shapes.Internal[8])
            .setTransform(-318.4, -198.2, 0.872, 0.872);
        var instance2 = new Graphics()
            .drawCommands(shapes.Internal[7])
            .setTransform(-318.4, -198.2, 0.872, 0.872);
        var instance1 = new Graphics()
            .drawCommands(shapes.Internal[6])
            .setTransform(-318.4, -198.2, 0.872, 0.872);
        this.addChild(instance8, instance7, instance6, instance5, instance4, instance3, instance2, instance1);
    });

    lib.crown = Container.extend(function () {
        Container.call(this);
        var instance2 = new Graphics()
            .drawCommands(shapes.Internal[65])
            .setTransform(15.4, 112.75);
        var instance1 = new Graphics()
            .drawCommands(shapes.Internal[64])
            .setTransform(-398.45, -207.15);
        this.addChild(instance2, instance1);
    });

    lib.macro_bac_blue = Container.extend(function () {
        Container.call(this);
        var instance1 = new Graphics()
            .drawCommands(shapes.Internal[62])
            .setTransform(73.8, 97.1);
        this.addChild(instance1);
    });

    lib.macro_bacteria = MovieClip.extend(function () {
        MovieClip.call(this, {
            duration: 82,
            labels: {
                intro: 0,
                intro_stop: 14,
                dead: 15,
                dead_stop: 29,
                reveal: 30,
                reveal_stop: 81
            }
        });
        var instance23 = new lib.crown();
        var instance22 = new Graphics()
            .drawCommands(shapes.Internal[63]);
        var instance21 = new Graphics()
            .drawCommands(shapes.Internal[62]);
        var instance29 = new lib.macro_bac_blue();
        var instance68 = new Graphics()
            .drawCommands(shapes.Internal[66]);
        var instance67 = new lib.crown()
            .setTransform(-3.7, -104.15, 0.932, 0.932);
        var instance66 = new Graphics()
            .drawCommands(shapes.Internal[62])
            .setTransform(4, 3.3);
        var instance20 = new Graphics()
            .drawCommands(shapes.Internal[20]);
        var instance19 = new Graphics()
            .drawCommands(shapes.Internal[19]);
        var instance18 = new Graphics()
            .drawCommands(shapes.Internal[20]);
        var instance17 = new Graphics()
            .drawCommands(shapes.Internal[19]);
        var instance16 = new Graphics()
            .drawCommands(shapes.Internal[60]);
        var instance15 = new Graphics()
            .drawCommands(shapes.Internal[59]);
        var instance14 = new Graphics()
            .drawCommands(shapes.Internal[17]);
        var instance13 = new Graphics()
            .drawCommands(shapes.Internal[16]);
        var instance12 = new Graphics()
            .drawCommands(shapes.Internal[15]);
        var instance11 = new Graphics()
            .drawCommands(shapes.Internal[14]);
        var instance10 = new Graphics()
            .drawCommands(shapes.Internal[13]);
        var instance9 = new Graphics()
            .drawCommands(shapes.Internal[12]);
        var instance8 = new Graphics()
            .drawCommands(shapes.Internal[11]);
        var instance7 = new Graphics()
            .drawCommands(shapes.Internal[10]);
        var instance6 = new Graphics()
            .drawCommands(shapes.Internal[9]);
        var instance5 = new Graphics()
            .drawCommands(shapes.Internal[8]);
        var instance4 = new Graphics()
            .drawCommands(shapes.Internal[7]);
        var instance3 = new Graphics()
            .drawCommands(shapes.Internal[6]);
        var instance65 = new Graphics()
            .drawCommands(shapes.Internal[60])
            .setTransform(-347.5, -262.25, 0.872, 0.872);
        var instance64 = new Graphics()
            .drawCommands(shapes.Internal[59])
            .setTransform(-347.5, -262.25, 0.872, 0.872);
        var instance63 = new Graphics()
            .drawCommands(shapes.Internal[17])
            .setTransform(-347.5, -262.25, 0.872, 0.872);
        var instance62 = new Graphics()
            .drawCommands(shapes.Internal[16])
            .setTransform(-347.5, -262.25, 0.872, 0.872);
        var instance61 = new Graphics()
            .drawCommands(shapes.Internal[15])
            .setTransform(-347.5, -262.25, 0.872, 0.872);
        var instance60 = new Graphics()
            .drawCommands(shapes.Internal[14])
            .setTransform(-347.5, -262.25, 0.872, 0.872);
        var instance59 = new Graphics()
            .drawCommands(shapes.Internal[13])
            .setTransform(-347.5, -262.25, 0.872, 0.872);
        var instance58 = new Graphics()
            .drawCommands(shapes.Internal[12])
            .setTransform(-347.5, -262.25, 0.872, 0.872);
        var instance57 = new Graphics()
            .drawCommands(shapes.Internal[11])
            .setTransform(-347.5, -262.25, 0.872, 0.872);
        var instance56 = new Graphics()
            .drawCommands(shapes.Internal[10])
            .setTransform(-347.5, -262.25, 0.872, 0.872);
        var instance55 = new Graphics()
            .drawCommands(shapes.Internal[9])
            .setTransform(-347.5, -262.25, 0.872, 0.872);
        var instance54 = new Graphics()
            .drawCommands(shapes.Internal[8])
            .setTransform(-347.5, -262.25, 0.872, 0.872);
        var instance53 = new Graphics()
            .drawCommands(shapes.Internal[7])
            .setTransform(-347.5, -262.25, 0.872, 0.872);
        var instance52 = new Graphics()
            .drawCommands(shapes.Internal[6])
            .setTransform(-347.5, -262.25, 0.872, 0.872);
        var instance2 = new Graphics()
            .drawCommands(shapes.Internal[61]);
        var instance28 = new Graphics()
            .drawCommands(shapes.Internal[15]);
        var instance31 = new Graphics()
            .drawCommands(shapes.Internal[15]);
        var instance27 = new lib.mac_baceyebrows();
        var instance26 = new Graphics()
            .drawCommands(shapes.Internal[60]);
        var instance25 = new Graphics()
            .drawCommands(shapes.Internal[59]);
        var instance24 = new Graphics()
            .drawCommands(shapes.Internal[17]);
        var instance30 = new Graphics()
            .drawCommands(shapes.Internal[17]);
        var instance51 = new lib.bacteria_simple();
        this[instance51.name = "bac"] = instance51;
        var instance72 = new lib.tail_clip();
        var instance50 = new Graphics()
            .drawCommands(shapes.Internal[21]);
        var instance49 = new Graphics()
            .drawCommands(shapes.Internal[20])
            .setTransform(-397.658, -255.136, 0.872, 0.872);
        var instance48 = new Graphics()
            .drawCommands(shapes.Internal[19])
            .setTransform(-397.658, -255.136, 0.872, 0.872);
        var instance47 = new Graphics()
            .drawCommands(shapes.Internal[20])
            .setTransform(-347.5, -262.2, 0.872, 0.872);
        var instance46 = new Graphics()
            .drawCommands(shapes.Internal[19])
            .setTransform(-347.5, -262.2, 0.872, 0.872);
        var instance45 = new Graphics()
            .drawCommands(shapes.Internal[18]);
        var instance44 = new Graphics()
            .drawCommands(shapes.Internal[17])
            .setTransform(-347.5, -262.2, 0.872, 0.872);
        var instance43 = new Graphics()
            .drawCommands(shapes.Internal[16])
            .setTransform(-347.5, -262.2, 0.872, 0.872);
        var instance42 = new Graphics()
            .drawCommands(shapes.Internal[15])
            .setTransform(-347.5, -262.2, 0.872, 0.872);
        var instance41 = new Graphics()
            .drawCommands(shapes.Internal[14])
            .setTransform(-347.5, -262.2, 0.872, 0.872);
        var instance40 = new Graphics()
            .drawCommands(shapes.Internal[13])
            .setTransform(-347.5, -262.2, 0.872, 0.872);
        var instance39 = new Graphics()
            .drawCommands(shapes.Internal[12])
            .setTransform(-347.5, -262.2, 0.872, 0.872);
        var instance38 = new Graphics()
            .drawCommands(shapes.Internal[11])
            .setTransform(-347.5, -262.2, 0.872, 0.872);
        var instance37 = new Graphics()
            .drawCommands(shapes.Internal[10])
            .setTransform(-347.5, -262.2, 0.872, 0.872);
        var instance36 = new Graphics()
            .drawCommands(shapes.Internal[9])
            .setTransform(-347.5, -262.2, 0.872, 0.872);
        var instance35 = new Graphics()
            .drawCommands(shapes.Internal[8])
            .setTransform(-347.5, -262.2, 0.872, 0.872);
        var instance34 = new Graphics()
            .drawCommands(shapes.Internal[7])
            .setTransform(-347.5, -262.2, 0.872, 0.872);
        var instance33 = new Graphics()
            .drawCommands(shapes.Internal[6])
            .setTransform(-347.5, -262.2, 0.872, 0.872);
        var instance32 = new Graphics()
            .drawCommands(shapes.Internal[5]);
        var instance71 = new lib.antenae_single();
        this[instance71.name = "ant1"] = instance71;
        var instance70 = new lib.antenae_single();
        this[instance70.name = "ant1"] = instance70;
        var instance69 = new lib.antenae_single();
        this[instance69.name = "ant1"] = instance69;
        var instance1 = new lib.hittestie();
        this[instance1.name = "hittestie"] = instance1;
        this.addTimedChild(instance23, 1, 14, {
                "1": {
                    x: -3.7,
                    y: -58.15,
                    sx: 0.932,
                    sy: 0.932
                },
                "2": {
                    y: -61.699
                },
                "3": {
                    y: -65.249
                },
                "4": {
                    y: -68.749
                },
                "5": {
                    y: -72.299
                },
                "6": {
                    y: -75.849
                },
                "7": {
                    y: -79.399
                },
                "8": {
                    y: -82.899
                },
                "9": {
                    y: -86.449
                },
                "10": {
                    y: -89.999
                },
                "11": {
                    y: -93.549
                },
                "12": {
                    y: -97.049
                },
                "13": {
                    y: -100.599
                },
                "14": {
                    y: -104.15
                }
            })
            .addTimedChild(instance22, 0, 15)
            .addTimedChild(instance21, 0, 15, {
                "0": {
                    x: 4,
                    y: 3.35
                }
            })
            .addTimedChild(instance29, 15, 14, {
                "15": {
                    x: -74.8,
                    y: -97.1
                }
            })
            .addTimedChild(instance68, 30, 52)
            .addTimedChild(instance67, 30, 52)
            .addTimedChild(instance66, 30, 52)
            .addTimedChild(instance20, 0, 82, {
                "0": {
                    x: -397.658,
                    y: -255.136,
                    sx: 0.872,
                    sy: 0.872
                },
                "15": {
                    x: -401.658,
                    y: -258.534
                },
                "30": {
                    x: -397.658,
                    y: -255.186
                }
            })
            .addTimedChild(instance19, 0, 82, {
                "0": {
                    x: -397.658,
                    y: -255.136,
                    sx: 0.872,
                    sy: 0.872
                },
                "15": {
                    x: -401.658,
                    y: -258.534
                },
                "30": {
                    x: -397.658,
                    y: -255.186
                }
            })
            .addTimedChild(instance18, 0, 82, {
                "0": {
                    x: -347.5,
                    y: -262.2,
                    sx: 0.872,
                    sy: 0.872
                },
                "15": {
                    x: -351.5,
                    y: -265.6
                },
                "30": {
                    x: -347.5,
                    y: -262.25
                }
            })
            .addTimedChild(instance17, 0, 82, {
                "0": {
                    x: -347.5,
                    y: -262.2,
                    sx: 0.872,
                    sy: 0.872
                },
                "15": {
                    x: -351.5,
                    y: -265.6
                },
                "30": {
                    x: -347.5,
                    y: -262.25
                }
            })
            .addTimedChild(instance16, 0, 15, {
                "0": {
                    x: -347.5,
                    y: -262.2,
                    sx: 0.872,
                    sy: 0.872
                }
            })
            .addTimedChild(instance15, 0, 15, {
                "0": {
                    x: -347.5,
                    y: -262.2,
                    sx: 0.872,
                    sy: 0.872
                }
            })
            .addTimedChild(instance14, 0, 15, {
                "0": {
                    x: -347.5,
                    y: -262.2,
                    sx: 0.872,
                    sy: 0.872
                }
            })
            .addTimedChild(instance13, 0, 15, {
                "0": {
                    x: -347.5,
                    y: -262.2,
                    sx: 0.872,
                    sy: 0.872
                }
            })
            .addTimedChild(instance12, 0, 15, {
                "0": {
                    x: -347.5,
                    y: -262.2,
                    sx: 0.872,
                    sy: 0.872
                }
            })
            .addTimedChild(instance11, 0, 15, {
                "0": {
                    x: -347.5,
                    y: -262.2,
                    sx: 0.872,
                    sy: 0.872
                }
            })
            .addTimedChild(instance10, 0, 15, {
                "0": {
                    x: -347.5,
                    y: -262.2,
                    sx: 0.872,
                    sy: 0.872
                }
            })
            .addTimedChild(instance9, 0, 15, {
                "0": {
                    x: -347.5,
                    y: -262.2,
                    sx: 0.872,
                    sy: 0.872
                }
            })
            .addTimedChild(instance8, 0, 15, {
                "0": {
                    x: -347.5,
                    y: -262.2,
                    sx: 0.872,
                    sy: 0.872
                }
            })
            .addTimedChild(instance7, 0, 15, {
                "0": {
                    x: -347.5,
                    y: -262.2,
                    sx: 0.872,
                    sy: 0.872
                }
            })
            .addTimedChild(instance6, 0, 15, {
                "0": {
                    x: -347.5,
                    y: -262.2,
                    sx: 0.872,
                    sy: 0.872
                }
            })
            .addTimedChild(instance5, 0, 15, {
                "0": {
                    x: -347.5,
                    y: -262.2,
                    sx: 0.872,
                    sy: 0.872
                }
            })
            .addTimedChild(instance4, 0, 15, {
                "0": {
                    x: -347.5,
                    y: -262.2,
                    sx: 0.872,
                    sy: 0.872
                }
            })
            .addTimedChild(instance3, 0, 15, {
                "0": {
                    x: -347.5,
                    y: -262.2,
                    sx: 0.872,
                    sy: 0.872
                }
            })
            .addTimedChild(instance65, 30, 52)
            .addTimedChild(instance64, 30, 52)
            .addTimedChild(instance63, 30, 52)
            .addTimedChild(instance62, 30, 52)
            .addTimedChild(instance61, 30, 52)
            .addTimedChild(instance60, 30, 52)
            .addTimedChild(instance59, 30, 52)
            .addTimedChild(instance58, 30, 52)
            .addTimedChild(instance57, 30, 52)
            .addTimedChild(instance56, 30, 52)
            .addTimedChild(instance55, 30, 52)
            .addTimedChild(instance54, 30, 52)
            .addTimedChild(instance53, 30, 52)
            .addTimedChild(instance52, 30, 52)
            .addTimedChild(instance2, 0, 82, {
                "0": {
                    x: -349.4,
                    y: -284.2,
                    sx: 0.872,
                    sy: 0.872
                },
                "15": {
                    x: -353.45,
                    y: -287.6
                },
                "30": {
                    x: -349.4,
                    y: -284.25
                }
            })
            .addTimedChild(instance28, 15, 1, {
                "15": {
                    x: -365.7,
                    y: -276.4,
                    sx: 0.906,
                    sy: 0.913
                }
            })
            .addTimedChild(instance31, 29, 1, {
                "29": {
                    x: -351.5,
                    y: -170.15,
                    sx: 0.872,
                    sy: 0.543
                }
            })
            .addTimedChild(instance27, 15, 15, {
                "15": {
                    x: -33.1,
                    y: -67.4,
                    a: 1
                },
                "16": {
                    a: 0.93
                },
                "17": {
                    a: 0.86
                },
                "18": {
                    a: 0.79
                },
                "19": {
                    a: 0.71
                },
                "20": {
                    a: 0.64
                },
                "21": {
                    a: 0.57
                },
                "22": {
                    a: 0.5
                },
                "23": {
                    a: 0.43
                },
                "24": {
                    a: 0.36
                },
                "25": {
                    a: 0.29
                },
                "26": {
                    a: 0.21
                },
                "27": {
                    a: 0.14
                },
                "28": {
                    a: 0.07
                },
                "29": {
                    a: 0
                }
            })
            .addTimedChild(instance26, 15, 15, {
                "15": {
                    x: -351.5,
                    y: -265.6,
                    sx: 0.872,
                    sy: 0.872
                }
            })
            .addTimedChild(instance25, 15, 15, {
                "15": {
                    x: -351.5,
                    y: -265.6,
                    sx: 0.872,
                    sy: 0.872
                }
            })
            .addTimedChild(instance24, 15, 1, {
                "15": {
                    x: -378.55,
                    y: -276.7,
                    sx: 0.945,
                    sy: 0.913
                }
            })
            .addTimedChild(instance30, 29, 1, {
                "29": {
                    x: -351.5,
                    y: -157.45,
                    sx: 0.872,
                    sy: 0.507
                }
            })
            .addTimedChild(instance51, 30, 47, {
                "30": {
                    x: 53.2,
                    y: 5.85,
                    sx: 1,
                    sy: 1,
                    r: 0
                },
                "31": {
                    x: 47.35,
                    y: 6
                },
                "32": {
                    x: 41.45,
                    y: 6.2
                },
                "33": {
                    x: 35.6,
                    y: 6.35
                },
                "34": {
                    x: 29.7,
                    y: 6.5
                },
                "35": {
                    x: 23.85,
                    y: 6.7
                },
                "36": {
                    x: 17.95,
                    y: 6.85
                },
                "37": {
                    x: 15.2,
                    y: 7.15
                },
                "38": {
                    x: 12.45,
                    y: 7.45
                },
                "39": {
                    x: 9.75,
                    y: 7.75
                },
                "40": {
                    x: 7,
                    y: 8.05
                },
                "41": {
                    x: 4.55
                },
                "42": {
                    x: 2.05
                },
                "43": {
                    x: -0.4
                },
                "44": {
                    x: -2.9
                },
                "45": {
                    x: -5.35
                },
                "46": {
                    x: -7.257,
                    y: 4.786,
                    r: 0.065
                },
                "47": {
                    x: -8.939,
                    y: 1.591,
                    r: 0.129
                },
                "48": {
                    x: -10.045,
                    y: -1.485,
                    sx: 0.999,
                    sy: 0.999,
                    r: 0.194
                },
                "49": {
                    x: -10.85,
                    y: -4.4,
                    r: 0.258
                },
                "50": {
                    x: -13.34,
                    y: -6.908,
                    r: 0.282
                },
                "51": {
                    x: -15.775,
                    y: -9.413,
                    r: 0.306
                },
                "52": {
                    x: -18.254,
                    y: -11.966,
                    r: 0.33
                },
                "53": {
                    x: -20.7,
                    y: -14.45,
                    r: 0.354
                },
                "54": {
                    x: -22.9,
                    y: -15.2
                },
                "55": {
                    x: -25.2,
                    y: -15.95
                },
                "56": {
                    x: -27.45,
                    y: -16.75
                },
                "57": {
                    x: -29.8,
                    y: -17.6
                },
                "58": {
                    x: -32.55,
                    y: -18.65
                },
                "59": {
                    x: -35.3,
                    y: -19.8
                },
                "60": {
                    x: -38.05,
                    y: -20.9
                },
                "61": {
                    x: -40.8,
                    y: -22.1
                },
                "62": {
                    x: -40.458,
                    y: -28.635,
                    r: 0.417
                },
                "63": {
                    x: -39.912,
                    y: -35.022,
                    sx: 0.998,
                    sy: 0.998,
                    r: 0.481
                },
                "64": {
                    x: -38.913,
                    y: -41.097,
                    r: 0.544
                },
                "65": {
                    x: -37.75,
                    y: -47,
                    r: 0.608
                },
                "66": {
                    x: -33.79,
                    y: -51.337,
                    r: 0.671
                },
                "67": {
                    x: -29.59,
                    y: -55.376,
                    r: 0.734
                },
                "68": {
                    x: -25.165,
                    y: -59.104,
                    sx: 0.997,
                    sy: 0.997,
                    r: 0.798
                },
                "69": {
                    x: -20.6,
                    y: -62.55,
                    r: 0.861
                },
                "74": {
                    x: -21.499,
                    y: -68.498
                },
                "75": {
                    x: -22.499,
                    y: -74.498
                },
                "76": {
                    x: -23.6,
                    y: -80.55
                }
            })
            .addTimedChild(instance72, 77, 5, {
                "77": {
                    x: 24.45,
                    y: 20.75,
                    sx: 0.559,
                    sy: 0.611,
                    r: 0.822
                },
                "78": {
                    x: 14.167,
                    y: 0.699,
                    sy: 0.489,
                    r: 0.9
                },
                "79": {
                    x: 3.978,
                    y: -19.234,
                    sy: 0.367,
                    r: 0.978
                },
                "80": {
                    x: -6.194,
                    y: -39.015,
                    sy: 0.244,
                    r: 1.055
                },
                "81": {
                    x: -16.3,
                    y: -58.65,
                    sy: 0.122,
                    r: 1.133
                }
            })
            .addTimedChild(instance50, 30, 52)
            .addTimedChild(instance49, 30, 52)
            .addTimedChild(instance48, 30, 52)
            .addTimedChild(instance47, 30, 52)
            .addTimedChild(instance46, 30, 52)
            .addTimedChild(instance45, 30, 52)
            .addTimedChild(instance44, 30, 52)
            .addTimedChild(instance43, 30, 52)
            .addTimedChild(instance42, 30, 52)
            .addTimedChild(instance41, 30, 52)
            .addTimedChild(instance40, 30, 52)
            .addTimedChild(instance39, 30, 52)
            .addTimedChild(instance38, 30, 52)
            .addTimedChild(instance37, 30, 52)
            .addTimedChild(instance36, 30, 52)
            .addTimedChild(instance35, 30, 52)
            .addTimedChild(instance34, 30, 52)
            .addTimedChild(instance33, 30, 52)
            .addTimedChild(instance32, 30, 52)
            .addTimedChild(instance71, 45, 33, {
                "45": {
                    x: 34.25,
                    y: 9.25,
                    sx: 0.587,
                    sy: 0.542,
                    kx: 0.137,
                    ky: -0.078,
                    a: 1
                },
                "46": {
                    x: 29.599,
                    y: 8.716,
                    kx: 0.5,
                    ky: -0.442,
                    a: 0.94
                },
                "47": {
                    x: 24.25,
                    y: 11.491,
                    kx: 0.905,
                    ky: -0.847,
                    a: 0.88
                },
                "48": {
                    x: 19.847,
                    y: 16.116,
                    kx: 1.352,
                    ky: -1.293,
                    a: 0.8
                },
                "49": {
                    x: 16.797,
                    y: 21.429,
                    kx: 1.84,
                    ky: -1.782,
                    a: 0.73
                },
                "50": {
                    x: 14.94,
                    y: 26.552,
                    kx: 2.37,
                    ky: -2.311,
                    a: 0.64
                },
                "51": {
                    x: 13.597,
                    y: 30.679,
                    kx: 2.941,
                    ky: -2.882,
                    a: 0.55
                },
                "52": {
                    x: 11.626,
                    y: 33.557,
                    kx: 3.554,
                    ky: 2.788,
                    a: 0.46
                },
                "53": {
                    x: 7.849,
                    y: 36.011,
                    kx: 4.208,
                    ky: 2.134,
                    a: 0.35
                },
                "54": {
                    x: 1.778,
                    y: 39.601,
                    kx: -1.38,
                    ky: 1.438,
                    a: 0.24
                },
                "55": {
                    x: -5.525,
                    y: 46.244,
                    kx: -0.642,
                    ky: 0.701,
                    a: 0.13
                },
                "56": {
                    x: -11.9,
                    y: 57.35,
                    kx: 0.137,
                    ky: -0.078,
                    a: 0
                },
                "57": {
                    x: 40.05,
                    y: 9.9,
                    kx: -0.197,
                    ky: 0.256,
                    a: 1
                },
                "58": {
                    x: 42.062,
                    y: 6.223,
                    kx: -0.608,
                    ky: 0.667,
                    a: 0.98
                },
                "59": {
                    x: 46.018,
                    y: 3.841,
                    kx: -1.072,
                    ky: 1.131,
                    a: 0.95
                },
                "60": {
                    x: 49.821,
                    y: 2.675,
                    kx: 4.694,
                    ky: 1.648,
                    a: 0.93
                },
                "61": {
                    x: 52.713,
                    y: 2.695,
                    kx: 4.124,
                    ky: 2.218,
                    a: 0.89
                },
                "62": {
                    x: 53.898,
                    y: 3.172,
                    kx: 3.5,
                    ky: 2.841,
                    a: 0.86
                },
                "63": {
                    x: 54.075,
                    y: 3.444,
                    kx: 2.824,
                    ky: -2.765,
                    a: 0.82
                },
                "64": {
                    x: 52.954,
                    y: 6.913,
                    kx: 2.094,
                    ky: -2.036,
                    a: 0.78
                },
                "65": {
                    x: 51.256,
                    y: 8.873,
                    kx: 1.312,
                    ky: -1.253,
                    a: 0.74
                },
                "66": {
                    x: 52.5,
                    y: 9.909,
                    kx: 0.476,
                    ky: -0.418,
                    a: 0.7
                },
                "67": {
                    x: 57.67,
                    y: 12.907,
                    kx: -0.413,
                    ky: 0.471,
                    a: 0.64
                },
                "68": {
                    x: 64.211,
                    y: 20.78,
                    kx: -1.355,
                    ky: 1.413,
                    a: 0.59
                },
                "69": {
                    x: 67.254,
                    y: 33.342,
                    kx: 3.934,
                    ky: 2.408,
                    a: 0.54
                },
                "70": {
                    x: 64.168,
                    y: 45.76,
                    kx: 2.886,
                    ky: -2.827,
                    a: 0.48
                },
                "71": {
                    x: 58.07,
                    y: 52.445,
                    kx: 1.785,
                    ky: -1.726,
                    a: 0.42
                },
                "72": {
                    x: 56.43,
                    y: 53.699,
                    kx: 0.63,
                    ky: -0.572,
                    a: 0.36
                },
                "73": {
                    x: 62.406,
                    y: 57.225,
                    kx: -0.577,
                    ky: 0.636,
                    a: 0.29
                },
                "74": {
                    x: 69.325,
                    y: 69.511,
                    kx: 4.446,
                    ky: 1.896,
                    a: 0.22
                },
                "75": {
                    x: 67.803,
                    y: 85.909,
                    sx: 0.588,
                    kx: 3.132,
                    ky: -3.074,
                    a: 0.15
                },
                "76": {
                    x: 60.049,
                    y: 94.898,
                    kx: 1.765,
                    ky: -1.707,
                    a: 0.08
                },
                "77": {
                    x: 59,
                    y: 96.85,
                    sy: 0.543,
                    kx: 0.346,
                    ky: -0.287,
                    a: 0
                }
            })
            .addTimedChild(instance70, 40, 27, {
                "40": {
                    x: 34.45,
                    y: 9,
                    sx: 0.587,
                    sy: 0.542,
                    kx: 0.18,
                    ky: -0.122,
                    a: 1
                },
                "41": {
                    x: 38.983,
                    y: 1.603,
                    kx: -0.282,
                    ky: 0.34,
                    a: 0.96
                },
                "42": {
                    x: 45.774,
                    y: -2.885,
                    kx: -0.85,
                    ky: 0.908,
                    a: 0.92
                },
                "43": {
                    x: 53.941,
                    y: -5.257,
                    kx: -1.524,
                    ky: 1.583,
                    a: 0.86
                },
                "44": {
                    x: 61.964,
                    y: -4.064,
                    kx: 3.978,
                    ky: 2.364,
                    a: 0.8
                },
                "45": {
                    x: 67.683,
                    y: 1.789,
                    kx: 3.09,
                    ky: -3.032,
                    a: 0.73
                },
                "46": {
                    x: 68.95,
                    y: 9.489,
                    kx: 2.097,
                    ky: -2.038,
                    a: 0.65
                },
                "47": {
                    x: 70.456,
                    y: 14.52,
                    kx: 0.996,
                    ky: -0.938,
                    a: 0.57
                },
                "48": {
                    x: 77.97,
                    y: 19.898,
                    kx: -0.211,
                    ky: 0.269,
                    a: 0.47
                },
                "49": {
                    x: 88.947,
                    y: 34.096,
                    kx: -1.524,
                    ky: 1.582,
                    a: 0.36
                },
                "50": {
                    x: 91.899,
                    y: 56.053,
                    kx: 3.339,
                    ky: 3.002,
                    a: 0.25
                },
                "51": {
                    x: 85.601,
                    y: 71.81,
                    kx: 1.813,
                    ky: -1.754,
                    a: 0.13
                },
                "52": {
                    x: 86.45,
                    y: 78.3,
                    kx: 0.18,
                    ky: -0.122,
                    a: 0
                },
                "53": {
                    x: 38.8,
                    y: 9.1,
                    kx: -0.267,
                    ky: 0.325,
                    a: 1
                },
                "54": {
                    x: 54.247,
                    y: 6.778,
                    kx: -1.5,
                    ky: 1.559,
                    a: 0.9
                },
                "55": {
                    x: 64.148,
                    y: 12.522,
                    kx: 3.602,
                    ky: 2.741,
                    a: 0.8
                },
                "56": {
                    x: 66.921,
                    y: 16.259,
                    kx: 2.472,
                    ky: -2.413,
                    a: 0.7
                },
                "57": {
                    x: 69.327,
                    y: 14.071,
                    kx: 1.396,
                    ky: -1.337,
                    a: 0.61
                },
                "58": {
                    x: 76.805,
                    y: 9.408,
                    kx: 0.372,
                    ky: -0.312,
                    a: 0.53
                },
                "59": {
                    x: 88.728,
                    y: 8.236,
                    kx: -0.6,
                    ky: 0.66,
                    a: 0.45
                },
                "60": {
                    x: 100.234,
                    y: 12.572,
                    kx: -1.52,
                    ky: 1.58,
                    a: 0.37
                },
                "61": {
                    x: 107.678,
                    y: 20.166,
                    kx: 3.896,
                    ky: 2.447,
                    a: 0.3
                },
                "62": {
                    x: 110.439,
                    y: 27.245,
                    kx: 3.081,
                    ky: -3.021,
                    a: 0.23
                },
                "63": {
                    x: 110.571,
                    y: 31.486,
                    kx: 2.319,
                    ky: -2.259,
                    a: 0.16
                },
                "64": {
                    x: 110.765,
                    y: 32.627,
                    kx: 1.608,
                    ky: -1.548,
                    a: 0.11
                },
                "65": {
                    x: 112.336,
                    y: 32.412,
                    kx: 0.951,
                    ky: -0.89,
                    a: 0.05
                },
                "66": {
                    x: 115,
                    y: 32.65,
                    kx: 0.345,
                    ky: -0.285,
                    a: 0
                }
            })
            .addTimedChild(instance69, 36, 46, {
                "36": {
                    x: 32.75,
                    y: 9.85,
                    sx: 0.588,
                    sy: 0.543,
                    kx: 0.346,
                    ky: -0.287,
                    a: 1
                },
                "37": {
                    x: 30.038,
                    y: 8.163,
                    kx: 1.115,
                    ky: -1.056,
                    a: 0.94
                },
                "38": {
                    x: 29.727,
                    y: 7.634,
                    kx: 1.934,
                    ky: -1.876,
                    a: 0.88
                },
                "39": {
                    x: 30.919,
                    y: 3.688,
                    kx: 2.804,
                    ky: -2.746,
                    a: 0.8
                },
                "40": {
                    x: 30.153,
                    y: -4.472,
                    kx: 3.725,
                    ky: 2.617,
                    a: 0.73
                },
                "41": {
                    x: 23.741,
                    y: -14.062,
                    kx: 4.696,
                    ky: 1.645,
                    a: 0.65
                },
                "42": {
                    x: 11.942,
                    y: -19.687,
                    kx: -0.565,
                    ky: 0.624,
                    a: 0.57
                },
                "43": {
                    x: -0.044,
                    y: -18.093,
                    kx: 0.507,
                    ky: -0.449,
                    a: 0.49
                },
                "44": {
                    x: -6.309,
                    y: -11.938,
                    kx: 1.631,
                    ky: -1.572,
                    a: 0.4
                },
                "45": {
                    x: -6.826,
                    y: -7.416,
                    kx: 2.804,
                    ky: -2.746,
                    a: 0.3
                },
                "46": {
                    x: -7.994,
                    y: -6.924,
                    kx: 4.029,
                    ky: 2.313,
                    a: 0.21
                },
                "47": {
                    x: -15.447,
                    y: -4.589,
                    kx: -0.98,
                    ky: 1.038,
                    a: 0.11
                },
                "48": {
                    x: -23.6,
                    y: 8.3,
                    kx: 0.346,
                    ky: -0.287,
                    a: 0
                },
                "49": {
                    x: 40.45,
                    y: 11,
                    sx: 0.586,
                    sy: 0.541,
                    kx: -0.179,
                    ky: 0.237,
                    a: 1
                },
                "50": {
                    x: 34.647,
                    y: 8.133,
                    sx: 0.587,
                    kx: 0.795,
                    ky: -0.736,
                    a: 0.93
                },
                "51": {
                    x: 32.852,
                    y: 6.967,
                    sy: 0.542,
                    kx: 1.812,
                    ky: -1.753,
                    a: 0.85
                },
                "52": {
                    x: 34.145,
                    y: 1.323,
                    kx: 2.872,
                    ky: -2.814,
                    a: 0.77
                },
                "53": {
                    x: 31.983,
                    y: -10.189,
                    kx: 3.976,
                    ky: 2.366,
                    a: 0.68
                },
                "54": {
                    x: 21.729,
                    y: -21.62,
                    kx: -1.161,
                    ky: 1.219,
                    a: 0.59
                },
                "55": {
                    x: 6.342,
                    y: -24.954,
                    kx: 0.03,
                    ky: 0.029,
                    a: 0.5
                },
                "56": {
                    x: -4.764,
                    y: -19.094,
                    kx: 1.263,
                    ky: -1.204,
                    a: 0.41
                },
                "57": {
                    x: -7.212,
                    y: -10.575,
                    kx: 2.54,
                    ky: -2.481,
                    a: 0.31
                },
                "58": {
                    x: -6.853,
                    y: -6.882,
                    kx: 3.859,
                    ky: 2.482,
                    a: 0.21
                },
                "59": {
                    x: -13.493,
                    y: -3.413,
                    sx: 0.588,
                    kx: -1.061,
                    ky: 1.119,
                    a: 0.11
                },
                "60": {
                    x: -23.15,
                    y: 10.2,
                    sy: 0.543,
                    kx: 0.346,
                    ky: -0.287,
                    a: 0
                },
                "61": {
                    x: 41.35,
                    y: 10.7,
                    sx: 0.587,
                    sy: 0.542,
                    kx: -0.324,
                    ky: 0.382,
                    a: 1
                },
                "62": {
                    x: 35,
                    y: 3.963,
                    kx: -0.125,
                    ky: 0.183,
                    a: 0.97
                },
                "63": {
                    x: 31.966,
                    y: -1.429,
                    kx: 0.09,
                    ky: -0.031,
                    a: 0.94
                },
                "64": {
                    x: 29.948,
                    y: -7.321,
                    kx: 0.32,
                    ky: -0.262,
                    a: 0.91
                },
                "65": {
                    x: 28.599,
                    y: -13.449,
                    kx: 0.566,
                    ky: -0.507,
                    a: 0.87
                },
                "66": {
                    x: 27.413,
                    y: -19.622,
                    kx: 0.828,
                    ky: -0.769,
                    a: 0.84
                },
                "67": {
                    x: 23.946,
                    y: -25.083,
                    kx: 1.105,
                    ky: -1.046,
                    a: 0.79
                },
                "68": {
                    x: 15.96,
                    y: -24.155,
                    kx: 1.398,
                    ky: -1.339,
                    a: 0.75
                },
                "69": {
                    x: 8.401,
                    y: -18.726,
                    kx: 1.706,
                    ky: -1.648,
                    a: 0.71
                },
                "70": {
                    x: 3.13,
                    y: -10.363,
                    kx: 2.03,
                    ky: -1.972,
                    a: 0.66
                },
                "71": {
                    x: -0.576,
                    y: -0.998,
                    kx: 2.37,
                    ky: -2.312,
                    a: 0.61
                },
                "72": {
                    x: -3.425,
                    y: 8.694,
                    kx: 2.726,
                    ky: -2.667,
                    a: 0.56
                },
                "73": {
                    x: -6.232,
                    y: 18.516,
                    kx: 3.097,
                    ky: -3.038,
                    a: 0.51
                },
                "74": {
                    x: -9.41,
                    y: 27.8,
                    kx: 3.484,
                    ky: 2.858,
                    a: 0.45
                },
                "75": {
                    x: -13.42,
                    y: 36.716,
                    kx: 3.886,
                    ky: 2.456,
                    a: 0.39
                },
                "76": {
                    x: -18.507,
                    y: 45.497,
                    kx: 4.304,
                    ky: 2.037,
                    a: 0.34
                },
                "77": {
                    x: -25.145,
                    y: 54.716,
                    kx: -1.545,
                    ky: 1.604,
                    a: 0.27
                },
                "78": {
                    x: -33.312,
                    y: 64.913,
                    kx: -1.096,
                    ky: 1.155,
                    a: 0.21
                },
                "79": {
                    x: -43.27,
                    y: 76.237,
                    sx: 0.588,
                    kx: -0.631,
                    ky: 0.69,
                    a: 0.14
                },
                "80": {
                    x: -55.059,
                    y: 88.252,
                    kx: -0.15,
                    ky: 0.209,
                    a: 0.07
                },
                "81": {
                    x: -69.8,
                    y: 97.9,
                    sy: 0.543,
                    kx: 0.346,
                    ky: -0.287,
                    a: 0
                }
            })
            .addTimedChild(instance1, 0, 82, {
                "0": {
                    x: -46.7,
                    y: -76.5,
                    sx: 1.364,
                    sy: 1.15,
                    a: 0
                },
                "30": {
                    x: -78.7,
                    y: -147.05,
                    sx: 2.003,
                    sy: 1.981
                }
            })
            .addAction(function () {
                /* this.bac.ant1._visible = false;*/
            }, 36)
            .addAction(function () {
                /* this.bac.ant2._visible = false;*/
            }, 40)
            .addAction(function () {
                /* this.bac.ant3._visible = false;*/
            }, 45)
            .addAction(function () {
                /* this.bac.ant4._visible = false;*/
            }, 49)
            .addAction(function () {
                /* this.bac.ant5._visible = false;*/
            }, 53)
            .addAction(function () {
                /* this.bac.ant6._visible = false;*/
            }, 57)
            .addAction(function () {
                /* this.bac.ant7._visible = false;*/
            }, 61);
    });

    lib.yellow_bacteria = Container.extend(function () {
        Container.call(this);
        var instance3 = new Graphics()
            .drawCommands(shapes.Internal[69])
            .setTransform(168.75, 20.1);
        var instance2 = new Graphics()
            .drawCommands(shapes.Internal[68])
            .setTransform(168.75, 20.1);
        var instance1 = new Graphics()
            .drawCommands(shapes.Internal[67])
            .setTransform(170.45, 24.05);
        this.addChild(instance3, instance2, instance1);
    });

    lib.four_attenae = Container.extend(function () {
        Container.call(this);
        var instance4 = new lib.antenae_single()
            .setTransform(54.9, 3.8, 0.998, 0.998, -0.276);
        var instance3 = new lib.antenae_single()
            .setTransform(0, 17.15, 0.998, 0.998, -0.399);
        var instance2 = new lib.antenae_single()
            .setTransform(269.7, 2.25, 0.999, 0.999, 0.018);
        var instance1 = new lib.antenae_single()
            .setTransform(318, 13.35, 0.998, 0.998, 0.118);
        this.addChild(instance4, instance3, instance2, instance1);
    });

    lib.tic2 = Container.extend(function () {
        Container.call(this);
        var instance1 = new Graphics()
            .drawCommands(shapes.Internal[181])
            .setTransform(-216.3, -1.7, 1.973, 0.62, 0, 3.142, 3.141);
        this.addChild(instance1);
    });

    lib.tic1 = Container.extend(function () {
        Container.call(this);
        var instance1 = new Graphics()
            .drawCommands(shapes.Internal[182])
            .setTransform(-173.6, 11.45, 1.56, 0.916, 0, 3.161, 3.122);
        this.addChild(instance1);
    });

    lib.bacteria_divide = MovieClip.extend(function () {
        MovieClip.call(this, {
            duration: 115,
            labels: {
                divide: 0,
                divide_stop: 54,
                reveal: 55,
                reveal_stop: 113
            }
        });
        var instance175 = new lib.body()
            .setRenderable(false);
        this[instance175.name = "body"] = instance175;
        var instance13 = new lib.body();
        this[instance13.name = "body"] = instance13;
        var instance18 = new Graphics()
            .drawCommands(shapes.Internal[58]);
        var instance17 = new Graphics()
            .drawCommands(shapes.Internal[57]);
        var instance16 = new Graphics()
            .drawCommands(shapes.Internal[58]);
        var instance15 = new Graphics()
            .drawCommands(shapes.Internal[57]);
        var instance19 = new Graphics()
            .drawCommands(shapes.Internal[57]);
        var instance21 = new Graphics()
            .drawCommands(shapes.Internal[123]);
        var instance20 = new Graphics()
            .drawCommands(shapes.Internal[106]);
        var instance23 = new Graphics()
            .drawCommands(shapes.Internal[124]);
        var instance22 = new Graphics()
            .drawCommands(shapes.Internal[107]);
        var instance25 = new Graphics()
            .drawCommands(shapes.Internal[125]);
        var instance24 = new Graphics()
            .drawCommands(shapes.Internal[108]);
        var instance27 = new Graphics()
            .drawCommands(shapes.Internal[126]);
        var instance26 = new Graphics()
            .drawCommands(shapes.Internal[109]);
        var instance29 = new Graphics()
            .drawCommands(shapes.Internal[127]);
        var instance28 = new Graphics()
            .drawCommands(shapes.Internal[110]);
        var instance31 = new Graphics()
            .drawCommands(shapes.Internal[128]);
        var instance30 = new Graphics()
            .drawCommands(shapes.Internal[111]);
        var instance36 = new Graphics()
            .drawCommands(shapes.Internal[129]);
        var instance35 = new Graphics()
            .drawCommands(shapes.Internal[112]);
        var instance42 = new Graphics()
            .drawCommands(shapes.Internal[130]);
        var instance41 = new Graphics()
            .drawCommands(shapes.Internal[113]);
        var instance45 = new Graphics()
            .drawCommands(shapes.Internal[131]);
        var instance44 = new Graphics()
            .drawCommands(shapes.Internal[114]);
        var instance48 = new Graphics()
            .drawCommands(shapes.Internal[132]);
        var instance47 = new Graphics()
            .drawCommands(shapes.Internal[115]);
        var instance51 = new Graphics()
            .drawCommands(shapes.Internal[133]);
        var instance50 = new Graphics()
            .drawCommands(shapes.Internal[116]);
        var instance54 = new Graphics()
            .drawCommands(shapes.Internal[134]);
        var instance53 = new Graphics()
            .drawCommands(shapes.Internal[117]);
        var instance57 = new Graphics()
            .drawCommands(shapes.Internal[135]);
        var instance56 = new Graphics()
            .drawCommands(shapes.Internal[118]);
        var instance60 = new Graphics()
            .drawCommands(shapes.Internal[136]);
        var instance59 = new Graphics()
            .drawCommands(shapes.Internal[119]);
        var instance63 = new Graphics()
            .drawCommands(shapes.Internal[137]);
        var instance62 = new Graphics()
            .drawCommands(shapes.Internal[120]);
        var instance66 = new Graphics()
            .drawCommands(shapes.Internal[138]);
        var instance65 = new Graphics()
            .drawCommands(shapes.Internal[121]);
        var instance69 = new Graphics()
            .drawCommands(shapes.Internal[139]);
        var instance68 = new Graphics()
            .drawCommands(shapes.Internal[122]);
        var instance73 = new Graphics()
            .drawCommands(shapes.Internal[140]);
        var instance75 = new Graphics()
            .drawCommands(shapes.Internal[141]);
        var instance78 = new Graphics()
            .drawCommands(shapes.Internal[142]);
        var instance81 = new Graphics()
            .drawCommands(shapes.Internal[143]);
        var instance84 = new Graphics()
            .drawCommands(shapes.Internal[144]);
        var instance89 = new Graphics()
            .drawCommands(shapes.Internal[145]);
        var instance92 = new Graphics()
            .drawCommands(shapes.Internal[146]);
        var instance94 = new Graphics()
            .drawCommands(shapes.Internal[147]);
        var instance99 = new Graphics()
            .drawCommands(shapes.Internal[148]);
        var instance102 = new Graphics()
            .drawCommands(shapes.Internal[149]);
        var instance105 = new Graphics()
            .drawCommands(shapes.Internal[150]);
        var instance108 = new Graphics()
            .drawCommands(shapes.Internal[151]);
        var instance113 = new Graphics()
            .drawCommands(shapes.Internal[152]);
        var instance115 = new Graphics()
            .drawCommands(shapes.Internal[167]);
        var instance114 = new Graphics()
            .drawCommands(shapes.Internal[153]);
        var instance117 = new Graphics()
            .drawCommands(shapes.Internal[168]);
        var instance116 = new Graphics()
            .drawCommands(shapes.Internal[154]);
        var instance119 = new Graphics()
            .drawCommands(shapes.Internal[169]);
        var instance118 = new Graphics()
            .drawCommands(shapes.Internal[155]);
        var instance121 = new Graphics()
            .drawCommands(shapes.Internal[170]);
        var instance120 = new Graphics()
            .drawCommands(shapes.Internal[156]);
        var instance123 = new Graphics()
            .drawCommands(shapes.Internal[171]);
        var instance122 = new Graphics()
            .drawCommands(shapes.Internal[157]);
        var instance127 = new Graphics()
            .drawCommands(shapes.Internal[172]);
        var instance126 = new Graphics()
            .drawCommands(shapes.Internal[158]);
        var instance130 = new Graphics()
            .drawCommands(shapes.Internal[173]);
        var instance129 = new Graphics()
            .drawCommands(shapes.Internal[159]);
        var instance133 = new Graphics()
            .drawCommands(shapes.Internal[174]);
        var instance132 = new Graphics()
            .drawCommands(shapes.Internal[160]);
        var instance136 = new Graphics()
            .drawCommands(shapes.Internal[175]);
        var instance135 = new Graphics()
            .drawCommands(shapes.Internal[161]);
        var instance142 = new Graphics()
            .drawCommands(shapes.Internal[176]);
        var instance141 = new Graphics()
            .drawCommands(shapes.Internal[162]);
        var instance152 = new Graphics()
            .drawCommands(shapes.Internal[177]);
        var instance151 = new Graphics()
            .drawCommands(shapes.Internal[163]);
        var instance156 = new Graphics()
            .drawCommands(shapes.Internal[178]);
        var instance155 = new Graphics()
            .drawCommands(shapes.Internal[164]);
        var instance160 = new Graphics()
            .drawCommands(shapes.Internal[179]);
        var instance159 = new Graphics()
            .drawCommands(shapes.Internal[165]);
        var instance166 = new Graphics()
            .drawCommands(shapes.Internal[180]);
        var instance165 = new Graphics()
            .drawCommands(shapes.Internal[166]);
        var instance12 = new lib.tail_clip();
        var instance34 = new lib.tail_clip();
        var instance171 = new lib.body();
        this[instance171.name = "body"] = instance171;
        var instance170 = new Graphics()
            .drawCommands(shapes.Internal[28]);
        var instance11 = new lib.eye();
        var instance33 = new lib.eye();
        var instance10 = new lib.eyelash();
        var instance9 = new Graphics()
            .drawCommands(shapes.Internal[23]);
        var instance14 = new Graphics()
            .drawCommands(shapes.Internal[23]);
        var instance32 = new Graphics()
            .drawCommands(shapes.Internal[23]);
        var instance40 = new Graphics()
            .drawCommands(shapes.Internal[24]);
        var instance39 = new Graphics()
            .drawCommands(shapes.Internal[25]);
        var instance38 = new Graphics()
            .drawCommands(shapes.Internal[92]);
        var instance37 = new Graphics()
            .drawCommands(shapes.Internal[70]);
        var instance43 = new Graphics()
            .drawCommands(shapes.Internal[71]);
        var instance46 = new Graphics()
            .drawCommands(shapes.Internal[72]);
        var instance49 = new Graphics()
            .drawCommands(shapes.Internal[73]);
        var instance52 = new Graphics()
            .drawCommands(shapes.Internal[74]);
        var instance55 = new Graphics()
            .drawCommands(shapes.Internal[75]);
        var instance58 = new Graphics()
            .drawCommands(shapes.Internal[76]);
        var instance64 = new Graphics()
            .drawCommands(shapes.Internal[93]);
        var instance67 = new Graphics()
            .drawCommands(shapes.Internal[94]);
        var instance72 = new Graphics()
            .drawCommands(shapes.Internal[24]);
        var instance71 = new Graphics()
            .drawCommands(shapes.Internal[25]);
        var instance70 = new Graphics()
            .drawCommands(shapes.Internal[95]);
        var instance74 = new Graphics()
            .drawCommands(shapes.Internal[96]);
        var instance61 = new Graphics()
            .drawCommands(shapes.Internal[77]);
        var instance77 = new Graphics()
            .drawCommands(shapes.Internal[95]);
        var instance76 = new Graphics()
            .drawCommands(shapes.Internal[78]);
        var instance80 = new Graphics()
            .drawCommands(shapes.Internal[94]);
        var instance79 = new Graphics()
            .drawCommands(shapes.Internal[79]);
        var instance83 = new Graphics()
            .drawCommands(shapes.Internal[93]);
        var instance82 = new Graphics()
            .drawCommands(shapes.Internal[80]);
        var instance88 = new Graphics()
            .drawCommands(shapes.Internal[24]);
        var instance87 = new Graphics()
            .drawCommands(shapes.Internal[25]);
        var instance86 = new Graphics()
            .drawCommands(shapes.Internal[92]);
        var instance85 = new Graphics()
            .drawCommands(shapes.Internal[81]);
        var instance91 = new Graphics()
            .drawCommands(shapes.Internal[97]);
        var instance90 = new Graphics()
            .drawCommands(shapes.Internal[82]);
        var instance93 = new Graphics()
            .drawCommands(shapes.Internal[83]);
        var instance98 = new Graphics()
            .drawCommands(shapes.Internal[24]);
        var instance97 = new Graphics()
            .drawCommands(shapes.Internal[25]);
        var instance96 = new Graphics()
            .drawCommands(shapes.Internal[98]);
        var instance95 = new Graphics()
            .drawCommands(shapes.Internal[84]);
        var instance101 = new Graphics()
            .drawCommands(shapes.Internal[99]);
        var instance100 = new Graphics()
            .drawCommands(shapes.Internal[85]);
        var instance104 = new Graphics()
            .drawCommands(shapes.Internal[100]);
        var instance103 = new Graphics()
            .drawCommands(shapes.Internal[86]);
        var instance107 = new Graphics()
            .drawCommands(shapes.Internal[101]);
        var instance106 = new Graphics()
            .drawCommands(shapes.Internal[87]);
        var instance112 = new Graphics()
            .drawCommands(shapes.Internal[24]);
        var instance111 = new Graphics()
            .drawCommands(shapes.Internal[25]);
        var instance125 = new Graphics()
            .drawCommands(shapes.Internal[24]);
        var instance124 = new Graphics()
            .drawCommands(shapes.Internal[25]);
        var instance110 = new Graphics()
            .drawCommands(shapes.Internal[92]);
        var instance128 = new Graphics()
            .drawCommands(shapes.Internal[102]);
        var instance131 = new Graphics()
            .drawCommands(shapes.Internal[103]);
        var instance134 = new Graphics()
            .drawCommands(shapes.Internal[104]);
        var instance140 = new Graphics()
            .drawCommands(shapes.Internal[24]);
        var instance139 = new Graphics()
            .drawCommands(shapes.Internal[25]);
        var instance148 = new Graphics()
            .drawCommands(shapes.Internal[24]);
        var instance147 = new Graphics()
            .drawCommands(shapes.Internal[25]);
        var instance138 = new Graphics()
            .drawCommands(shapes.Internal[105]);
        var instance109 = new Graphics()
            .drawCommands(shapes.Internal[88]);
        var instance150 = new Graphics()
            .drawCommands(shapes.Internal[104]);
        var instance149 = new Graphics()
            .drawCommands(shapes.Internal[89]);
        var instance154 = new Graphics()
            .drawCommands(shapes.Internal[103]);
        var instance153 = new Graphics()
            .drawCommands(shapes.Internal[70]);
        var instance158 = new Graphics()
            .drawCommands(shapes.Internal[102]);
        var instance157 = new Graphics()
            .drawCommands(shapes.Internal[90]);
        var instance164 = new Graphics()
            .drawCommands(shapes.Internal[24]);
        var instance163 = new Graphics()
            .drawCommands(shapes.Internal[25]);
        var instance162 = new Graphics()
            .drawCommands(shapes.Internal[92]);
        var instance161 = new Graphics()
            .drawCommands(shapes.Internal[91]);
        var instance169 = new lib.eyelash();
        var instance168 = new Graphics()
            .drawCommands(shapes.Internal[23]);
        var instance173 = new Graphics()
            .drawCommands(shapes.Internal[182]);
        var instance172 = new Graphics()
            .drawCommands(shapes.Internal[181]);
        var instance174 = new Graphics()
            .drawCommands(shapes.Internal[23]);
        var instance176 = new Graphics()
            .drawCommands(shapes.Internal[181]);
        var instance177 = new Graphics()
            .drawCommands(shapes.Internal[23]);
        var instance179 = new Graphics()
            .drawCommands(shapes.Internal[181]);
        var instance178 = new Graphics()
            .drawCommands(shapes.Internal[23]);
        var instance181 = new Graphics()
            .drawCommands(shapes.Internal[182]);
        var instance182 = new lib.tic1();
        var instance180 = new lib.tic2();
        var instance183 = new Graphics()
            .drawCommands(shapes.Internal[23]);
        var instance186 = new Graphics()
            .drawCommands(shapes.Internal[185]);
        var instance185 = new Graphics()
            .drawCommands(shapes.Internal[184]);
        var instance184 = new Graphics()
            .drawCommands(shapes.Internal[183]);
        var instance187 = new Graphics()
            .drawCommands(shapes.Internal[186]);
        var instance8 = new lib.antenae_single();
        var instance7 = new lib.antenae_single();
        var instance6 = new lib.antenae_single();
        var instance5 = new lib.antenae_single();
        var instance4 = new lib.antenae_single();
        var instance3 = new lib.antenae_single();
        var instance2 = new lib.antenae_single();
        var instance146 = new lib.antenae_single();
        var instance145 = new lib.antenae_single();
        var instance144 = new lib.antenae_single();
        var instance143 = new lib.antenae_single();
        var instance137 = new lib.four_attenae();
        var instance167 = new lib.antenae_single();
        var instance1 = new lib.hitmesquare();
        this[instance1.name = "hittestie"] = instance1;
        var instance188 = new lib.yellow_bacteria();
        this.addTimedChild(instance175, 68, 31, {
                "68": {
                    x: -93.75,
                    y: -20.55
                }
            })
            .addTimedChild(instance13, 0, 7, {
                "0": {
                    x: -93.75,
                    y: -25.55,
                    sx: 1,
                    sy: 1
                },
                "1": {
                    x: -98.922,
                    y: -25.119,
                    sx: 1.058,
                    sy: 0.983
                },
                "2": {
                    x: -104.093,
                    y: -24.788,
                    sx: 1.116,
                    sy: 0.966
                },
                "3": {
                    x: -109.215,
                    y: -24.358,
                    sx: 1.173,
                    sy: 0.949
                },
                "4": {
                    x: -114.335,
                    y: -23.976,
                    sx: 1.231,
                    sy: 0.933
                },
                "5": {
                    x: -119.507,
                    y: -23.546,
                    sx: 1.289,
                    sy: 0.916
                },
                "6": {
                    x: -124.678,
                    y: -23.215,
                    sx: 1.347,
                    sy: 0.899
                }
            })
            .addTimedChild(instance18, 7, 2, {
                "7": {
                    x: -129.668,
                    y: -23.037,
                    sx: 1.405,
                    sy: 0.882
                },
                "8": {
                    x: -129.7,
                    y: -23.05
                }
            })
            .addTimedChild(instance17, 7, 1, {
                "7": {
                    x: -129.668,
                    y: -23.051,
                    sx: 1.405,
                    sy: 0.882
                }
            })
            .addTimedChild(instance16, 7, 1, {
                "7": {
                    x: -129.9,
                    y: -22.55,
                    sx: 1.405,
                    sy: 0.882
                }
            })
            .addTimedChild(instance15, 7, 1, {
                "7": {
                    x: -129.868,
                    y: -22.551,
                    sx: 1.405,
                    sy: 0.882
                }
            })
            .addTimedChild(instance19, 8, 1, {
                "8": {
                    x: -129.85,
                    y: -22.55,
                    sx: 1.405,
                    sy: 0.882
                }
            })
            .addTimedChild(instance21, 9, 1)
            .addTimedChild(instance20, 9, 1)
            .addTimedChild(instance23, 10, 1)
            .addTimedChild(instance22, 10, 1)
            .addTimedChild(instance25, 11, 1)
            .addTimedChild(instance24, 11, 1)
            .addTimedChild(instance27, 12, 1)
            .addTimedChild(instance26, 12, 1)
            .addTimedChild(instance29, 13, 1)
            .addTimedChild(instance28, 13, 1)
            .addTimedChild(instance31, 14, 1)
            .addTimedChild(instance30, 14, 1)
            .addTimedChild(instance36, 15, 1)
            .addTimedChild(instance35, 15, 1)
            .addTimedChild(instance42, 16, 1)
            .addTimedChild(instance41, 16, 1)
            .addTimedChild(instance45, 17, 1)
            .addTimedChild(instance44, 17, 1)
            .addTimedChild(instance48, 18, 1)
            .addTimedChild(instance47, 18, 1)
            .addTimedChild(instance51, 19, 1)
            .addTimedChild(instance50, 19, 1)
            .addTimedChild(instance54, 20, 1)
            .addTimedChild(instance53, 20, 1)
            .addTimedChild(instance57, 21, 1)
            .addTimedChild(instance56, 21, 1)
            .addTimedChild(instance60, 22, 1)
            .addTimedChild(instance59, 22, 1)
            .addTimedChild(instance63, 23, 1)
            .addTimedChild(instance62, 23, 1)
            .addTimedChild(instance66, 24, 1)
            .addTimedChild(instance65, 24, 1)
            .addTimedChild(instance69, 25, 1)
            .addTimedChild(instance68, 25, 1)
            .addTimedChild(instance73, 26, 1)
            .addTimedChild(instance75, 27, 1)
            .addTimedChild(instance78, 28, 1)
            .addTimedChild(instance81, 29, 1)
            .addTimedChild(instance84, 30, 1)
            .addTimedChild(instance89, 31, 1)
            .addTimedChild(instance92, 32, 1)
            .addTimedChild(instance94, 33, 1)
            .addTimedChild(instance99, 34, 1)
            .addTimedChild(instance102, 35, 1)
            .addTimedChild(instance105, 36, 1)
            .addTimedChild(instance108, 37, 1)
            .addTimedChild(instance113, 38, 1)
            .addTimedChild(instance115, 39, 1)
            .addTimedChild(instance114, 39, 1)
            .addTimedChild(instance117, 40, 1)
            .addTimedChild(instance116, 40, 1)
            .addTimedChild(instance119, 41, 1)
            .addTimedChild(instance118, 41, 1)
            .addTimedChild(instance121, 42, 1)
            .addTimedChild(instance120, 42, 1)
            .addTimedChild(instance123, 43, 1)
            .addTimedChild(instance122, 43, 1)
            .addTimedChild(instance127, 44, 1)
            .addTimedChild(instance126, 44, 1)
            .addTimedChild(instance130, 45, 1)
            .addTimedChild(instance129, 45, 1)
            .addTimedChild(instance133, 46, 1)
            .addTimedChild(instance132, 46, 1)
            .addTimedChild(instance136, 47, 1)
            .addTimedChild(instance135, 47, 1)
            .addTimedChild(instance142, 48, 3)
            .addTimedChild(instance141, 48, 3)
            .addTimedChild(instance152, 51, 1)
            .addTimedChild(instance151, 51, 1)
            .addTimedChild(instance156, 52, 1)
            .addTimedChild(instance155, 52, 1)
            .addTimedChild(instance160, 53, 1)
            .addTimedChild(instance159, 53, 1)
            .addTimedChild(instance166, 54, 1)
            .addTimedChild(instance165, 54, 1)
            .addTimedChild(instance12, 0, 55, {
                "0": {
                    x: 87.7,
                    y: 9.1,
                    sx: 1,
                    sy: 1,
                    kx: 0,
                    ky: 0
                },
                "1": {
                    x: 92.9,
                    y: 9
                },
                "2": {
                    x: 98.05,
                    y: 8.85
                },
                "3": {
                    x: 103.25,
                    y: 8.75
                },
                "4": {
                    x: 108.45,
                    y: 8.65
                },
                "5": {
                    x: 113.65,
                    y: 8.55
                },
                "6": {
                    x: 118.8,
                    y: 8.4
                },
                "7": {
                    x: 124,
                    y: 8.3
                },
                "8": {
                    x: 124.464,
                    y: 8.231,
                    sx: 0.968,
                    sy: 0.974
                },
                "9": {
                    x: 124.829,
                    y: 8.162,
                    sx: 0.937,
                    sy: 0.947
                },
                "10": {
                    x: 125.291,
                    y: 8.043,
                    sx: 0.905,
                    sy: 0.921
                },
                "11": {
                    x: 125.706,
                    y: 7.924,
                    sx: 0.873,
                    sy: 0.895
                },
                "12": {
                    x: 126.07,
                    y: 7.806,
                    sx: 0.841,
                    sy: 0.868
                },
                "13": {
                    x: 126.535,
                    y: 7.737,
                    sx: 0.81,
                    sy: 0.842
                },
                "14": {
                    x: 126.897,
                    y: 7.618,
                    sx: 0.778,
                    sy: 0.815
                },
                "15": {
                    x: 127.3,
                    y: 7.5,
                    sx: 0.746,
                    sy: 0.789
                },
                "16": {
                    x: 130.409,
                    y: 9.899,
                    sx: 0.771,
                    sy: 0.81,
                    kx: -0.014,
                    ky: 0.012
                },
                "17": {
                    x: 133.547,
                    y: 12.252,
                    sx: 0.797,
                    sy: 0.831,
                    kx: -0.027,
                    ky: 0.024
                },
                "18": {
                    x: 136.654,
                    y: 14.555,
                    sx: 0.822,
                    sy: 0.852,
                    kx: -0.041,
                    ky: 0.035
                },
                "19": {
                    x: 139.74,
                    y: 16.806,
                    sx: 0.847,
                    sy: 0.873,
                    kx: -0.055,
                    ky: 0.047
                },
                "20": {
                    x: 142.89,
                    y: 19.057,
                    sx: 0.873,
                    sy: 0.894,
                    kx: -0.068,
                    ky: 0.059
                },
                "21": {
                    x: 146.159,
                    y: 21.155,
                    sx: 0.898,
                    sy: 0.915,
                    kx: -0.082,
                    ky: 0.071
                },
                "22": {
                    x: 149.345,
                    y: 23.304,
                    sx: 0.924,
                    sy: 0.937,
                    kx: -0.096,
                    ky: 0.083
                },
                "23": {
                    x: 152.543,
                    y: 25.4,
                    sx: 0.949,
                    sy: 0.958,
                    kx: -0.109,
                    ky: 0.094
                },
                "24": {
                    x: 155.759,
                    y: 27.49,
                    sx: 0.974,
                    sy: 0.979,
                    kx: -0.123,
                    ky: 0.106
                },
                "25": {
                    x: 159,
                    y: 29.4,
                    sx: 1,
                    sy: 1,
                    kx: -0.137,
                    ky: 0.118
                },
                "26": {
                    x: 161.5,
                    y: 29.9
                },
                "27": {
                    x: 164,
                    y: 30.3
                },
                "28": {
                    x: 166.5,
                    y: 30.75
                },
                "29": {
                    x: 169,
                    y: 31.15
                },
                "30": {
                    x: 171.5,
                    y: 31.55
                },
                "31": {
                    x: 174,
                    y: 31.85
                },
                "32": {
                    x: 172.2,
                    y: 33.05
                },
                "33": {
                    x: 170.4,
                    y: 34.15
                },
                "34": {
                    x: 168.5,
                    y: 35.25
                },
                "35": {
                    x: 168.7,
                    y: 34.699
                },
                "36": {
                    x: 168.9,
                    y: 34.149
                },
                "37": {
                    x: 169.05,
                    y: 33.549
                },
                "38": {
                    x: 169.25,
                    y: 32.9
                },
                "39": {
                    x: 171.25,
                    y: 32.8
                },
                "40": {
                    x: 173.2,
                    y: 32.599
                },
                "41": {
                    x: 175.2,
                    y: 32.449
                },
                "42": {
                    x: 177.15,
                    y: 32.249
                },
                "43": {
                    x: 179.1,
                    y: 32.099
                },
                "44": {
                    x: 181,
                    y: 31.85
                },
                "45": {
                    x: 185.05,
                    y: 31.65
                },
                "46": {
                    x: 189.05,
                    y: 31.35
                },
                "47": {
                    x: 193.05,
                    y: 31.05
                },
                "48": {
                    x: 197,
                    y: 30.65
                },
                "49": {
                    x: 197.05,
                    y: 31.3
                },
                "50": {
                    x: 197,
                    y: 31.85
                },
                "51": {
                    x: 204.05,
                    y: 25.35
                },
                "52": {
                    x: 211.05,
                    y: 18.8
                },
                "53": {
                    x: 218.05,
                    y: 12.2
                },
                "54": {
                    x: 225,
                    y: 5.6
                }
            })
            .addTimedChild(instance34, 15, 40, {
                "15": {
                    x: -129.3,
                    y: 5.05,
                    sx: 0.299,
                    sy: 0.344,
                    kx: 0,
                    ky: 3.142
                },
                "16": {
                    x: -131.967,
                    y: 8.53,
                    sx: 0.369,
                    sy: 0.41,
                    kx: 0.015,
                    ky: 3.127
                },
                "17": {
                    x: -134.596,
                    y: 11.85,
                    sx: 0.44,
                    sy: 0.475,
                    kx: 0.029,
                    ky: 3.113
                },
                "18": {
                    x: -137.297,
                    y: 15.004,
                    sx: 0.511,
                    sy: 0.541,
                    kx: 0.044,
                    ky: 3.098
                },
                "19": {
                    x: -140.077,
                    y: 17.945,
                    sx: 0.582,
                    sy: 0.606,
                    kx: 0.058,
                    ky: 3.084
                },
                "20": {
                    x: -142.832,
                    y: 20.87,
                    sx: 0.653,
                    sy: 0.672,
                    kx: 0.073,
                    ky: 3.069
                },
                "21": {
                    x: -145.728,
                    y: 23.621,
                    sx: 0.723,
                    sy: 0.737,
                    kx: 0.087,
                    ky: 3.055
                },
                "22": {
                    x: -148.556,
                    y: 26.199,
                    sx: 0.794,
                    sy: 0.803,
                    kx: 0.102,
                    ky: 3.04
                },
                "23": {
                    x: -151.547,
                    y: 28.604,
                    sx: 0.865,
                    sy: 0.868,
                    kx: 0.116,
                    ky: 3.025
                },
                "24": {
                    x: -154.517,
                    y: 30.968,
                    sx: 0.936,
                    sy: 0.934,
                    kx: 0.131,
                    ky: 3.011
                },
                "25": {
                    x: -157.6,
                    y: 32.95,
                    sx: 1.007,
                    sy: 1,
                    kx: 0.145,
                    ky: 2.996
                },
                "26": {
                    x: -159.745,
                    y: 29.751,
                    sy: 0.999
                },
                "27": {
                    x: -161.895,
                    y: 26.451
                },
                "28": {
                    x: -163.995,
                    y: 23.151
                },
                "29": {
                    x: -166.145,
                    y: 19.801
                },
                "30": {
                    x: -168.245,
                    y: 16.501
                },
                "31": {
                    x: -170.35,
                    y: 13.1,
                    sy: 1
                },
                "32": {
                    x: -171.545,
                    y: 13.702,
                    sy: 0.999
                },
                "33": {
                    x: -172.745,
                    y: 14.202
                },
                "34": {
                    x: -173.85,
                    y: 14.6,
                    sy: 1
                },
                "35": {
                    x: -172.894,
                    y: 14.952,
                    sy: 0.999
                },
                "36": {
                    x: -171.944,
                    y: 15.202
                },
                "37": {
                    x: -171.044,
                    y: 15.452
                },
                "38": {
                    x: -170.1,
                    y: 15.6,
                    sy: 1
                },
                "39": {
                    x: -171.245,
                    y: 15.652,
                    sy: 0.999
                },
                "40": {
                    x: -172.345
                },
                "41": {
                    x: -173.445
                },
                "42": {
                    x: -174.545
                },
                "43": {
                    x: -175.645
                },
                "44": {
                    x: -176.7,
                    y: 15.6,
                    sy: 1
                },
                "45": {
                    x: -181.694,
                    y: 19.702,
                    sy: 0.999
                },
                "46": {
                    x: -186.694,
                    y: 23.802
                },
                "47": {
                    x: -191.644,
                    y: 27.852
                },
                "48": {
                    x: -196.6,
                    y: 31.85,
                    sy: 1
                },
                "49": {
                    x: -196.894,
                    y: 31.902,
                    sy: 0.999
                },
                "50": {
                    x: -197.1,
                    y: 31.85,
                    sy: 1
                },
                "51": {
                    x: -203.544,
                    y: 25.402,
                    sy: 0.999
                },
                "52": {
                    x: -209.993,
                    y: 18.902
                },
                "53": {
                    x: -216.394,
                    y: 12.402
                },
                "54": {
                    x: -222.75,
                    y: 5.85,
                    sy: 1
                }
            })
            .addTimedChild(instance171, 55, 44, {
                "55": {
                    x: -93.75,
                    y: -21.55
                }
            })
            .addTimedChild(instance170, 55, 44, {
                "55": {
                    x: 87.7,
                    y: 12.3
                }
            })
            .addTimedMask(instance11, {
                "68": instance175,
                "99": null
            })
            .addTimedChild(instance11, 0, 99, {
                "0": {
                    x: -61.95,
                    y: -13.9,
                    sx: 1,
                    sy: 1,
                    c: [
                        1,
                        0,
                        1,
                        0,
                        1,
                        0
                    ]
                },
                "1": {
                    x: -56.834,
                    sx: 1.033
                },
                "2": {
                    x: -51.718,
                    sx: 1.066
                },
                "3": {
                    x: -46.553,
                    sx: 1.099
                },
                "4": {
                    x: -41.388,
                    sx: 1.131
                },
                "5": {
                    x: -36.222,
                    sx: 1.164
                },
                "6": {
                    x: -31.156,
                    sx: 1.197
                },
                "7": {
                    x: -25.95,
                    sx: 1.23
                },
                "8": {
                    x: -23.615,
                    y: -13.353,
                    sx: 1.302,
                    sy: 0.975
                },
                "9": {
                    x: -21.331,
                    y: -12.755,
                    sx: 1.374,
                    sy: 0.95
                },
                "10": {
                    x: -18.996,
                    y: -12.258,
                    sx: 1.445,
                    sy: 0.925
                },
                "11": {
                    x: -16.712,
                    y: -11.66,
                    sx: 1.517,
                    sy: 0.9
                },
                "12": {
                    x: -14.378,
                    y: -11.112,
                    sx: 1.589,
                    sy: 0.875
                },
                "13": {
                    x: -12.094,
                    y: -10.515,
                    sx: 1.661,
                    sy: 0.85
                },
                "14": {
                    x: -9.76,
                    y: -10.017,
                    sx: 1.733,
                    sy: 0.825
                },
                "15": {
                    x: -7.45,
                    y: -9.4,
                    sx: 1.805,
                    sy: 0.8
                },
                "16": {
                    x: -12.22,
                    y: -9.5,
                    sx: 1.737
                },
                "17": {
                    x: -17.139,
                    sx: 1.669
                },
                "18": {
                    x: -22.009,
                    y: -9.55,
                    sx: 1.601
                },
                "19": {
                    x: -26.879,
                    y: -9.6,
                    sx: 1.533
                },
                "20": {
                    x: -31.699,
                    y: -9.65,
                    sx: 1.465
                },
                "21": {
                    x: -36.618,
                    sx: 1.397
                },
                "22": {
                    x: -41.488,
                    y: -9.7,
                    sx: 1.329
                },
                "23": {
                    x: -46.358,
                    y: -9.75,
                    sx: 1.261
                },
                "24": {
                    x: -51.178,
                    y: -9.8,
                    sx: 1.194
                },
                "25": {
                    x: -56.097,
                    sx: 1.126
                },
                "26": {
                    x: -61,
                    sx: 1.058
                },
                "27": {
                    x: -61.049,
                    y: -10.65
                },
                "28": {
                    y: -11.45
                },
                "29": {
                    y: -12.25
                },
                "30": {
                    y: -13.05
                },
                "31": {
                    x: -61,
                    y: -13.8
                },
                "32": {
                    x: -65.549,
                    y: -13
                },
                "33": {
                    x: -70.049,
                    y: -12.2
                },
                "34": {
                    x: -74.5,
                    y: -11.3
                },
                "35": {
                    x: -76.249,
                    y: -11.65
                },
                "36": {
                    x: -77.999,
                    y: -12.05
                },
                "37": {
                    x: -79.749,
                    y: -12.4
                },
                "38": {
                    x: -81.5,
                    y: -12.8
                },
                "39": {
                    x: -82.899,
                    y: -12.15
                },
                "40": {
                    x: -84.349,
                    y: -11.5
                },
                "41": {
                    x: -85.749,
                    y: -10.8
                },
                "42": {
                    x: -87.149,
                    y: -10.1
                },
                "43": {
                    x: -88.599,
                    y: -9.45
                },
                "44": {
                    x: -90,
                    y: -8.7
                },
                "45": {
                    x: -90.499,
                    y: -7.75
                },
                "46": {
                    x: -90.999,
                    y: -6.8
                },
                "47": {
                    x: -91.499,
                    y: -5.85
                },
                "48": {
                    x: -92,
                    y: -4.9
                },
                "51": {
                    x: -90.649,
                    y: -6.9
                },
                "52": {
                    x: -89.299,
                    y: -8.9
                },
                "53": {
                    x: -87.899,
                    y: -10.95
                },
                "54": {
                    x: -86.5,
                    y: -12.95
                },
                "55": {
                    x: -61.95,
                    y: -9.9,
                    sx: 1,
                    sy: 1
                },
                "56": {
                    x: -62.622,
                    y: -10.049,
                    sx: 1.163,
                    sy: 1.045,
                    c: [
                        0.92,
                        0.07,
                        0.92,
                        0.07,
                        0.92,
                        0.05
                    ]
                },
                "57": {
                    x: -63.294,
                    y: -10.249,
                    sx: 1.327,
                    sy: 1.091,
                    c: [
                        0.85,
                        0.15,
                        0.85,
                        0.15,
                        0.85,
                        0.11
                    ]
                },
                "58": {
                    x: -63.968,
                    y: -10.348,
                    sx: 1.49,
                    sy: 1.136,
                    c: [
                        0.77,
                        0.23,
                        0.77,
                        0.22,
                        0.77,
                        0.16
                    ]
                },
                "59": {
                    x: -64.641,
                    y: -10.547,
                    sx: 1.654,
                    sy: 1.182,
                    c: [
                        0.69,
                        0.31,
                        0.69,
                        0.29,
                        0.69,
                        0.21
                    ]
                },
                "60": {
                    x: -65.263,
                    y: -10.646,
                    sx: 1.817,
                    sy: 1.227,
                    c: [
                        0.62,
                        0.38,
                        0.62,
                        0.37,
                        0.62,
                        0.26
                    ]
                },
                "61": {
                    x: -65.935,
                    y: -10.846,
                    sx: 1.98,
                    sy: 1.272,
                    c: [
                        0.54,
                        0.45,
                        0.54,
                        0.44,
                        0.54,
                        0.31
                    ]
                },
                "62": {
                    x: -66.559,
                    y: -10.945,
                    sx: 2.144,
                    sy: 1.318,
                    c: [
                        0.46,
                        0.53,
                        0.46,
                        0.52,
                        0.46,
                        0.37
                    ]
                },
                "63": {
                    x: -67.231,
                    y: -11.144,
                    sx: 2.307,
                    sy: 1.363,
                    c: [
                        0.38,
                        0.61,
                        0.38,
                        0.59,
                        0.38,
                        0.42
                    ]
                },
                "64": {
                    x: -67.853,
                    y: -11.244,
                    sx: 2.471,
                    sy: 1.408,
                    c: [
                        0.31,
                        0.68,
                        0.31,
                        0.67,
                        0.31,
                        0.47
                    ]
                },
                "65": {
                    x: -68.526,
                    y: -11.443,
                    sx: 2.634,
                    sy: 1.454,
                    c: [
                        0.23,
                        0.76,
                        0.23,
                        0.74,
                        0.23,
                        0.53
                    ]
                },
                "66": {
                    x: -69.2,
                    y: -11.592,
                    sx: 2.797,
                    sy: 1.499,
                    c: [
                        0.15,
                        0.84,
                        0.15,
                        0.81,
                        0.15,
                        0.58
                    ]
                },
                "67": {
                    x: -69.873,
                    y: -11.742,
                    sx: 2.961,
                    sy: 1.545,
                    c: [
                        0.08,
                        0.91,
                        0.08,
                        0.89,
                        0.08,
                        0.63
                    ]
                },
                "68": {
                    x: -70.5,
                    y: -11.85,
                    sx: 3.124,
                    sy: 1.59,
                    c: [
                        0,
                        0.99,
                        0,
                        0.96,
                        0,
                        0.68
                    ]
                },
                "69": {
                    x: -71.163,
                    y: -12.463,
                    sx: 3.683,
                    sy: 1.793
                },
                "70": {
                    x: -71.674,
                    y: -13.026,
                    sx: 4.242,
                    sy: 1.996
                },
                "71": {
                    x: -72.29,
                    y: -13.589,
                    sx: 4.801,
                    sy: 2.199
                },
                "72": {
                    x: -72.851,
                    y: -14.151,
                    sx: 5.36,
                    sy: 2.402
                },
                "73": {
                    x: -73.418,
                    y: -14.714,
                    sx: 5.919,
                    sy: 2.605
                },
                "74": {
                    x: -73.979,
                    y: -15.277,
                    sx: 6.478,
                    sy: 2.808
                },
                "75": {
                    x: -74.545,
                    y: -15.84,
                    sx: 7.037,
                    sy: 3.011
                },
                "76": {
                    x: -75.106,
                    y: -16.403,
                    sx: 7.596,
                    sy: 3.214
                },
                "77": {
                    x: -75.722,
                    y: -16.966,
                    sx: 8.155,
                    sy: 3.417
                },
                "78": {
                    x: -76.283,
                    y: -17.528,
                    sx: 8.714,
                    sy: 3.62
                },
                "79": {
                    x: -76.85,
                    y: -18.091,
                    sx: 9.273,
                    sy: 3.823
                },
                "80": {
                    x: -77.461,
                    y: -18.654,
                    sx: 9.832,
                    sy: 4.026
                },
                "81": {
                    x: -77.977,
                    y: -19.217,
                    sx: 10.391,
                    sy: 4.229
                },
                "82": {
                    x: -78.588,
                    y: -19.78,
                    sx: 10.95,
                    sy: 4.432
                },
                "83": {
                    x: -79.104,
                    y: -20.343,
                    sx: 11.509,
                    sy: 4.635
                },
                "84": {
                    x: -79.72,
                    y: -20.906,
                    sx: 12.068,
                    sy: 4.838
                },
                "85": {
                    x: -80.281,
                    y: -21.518,
                    sx: 12.627,
                    sy: 5.041
                },
                "86": {
                    x: -80.848,
                    y: -22.082,
                    sx: 13.186,
                    sy: 5.244
                },
                "87": {
                    x: -81.409,
                    y: -22.644,
                    sx: 13.745,
                    sy: 5.447
                },
                "88": {
                    x: -82.025,
                    y: -23.207,
                    sx: 14.304,
                    sy: 5.65
                },
                "89": {
                    x: -82.536,
                    y: -23.77,
                    sx: 14.863,
                    sy: 5.853
                },
                "90": {
                    x: -83.152,
                    y: -24.333,
                    sx: 15.422,
                    sy: 6.056
                },
                "91": {
                    x: -83.713,
                    y: -24.896,
                    sx: 15.981,
                    sy: 6.259
                },
                "92": {
                    x: -84.28,
                    y: -25.459,
                    sx: 16.54,
                    sy: 6.462
                },
                "93": {
                    x: -84.841,
                    y: -26.021,
                    sx: 17.099,
                    sy: 6.665
                },
                "94": {
                    x: -85.408,
                    y: -26.584,
                    sx: 17.658,
                    sy: 6.868
                },
                "95": {
                    x: -85.968,
                    y: -27.147,
                    sx: 18.216,
                    sy: 7.071
                },
                "96": {
                    x: -86.584,
                    y: -27.71,
                    sx: 18.776,
                    sy: 7.274
                },
                "97": {
                    x: -87.095,
                    y: -28.273,
                    sx: 19.334,
                    sy: 7.477
                },
                "98": {
                    x: -87.4,
                    y: -28.8,
                    sx: 19.894,
                    sy: 7.68
                }
            })
            .addTimedChild(instance33, 15, 40, {
                "15": {
                    x: -7.45,
                    y: -9.4,
                    sx: 1.805,
                    sy: 0.8
                },
                "16": {
                    x: -0.819,
                    y: -9.05,
                    sx: 1.725
                },
                "17": {
                    x: 5.761,
                    y: -8.65,
                    sx: 1.644
                },
                "18": {
                    x: 12.292,
                    y: -8.2,
                    sx: 1.564
                },
                "19": {
                    x: 18.872,
                    y: -7.8,
                    sx: 1.484
                },
                "20": {
                    x: 25.402,
                    y: -7.4,
                    sx: 1.404
                },
                "21": {
                    x: 31.983,
                    y: -7,
                    sx: 1.324
                },
                "22": {
                    x: 38.563,
                    y: -6.6,
                    sx: 1.244
                },
                "23": {
                    x: 45.094,
                    y: -6.2,
                    sx: 1.164
                },
                "24": {
                    x: 51.624,
                    y: -5.75,
                    sx: 1.084
                },
                "25": {
                    x: 58.205,
                    y: -5.35,
                    sx: 1.004
                },
                "26": {
                    x: 64.75,
                    y: -4.9,
                    sx: 0.924
                },
                "27": {
                    x: 65.349,
                    y: -3.8
                },
                "28": {
                    x: 65.949,
                    y: -2.7
                },
                "29": {
                    x: 66.549,
                    y: -1.6
                },
                "30": {
                    x: 67.149,
                    y: -0.5
                },
                "31": {
                    x: 67.75,
                    y: 0.6
                },
                "32": {
                    x: 65.749,
                    y: 0.65
                },
                "33": {
                    x: 63.749
                },
                "34": {
                    x: 61.75,
                    y: 0.6
                },
                "35": {
                    x: 62.499,
                    y: -0.1
                },
                "36": {
                    x: 63.249,
                    y: -0.85
                },
                "37": {
                    x: 63.999,
                    y: -1.6
                },
                "38": {
                    x: 64.75,
                    y: -2.4
                },
                "39": {
                    x: 67.499,
                    y: -2.2
                },
                "40": {
                    x: 70.249,
                    y: -2
                },
                "41": {
                    x: 72.999,
                    y: -1.85
                },
                "42": {
                    x: 75.749,
                    y: -1.7
                },
                "43": {
                    x: 78.499,
                    y: -1.5
                },
                "44": {
                    x: 81.25,
                    y: -1.4
                },
                "45": {
                    x: 83.699,
                    y: -1.35
                },
                "46": {
                    x: 86.049
                },
                "47": {
                    x: 88.449
                },
                "48": {
                    x: 90.75,
                    y: -1.4
                },
                "51": {
                    x: 88.149,
                    y: -3.6
                },
                "52": {
                    x: 85.499,
                    y: -5.85
                },
                "53": {
                    x: 82.899,
                    y: -8.1
                },
                "54": {
                    x: 80.25,
                    y: -10.4
                }
            })
            .addTimedChild(instance10, 0, 16, {
                "0": {
                    x: -66.1,
                    y: -16.25,
                    sx: 1,
                    r: 0
                },
                "1": {
                    x: -61.1
                },
                "2": {
                    x: -56.1
                },
                "3": {
                    x: -51.1
                },
                "4": {
                    x: -46.1
                },
                "5": {
                    x: -41.1
                },
                "6": {
                    x: -36.1
                },
                "7": {
                    x: -31.1
                },
                "8": {
                    x: -28.868,
                    y: -15.837,
                    sx: 1.037,
                    r: 0.012
                },
                "9": {
                    x: -26.58,
                    y: -15.35,
                    sx: 1.075,
                    r: 0.024
                },
                "10": {
                    x: -24.288,
                    y: -14.888,
                    sx: 1.112,
                    r: 0.036
                },
                "11": {
                    x: -21.94,
                    y: -14.453,
                    sx: 1.15,
                    r: 0.048
                },
                "12": {
                    x: -19.684,
                    y: -13.992,
                    sx: 1.187,
                    r: 0.06
                },
                "13": {
                    x: -17.373,
                    y: -13.558,
                    sx: 1.225,
                    r: 0.072
                },
                "14": {
                    x: -15.103,
                    y: -13.148,
                    sx: 1.262,
                    r: 0.084
                },
                "15": {
                    x: -12.8,
                    y: -12.65,
                    sx: 1.3,
                    r: 0.096
                }
            })
            .addTimedChild(instance9, 0, 1, {
                "0": {
                    x: -224.75,
                    y: -133.1
                }
            })
            .addTimedChild(instance14, 7, 1, {
                "7": {
                    x: -189.75,
                    y: -133.1
                }
            })
            .addTimedChild(instance32, 15, 1, {
                "15": {
                    x: -310.95,
                    y: -140.15,
                    sx: 1.847
                }
            })
            .addTimedChild(instance40, 16, 1, {
                "16": {
                    x: -218.9,
                    y: -128.2,
                    sx: 1.301
                }
            })
            .addTimedChild(instance39, 16, 1, {
                "16": {
                    x: -211.85,
                    y: -128.7,
                    sx: 1.258
                }
            })
            .addTimedChild(instance38, 16, 8, {
                "16": {
                    x: 0,
                    sx: 1
                },
                "17": {
                    x: -1.85,
                    sx: 1.031
                },
                "18": {
                    x: -3.65,
                    sx: 1.062
                },
                "19": {
                    x: -5.5,
                    sx: 1.093
                },
                "20": {
                    x: -7.35,
                    sx: 1.124
                },
                "21": {
                    x: -9.2,
                    sx: 1.155
                },
                "22": {
                    x: -11,
                    sx: 1.186
                },
                "23": {
                    x: -12.9,
                    sx: 1.216
                }
            })
            .addTimedChild(instance37, 16, 1)
            .addTimedChild(instance43, 17, 1)
            .addTimedChild(instance46, 18, 1)
            .addTimedChild(instance49, 19, 1)
            .addTimedChild(instance52, 20, 1)
            .addTimedChild(instance55, 21, 1)
            .addTimedChild(instance58, 22, 1)
            .addTimedChild(instance64, 24, 1)
            .addTimedChild(instance67, 25, 1)
            .addTimedChild(instance72, 26, 1, {
                "26": {
                    x: -231.15,
                    y: -131.1,
                    sx: 1.048
                }
            })
            .addTimedChild(instance71, 26, 1, {
                "26": {
                    x: -99.35,
                    y: -96.05,
                    sy: 0.754
                }
            })
            .addTimedChild(instance70, 26, 1)
            .addTimedChild(instance74, 27, 1)
            .addTimedChild(instance61, 23, 5, {
                "23": {
                    x: 0,
                    y: 0,
                    sx: 1,
                    sy: 1
                },
                "24": {
                    x: -0.25,
                    y: 0.1,
                    sx: 1.037,
                    sy: 1.005
                },
                "25": {
                    x: -0.45,
                    y: 0.2,
                    sx: 1.073
                },
                "26": {
                    x: -0.7,
                    y: 0.35,
                    sx: 1.11
                },
                "27": {
                    x: -0.9,
                    y: 0.5,
                    sx: 1.145,
                    sy: 1
                }
            })
            .addTimedChild(instance77, 28, 1, {
                "28": {
                    x: -4.9,
                    y: 0.45,
                    sx: 0.949,
                    sy: 1.004
                }
            })
            .addTimedChild(instance76, 28, 1)
            .addTimedChild(instance80, 29, 1, {
                "29": {
                    x: -9.45,
                    y: 0.95,
                    sx: 0.901,
                    sy: 1.004
                }
            })
            .addTimedChild(instance79, 29, 1)
            .addTimedChild(instance83, 30, 1, {
                "30": {
                    x: -13.45,
                    y: 1.5,
                    sx: 0.859,
                    sy: 0.996
                }
            })
            .addTimedChild(instance82, 30, 1)
            .addTimedChild(instance88, 31, 1, {
                "31": {
                    x: -231.15,
                    y: -134.1,
                    sx: 1.048
                }
            })
            .addTimedChild(instance87, 31, 1, {
                "31": {
                    x: -95,
                    y: -92.1,
                    sy: 0.754
                }
            })
            .addTimedChild(instance86, 31, 1, {
                "31": {
                    x: -27.65,
                    y: 1.95
                }
            })
            .addTimedChild(instance85, 31, 1)
            .addTimedChild(instance91, 32, 2, {
                "32": {
                    x: 0,
                    y: 0,
                    sx: 1
                },
                "33": {
                    x: -1,
                    y: 0.2,
                    sx: 1.048
                }
            })
            .addTimedChild(instance90, 32, 1)
            .addTimedChild(instance93, 33, 1)
            .addTimedChild(instance98, 34, 1, {
                "34": {
                    x: -246.25,
                    y: -132.1,
                    sx: 1.048
                }
            })
            .addTimedChild(instance97, 34, 1, {
                "34": {
                    x: -102.35,
                    y: -89.3,
                    sy: 0.754
                }
            })
            .addTimedChild(instance96, 34, 1)
            .addTimedChild(instance95, 34, 1)
            .addTimedChild(instance101, 35, 1)
            .addTimedChild(instance100, 35, 1)
            .addTimedChild(instance104, 36, 1)
            .addTimedChild(instance103, 36, 1)
            .addTimedChild(instance107, 37, 1)
            .addTimedChild(instance106, 37, 1)
            .addTimedChild(instance112, 38, 1, {
                "38": {
                    x: -252.9,
                    y: -132.05,
                    sx: 1.048
                }
            })
            .addTimedChild(instance111, 38, 1, {
                "38": {
                    x: -99.35,
                    y: -94.05,
                    sy: 0.754
                }
            })
            .addTimedChild(instance125, 44, 1, {
                "44": {
                    x: -261.5,
                    y: -128.85,
                    sx: 1.048
                }
            })
            .addTimedChild(instance124, 44, 1, {
                "44": {
                    x: -81.85,
                    y: -92.5,
                    sy: 0.754
                }
            })
            .addTimedChild(instance110, 38, 7, {
                "38": {
                    x: -45.2,
                    y: 3,
                    sx: 1.161
                },
                "39": {
                    x: -45.6,
                    y: 3.3,
                    sx: 1.158
                },
                "40": {
                    x: -46,
                    y: 3.6,
                    sx: 1.155
                },
                "41": {
                    x: -46.35,
                    y: 3.95,
                    sx: 1.153
                },
                "42": {
                    x: -46.75,
                    y: 4.25,
                    sx: 1.15
                },
                "43": {
                    x: -47.15,
                    y: 4.55,
                    sx: 1.147
                },
                "44": {
                    x: -47.6,
                    y: 4.85,
                    sx: 1.144
                }
            })
            .addTimedChild(instance128, 45, 1)
            .addTimedChild(instance131, 46, 1)
            .addTimedChild(instance134, 47, 1)
            .addTimedChild(instance140, 48, 1, {
                "48": {
                    x: -263.6,
                    y: -123.2,
                    sx: 1.048
                }
            })
            .addTimedChild(instance139, 48, 1, {
                "48": {
                    x: -73.85,
                    y: -93,
                    sy: 0.754
                }
            })
            .addTimedChild(instance148, 50, 1, {
                "50": {
                    x: -263.6,
                    y: -123.2,
                    sx: 1.048
                }
            })
            .addTimedChild(instance147, 50, 1, {
                "50": {
                    x: -72.85,
                    y: -93,
                    sy: 0.754
                }
            })
            .addTimedChild(instance138, 48, 3)
            .addTimedChild(instance109, 38, 13, {
                "38": {
                    x: 0,
                    y: 0
                },
                "39": {
                    x: 1.85,
                    y: -0.1
                },
                "40": {
                    x: 3.65,
                    y: -0.15
                },
                "41": {
                    x: 5.5,
                    y: -0.25
                },
                "42": {
                    x: 7.35,
                    y: -0.35
                },
                "43": {
                    x: 9.15,
                    y: -0.4
                },
                "44": {
                    x: 11,
                    y: -0.5
                },
                "45": {
                    x: 14.65,
                    y: 0.15
                },
                "46": {
                    x: 18.25,
                    y: 0.75
                },
                "47": {
                    x: 21.9,
                    y: 1.4
                },
                "48": {
                    x: 25.5,
                    y: 2
                },
                "49": {
                    x: 21.5,
                    y: 0
                },
                "50": {
                    x: 17.5,
                    y: -2
                }
            })
            .addTimedChild(instance150, 51, 1, {
                "51": {
                    x: -2.95,
                    y: 0.85,
                    sx: 0.965
                }
            })
            .addTimedChild(instance149, 51, 1)
            .addTimedChild(instance154, 52, 1, {
                "52": {
                    x: -5.5,
                    y: 1.7,
                    sx: 0.932
                }
            })
            .addTimedChild(instance153, 52, 1, {
                "52": {
                    x: 63.15,
                    y: 5.35,
                    sx: 1.087,
                    sy: 1.062
                }
            })
            .addTimedChild(instance158, 53, 1, {
                "53": {
                    x: -7.75,
                    y: 2.55,
                    sx: 0.902
                }
            })
            .addTimedChild(instance157, 53, 1)
            .addTimedChild(instance164, 54, 1, {
                "54": {
                    x: -259.05,
                    y: -131.7,
                    sx: 1.048
                }
            })
            .addTimedChild(instance163, 54, 1, {
                "54": {
                    x: -82.85,
                    y: -101.55,
                    sy: 0.754
                }
            })
            .addTimedChild(instance162, 54, 1, {
                "54": {
                    x: -51.25,
                    y: 8.25
                }
            })
            .addTimedChild(instance161, 54, 1)
            .addTimedChild(instance169, 55, 7, {
                "55": {
                    x: -67.25,
                    y: -12.85,
                    sx: 1,
                    sy: 1,
                    c: [
                        0,
                        0.4,
                        0,
                        0.4,
                        0,
                        0.4
                    ]
                },
                "56": {
                    x: -67.162,
                    y: -13.724,
                    sx: 1.127,
                    sy: 1.087
                },
                "57": {
                    x: -66.974,
                    y: -14.597,
                    sx: 1.255,
                    sy: 1.175
                },
                "58": {
                    x: -66.838,
                    y: -15.421,
                    sx: 1.382,
                    sy: 1.262
                },
                "59": {
                    x: -66.75,
                    y: -16.245,
                    sx: 1.509,
                    sy: 1.35
                },
                "60": {
                    x: -66.562,
                    y: -17.118,
                    sx: 1.637,
                    sy: 1.437
                },
                "61": {
                    x: -66.4,
                    y: -17.9,
                    sx: 1.764,
                    sy: 1.525
                }
            })
            .addTimedChild(instance168, 55, 1, {
                "55": {
                    x: -224.75,
                    y: -129.1
                }
            })
            .addTimedChild(instance173, 62, 1, {
                "62": {
                    x: 87
                }
            })
            .addTimedChild(instance172, 62, 1, {
                "62": {
                    x: 85.3
                }
            })
            .addTimedChild(instance174, 64, 1, {
                "64": {
                    x: -225.75,
                    y: -128.1
                }
            })
            .addTimedChild(instance176, 73, 1, {
                "73": {
                    x: -188.1,
                    y: -17.3,
                    sx: 1.675,
                    sy: 0.62,
                    kx: 3.142,
                    ky: 3.141
                }
            })
            .addTimedChild(instance177, 74, 1, {
                "74": {
                    x: -355.2,
                    y: -151.8,
                    sx: 1.905,
                    sy: 1.087
                }
            })
            .addTimedChild(instance179, 84, 1, {
                "84": {
                    x: -229.5,
                    y: -20.4,
                    sx: 1.973,
                    sy: 0.62,
                    kx: 3.142,
                    ky: 3.141
                }
            })
            .addTimedChild(instance178, 84, 1, {
                "84": {
                    x: -517.15,
                    y: -280.8,
                    sx: 3.076,
                    sy: 1.931
                }
            })
            .addTimedChild(instance181, 86, 1, {
                "86": {
                    x: -228.05,
                    y: 40,
                    sx: 1.56,
                    sy: 0.916,
                    kx: 3.161,
                    ky: 3.122
                }
            })
            .addTimedChild(instance182, 87, 12, {
                "87": {
                    x: -54.45,
                    y: 28.55,
                    a: 1
                },
                "88": {
                    a: 0.91
                },
                "89": {
                    a: 0.82
                },
                "90": {
                    a: 0.73
                },
                "91": {
                    a: 0.64
                },
                "92": {
                    a: 0.55
                },
                "93": {
                    a: 0.45
                },
                "94": {
                    a: 0.36
                },
                "95": {
                    a: 0.27
                },
                "96": {
                    a: 0.18
                },
                "97": {
                    a: 0.09
                },
                "98": {
                    a: 0
                }
            })
            .addTimedChild(instance180, 85, 14, {
                "85": {
                    x: -16.2,
                    y: -18.7,
                    a: 1
                },
                "86": {
                    x: -21.65,
                    a: 0.92
                },
                "87": {
                    x: -27.1,
                    a: 0.85
                },
                "88": {
                    x: -32.6,
                    a: 0.77
                },
                "89": {
                    x: -38.05,
                    a: 0.69
                },
                "90": {
                    x: -43.5,
                    a: 0.62
                },
                "91": {
                    x: -48.95,
                    a: 0.54
                },
                "92": {
                    x: -54.45,
                    a: 0.46
                },
                "93": {
                    x: -59.9,
                    a: 0.38
                },
                "94": {
                    x: -65.35,
                    a: 0.31
                },
                "95": {
                    x: -70.8,
                    a: 0.23
                },
                "96": {
                    x: -76.3,
                    a: 0.15
                },
                "97": {
                    x: -81.75,
                    a: 0.08
                },
                "98": {
                    x: -87.2,
                    a: 0
                }
            })
            .addTimedChild(instance183, 92, 1, {
                "92": {
                    x: -518.15,
                    y: -36.75,
                    sx: 3.076,
                    sy: 0.336
                }
            })
            .addTimedChild(instance186, 93, 5, {
                "93": {
                    x: 73,
                    y: 3.5
                }
            })
            .addTimedChild(instance185, 93, 6, {
                "93": {
                    x: 73
                },
                "98": {
                    x: 75
                }
            })
            .addTimedChild(instance184, 93, 5, {
                "93": {
                    x: 74.7,
                    y: 3.95
                }
            })
            .addTimedChild(instance187, 98, 1, {
                "98": {
                    x: 76.7,
                    y: 3.95
                }
            })
            .addTimedChild(instance8, 0, 99, {
                "0": {
                    x: 52.75,
                    y: -39.15,
                    sx: 1,
                    sy: 1,
                    r: 0,
                    a: 1
                },
                "1": {
                    x: 58.805,
                    y: -38.707,
                    r: 0.019
                },
                "2": {
                    x: 64.793,
                    y: -38.149,
                    r: 0.037
                },
                "3": {
                    x: 70.762,
                    y: -37.63,
                    sx: 0.999,
                    sy: 0.999,
                    r: 0.056
                },
                "4": {
                    x: 76.811,
                    y: -37.098,
                    r: 0.074
                },
                "5": {
                    x: 82.79,
                    y: -36.554,
                    r: 0.093
                },
                "6": {
                    x: 88.751,
                    y: -36,
                    r: 0.111
                },
                "7": {
                    x: 94.75,
                    y: -35.4,
                    sx: 0.998,
                    sy: 0.998,
                    r: 0.13
                },
                "8": {
                    x: 94.959,
                    y: -34.914,
                    r: 0.126
                },
                "9": {
                    x: 95.169,
                    y: -34.279,
                    r: 0.122
                },
                "10": {
                    x: 95.38,
                    y: -33.692,
                    r: 0.118
                },
                "11": {
                    x: 95.687,
                    y: -33.154,
                    r: 0.115
                },
                "12": {
                    x: 95.892,
                    y: -32.566,
                    r: 0.111
                },
                "13": {
                    x: 96.098,
                    y: -31.928,
                    r: 0.107
                },
                "14": {
                    x: 96.3,
                    y: -31.341,
                    r: 0.103
                },
                "15": {
                    x: 96.45,
                    y: -30.75,
                    r: 0.099
                },
                "16": {
                    x: 99.95,
                    y: -28.991,
                    r: 0.107
                },
                "17": {
                    x: 103.446,
                    y: -27.178,
                    r: 0.116
                },
                "18": {
                    x: 106.882,
                    y: -25.416,
                    r: 0.124
                },
                "19": {
                    x: 110.313,
                    y: -23.6,
                    r: 0.133
                },
                "20": {
                    x: 113.788,
                    y: -21.782,
                    r: 0.141
                },
                "21": {
                    x: 117.207,
                    y: -20.014,
                    r: 0.149
                },
                "22": {
                    x: 120.667,
                    y: -18.243,
                    r: 0.158
                },
                "23": {
                    x: 124.121,
                    y: -16.421,
                    r: 0.166
                },
                "24": {
                    x: 127.516,
                    y: -14.648,
                    r: 0.174
                },
                "25": {
                    x: 131.007,
                    y: -12.821,
                    r: 0.183
                },
                "26": {
                    x: 134.4,
                    y: -11,
                    r: 0.191
                },
                "27": {
                    x: 138.1,
                    y: -10
                },
                "28": {
                    x: 141.7,
                    y: -8.95
                },
                "29": {
                    x: 145.25,
                    y: -7.95
                },
                "30": {
                    x: 148.85,
                    y: -6.9
                },
                "31": {
                    x: 152.35,
                    y: -5.8
                },
                "32": {
                    x: 151.55,
                    y: -4.45
                },
                "33": {
                    x: 150.7,
                    y: -3.15
                },
                "34": {
                    x: 149.9,
                    y: -1.8
                },
                "35": {
                    x: 146.1,
                    y: -4.1
                },
                "36": {
                    x: 142.2,
                    y: -6.4
                },
                "37": {
                    x: 138.35,
                    y: -8.7
                },
                "38": {
                    x: 134.4,
                    y: -11
                },
                "39": {
                    x: 138.6,
                    y: -10.45
                },
                "40": {
                    x: 142.65,
                    y: -9.9
                },
                "41": {
                    x: 146.75,
                    y: -9.3
                },
                "42": {
                    x: 150.8,
                    y: -8.75
                },
                "43": {
                    x: 154.9,
                    y: -8.15
                },
                "44": {
                    x: 158.85,
                    y: -7.55
                },
                "45": {
                    x: 163.3
                },
                "46": {
                    x: 167.65,
                    y: -7.6
                },
                "47": {
                    x: 172.05,
                    y: -7.7
                },
                "48": {
                    x: 176.35,
                    y: -7.8
                },
                "51": {
                    x: 179.729,
                    y: -15.286,
                    r: 0.143
                },
                "52": {
                    x: 183.153,
                    y: -22.727,
                    r: 0.095
                },
                "53": {
                    x: 186.527,
                    y: -30.109,
                    sx: 0.997,
                    sy: 0.997,
                    r: 0.047
                },
                "54": {
                    x: 189.9,
                    y: -37.45,
                    r: -0.001
                },
                "55": {
                    x: 52.75,
                    y: -35.15,
                    sx: 1,
                    sy: 1,
                    r: 0
                },
                "92": {
                    x: 55.75,
                    y: -34.15
                },
                "93": {
                    x: 54.25,
                    a: 0.83
                },
                "94": {
                    x: 52.75,
                    a: 0.67
                },
                "95": {
                    x: 51.25,
                    a: 0.5
                },
                "96": {
                    x: 49.75,
                    a: 0.33
                },
                "97": {
                    x: 48.25,
                    a: 0.17
                },
                "98": {
                    x: 46.75,
                    a: 0
                }
            })
            .addTimedChild(instance7, 0, 99, {
                "0": {
                    x: 30.4,
                    y: -40.05,
                    sx: 1,
                    sy: 1,
                    r: -0.14,
                    a: 1
                },
                "1": {
                    x: 34.499,
                    y: -39.698,
                    sx: 0.999,
                    sy: 0.999
                },
                "2": {
                    x: 38.599,
                    y: -39.248
                },
                "3": {
                    x: 42.649,
                    y: -38.848
                },
                "4": {
                    x: 46.749,
                    y: -38.448
                },
                "5": {
                    x: 50.799,
                    y: -38.048
                },
                "6": {
                    x: 54.899,
                    y: -37.598
                },
                "7": {
                    x: 58.9,
                    y: -37.15,
                    sx: 1,
                    sy: 1
                },
                "8": {
                    x: 59.433,
                    y: -36.63,
                    sx: 0.999,
                    sy: 0.999,
                    r: -0.132
                },
                "9": {
                    x: 60.015,
                    y: -35.959,
                    r: -0.124
                },
                "10": {
                    x: 60.593,
                    y: -35.386,
                    r: -0.116
                },
                "11": {
                    x: 61.219,
                    y: -34.76,
                    r: -0.108
                },
                "12": {
                    x: 61.739,
                    y: -34.082,
                    r: -0.1
                },
                "13": {
                    x: 62.305,
                    y: -33.453,
                    r: -0.092
                },
                "14": {
                    x: 62.868,
                    y: -32.872,
                    r: -0.085
                },
                "15": {
                    x: 63.5,
                    y: -32.1,
                    r: -0.077
                },
                "16": {
                    x: 65.982,
                    y: -31.365,
                    r: -0.068
                },
                "17": {
                    x: 68.462,
                    y: -30.526,
                    r: -0.058
                },
                "18": {
                    x: 70.936,
                    y: -29.736,
                    sx: 0.998,
                    sy: 0.998,
                    r: -0.049
                },
                "19": {
                    x: 73.354,
                    y: -28.993,
                    r: -0.04
                },
                "20": {
                    x: 75.767,
                    y: -28.199,
                    r: -0.031
                },
                "21": {
                    x: 78.174,
                    y: -27.351,
                    r: -0.022
                },
                "22": {
                    x: 80.576,
                    y: -26.551,
                    r: -0.013
                },
                "23": {
                    x: 83.022,
                    y: -25.749,
                    r: -0.004
                },
                "24": {
                    x: 85.512,
                    y: -24.996,
                    r: 0.006
                },
                "25": {
                    x: 87.948,
                    y: -24.138,
                    r: 0.015
                },
                "26": {
                    x: 90.35,
                    y: -23.35,
                    r: 0.024
                },
                "27": {
                    x: 93.199,
                    y: -22.65
                },
                "28": {
                    x: 95.999,
                    y: -22
                },
                "29": {
                    x: 98.799,
                    y: -21.3
                },
                "30": {
                    x: 101.599,
                    y: -20.65
                },
                "31": {
                    x: 104.35,
                    y: -19.95
                },
                "32": {
                    x: 104.298,
                    y: -18.95
                },
                "33": {
                    x: 104.098,
                    y: -17.8
                },
                "34": {
                    x: 103.85,
                    y: -16.6
                },
                "35": {
                    x: 100.598,
                    y: -18.35
                },
                "36": {
                    x: 97.198,
                    y: -20
                },
                "37": {
                    x: 93.848,
                    y: -21.7
                },
                "38": {
                    x: 90.35,
                    y: -23.35
                },
                "39": {
                    x: 94.249,
                    y: -22.95
                },
                "40": {
                    x: 98.049,
                    y: -22.5
                },
                "41": {
                    x: 101.899,
                    y: -22.1
                },
                "42": {
                    x: 105.749,
                    y: -21.7
                },
                "43": {
                    x: 109.549,
                    y: -21.25
                },
                "44": {
                    x: 113.35,
                    y: -20.85
                },
                "45": {
                    x: 115.798,
                    y: -21.3
                },
                "46": {
                    x: 118.148,
                    y: -21.7
                },
                "47": {
                    x: 120.548,
                    y: -22.1
                },
                "48": {
                    x: 122.85,
                    y: -22.45
                },
                "51": {
                    x: 129.045,
                    y: -26.282,
                    r: -0.021
                },
                "52": {
                    x: 135.145,
                    y: -30.06,
                    sx: 0.997,
                    sy: 0.997,
                    r: -0.066
                },
                "53": {
                    x: 141.304,
                    y: -33.82,
                    r: -0.111
                },
                "54": {
                    x: 147.4,
                    y: -37.65,
                    r: -0.156
                },
                "55": {
                    x: 30.4,
                    y: -36.05,
                    sx: 1,
                    sy: 1,
                    r: -0.14
                },
                "87": {
                    x: 34.4,
                    y: -35.05
                },
                "88": {
                    x: 33.898,
                    y: -35.098,
                    sx: 0.999,
                    sy: 0.999,
                    a: 0.89
                },
                "89": {
                    x: 33.348,
                    a: 0.78
                },
                "90": {
                    x: 32.798,
                    a: 0.67
                },
                "91": {
                    x: 32.248,
                    a: 0.55
                },
                "92": {
                    x: 31.648,
                    a: 0.45
                },
                "93": {
                    x: 31.098,
                    a: 0.33
                },
                "94": {
                    x: 30.548,
                    a: 0.22
                },
                "95": {
                    x: 29.998,
                    a: 0.11
                },
                "96": {
                    x: 29.4,
                    y: -35.05,
                    sx: 1,
                    sy: 1,
                    a: 0
                }
            })
            .addTimedChild(instance6, 0, 99, {
                "0": {
                    x: 10.9,
                    y: -40.05,
                    sx: 1,
                    sy: 1,
                    r: -0.14,
                    a: 1
                },
                "1": {
                    x: 13.6,
                    y: -39.698,
                    sx: 0.999,
                    sy: 0.999
                },
                "2": {
                    x: 16.25,
                    y: -39.248
                },
                "3": {
                    x: 18.9,
                    y: -38.848
                },
                "4": {
                    x: 21.5,
                    y: -38.448
                },
                "5": {
                    x: 24.15,
                    y: -38.048
                },
                "6": {
                    x: 26.8,
                    y: -37.598
                },
                "7": {
                    x: 29.4,
                    y: -37.15,
                    sx: 1,
                    sy: 1
                },
                "8": {
                    x: 29.399,
                    y: -36.498,
                    sx: 0.999,
                    sy: 0.999
                },
                "9": {
                    y: -35.748
                },
                "10": {
                    y: -34.998
                },
                "11": {
                    y: -34.248
                },
                "12": {
                    y: -33.498
                },
                "13": {
                    y: -32.748
                },
                "14": {
                    y: -31.998
                },
                "15": {
                    x: 29.4,
                    y: -31.15,
                    sx: 1,
                    sy: 1
                },
                "16": {
                    x: 31.083,
                    y: -31.116,
                    sx: 0.999,
                    sy: 0.999,
                    r: -0.137
                },
                "17": {
                    x: 32.668,
                    y: -30.934,
                    r: -0.134
                },
                "18": {
                    x: 34.251,
                    y: -30.8,
                    r: -0.132
                },
                "19": {
                    x: 35.885,
                    y: -30.667,
                    r: -0.129
                },
                "20": {
                    x: 37.468,
                    y: -30.533,
                    r: -0.126
                },
                "21": {
                    x: 39.101,
                    y: -30.349,
                    r: -0.123
                },
                "22": {
                    x: 40.734,
                    y: -30.214,
                    r: -0.12
                },
                "23": {
                    x: 42.367,
                    y: -30.081,
                    r: -0.118
                },
                "24": {
                    x: 43.9,
                    y: -29.946,
                    r: -0.115
                },
                "25": {
                    x: 45.532,
                    y: -29.761,
                    r: -0.112
                },
                "26": {
                    x: 47.1,
                    y: -29.55,
                    r: -0.109
                },
                "27": {
                    x: 47.197,
                    y: -29.198
                },
                "28": {
                    y: -28.798
                },
                "29": {
                    y: -28.398
                },
                "30": {
                    y: -27.998
                },
                "31": {
                    x: 47.1,
                    y: -27.55
                },
                "32": {
                    x: 47.469,
                    y: -25.695,
                    r: -0.187
                },
                "33": {
                    x: 47.723,
                    y: -23.707,
                    sx: 0.998,
                    sy: 0.998,
                    r: -0.264
                },
                "34": {
                    x: 48.05,
                    y: -21.6,
                    r: -0.341
                },
                "35": {
                    x: 47.428,
                    y: -22.432,
                    r: -0.283
                },
                "36": {
                    x: 46.844,
                    y: -23.3,
                    sx: 0.999,
                    sy: 0.999,
                    r: -0.225
                },
                "37": {
                    x: 46.239,
                    y: -24.115,
                    r: -0.167
                },
                "38": {
                    x: 45.6,
                    y: -24.95,
                    r: -0.109
                },
                "39": {
                    x: 48.983,
                    y: -25.355,
                    r: -0.114
                },
                "40": {
                    x: 52.369,
                    y: -25.612,
                    r: -0.119
                },
                "41": {
                    x: 55.703,
                    y: -25.916,
                    r: -0.123
                },
                "42": {
                    x: 59.086,
                    y: -26.221,
                    r: -0.128
                },
                "43": {
                    x: 62.468,
                    y: -26.477,
                    r: -0.132
                },
                "44": {
                    x: 65.75,
                    y: -26.75,
                    r: -0.137
                },
                "45": {
                    x: 68.481,
                    y: -27.253,
                    r: -0.13
                },
                "46": {
                    x: 71.209,
                    y: -27.703,
                    r: -0.123
                },
                "47": {
                    x: 73.884,
                    y: -28.103,
                    r: -0.116
                },
                "48": {
                    x: 76.6,
                    y: -28.45,
                    r: -0.109
                },
                "51": {
                    x: 78.899,
                    y: -30.567,
                    r: -0.135
                },
                "52": {
                    x: 81.205,
                    y: -32.567,
                    r: -0.16
                },
                "53": {
                    x: 83.612,
                    y: -34.594,
                    r: -0.185
                },
                "54": {
                    x: 85.85,
                    y: -36.55,
                    r: -0.21
                },
                "55": {
                    x: 10.9,
                    y: -36.05,
                    sx: 1,
                    sy: 1,
                    r: -0.14
                },
                "85": {
                    x: 11.9,
                    y: -35.05
                },
                "86": {
                    x: 12.099,
                    y: -35.098,
                    sx: 0.999,
                    sy: 0.999,
                    a: 0.88
                },
                "87": {
                    x: 12.199,
                    a: 0.75
                },
                "88": {
                    x: 12.349,
                    a: 0.63
                },
                "89": {
                    x: 12.449,
                    a: 0.5
                },
                "90": {
                    x: 12.599,
                    a: 0.38
                },
                "91": {
                    x: 12.699,
                    a: 0.25
                },
                "92": {
                    x: 12.849,
                    a: 0.13
                },
                "93": {
                    x: 12.9,
                    y: -35.05,
                    sx: 1,
                    sy: 1,
                    a: 0
                }
            })
            .addTimedChild(instance5, 0, 99, {
                "0": {
                    x: -29.6,
                    y: -40.9,
                    sx: 0.998,
                    sy: 0.998,
                    r: -0.132,
                    a: 1
                },
                "1": {
                    x: -31.65,
                    y: -40.599
                },
                "2": {
                    x: -33.65,
                    y: -40.249
                },
                "3": {
                    x: -35.65,
                    y: -39.949
                },
                "4": {
                    x: -37.65,
                    y: -39.599
                },
                "5": {
                    x: -39.65,
                    y: -39.299
                },
                "6": {
                    x: -41.65,
                    y: -38.949
                },
                "7": {
                    x: -43.6,
                    y: -38.65
                },
                "8": {
                    x: -43.699,
                    y: -38.449
                },
                "9": {
                    y: -38.249
                },
                "10": {
                    y: -38.099
                },
                "11": {
                    y: -37.899
                },
                "12": {
                    y: -37.699
                },
                "13": {
                    y: -37.499
                },
                "14": {
                    y: -37.349
                },
                "15": {
                    x: -43.6,
                    y: -37.15
                },
                "16": {
                    x: -46.565,
                    y: -36.437,
                    r: -0.138
                },
                "17": {
                    x: -49.48,
                    y: -35.622,
                    sx: 0.997,
                    sy: 0.997,
                    r: -0.144
                },
                "18": {
                    x: -52.343,
                    y: -34.856,
                    r: -0.15
                },
                "19": {
                    x: -55.255,
                    y: -34.088,
                    r: -0.156
                },
                "20": {
                    x: -58.165,
                    y: -33.319,
                    r: -0.162
                },
                "21": {
                    x: -61.073,
                    y: -32.5,
                    r: -0.168
                },
                "22": {
                    x: -63.981,
                    y: -31.83,
                    r: -0.174
                },
                "23": {
                    x: -66.886,
                    y: -31.007,
                    r: -0.18
                },
                "24": {
                    x: -69.739,
                    y: -30.234,
                    r: -0.186
                },
                "25": {
                    x: -72.691,
                    y: -29.458,
                    r: -0.192
                },
                "26": {
                    x: -75.45,
                    y: -28.65,
                    r: -0.198
                },
                "27": {
                    x: -75.254,
                    y: -30.421,
                    sx: 0.996,
                    sy: 0.996,
                    r: -0.16
                },
                "28": {
                    x: -75.006,
                    y: -32.147,
                    r: -0.122
                },
                "29": {
                    x: -74.703,
                    y: -33.825,
                    r: -0.084
                },
                "30": {
                    x: -74.4,
                    y: -35.498,
                    r: -0.047
                },
                "31": {
                    x: -74,
                    y: -37.15,
                    r: -0.009
                },
                "32": {
                    x: -75.197,
                    y: -36.555,
                    r: 0.027
                },
                "33": {
                    x: -76.296,
                    y: -35.859,
                    r: 0.064
                },
                "34": {
                    x: -77.35,
                    y: -35.1,
                    r: 0.1
                },
                "35": {
                    x: -77.813,
                    y: -35.482,
                    sx: 0.995,
                    sy: 0.995,
                    r: 0.086
                },
                "36": {
                    x: -78.257,
                    y: -35.906,
                    r: 0.072
                },
                "37": {
                    x: -78.638,
                    y: -36.275,
                    r: 0.057
                },
                "38": {
                    x: -79.05,
                    y: -36.6,
                    sx: 0.994,
                    sy: 0.994,
                    r: 0.043
                },
                "39": {
                    x: -79.416,
                    y: -36.115,
                    r: 0.053
                },
                "40": {
                    x: -79.575,
                    y: -35.577,
                    sx: 0.995,
                    sy: 0.995,
                    r: 0.062
                },
                "41": {
                    x: -79.876,
                    y: -35.038,
                    r: 0.072
                },
                "42": {
                    x: -80.169,
                    y: -34.543,
                    r: 0.081
                },
                "43": {
                    x: -80.356,
                    y: -33.996,
                    r: 0.091
                },
                "44": {
                    x: -80.55,
                    y: -33.4,
                    sx: 0.996,
                    sy: 0.996,
                    r: 0.1
                },
                "45": {
                    x: -82.281,
                    y: -32.218,
                    r: 0.026
                },
                "46": {
                    x: -83.855,
                    y: -30.882,
                    r: -0.049
                },
                "47": {
                    x: -85.458,
                    y: -29.575,
                    r: -0.123
                },
                "48": {
                    x: -86.95,
                    y: -28.15,
                    sx: 0.997,
                    sy: 0.997,
                    r: -0.198
                },
                "51": {
                    x: -84.905,
                    y: -30.955,
                    sx: 0.996,
                    sy: 0.996,
                    r: -0.112
                },
                "52": {
                    x: -82.652,
                    y: -33.552,
                    r: -0.027
                },
                "53": {
                    x: -80.459,
                    y: -36.232,
                    r: 0.059
                },
                "54": {
                    x: -78.1,
                    y: -38.75,
                    r: 0.144
                },
                "55": {
                    x: -29.6,
                    y: -36.9,
                    sx: 0.998,
                    sy: 0.998,
                    r: -0.132
                },
                "77": {
                    y: -35.9
                },
                "78": {
                    x: -26.5,
                    y: -35.949,
                    a: 0.86
                },
                "79": {
                    x: -23.35,
                    a: 0.71
                },
                "80": {
                    x: -20.2,
                    a: 0.57
                },
                "81": {
                    x: -17.1,
                    a: 0.43
                },
                "82": {
                    x: -13.95,
                    a: 0.29
                },
                "83": {
                    x: -10.8,
                    a: 0.14
                },
                "84": {
                    x: -7.6,
                    y: -35.9,
                    a: 0
                }
            })
            .addTimedChild(instance4, 0, 99, {
                "0": {
                    x: -50.05,
                    y: -41.35,
                    sx: 0.999,
                    sy: 0.999,
                    r: -0.167,
                    a: 1
                },
                "1": {
                    x: -53.799,
                    y: -40.949
                },
                "2": {
                    x: -57.499,
                    y: -40.499
                },
                "3": {
                    x: -61.199,
                    y: -40.049
                },
                "4": {
                    x: -64.899,
                    y: -39.599
                },
                "5": {
                    x: -68.599,
                    y: -39.149
                },
                "6": {
                    x: -72.299,
                    y: -38.699
                },
                "7": {
                    x: -75.95,
                    y: -38.2
                },
                "8": {
                    x: -76.305,
                    y: -37.82,
                    r: -0.178
                },
                "9": {
                    x: -76.5,
                    y: -37.385,
                    r: -0.189
                },
                "10": {
                    x: -76.788,
                    y: -36.997,
                    r: -0.199
                },
                "11": {
                    x: -77.065,
                    y: -36.605,
                    r: -0.21
                },
                "12": {
                    x: -77.384,
                    y: -36.208,
                    r: -0.221
                },
                "13": {
                    x: -77.594,
                    y: -35.756,
                    r: -0.232
                },
                "14": {
                    x: -77.844,
                    y: -35.353,
                    r: -0.243
                },
                "15": {
                    x: -78.05,
                    y: -34.95,
                    r: -0.254
                },
                "16": {
                    x: -81.738,
                    y: -34.193,
                    r: -0.261
                },
                "17": {
                    x: -85.321,
                    y: -33.437,
                    r: -0.268
                },
                "18": {
                    x: -88.903,
                    y: -32.629,
                    r: -0.275
                },
                "19": {
                    x: -92.529,
                    y: -31.768,
                    r: -0.282
                },
                "20": {
                    x: -96.102,
                    y: -30.956,
                    sx: 0.998,
                    sy: 0.998,
                    r: -0.289
                },
                "21": {
                    x: -99.672,
                    y: -30.192,
                    r: -0.296
                },
                "22": {
                    x: -103.285,
                    y: -29.376,
                    r: -0.303
                },
                "23": {
                    x: -106.896,
                    y: -28.561,
                    r: -0.31
                },
                "24": {
                    x: -110.504,
                    y: -27.744,
                    r: -0.317
                },
                "25": {
                    x: -114.056,
                    y: -26.972,
                    r: -0.325
                },
                "26": {
                    x: -117.5,
                    y: -26.1,
                    r: -0.332
                },
                "27": {
                    x: -118.243,
                    y: -28.406,
                    r: -0.325
                },
                "28": {
                    x: -118.883,
                    y: -30.658,
                    r: -0.318
                },
                "29": {
                    x: -119.566,
                    y: -32.862,
                    sx: 0.997,
                    sy: 0.997,
                    r: -0.311
                },
                "30": {
                    x: -120.245,
                    y: -35.112,
                    r: -0.304
                },
                "31": {
                    x: -120.8,
                    y: -37.35,
                    r: -0.297
                },
                "32": {
                    x: -123.904,
                    y: -36.616,
                    r: -0.309
                },
                "33": {
                    x: -126.947,
                    y: -35.83,
                    sx: 0.998,
                    sy: 0.998,
                    r: -0.32
                },
                "34": {
                    x: -129.95,
                    y: -35,
                    r: -0.332
                },
                "35": {
                    x: -129.994,
                    y: -35.948
                },
                "36": {
                    y: -36.848
                },
                "37": {
                    x: -130.044,
                    y: -37.798
                },
                "38": {
                    x: -130,
                    y: -38.65
                },
                "39": {
                    x: -130.594,
                    y: -38.098
                },
                "40": {
                    x: -131.094,
                    y: -37.498
                },
                "41": {
                    x: -131.594,
                    y: -36.848
                },
                "42": {
                    x: -132.094,
                    y: -36.248
                },
                "43": {
                    x: -132.594,
                    y: -35.648
                },
                "44": {
                    x: -133,
                    y: -35
                },
                "45": {
                    x: -135.122,
                    y: -30.806,
                    r: -0.346
                },
                "46": {
                    x: -137.222,
                    y: -26.507,
                    r: -0.36
                },
                "47": {
                    x: -139.297,
                    y: -22.303,
                    r: -0.374
                },
                "48": {
                    x: -141.3,
                    y: -18.1,
                    r: -0.388
                },
                "51": {
                    x: -141.484,
                    y: -23.372,
                    r: -0.328
                },
                "52": {
                    x: -141.618,
                    y: -28.598,
                    r: -0.268
                },
                "53": {
                    x: -141.697,
                    y: -33.895,
                    r: -0.208
                },
                "54": {
                    x: -141.8,
                    y: -39.05,
                    sx: 0.997,
                    sy: 0.997,
                    r: -0.147
                },
                "55": {
                    x: -50.05,
                    y: -37.35,
                    sx: 0.999,
                    sy: 0.999,
                    r: -0.167
                },
                "72": {
                    y: -36.35
                },
                "73": {
                    x: -50.449,
                    y: -36.399,
                    a: 0.89
                },
                "74": {
                    x: -50.749,
                    a: 0.78
                },
                "75": {
                    x: -51.099,
                    a: 0.67
                },
                "76": {
                    x: -51.449,
                    a: 0.55
                },
                "77": {
                    x: -51.749,
                    a: 0.45
                },
                "78": {
                    x: -52.099,
                    a: 0.33
                },
                "79": {
                    x: -52.449,
                    a: 0.22
                },
                "80": {
                    x: -52.749,
                    a: 0.11
                },
                "81": {
                    x: -53.05,
                    y: -36.35,
                    a: 0
                }
            })
            .addTimedChild(instance3, 0, 99, {
                "0": {
                    x: -71.4,
                    y: -38.4,
                    sx: 0.999,
                    sy: 0.999,
                    r: -0.315,
                    a: 1
                },
                "1": {
                    x: -76.801,
                    y: -37.537,
                    r: -0.327
                },
                "2": {
                    x: -82.194,
                    y: -36.672,
                    r: -0.339
                },
                "3": {
                    x: -87.574,
                    y: -35.749,
                    r: -0.351
                },
                "4": {
                    x: -92.897,
                    y: -34.874,
                    r: -0.363
                },
                "5": {
                    x: -98.257,
                    y: -33.942,
                    r: -0.375
                },
                "6": {
                    x: -103.608,
                    y: -33.105,
                    r: -0.387
                },
                "7": {
                    x: -108.9,
                    y: -32.05,
                    r: -0.399
                },
                "8": {
                    x: -109.045,
                    y: -31.799
                },
                "9": {
                    x: -109.095,
                    y: -31.449
                },
                "10": {
                    x: -109.195,
                    y: -31.149
                },
                "11": {
                    x: -109.245,
                    y: -30.849
                },
                "12": {
                    x: -109.295,
                    y: -30.549
                },
                "13": {
                    x: -109.345,
                    y: -30.199
                },
                "14": {
                    x: -109.445,
                    y: -29.899
                },
                "15": {
                    x: -109.4,
                    y: -29.55
                },
                "16": {
                    x: -114.355,
                    y: -26.732,
                    r: -0.443
                },
                "17": {
                    x: -119.257,
                    y: -23.921,
                    sx: 0.998,
                    sy: 0.998,
                    r: -0.486
                },
                "18": {
                    x: -124.098,
                    y: -21.075,
                    r: -0.529
                },
                "19": {
                    x: -128.93,
                    y: -18.202,
                    r: -0.573
                },
                "20": {
                    x: -133.701,
                    y: -15.359,
                    r: -0.616
                },
                "21": {
                    x: -138.51,
                    y: -12.41,
                    r: -0.659
                },
                "22": {
                    x: -143.204,
                    y: -9.561,
                    r: -0.702
                },
                "23": {
                    x: -147.989,
                    y: -6.672,
                    sx: 0.997,
                    sy: 0.997,
                    r: -0.746
                },
                "24": {
                    x: -152.663,
                    y: -3.802,
                    r: -0.789
                },
                "25": {
                    x: -157.428,
                    y: -0.959,
                    r: -0.832
                },
                "26": {
                    x: -162.05,
                    y: 1.95,
                    r: -0.876
                },
                "27": {
                    x: -164.029,
                    y: -1.453,
                    r: -0.84
                },
                "28": {
                    x: -165.86,
                    y: -4.853,
                    r: -0.804
                },
                "29": {
                    x: -167.683,
                    y: -8.235,
                    r: -0.768
                },
                "30": {
                    x: -169.598,
                    y: -11.644,
                    sx: 0.996,
                    sy: 0.996,
                    r: -0.732
                },
                "31": {
                    x: -171.35,
                    y: -15,
                    r: -0.697
                },
                "32": {
                    x: -174.684,
                    y: -12.251,
                    r: -0.756
                },
                "33": {
                    x: -177.964,
                    y: -9.479,
                    sx: 0.997,
                    sy: 0.997,
                    r: -0.816
                },
                "34": {
                    x: -181.05,
                    y: -6.75,
                    r: -0.876
                },
                "35": {
                    x: -180.292,
                    y: -7.6
                },
                "36": {
                    x: -179.492,
                    y: -8.45
                },
                "37": {
                    x: -178.742,
                    y: -9.25
                },
                "38": {
                    x: -177.9,
                    y: -10.05
                },
                "39": {
                    x: -178.642,
                    y: -9.45
                },
                "40": {
                    x: -179.342,
                    y: -8.85
                },
                "41": {
                    x: -179.992,
                    y: -8.2
                },
                "42": {
                    x: -180.692,
                    y: -7.6
                },
                "43": {
                    x: -181.392,
                    y: -6.95
                },
                "44": {
                    x: -182.05,
                    y: -6.3
                },
                "45": {
                    x: -185.236,
                    y: -5.236,
                    r: -0.767
                },
                "46": {
                    x: -188.274,
                    y: -4.111,
                    sx: 0.996,
                    sy: 0.996,
                    r: -0.659
                },
                "47": {
                    x: -191.143,
                    y: -3.041,
                    r: -0.551
                },
                "48": {
                    x: -193.75,
                    y: -1.85,
                    r: -0.442
                },
                "51": {
                    x: -196.23,
                    y: -10.386,
                    r: -0.394
                },
                "52": {
                    x: -198.621,
                    y: -18.895,
                    sx: 0.995,
                    sy: 0.995,
                    r: -0.346
                },
                "53": {
                    x: -201.074,
                    y: -27.355,
                    r: -0.298
                },
                "54": {
                    x: -203.25,
                    y: -35.8,
                    r: -0.25
                },
                "55": {
                    x: -71.4,
                    y: -34.4,
                    sx: 0.999,
                    sy: 0.999,
                    r: -0.315
                },
                "70": {
                    x: -70.4
                },
                "71": {
                    x: -70.298,
                    y: -34.298,
                    a: 0.89
                },
                "72": {
                    x: -70.198,
                    y: -34.198,
                    a: 0.78
                },
                "73": {
                    x: -70.048,
                    y: -34.048,
                    a: 0.67
                },
                "74": {
                    x: -69.948,
                    y: -33.948,
                    a: 0.55
                },
                "75": {
                    x: -69.848,
                    y: -33.848,
                    a: 0.45
                },
                "76": {
                    x: -69.748,
                    y: -33.748,
                    a: 0.33
                },
                "77": {
                    x: -69.598,
                    y: -33.598,
                    a: 0.22
                },
                "78": {
                    x: -69.498,
                    y: -33.498,
                    a: 0.11
                },
                "79": {
                    x: -69.4,
                    y: -33.4,
                    a: 0
                }
            })
            .addTimedChild(instance2, 0, 16, {
                "0": {
                    x: -8.95,
                    y: -40.2,
                    r: -0.123,
                    a: 1
                },
                "1": {
                    y: -39.849,
                    a: 0.97
                },
                "2": {
                    y: -39.449,
                    a: 0.94
                },
                "3": {
                    y: -38.999,
                    a: 0.91
                },
                "4": {
                    y: -38.599,
                    a: 0.88
                },
                "5": {
                    y: -38.149,
                    a: 0.85
                },
                "6": {
                    y: -37.749,
                    a: 0.82
                },
                "7": {
                    y: -37.2,
                    a: 0.79
                },
                "8": {
                    x: -8.6,
                    y: -36.549,
                    a: 0.69
                },
                "9": {
                    x: -8.25,
                    y: -35.799,
                    a: 0.59
                },
                "10": {
                    x: -7.95,
                    y: -35.049,
                    a: 0.49
                },
                "11": {
                    x: -7.65,
                    y: -34.299,
                    a: 0.39
                },
                "12": {
                    x: -7.35,
                    y: -33.549,
                    a: 0.3
                },
                "13": {
                    x: -7,
                    y: -32.799,
                    a: 0.2
                },
                "14": {
                    x: -6.7,
                    y: -32.049,
                    a: 0.1
                },
                "15": {
                    x: -6.45,
                    y: -31.2,
                    a: 0
                }
            })
            .addTimedChild(instance146, 50, 5, {
                "50": {
                    x: 148.95,
                    y: -15,
                    sx: 0.994,
                    sy: 0.994,
                    r: 0.143
                },
                "51": {
                    x: 154.049,
                    y: -20.77,
                    r: 0.083
                },
                "52": {
                    x: 159.266,
                    y: -26.457,
                    r: 0.023
                },
                "53": {
                    x: 164.405,
                    y: -32.064,
                    r: -0.037
                },
                "54": {
                    x: 169.5,
                    y: -37.65,
                    r: -0.097
                }
            })
            .addTimedChild(instance145, 50, 5, {
                "50": {
                    x: 100.15,
                    y: -26.15,
                    sx: 0.995,
                    sy: 0.995,
                    r: 0.004
                },
                "51": {
                    x: 102.109,
                    y: -29.148,
                    sx: 0.994,
                    sy: 0.994,
                    r: -0.029
                },
                "52": {
                    x: 104.009,
                    y: -32.018,
                    r: -0.063
                },
                "53": {
                    x: 105.904,
                    y: -34.899,
                    r: -0.096
                },
                "54": {
                    x: 107.8,
                    y: -37.75,
                    r: -0.129
                }
            })
            .addTimedChild(instance144, 50, 5, {
                "50": {
                    x: -114.5,
                    y: -24.5,
                    sx: 0.995,
                    sy: 0.995,
                    r: -0.271
                },
                "51": {
                    x: -110.931,
                    y: -28.489,
                    r: -0.225
                },
                "52": {
                    x: -107.276,
                    y: -32.413,
                    r: -0.179
                },
                "53": {
                    x: -103.582,
                    y: -36.262,
                    r: -0.133
                },
                "54": {
                    x: -99.8,
                    y: -40.2,
                    r: -0.087
                }
            })
            .addTimedChild(instance143, 50, 5, {
                "50": {
                    x: -169.15,
                    y: -10.95,
                    sx: 0.996,
                    sy: 0.996,
                    r: -0.415
                },
                "51": {
                    x: -167.518,
                    y: -17.882,
                    sx: 0.995,
                    sy: 0.995,
                    r: -0.35
                },
                "52": {
                    x: -165.809,
                    y: -24.763,
                    r: -0.284
                },
                "53": {
                    x: -164.036,
                    y: -31.648,
                    r: -0.218
                },
                "54": {
                    x: -162.2,
                    y: -38.4,
                    r: -0.152
                }
            })
            .addTimedChild(instance137, 48, 3, {
                "48": {
                    x: -169.35,
                    y: -28.4,
                    a: 0.01
                },
                "49": {
                    a: 0.61
                },
                "50": {
                    a: 1
                }
            })
            .addTimedChild(instance167, 55, 44, {
                "55": {
                    x: -8.95,
                    y: -36.2,
                    r: -0.123,
                    a: 1
                },
                "81": {
                    x: -35.95,
                    y: -35.2
                },
                "82": {
                    x: -40.849,
                    y: -35.249,
                    a: 0.9
                },
                "83": {
                    x: -45.649,
                    a: 0.8
                },
                "84": {
                    x: -50.449,
                    a: 0.7
                },
                "85": {
                    x: -55.249,
                    a: 0.6
                },
                "86": {
                    x: -60.049,
                    a: 0.5
                },
                "87": {
                    x: -64.849,
                    a: 0.4
                },
                "88": {
                    x: -69.649,
                    a: 0.3
                },
                "89": {
                    x: -74.449,
                    a: 0.2
                },
                "90": {
                    x: -79.249,
                    a: 0.1
                },
                "91": {
                    x: -83.95,
                    y: -35.2,
                    a: 0
                }
            })
            .addTimedChild(instance1, 0, 99, {
                "0": {
                    x: -1.1,
                    y: -4.05,
                    sx: 6.057,
                    sy: 2.559,
                    a: 0
                },
                "1": {
                    x: -0.831,
                    y: -4,
                    sx: 6.23,
                    sy: 2.558
                },
                "2": {
                    x: -0.663,
                    sx: 6.403
                },
                "3": {
                    x: -0.544,
                    sx: 6.577
                },
                "4": {
                    x: -0.376,
                    sx: 6.75
                },
                "5": {
                    x: -0.207,
                    sx: 6.924
                },
                "6": {
                    x: 0.011,
                    sx: 7.097
                },
                "7": {
                    x: 0.13,
                    sx: 7.271
                },
                "8": {
                    x: 0.298,
                    sx: 7.444
                },
                "9": {
                    x: 0.467,
                    sx: 7.618
                },
                "10": {
                    x: 0.635,
                    sx: 7.791
                },
                "11": {
                    x: 0.804,
                    sx: 7.964
                },
                "12": {
                    x: 0.972,
                    sx: 8.138
                },
                "13": {
                    x: 1.141,
                    sx: 8.311
                },
                "14": {
                    x: 1.309,
                    sx: 8.485
                },
                "15": {
                    x: 1.478,
                    sx: 8.658
                },
                "16": {
                    x: 1.596,
                    sx: 8.832
                },
                "17": {
                    x: 1.815,
                    sx: 9.005
                },
                "18": {
                    x: 1.983,
                    sx: 9.178
                },
                "19": {
                    x: 2.152,
                    sx: 9.352
                },
                "20": {
                    x: 2.32,
                    sx: 9.526
                },
                "21": {
                    x: 2.439,
                    sx: 9.699
                },
                "22": {
                    x: 2.607,
                    sx: 9.872
                },
                "23": {
                    x: 2.826,
                    sx: 10.046
                },
                "24": {
                    x: 2.994,
                    sx: 10.219
                },
                "25": {
                    x: 3.113,
                    sx: 10.393
                },
                "26": {
                    x: 3.281,
                    sx: 10.566
                },
                "27": {
                    x: 3.45,
                    sx: 10.739
                },
                "28": {
                    x: 3.618,
                    sx: 10.913
                },
                "29": {
                    x: 3.837,
                    sx: 11.086
                },
                "30": {
                    x: 3.955,
                    sx: 11.26
                },
                "31": {
                    x: 4.124,
                    sx: 11.433
                },
                "32": {
                    x: 4.292,
                    sx: 11.607
                },
                "33": {
                    x: 4.461,
                    sx: 11.78
                },
                "34": {
                    x: 4.579,
                    sx: 11.954
                },
                "35": {
                    x: 4.798,
                    sx: 12.127
                },
                "36": {
                    x: 4.966,
                    sx: 12.301
                },
                "37": {
                    x: 5.135,
                    sx: 12.474
                },
                "38": {
                    x: 5.303,
                    sx: 12.647
                },
                "39": {
                    x: 5.422,
                    sx: 12.821
                },
                "40": {
                    x: 5.59,
                    sx: 12.994
                },
                "41": {
                    x: 5.809,
                    sx: 13.168
                },
                "42": {
                    x: 5.977,
                    sx: 13.341
                },
                "43": {
                    x: 6.096,
                    sx: 13.515
                },
                "44": {
                    x: 6.264,
                    sx: 13.688
                },
                "45": {
                    x: 6.433,
                    sx: 13.861
                },
                "46": {
                    x: 6.651,
                    sx: 14.035
                },
                "47": {
                    x: 6.82,
                    sx: 14.208
                },
                "48": {
                    x: 6.938,
                    sx: 14.382
                },
                "49": {
                    x: 7.107,
                    sx: 14.555
                },
                "50": {
                    x: 7.275,
                    sx: 14.729
                },
                "51": {
                    x: 7.444,
                    sx: 14.902
                },
                "52": {
                    x: 7.612,
                    sx: 15.076
                },
                "53": {
                    x: 7.781,
                    sx: 15.249
                },
                "54": {
                    x: 7.7,
                    y: -4.05,
                    sx: 15.424,
                    sy: 2.559
                },
                "55": {
                    x: -1.1,
                    y: -2.35,
                    sx: 6.057
                }
            })
            .addTimedChild(instance188, 99, 15, {
                "99": {
                    x: -93.75,
                    y: -20.1,
                    a: 1
                },
                "100": {
                    x: -93.7,
                    a: 0.93
                },
                "101": {
                    x: -93.6,
                    a: 0.86
                },
                "102": {
                    x: -93.55,
                    a: 0.79
                },
                "103": {
                    x: -93.5,
                    a: 0.71
                },
                "104": {
                    x: -93.4,
                    a: 0.64
                },
                "105": {
                    x: -93.35,
                    a: 0.57
                },
                "106": {
                    x: -93.25,
                    a: 0.5
                },
                "107": {
                    x: -93.2,
                    a: 0.43
                },
                "108": {
                    x: -93.15,
                    a: 0.36
                },
                "109": {
                    x: -93.05,
                    a: 0.29
                },
                "110": {
                    x: -93,
                    a: 0.21
                },
                "111": {
                    x: -92.95,
                    a: 0.14
                },
                "112": {
                    x: -92.85,
                    a: 0.07
                },
                "113": {
                    x: -92.8,
                    a: 0
                }
            })
            .addAction(function () {
                /* stop();
                var nTime:Number = 0;
                var nTimeMax:Number;
                var nFrameEnd:Number = this._totalframes;
                var nFrameDie:Number = 56;

                //temp
                //gotoAndPlay(nFrameDie);

                this.body.onEnterFrame = function() {
                nTime++;
                if (nTime == 3) {
                trace("time passed variable, from enterframe bacteria ="+nTimeMax);
                }
                if (nTime == nTimeMax) {
                gotoAndPlay(2);
                }
                };
                function Die() {
                // this function can be called from the outside to start the kill animation
                gotoAndPlay(nFrameDie);
                tc.stop();
                }
                */
            }, 0)
            .addAction(function () {
                /* // this is the end of the split animation
                gotoAndPlay(nFrameEnd);*/
            }, 54)
            .addAction(function () {
                /* //stop();

                //this is the beginning of the kill animation
                this.tc.gotoAndStop(1);*/
            }, 55)
            .addAction(function () {
                /* // this is the end of the kill animation
                //
                this._parent.Inform("endKill");
                stop();*/
            }, 113)
            .addAction(function () {
                /* // this needs to be the last frame of the animation

                // communicate that the split is complete
                this._parent.Inform("endAnim");
                gotoAndPlay(1);*/
            }, 114);
    });

    lib.GameSafe = Container.extend(function () {
        Container.call(this);
        var instance1 = new Graphics()
            .drawCommands(shapes.Internal[188]);
        this.addChild(instance1);
    });

    lib.Internal = MovieClip.extend(function () {
        MovieClip.call(this, {
            duration: 1,
            framerate: 30
        });
        var instance11 = new lib.GameSafe()
            .setTransform(287, 0, 1.017, 0.977)
            .setAlpha(0.18);
        var instance10 = new Graphics()
            .drawCommands(shapes.Internal[187]);
        var instance9 = new lib.macro_bacteria()
            .setTransform(530.05, 230);
        this[instance9.name = "macrophage1"] = instance9;
        var instance8 = new lib.bacteria_divide()
            .setTransform(983.1, 290);
        this[instance8.name = "bacteria2"] = instance8;
        var instance7 = new lib.bacteria_divide()
            .setTransform(1072.9, 388.25);
        this[instance7.name = "bacteria3"] = instance7;
        var instance6 = new lib.bacteria_divide()
            .setTransform(933.1, 484.6);
        this[instance6.name = "bacteria4"] = instance6;
        var instance5 = new lib.bacteria_divide()
            .setTransform(1072.9, 178);
        this[instance5.name = "bacteria1"] = instance5;
        var instance4 = new lib.bacteria_divide()
            .setTransform(1072.9, 624.6);
        this[instance4.name = "bacteria5"] = instance4;
        var instance3 = new lib.macro_bacteria()
            .setTransform(410.05, 450);
        this[instance3.name = "macrophage2"] = instance3;
        var instance2 = new lib.macro_bacteria()
            .setTransform(620.05, 590);
        this[instance2.name = "macrophage3"] = instance2;
        var instance1 = new lib.Back()
            .setTransform(340, 50);
        this[instance1.name = "back"] = instance1;
        this.addChild(instance11, instance10, instance9, instance8, instance7, instance6, instance5, instance4, instance3, instance2, instance1);
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