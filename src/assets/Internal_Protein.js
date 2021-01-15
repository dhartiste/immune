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

    lib.protein = MovieClip.extend(function () {
        MovieClip.call(this, {
            duration: 2,
            labels: {
                bald: 0,
                bald_stop: 1
            }
        });
        var instance15 = new Graphics()
            .drawCommands(shapes.Internal[15]);
        var instance14 = new Graphics()
            .drawCommands(shapes.Internal[14]);
        var instance13 = new Graphics()
            .drawCommands(shapes.Internal[13]);
        var instance12 = new Graphics()
            .drawCommands(shapes.Internal[12]);
        var instance11 = new Graphics()
            .drawCommands(shapes.Internal[11]);
        var instance10 = new Graphics()
            .drawCommands(shapes.Internal[10])
            .setTransform(-336, -251.3, 0.84, 0.837);
        var instance9 = new Graphics()
            .drawCommands(shapes.Internal[9]);
        var instance8 = new Graphics()
            .drawCommands(shapes.Internal[8]);
        var instance7 = new Graphics()
            .drawCommands(shapes.Internal[7])
            .setTransform(-336, -251.3, 0.84, 0.837);
        var instance6 = new Graphics()
            .drawCommands(shapes.Internal[6])
            .setTransform(-336, -251.3, 0.84, 0.837);
        var instance5 = new Graphics()
            .drawCommands(shapes.Internal[5])
            .setTransform(-336, -251.3, 0.84, 0.837);
        var instance4 = new Graphics()
            .drawCommands(shapes.Internal[4])
            .setTransform(-336, -251.3, 0.84, 0.837);
        var instance3 = new Graphics()
            .drawCommands(shapes.Internal[3])
            .setTransform(-336, -251.3, 0.84, 0.837);
        var instance2 = new Graphics()
            .drawCommands(shapes.Internal[2])
            .setTransform(-336, -251.3, 0.84, 0.837);
        var instance1 = new Graphics()
            .drawCommands(shapes.Internal[1])
            .setTransform(-336, -251.3, 0.84, 0.837);
        this.addTimedChild(instance15, 0, 1, {
                "0": {
                    x: -336,
                    y: -251.3,
                    sx: 0.84,
                    sy: 0.837
                }
            })
            .addTimedChild(instance14, 0, 1, {
                "0": {
                    x: -336,
                    y: -251.3,
                    sx: 0.84,
                    sy: 0.837
                }
            })
            .addTimedChild(instance13, 0, 1, {
                "0": {
                    x: -336,
                    y: -251.3,
                    sx: 0.84,
                    sy: 0.837
                }
            })
            .addTimedChild(instance12, 0, 1, {
                "0": {
                    x: -336,
                    y: -251.3,
                    sx: 0.84,
                    sy: 0.837
                }
            })
            .addTimedChild(instance11, 0, 1, {
                "0": {
                    x: -336,
                    y: -251.3,
                    sx: 0.84,
                    sy: 0.837
                }
            })
            .addTimedChild(instance10)
            .addTimedChild(instance9, 0, 2, {
                "0": {
                    x: -336,
                    y: -251.3,
                    sx: 0.84,
                    sy: 0.837
                }
            })
            .addTimedChild(instance8, 0, 1, {
                "0": {
                    x: -336,
                    y: -251.3,
                    sx: 0.84,
                    sy: 0.837
                }
            })
            .addTimedChild(instance7)
            .addTimedChild(instance6)
            .addTimedChild(instance5)
            .addTimedChild(instance4)
            .addTimedChild(instance3)
            .addTimedChild(instance2)
            .addTimedChild(instance1)
            .addAction(function () {
                /* stop();*/
            }, 0);
    });

    lib.hittestie = Container.extend(function () {
        Container.call(this);
        var instance1 = new Graphics()
            .drawCommands(shapes.Internal[16])
            .setTransform(32.45, -30.8);
        this.addChild(instance1);
    });

    lib.antenae_single = Container.extend(function () {
        Container.call(this);
        var instance3 = new Graphics()
            .drawCommands(shapes.Internal[19])
            .setTransform(-277.05, -95.65);
        var instance2 = new Graphics()
            .drawCommands(shapes.Internal[18])
            .setTransform(-277.05, -95.65);
        var instance1 = new Graphics()
            .drawCommands(shapes.Internal[17])
            .setTransform(-277.05, -95.65);
        this.addChild(instance3, instance2, instance1);
    });

    lib.hitmesquare = Container.extend(function () {
        Container.call(this);
        var instance1 = new Graphics()
            .drawCommands(shapes.Internal[37]);
        this.addChild(instance1);
    });

    lib.eyelash = Container.extend(function () {
        Container.call(this);
        var instance2 = new Graphics()
            .drawCommands(shapes.Internal[40])
            .setTransform(-157.8, -117.1);
        var instance1 = new Graphics()
            .drawCommands(shapes.Internal[39])
            .setTransform(-157.8, -117.1);
        this.addChild(instance2, instance1);
    });

    lib.eye = Container.extend(function () {
        Container.call(this);
        var instance2 = new Graphics()
            .drawCommands(shapes.Internal[7])
            .setTransform(-298.2, -188.7, 0.747, 0.641);
        var instance1 = new Graphics()
            .drawCommands(shapes.Internal[41])
            .setTransform(-161.95, -119.45);
        this.addChild(instance2, instance1);
    });

    lib.tail_clip = MovieClip.extend(function () {
        MovieClip.call(this, {
            duration: 30
        });
        var instance1 = new Graphics()
            .drawCommands(shapes.Internal[42]);
        var instance2 = new Graphics()
            .drawCommands(shapes.Internal[43]);
        var instance3 = new Graphics()
            .drawCommands(shapes.Internal[44]);
        var instance4 = new Graphics()
            .drawCommands(shapes.Internal[45]);
        var instance5 = new Graphics()
            .drawCommands(shapes.Internal[46]);
        var instance6 = new Graphics()
            .drawCommands(shapes.Internal[47]);
        var instance7 = new Graphics()
            .drawCommands(shapes.Internal[48]);
        var instance8 = new Graphics()
            .drawCommands(shapes.Internal[49]);
        var instance9 = new Graphics()
            .drawCommands(shapes.Internal[50]);
        var instance10 = new Graphics()
            .drawCommands(shapes.Internal[51]);
        var instance11 = new Graphics()
            .drawCommands(shapes.Internal[52]);
        var instance12 = new Graphics()
            .drawCommands(shapes.Internal[53]);
        var instance13 = new Graphics()
            .drawCommands(shapes.Internal[54]);
        var instance14 = new Graphics()
            .drawCommands(shapes.Internal[55]);
        var instance15 = new Graphics()
            .drawCommands(shapes.Internal[56]);
        var instance16 = new Graphics()
            .drawCommands(shapes.Internal[57]);
        var instance17 = new Graphics()
            .drawCommands(shapes.Internal[58]);
        var instance18 = new Graphics()
            .drawCommands(shapes.Internal[59]);
        var instance19 = new Graphics()
            .drawCommands(shapes.Internal[60]);
        var instance20 = new Graphics()
            .drawCommands(shapes.Internal[61]);
        var instance21 = new Graphics()
            .drawCommands(shapes.Internal[62]);
        var instance22 = new Graphics()
            .drawCommands(shapes.Internal[63]);
        var instance23 = new Graphics()
            .drawCommands(shapes.Internal[64]);
        var instance24 = new Graphics()
            .drawCommands(shapes.Internal[65]);
        var instance25 = new Graphics()
            .drawCommands(shapes.Internal[66]);
        var instance26 = new Graphics()
            .drawCommands(shapes.Internal[67]);
        var instance27 = new Graphics()
            .drawCommands(shapes.Internal[68]);
        var instance28 = new Graphics()
            .drawCommands(shapes.Internal[69]);
        var instance29 = new Graphics()
            .drawCommands(shapes.Internal[70]);
        var instance30 = new Graphics()
            .drawCommands(shapes.Internal[42]);
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
            .drawCommands(shapes.Internal[72])
            .setTransform(0.15, -0.55);
        var instance3 = new Graphics()
            .drawCommands(shapes.Internal[71])
            .setTransform(0.15, -0.55);
        var instance2 = new Graphics()
            .drawCommands(shapes.Internal[72]);
        var instance1 = new Graphics()
            .drawCommands(shapes.Internal[71]);
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
            .drawCommands(shapes.Internal[38])
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
            .drawCommands(shapes.Internal[28])
            .setTransform(-318.4, -198.2, 0.872, 0.872);
        var instance7 = new Graphics()
            .drawCommands(shapes.Internal[27])
            .setTransform(-318.4, -198.2, 0.872, 0.872);
        var instance6 = new Graphics()
            .drawCommands(shapes.Internal[26])
            .setTransform(-318.4, -198.2, 0.872, 0.872);
        var instance5 = new Graphics()
            .drawCommands(shapes.Internal[25])
            .setTransform(-318.4, -198.2, 0.872, 0.872);
        var instance4 = new Graphics()
            .drawCommands(shapes.Internal[24])
            .setTransform(-318.4, -198.2, 0.872, 0.872);
        var instance3 = new Graphics()
            .drawCommands(shapes.Internal[23])
            .setTransform(-318.4, -198.2, 0.872, 0.872);
        var instance2 = new Graphics()
            .drawCommands(shapes.Internal[22])
            .setTransform(-318.4, -198.2, 0.872, 0.872);
        var instance1 = new Graphics()
            .drawCommands(shapes.Internal[21])
            .setTransform(-318.4, -198.2, 0.872, 0.872);
        this.addChild(instance8, instance7, instance6, instance5, instance4, instance3, instance2, instance1);
    });

    lib.crown = Container.extend(function () {
        Container.call(this);
        var instance2 = new Graphics()
            .drawCommands(shapes.Internal[79])
            .setTransform(15.4, 112.75);
        var instance1 = new Graphics()
            .drawCommands(shapes.Internal[78])
            .setTransform(-398.45, -207.15);
        this.addChild(instance2, instance1);
    });

    lib.macro_bac_blue = Container.extend(function () {
        Container.call(this);
        var instance1 = new Graphics()
            .drawCommands(shapes.Internal[76])
            .setTransform(73.8, 97.1);
        this.addChild(instance1);
    });

    lib.macro_bacteria_orig = MovieClip.extend(function () {
        MovieClip.call(this, {
            duration: 114,
            labels: {
                crown: 0,
                crown_stop: 14
            }
        });
        var instance23 = new lib.crown();
        var instance22 = new Graphics()
            .drawCommands(shapes.Internal[77]);
        var instance21 = new Graphics()
            .drawCommands(shapes.Internal[76]);
        var instance29 = new lib.macro_bac_blue();
        var instance68 = new Graphics()
            .drawCommands(shapes.Internal[80]);
        var instance67 = new lib.crown()
            .setTransform(-3.7, -104.15, 0.932, 0.932);
        var instance66 = new Graphics()
            .drawCommands(shapes.Internal[76])
            .setTransform(4, 3.3);
        var instance20 = new Graphics()
            .drawCommands(shapes.Internal[35]);
        var instance19 = new Graphics()
            .drawCommands(shapes.Internal[34]);
        var instance18 = new Graphics()
            .drawCommands(shapes.Internal[35]);
        var instance17 = new Graphics()
            .drawCommands(shapes.Internal[34]);
        var instance16 = new Graphics()
            .drawCommands(shapes.Internal[74]);
        var instance15 = new Graphics()
            .drawCommands(shapes.Internal[73]);
        var instance14 = new Graphics()
            .drawCommands(shapes.Internal[32]);
        var instance13 = new Graphics()
            .drawCommands(shapes.Internal[31]);
        var instance12 = new Graphics()
            .drawCommands(shapes.Internal[30]);
        var instance11 = new Graphics()
            .drawCommands(shapes.Internal[29]);
        var instance10 = new Graphics()
            .drawCommands(shapes.Internal[28]);
        var instance9 = new Graphics()
            .drawCommands(shapes.Internal[27]);
        var instance8 = new Graphics()
            .drawCommands(shapes.Internal[26]);
        var instance7 = new Graphics()
            .drawCommands(shapes.Internal[25]);
        var instance6 = new Graphics()
            .drawCommands(shapes.Internal[24]);
        var instance5 = new Graphics()
            .drawCommands(shapes.Internal[23]);
        var instance4 = new Graphics()
            .drawCommands(shapes.Internal[22]);
        var instance3 = new Graphics()
            .drawCommands(shapes.Internal[21]);
        var instance65 = new Graphics()
            .drawCommands(shapes.Internal[74])
            .setTransform(-347.5, -262.25, 0.872, 0.872);
        var instance64 = new Graphics()
            .drawCommands(shapes.Internal[73])
            .setTransform(-347.5, -262.25, 0.872, 0.872);
        var instance63 = new Graphics()
            .drawCommands(shapes.Internal[32])
            .setTransform(-347.5, -262.25, 0.872, 0.872);
        var instance62 = new Graphics()
            .drawCommands(shapes.Internal[31])
            .setTransform(-347.5, -262.25, 0.872, 0.872);
        var instance61 = new Graphics()
            .drawCommands(shapes.Internal[30])
            .setTransform(-347.5, -262.25, 0.872, 0.872);
        var instance60 = new Graphics()
            .drawCommands(shapes.Internal[29])
            .setTransform(-347.5, -262.25, 0.872, 0.872);
        var instance59 = new Graphics()
            .drawCommands(shapes.Internal[28])
            .setTransform(-347.5, -262.25, 0.872, 0.872);
        var instance58 = new Graphics()
            .drawCommands(shapes.Internal[27])
            .setTransform(-347.5, -262.25, 0.872, 0.872);
        var instance57 = new Graphics()
            .drawCommands(shapes.Internal[26])
            .setTransform(-347.5, -262.25, 0.872, 0.872);
        var instance56 = new Graphics()
            .drawCommands(shapes.Internal[25])
            .setTransform(-347.5, -262.25, 0.872, 0.872);
        var instance55 = new Graphics()
            .drawCommands(shapes.Internal[24])
            .setTransform(-347.5, -262.25, 0.872, 0.872);
        var instance54 = new Graphics()
            .drawCommands(shapes.Internal[23])
            .setTransform(-347.5, -262.25, 0.872, 0.872);
        var instance53 = new Graphics()
            .drawCommands(shapes.Internal[22])
            .setTransform(-347.5, -262.25, 0.872, 0.872);
        var instance52 = new Graphics()
            .drawCommands(shapes.Internal[21])
            .setTransform(-347.5, -262.25, 0.872, 0.872);
        var instance2 = new Graphics()
            .drawCommands(shapes.Internal[75]);
        var instance28 = new Graphics()
            .drawCommands(shapes.Internal[30]);
        var instance31 = new Graphics()
            .drawCommands(shapes.Internal[30]);
        var instance27 = new lib.mac_baceyebrows();
        var instance26 = new Graphics()
            .drawCommands(shapes.Internal[74]);
        var instance25 = new Graphics()
            .drawCommands(shapes.Internal[73]);
        var instance24 = new Graphics()
            .drawCommands(shapes.Internal[32]);
        var instance30 = new Graphics()
            .drawCommands(shapes.Internal[32]);
        var instance51 = new lib.bacteria_simple();
        this[instance51.name = "bac"] = instance51;
        var instance72 = new lib.tail_clip();
        var instance50 = new Graphics()
            .drawCommands(shapes.Internal[36]);
        var instance49 = new Graphics()
            .drawCommands(shapes.Internal[35])
            .setTransform(-397.658, -255.136, 0.872, 0.872);
        var instance48 = new Graphics()
            .drawCommands(shapes.Internal[34])
            .setTransform(-397.658, -255.136, 0.872, 0.872);
        var instance47 = new Graphics()
            .drawCommands(shapes.Internal[35])
            .setTransform(-347.5, -262.2, 0.872, 0.872);
        var instance46 = new Graphics()
            .drawCommands(shapes.Internal[34])
            .setTransform(-347.5, -262.2, 0.872, 0.872);
        var instance45 = new Graphics()
            .drawCommands(shapes.Internal[33]);
        var instance44 = new Graphics()
            .drawCommands(shapes.Internal[32])
            .setTransform(-347.5, -262.2, 0.872, 0.872);
        var instance43 = new Graphics()
            .drawCommands(shapes.Internal[31])
            .setTransform(-347.5, -262.2, 0.872, 0.872);
        var instance42 = new Graphics()
            .drawCommands(shapes.Internal[30])
            .setTransform(-347.5, -262.2, 0.872, 0.872);
        var instance41 = new Graphics()
            .drawCommands(shapes.Internal[29])
            .setTransform(-347.5, -262.2, 0.872, 0.872);
        var instance40 = new Graphics()
            .drawCommands(shapes.Internal[28])
            .setTransform(-347.5, -262.2, 0.872, 0.872);
        var instance39 = new Graphics()
            .drawCommands(shapes.Internal[27])
            .setTransform(-347.5, -262.2, 0.872, 0.872);
        var instance38 = new Graphics()
            .drawCommands(shapes.Internal[26])
            .setTransform(-347.5, -262.2, 0.872, 0.872);
        var instance37 = new Graphics()
            .drawCommands(shapes.Internal[25])
            .setTransform(-347.5, -262.2, 0.872, 0.872);
        var instance36 = new Graphics()
            .drawCommands(shapes.Internal[24])
            .setTransform(-347.5, -262.2, 0.872, 0.872);
        var instance35 = new Graphics()
            .drawCommands(shapes.Internal[23])
            .setTransform(-347.5, -262.2, 0.872, 0.872);
        var instance34 = new Graphics()
            .drawCommands(shapes.Internal[22])
            .setTransform(-347.5, -262.2, 0.872, 0.872);
        var instance33 = new Graphics()
            .drawCommands(shapes.Internal[21])
            .setTransform(-347.5, -262.2, 0.872, 0.872);
        var instance32 = new Graphics()
            .drawCommands(shapes.Internal[20]);
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
            .addTimedChild(instance68, 30, 84)
            .addTimedChild(instance67, 30, 84)
            .addTimedChild(instance66, 30, 84)
            .addTimedChild(instance20, 0, 114, {
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
            .addTimedChild(instance19, 0, 114, {
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
            .addTimedChild(instance18, 0, 114, {
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
            .addTimedChild(instance17, 0, 114, {
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
            .addTimedChild(instance65, 30, 84)
            .addTimedChild(instance64, 30, 84)
            .addTimedChild(instance63, 30, 84)
            .addTimedChild(instance62, 30, 84)
            .addTimedChild(instance61, 30, 84)
            .addTimedChild(instance60, 30, 84)
            .addTimedChild(instance59, 30, 84)
            .addTimedChild(instance58, 30, 84)
            .addTimedChild(instance57, 30, 84)
            .addTimedChild(instance56, 30, 84)
            .addTimedChild(instance55, 30, 84)
            .addTimedChild(instance54, 30, 84)
            .addTimedChild(instance53, 30, 84)
            .addTimedChild(instance52, 30, 84)
            .addTimedChild(instance2, 0, 114, {
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
            .addTimedChild(instance51, 30, 77, {
                "30": {
                    x: 53.2,
                    y: 5.85,
                    sx: 1,
                    sy: 1,
                    r: 0
                },
                "31": {
                    x: 50.25,
                    y: 5.95
                },
                "32": {
                    x: 47.35,
                    y: 6
                },
                "33": {
                    x: 44.4,
                    y: 6.1
                },
                "34": {
                    x: 41.45,
                    y: 6.2
                },
                "35": {
                    x: 38.5,
                    y: 6.25
                },
                "36": {
                    x: 35.6,
                    y: 6.35
                },
                "37": {
                    x: 32.65,
                    y: 6.45
                },
                "38": {
                    x: 29.7,
                    y: 6.5
                },
                "39": {
                    x: 26.75,
                    y: 6.6
                },
                "40": {
                    x: 23.85,
                    y: 6.7
                },
                "41": {
                    x: 20.9,
                    y: 6.75
                },
                "42": {
                    x: 17.95,
                    y: 6.85
                },
                "43": {
                    x: 16.4,
                    y: 7
                },
                "44": {
                    x: 14.8,
                    y: 7.2
                },
                "45": {
                    x: 13.25,
                    y: 7.35
                },
                "46": {
                    x: 11.7,
                    y: 7.55
                },
                "47": {
                    x: 10.15,
                    y: 7.7
                },
                "48": {
                    x: 8.55,
                    y: 7.9
                },
                "49": {
                    x: 7,
                    y: 8.05
                },
                "50": {
                    x: 5.25
                },
                "51": {
                    x: 3.45
                },
                "52": {
                    x: 1.7
                },
                "53": {
                    x: -0.05
                },
                "54": {
                    x: -1.8
                },
                "55": {
                    x: -3.6
                },
                "56": {
                    x: -5.35
                },
                "57": {
                    x: -6.492,
                    y: 6.246,
                    r: 0.037
                },
                "58": {
                    x: -7.577,
                    y: 4.332,
                    r: 0.074
                },
                "59": {
                    x: -8.504,
                    y: 2.507,
                    r: 0.111
                },
                "60": {
                    x: -9.272,
                    y: 0.722,
                    sx: 0.999,
                    sy: 0.999,
                    r: 0.148
                },
                "61": {
                    x: -9.932,
                    y: -1.023,
                    r: 0.185
                },
                "62": {
                    x: -10.432,
                    y: -2.777,
                    r: 0.221
                },
                "63": {
                    x: -10.85,
                    y: -4.4,
                    r: 0.258
                },
                "64": {
                    x: -12.288,
                    y: -5.798,
                    r: 0.272
                },
                "65": {
                    x: -13.724,
                    y: -7.244,
                    r: 0.286
                },
                "66": {
                    x: -15.159,
                    y: -8.69,
                    r: 0.299
                },
                "67": {
                    x: -16.491,
                    y: -10.136,
                    r: 0.313
                },
                "68": {
                    x: -17.872,
                    y: -11.58,
                    r: 0.327
                },
                "69": {
                    x: -19.25,
                    y: -12.973,
                    r: 0.34
                },
                "70": {
                    x: -20.7,
                    y: -14.45,
                    r: 0.354
                },
                "71": {
                    x: -22.15,
                    y: -14.9
                },
                "72": {
                    x: -23.7,
                    y: -15.45
                },
                "73": {
                    x: -25.2,
                    y: -15.95
                },
                "74": {
                    x: -26.7,
                    y: -16.5
                },
                "75": {
                    x: -28.25,
                    y: -17
                },
                "76": {
                    x: -29.8,
                    y: -17.6
                },
                "77": {
                    x: -31.35,
                    y: -18.2
                },
                "78": {
                    x: -32.95,
                    y: -18.85
                },
                "79": {
                    x: -34.5,
                    y: -19.5
                },
                "80": {
                    x: -36.1,
                    y: -20.1
                },
                "81": {
                    x: -37.65,
                    y: -20.75
                },
                "82": {
                    x: -39.25,
                    y: -21.4
                },
                "83": {
                    x: -40.8,
                    y: -22.1
                },
                "84": {
                    x: -40.623,
                    y: -26.451,
                    r: 0.396
                },
                "85": {
                    x: -40.326,
                    y: -30.808,
                    r: 0.439
                },
                "86": {
                    x: -39.912,
                    y: -35.022,
                    sx: 0.998,
                    sy: 0.998,
                    r: 0.481
                },
                "87": {
                    x: -39.329,
                    y: -39.134,
                    r: 0.523
                },
                "88": {
                    x: -38.532,
                    y: -43.046,
                    r: 0.565
                },
                "89": {
                    x: -37.75,
                    y: -47,
                    r: 0.608
                },
                "90": {
                    x: -35.124,
                    y: -49.896,
                    r: 0.65
                },
                "91": {
                    x: -32.487,
                    y: -52.704,
                    r: 0.692
                },
                "92": {
                    x: -29.59,
                    y: -55.376,
                    r: 0.734
                },
                "93": {
                    x: -26.687,
                    y: -57.903,
                    sx: 0.997,
                    sy: 0.997,
                    r: 0.777
                },
                "94": {
                    x: -23.682,
                    y: -60.286,
                    r: 0.819
                },
                "95": {
                    x: -20.6,
                    y: -62.55,
                    r: 0.861
                },
                "104": {
                    x: -21.499,
                    y: -68.498
                },
                "105": {
                    x: -22.499,
                    y: -74.498
                },
                "106": {
                    x: -23.6,
                    y: -80.55
                }
            })
            .addTimedChild(instance72, 107, 7, {
                "107": {
                    x: 24.45,
                    y: 20.75,
                    sx: 0.559,
                    sy: 0.611,
                    r: 0.822
                },
                "108": {
                    x: 17.551,
                    y: 7.357,
                    sy: 0.53,
                    r: 0.874
                },
                "109": {
                    x: 10.759,
                    y: -5.985,
                    sy: 0.448,
                    r: 0.926
                },
                "110": {
                    x: 3.978,
                    y: -19.234,
                    sy: 0.367,
                    r: 0.978
                },
                "111": {
                    x: -2.835,
                    y: -32.443,
                    sy: 0.285,
                    r: 1.029
                },
                "112": {
                    x: -9.572,
                    y: -45.567,
                    sy: 0.204,
                    r: 1.081
                },
                "113": {
                    x: -16.3,
                    y: -58.65,
                    sy: 0.122,
                    r: 1.133
                }
            })
            .addTimedChild(instance50, 30, 84)
            .addTimedChild(instance49, 30, 84)
            .addTimedChild(instance48, 30, 84)
            .addTimedChild(instance47, 30, 84)
            .addTimedChild(instance46, 30, 84)
            .addTimedChild(instance45, 30, 84)
            .addTimedChild(instance44, 30, 84)
            .addTimedChild(instance43, 30, 84)
            .addTimedChild(instance42, 30, 84)
            .addTimedChild(instance41, 30, 84)
            .addTimedChild(instance40, 30, 84)
            .addTimedChild(instance39, 30, 84)
            .addTimedChild(instance38, 30, 84)
            .addTimedChild(instance37, 30, 84)
            .addTimedChild(instance36, 30, 84)
            .addTimedChild(instance35, 30, 84)
            .addTimedChild(instance34, 30, 84)
            .addTimedChild(instance33, 30, 84)
            .addTimedChild(instance32, 30, 84)
            .addTimedChild(instance71, 56, 52, {
                "56": {
                    x: 34.25,
                    y: 9.25,
                    sx: 0.587,
                    sy: 0.542,
                    kx: 0.137,
                    ky: -0.078,
                    a: 1
                },
                "57": {
                    x: 31.866,
                    y: 8.221,
                    kx: 0.342,
                    ky: -0.284,
                    a: 0.97
                },
                "58": {
                    x: 28.718,
                    y: 8.968,
                    kx: 0.561,
                    ky: -0.503,
                    a: 0.93
                },
                "59": {
                    x: 25.555,
                    y: 10.574,
                    kx: 0.795,
                    ky: -0.736,
                    a: 0.89
                },
                "60": {
                    x: 22.728,
                    y: 12.827,
                    kx: 1.042,
                    ky: -0.983,
                    a: 0.86
                },
                "61": {
                    x: 20.287,
                    y: 15.609,
                    kx: 1.303,
                    ky: -1.244,
                    a: 0.81
                },
                "62": {
                    x: 18.248,
                    y: 18.584,
                    kx: 1.578,
                    ky: -1.52,
                    a: 0.77
                },
                "63": {
                    x: 16.702,
                    y: 21.718,
                    kx: 1.867,
                    ky: -1.808,
                    a: 0.73
                },
                "64": {
                    x: 15.46,
                    y: 24.77,
                    kx: 2.17,
                    ky: -2.111,
                    a: 0.68
                },
                "65": {
                    x: 14.623,
                    y: 27.528,
                    kx: 2.486,
                    ky: -2.428,
                    a: 0.63
                },
                "66": {
                    x: 13.847,
                    y: 29.924,
                    kx: 2.817,
                    ky: -2.759,
                    a: 0.57
                },
                "67": {
                    x: 13.011,
                    y: 31.877,
                    kx: 3.162,
                    ky: -3.103,
                    a: 0.52
                },
                "68": {
                    x: 11.782,
                    y: 33.477,
                    kx: 3.52,
                    ky: 2.821,
                    a: 0.46
                },
                "69": {
                    x: 9.932,
                    y: 34.884,
                    kx: 3.893,
                    ky: 2.449,
                    a: 0.4
                },
                "70": {
                    x: 7.332,
                    y: 36.294,
                    kx: 4.279,
                    ky: 2.062,
                    a: 0.34
                },
                "71": {
                    x: 3.903,
                    y: 38.197,
                    kx: 4.68,
                    ky: 1.662,
                    a: 0.28
                },
                "72": {
                    x: -0.134,
                    y: 40.969,
                    kx: -1.189,
                    ky: 1.248,
                    a: 0.21
                },
                "73": {
                    x: -4.345,
                    y: 44.901,
                    kx: -0.761,
                    ky: 0.82,
                    a: 0.14
                },
                "74": {
                    x: -8.32,
                    y: 50.383,
                    kx: -0.319,
                    ky: 0.378,
                    a: 0.07
                },
                "75": {
                    x: -11.9,
                    y: 57.35,
                    kx: 0.137,
                    ky: -0.078,
                    a: 0
                },
                "76": {
                    x: 40.05,
                    y: 9.9,
                    kx: -0.197,
                    ky: 0.256,
                    a: 1
                },
                "77": {
                    x: 40.78,
                    y: 7.325,
                    kx: -0.456,
                    ky: 0.515,
                    a: 0.98
                },
                "78": {
                    x: 43.155,
                    y: 5.44,
                    kx: -0.737,
                    ky: 0.796,
                    a: 0.97
                },
                "79": {
                    x: 45.78,
                    y: 3.952,
                    kx: -1.041,
                    ky: 1.099,
                    a: 0.95
                },
                "80": {
                    x: 48.35,
                    y: 2.986,
                    kx: -1.366,
                    ky: 1.425,
                    a: 0.94
                },
                "81": {
                    x: 50.598,
                    y: 2.584,
                    kx: 4.57,
                    ky: 1.772,
                    a: 0.92
                },
                "82": {
                    x: 52.426,
                    y: 2.666,
                    kx: 4.2,
                    ky: 2.141,
                    a: 0.9
                },
                "83": {
                    x: 53.512,
                    y: 2.986,
                    kx: 3.809,
                    ky: 2.533,
                    a: 0.88
                },
                "84": {
                    x: 53.924,
                    y: 3.215,
                    kx: 3.395,
                    ky: 2.947,
                    a: 0.85
                },
                "85": {
                    x: 54.002,
                    y: 3.277,
                    kx: 2.959,
                    ky: -2.9,
                    a: 0.83
                },
                "86": {
                    x: 54.019,
                    y: 4.959,
                    kx: 2.501,
                    ky: -2.442,
                    a: 0.8
                },
                "87": {
                    x: 52.744,
                    y: 7.218,
                    kx: 2.021,
                    ky: -1.962,
                    a: 0.78
                },
                "88": {
                    x: 51.512,
                    y: 8.625,
                    kx: 1.519,
                    ky: -1.46,
                    a: 0.75
                },
                "89": {
                    x: 51.237,
                    y: 9.4,
                    kx: 0.994,
                    ky: -0.936,
                    a: 0.72
                },
                "90": {
                    x: 52.617,
                    y: 10.113,
                    kx: 0.448,
                    ky: -0.39,
                    a: 0.69
                },
                "91": {
                    x: 55.661,
                    y: 11.609,
                    kx: -0.121,
                    ky: 0.179,
                    a: 0.66
                },
                "92": {
                    x: 59.884,
                    y: 14.866,
                    kx: -0.711,
                    ky: 0.769,
                    a: 0.63
                },
                "93": {
                    x: 64.042,
                    y: 20.438,
                    kx: -1.323,
                    ky: 1.382,
                    a: 0.59
                },
                "94": {
                    x: 66.752,
                    y: 28.183,
                    kx: 4.325,
                    ky: 2.016,
                    a: 0.56
                },
                "95": {
                    x: 67.014,
                    y: 36.926,
                    kx: 3.668,
                    ky: 2.673,
                    a: 0.52
                },
                "96": {
                    x: 64.716,
                    y: 44.804,
                    kx: 2.989,
                    ky: -2.931,
                    a: 0.49
                },
                "97": {
                    x: 60.736,
                    y: 50.395,
                    kx: 2.288,
                    ky: -2.23,
                    a: 0.45
                },
                "98": {
                    x: 57.202,
                    y: 53.012,
                    kx: 1.565,
                    ky: -1.507,
                    a: 0.41
                },
                "99": {
                    x: 56.163,
                    y: 53.618,
                    kx: 0.82,
                    ky: -0.761,
                    a: 0.37
                },
                "100": {
                    x: 58.596,
                    y: 54.6,
                    kx: 0.052,
                    ky: 0.006,
                    a: 0.33
                },
                "101": {
                    x: 63.548,
                    y: 58.307,
                    kx: -0.737,
                    ky: 0.795,
                    a: 0.29
                },
                "102": {
                    x: 68.247,
                    y: 66.042,
                    kx: -1.549,
                    ky: 1.607,
                    a: 0.24
                },
                "103": {
                    x: 69.946,
                    y: 76.614,
                    kx: 3.901,
                    ky: 2.44,
                    a: 0.2
                },
                "104": {
                    x: 67.403,
                    y: 86.839,
                    sx: 0.588,
                    kx: 3.046,
                    ky: -2.987,
                    a: 0.15
                },
                "105": {
                    x: 62.198,
                    y: 93.418,
                    kx: 2.168,
                    ky: -2.109,
                    a: 0.1
                },
                "106": {
                    x: 58.39,
                    y: 95.662,
                    kx: 1.268,
                    ky: -1.209,
                    a: 0.05
                },
                "107": {
                    x: 59,
                    y: 96.85,
                    sy: 0.543,
                    kx: 0.346,
                    ky: -0.287,
                    a: 0
                }
            })
            .addTimedChild(instance70, 49, 44, {
                "49": {
                    x: 34.45,
                    y: 9,
                    sx: 0.587,
                    sy: 0.542,
                    kx: 0.18,
                    ky: -0.122,
                    a: 1
                },
                "50": {
                    x: 36.803,
                    y: 3.783,
                    kx: -0.084,
                    ky: 0.142,
                    a: 0.98
                },
                "51": {
                    x: 40.18,
                    y: 0.639,
                    kx: -0.387,
                    ky: 0.445,
                    a: 0.95
                },
                "52": {
                    x: 44.268,
                    y: -2.114,
                    kx: -0.727,
                    ky: 0.786,
                    a: 0.93
                },
                "53": {
                    x: 48.913,
                    y: -4.159,
                    kx: -1.107,
                    ky: 1.165,
                    a: 0.9
                },
                "54": {
                    x: 53.941,
                    y: -5.207,
                    kx: -1.524,
                    ky: 1.583,
                    a: 0.86
                },
                "55": {
                    x: 58.87,
                    y: -5.016,
                    kx: 4.303,
                    ky: 2.038,
                    a: 0.83
                },
                "56": {
                    x: 63.446,
                    y: -3.274,
                    kx: 3.809,
                    ky: 2.533,
                    a: 0.79
                },
                "57": {
                    x: 66.891,
                    y: 0.258,
                    kx: 3.277,
                    ky: 3.065,
                    a: 0.75
                },
                "58": {
                    x: 68.679,
                    y: 5.003,
                    kx: 2.706,
                    ky: -2.647,
                    a: 0.7
                },
                "59": {
                    x: 69.1,
                    y: 9.739,
                    kx: 2.097,
                    ky: -2.038,
                    a: 0.65
                },
                "60": {
                    x: 69.488,
                    y: 13.086,
                    kx: 1.449,
                    ky: -1.391,
                    a: 0.6
                },
                "61": {
                    x: 71.414,
                    y: 15.451,
                    kx: 0.763,
                    ky: -0.705,
                    a: 0.55
                },
                "62": {
                    x: 75.994,
                    y: 18.498,
                    kx: 0.039,
                    ky: 0.019,
                    a: 0.49
                },
                "63": {
                    x: 82.606,
                    y: 24.277,
                    kx: -0.723,
                    ky: 0.782,
                    a: 0.43
                },
                "64": {
                    x: 88.947,
                    y: 34.146,
                    kx: -1.524,
                    ky: 1.582,
                    a: 0.36
                },
                "65": {
                    x: 92.265,
                    y: 47.165,
                    kx: 3.92,
                    ky: 2.422,
                    a: 0.3
                },
                "66": {
                    x: 90.968,
                    y: 60.25,
                    kx: 3.042,
                    ky: -2.984,
                    a: 0.23
                },
                "67": {
                    x: 86.827,
                    y: 69.752,
                    kx: 2.127,
                    ky: -2.068,
                    a: 0.16
                },
                "68": {
                    x: 84.166,
                    y: 74.672,
                    kx: 1.173,
                    ky: -1.114,
                    a: 0.08
                },
                "69": {
                    x: 86.45,
                    y: 78.3,
                    kx: 0.18,
                    ky: -0.122,
                    a: 0
                },
                "70": {
                    x: 38.8,
                    y: 9.1,
                    kx: -0.267,
                    ky: 0.325,
                    a: 1
                },
                "71": {
                    x: 48.068,
                    y: 6.129,
                    kx: -1.002,
                    ky: 1.061,
                    a: 0.94
                },
                "72": {
                    x: 56.697,
                    y: 7.555,
                    kx: 4.564,
                    ky: 1.778,
                    a: 0.88
                },
                "73": {
                    x: 62.704,
                    y: 11.101,
                    kx: 3.865,
                    ky: 2.477,
                    a: 0.82
                },
                "74": {
                    x: 65.717,
                    y: 14.506,
                    kx: 3.185,
                    ky: -3.126,
                    a: 0.76
                },
                "75": {
                    x: 66.878,
                    y: 16.25,
                    kx: 2.522,
                    ky: -2.463,
                    a: 0.71
                },
                "76": {
                    x: 67.814,
                    y: 15.771,
                    kx: 1.879,
                    ky: -1.82,
                    a: 0.65
                },
                "77": {
                    x: 70.034,
                    y: 13.459,
                    kx: 1.253,
                    ky: -1.194,
                    a: 0.6
                },
                "78": {
                    x: 74.16,
                    y: 10.537,
                    kx: 0.646,
                    ky: -0.586,
                    a: 0.55
                },
                "79": {
                    x: 80.297,
                    y: 8.478,
                    kx: 0.057,
                    ky: 0.003,
                    a: 0.5
                },
                "80": {
                    x: 87.588,
                    y: 8.11,
                    kx: -0.514,
                    ky: 0.574,
                    a: 0.45
                },
                "81": {
                    x: 94.834,
                    y: 9.754,
                    kx: -1.067,
                    ky: 1.126,
                    a: 0.41
                },
                "82": {
                    x: 101.109,
                    y: 13.17,
                    kx: 4.682,
                    ky: 1.661,
                    a: 0.36
                },
                "83": {
                    x: 105.862,
                    y: 17.634,
                    kx: 4.167,
                    ky: 2.177,
                    a: 0.32
                },
                "84": {
                    x: 108.865,
                    y: 22.305,
                    kx: 3.669,
                    ky: 2.674,
                    a: 0.28
                },
                "85": {
                    x: 110.262,
                    y: 26.398,
                    kx: 3.189,
                    ky: -3.129,
                    a: 0.24
                },
                "86": {
                    x: 110.646,
                    y: 29.619,
                    kx: 2.728,
                    ky: -2.668,
                    a: 0.2
                },
                "87": {
                    x: 110.585,
                    y: 31.558,
                    kx: 2.285,
                    ky: -2.225,
                    a: 0.16
                },
                "88": {
                    x: 110.471,
                    y: 32.459,
                    kx: 1.861,
                    ky: -1.801,
                    a: 0.13
                },
                "89": {
                    x: 110.892,
                    y: 32.654,
                    kx: 1.455,
                    ky: -1.394,
                    a: 0.09
                },
                "90": {
                    x: 111.845,
                    y: 32.488,
                    kx: 1.067,
                    ky: -1.006,
                    a: 0.06
                },
                "91": {
                    x: 113.38,
                    y: 32.414,
                    kx: 0.697,
                    ky: -0.636,
                    a: 0.03
                },
                "92": {
                    x: 115,
                    y: 32.65,
                    kx: 0.345,
                    ky: -0.285,
                    a: 0
                }
            })
            .addTimedChild(instance69, 42, 72, {
                "42": {
                    x: 32.75,
                    y: 9.85,
                    sx: 0.588,
                    sy: 0.543,
                    kx: 0.346,
                    ky: -0.287,
                    a: 1
                },
                "43": {
                    x: 30.944,
                    y: 8.092,
                    kx: 0.801,
                    ky: -0.743,
                    a: 0.96
                },
                "44": {
                    x: 29.752,
                    y: 8.174,
                    kx: 1.274,
                    ky: -1.216,
                    a: 0.93
                },
                "45": {
                    x: 29.555,
                    y: 7.95,
                    kx: 1.766,
                    ky: -1.707,
                    a: 0.89
                },
                "46": {
                    x: 30.154,
                    y: 6.579,
                    kx: 2.276,
                    ky: -2.217,
                    a: 0.85
                },
                "47": {
                    x: 30.919,
                    y: 3.688,
                    kx: 2.804,
                    ky: -2.746,
                    a: 0.8
                },
                "48": {
                    x: 31.004,
                    y: -0.783,
                    kx: 3.35,
                    ky: 2.991,
                    a: 0.76
                },
                "49": {
                    x: 29.415,
                    y: -6.432,
                    kx: 3.915,
                    ky: 2.427,
                    a: 0.71
                },
                "50": {
                    x: 25.549,
                    y: -12.298,
                    kx: 4.498,
                    ky: 1.844,
                    a: 0.67
                },
                "51": {
                    x: 19.489,
                    y: -17.128,
                    kx: -1.184,
                    ky: 1.243,
                    a: 0.62
                },
                "52": {
                    x: 11.942,
                    y: -19.687,
                    kx: -0.565,
                    ky: 0.624,
                    a: 0.57
                },
                "53": {
                    x: 4.319,
                    y: -19.567,
                    kx: 0.072,
                    ky: -0.014,
                    a: 0.52
                },
                "54": {
                    x: -1.841,
                    y: -17.024,
                    kx: 0.728,
                    ky: -0.67,
                    a: 0.47
                },
                "55": {
                    x: -5.598,
                    y: -13.249,
                    kx: 1.402,
                    ky: -1.343,
                    a: 0.41
                },
                "56": {
                    x: -6.926,
                    y: -9.622,
                    kx: 2.094,
                    ky: -2.035,
                    a: 0.36
                },
                "57": {
                    x: -6.826,
                    y: -7.416,
                    kx: 2.804,
                    ky: -2.746,
                    a: 0.3
                },
                "58": {
                    x: -6.911,
                    y: -6.808,
                    kx: 3.533,
                    ky: 2.809,
                    a: 0.25
                },
                "59": {
                    x: -8.962,
                    y: -6.856,
                    kx: 4.28,
                    ky: 2.062,
                    a: 0.19
                },
                "60": {
                    x: -13.551,
                    y: -5.64,
                    kx: -1.239,
                    ky: 1.297,
                    a: 0.13
                },
                "61": {
                    x: -19.395,
                    y: -1.122,
                    kx: -0.456,
                    ky: 0.514,
                    a: 0.06
                },
                "62": {
                    x: -23.6,
                    y: 8.3,
                    kx: 0.346,
                    ky: -0.287,
                    a: 0
                },
                "63": {
                    x: 40.45,
                    y: 11,
                    sx: 0.586,
                    sy: 0.541,
                    kx: -0.179,
                    ky: 0.237,
                    a: 1
                },
                "64": {
                    x: 36.788,
                    y: 8.601,
                    kx: 0.379,
                    ky: -0.321,
                    a: 0.96
                },
                "65": {
                    x: 34.017,
                    y: 8.016,
                    sx: 0.587,
                    kx: 0.953,
                    ky: -0.894,
                    a: 0.91
                },
                "66": {
                    x: 32.913,
                    y: 7.509,
                    sy: 0.542,
                    kx: 1.54,
                    ky: -1.482,
                    a: 0.87
                },
                "67": {
                    x: 33.165,
                    y: 5.844,
                    kx: 2.142,
                    ky: -2.084,
                    a: 0.82
                },
                "68": {
                    x: 34.004,
                    y: 2.216,
                    kx: 2.759,
                    ky: -2.7,
                    a: 0.78
                },
                "69": {
                    x: 33.951,
                    y: -3.616,
                    kx: 3.39,
                    ky: 2.952,
                    a: 0.73
                },
                "70": {
                    x: 31.728,
                    y: -10.866,
                    kx: 4.035,
                    ky: 2.307,
                    a: 0.68
                },
                "71": {
                    x: 26.439,
                    y: -18.026,
                    kx: 4.695,
                    ky: 1.647,
                    a: 0.63
                },
                "72": {
                    x: 18.598,
                    y: -23.184,
                    kx: -0.914,
                    ky: 0.972,
                    a: 0.58
                },
                "73": {
                    x: 9.545,
                    y: -25.152,
                    kx: -0.225,
                    ky: 0.283,
                    a: 0.52
                },
                "74": {
                    x: 1.33,
                    y: -23.686,
                    kx: 0.479,
                    ky: -0.42,
                    a: 0.47
                },
                "75": {
                    x: -4.44,
                    y: -19.542,
                    kx: 1.197,
                    ky: -1.138,
                    a: 0.41
                },
                "76": {
                    x: -7.065,
                    y: -14.334,
                    kx: 1.929,
                    ky: -1.871,
                    a: 0.36
                },
                "77": {
                    x: -7.094,
                    y: -9.912,
                    kx: 2.676,
                    ky: -2.618,
                    a: 0.3
                },
                "78": {
                    x: -6.467,
                    y: -7.471,
                    kx: 3.438,
                    ky: 2.904,
                    a: 0.24
                },
                "79": {
                    x: -7.839,
                    y: -6.395,
                    kx: 4.214,
                    ky: 2.128,
                    a: 0.18
                },
                "80": {
                    x: -11.988,
                    y: -4.388,
                    kx: -1.279,
                    ky: 1.337,
                    a: 0.13
                },
                "81": {
                    x: -17.821,
                    y: 0.869,
                    sx: 0.588,
                    kx: -0.474,
                    ky: 0.532,
                    a: 0.06
                },
                "82": {
                    x: -23.15,
                    y: 10.2,
                    sy: 0.543,
                    kx: 0.346,
                    ky: -0.287,
                    a: 0
                },
                "83": {
                    x: 41.35,
                    y: 10.7,
                    sx: 0.587,
                    sy: 0.542,
                    kx: -0.324,
                    ky: 0.382,
                    a: 1
                },
                "84": {
                    x: 36.344,
                    y: 5.606,
                    kx: -0.193,
                    ky: 0.251,
                    a: 0.98
                },
                "85": {
                    x: 33.909,
                    y: 2.233,
                    kx: -0.055,
                    ky: 0.114,
                    a: 0.96
                },
                "86": {
                    x: 31.966,
                    y: -1.429,
                    kx: 0.09,
                    ky: -0.031,
                    a: 0.94
                },
                "87": {
                    x: 30.551,
                    y: -5.273,
                    kx: 0.241,
                    ky: -0.183,
                    a: 0.92
                },
                "88": {
                    x: 29.466,
                    y: -9.338,
                    kx: 0.4,
                    ky: -0.342,
                    a: 0.89
                },
                "89": {
                    x: 28.599,
                    y: -13.449,
                    kx: 0.566,
                    ky: -0.507,
                    a: 0.87
                },
                "90": {
                    x: 27.872,
                    y: -17.629,
                    kx: 0.739,
                    ky: -0.68,
                    a: 0.85
                },
                "91": {
                    x: 26.727,
                    y: -21.647,
                    kx: 0.918,
                    ky: -0.86,
                    a: 0.82
                },
                "92": {
                    x: 23.946,
                    y: -25.083,
                    kx: 1.105,
                    ky: -1.046,
                    a: 0.79
                },
                "93": {
                    x: 18.706,
                    y: -25.262,
                    kx: 1.298,
                    ky: -1.24,
                    a: 0.77
                },
                "94": {
                    x: 13.247,
                    y: -22.68,
                    kx: 1.499,
                    ky: -1.44,
                    a: 0.74
                },
                "95": {
                    x: 8.401,
                    y: -18.726,
                    kx: 1.706,
                    ky: -1.648,
                    a: 0.71
                },
                "96": {
                    x: 4.647,
                    y: -13.258,
                    kx: 1.921,
                    ky: -1.862,
                    a: 0.68
                },
                "97": {
                    x: 1.712,
                    y: -7.23,
                    kx: 2.142,
                    ky: -2.083,
                    a: 0.64
                },
                "98": {
                    x: -0.576,
                    y: -0.998,
                    kx: 2.37,
                    ky: -2.312,
                    a: 0.61
                },
                "99": {
                    x: -2.548,
                    y: 5.376,
                    kx: 2.606,
                    ky: -2.547,
                    a: 0.58
                },
                "100": {
                    x: -4.385,
                    y: 12.042,
                    kx: 2.848,
                    ky: -2.789,
                    a: 0.54
                },
                "101": {
                    x: -6.282,
                    y: 18.566,
                    kx: 3.097,
                    ky: -3.038,
                    a: 0.51
                },
                "102": {
                    x: -8.309,
                    y: 24.799,
                    kx: 3.353,
                    ky: 2.989,
                    a: 0.47
                },
                "103": {
                    x: -10.702,
                    y: 30.824,
                    kx: 3.616,
                    ky: 2.726,
                    a: 0.43
                },
                "104": {
                    x: -13.42,
                    y: 36.716,
                    kx: 3.886,
                    ky: 2.456,
                    a: 0.39
                },
                "105": {
                    x: -16.64,
                    y: 42.554,
                    kx: 4.163,
                    ky: 2.179,
                    a: 0.36
                },
                "106": {
                    x: -20.476,
                    y: 48.452,
                    kx: 4.447,
                    ky: 1.895,
                    a: 0.31
                },
                "107": {
                    x: -25.095,
                    y: 54.666,
                    kx: -1.545,
                    ky: 1.604,
                    a: 0.27
                },
                "108": {
                    x: -30.335,
                    y: 61.341,
                    kx: -1.248,
                    ky: 1.306,
                    a: 0.23
                },
                "109": {
                    x: -36.438,
                    y: 68.546,
                    kx: -0.943,
                    ky: 1.001,
                    a: 0.18
                },
                "110": {
                    x: -43.27,
                    y: 76.237,
                    sx: 0.588,
                    kx: -0.631,
                    ky: 0.69,
                    a: 0.14
                },
                "111": {
                    x: -50.917,
                    y: 84.236,
                    kx: -0.312,
                    ky: 0.371,
                    a: 0.09
                },
                "112": {
                    x: -59.37,
                    y: 92.167,
                    kx: 0.013,
                    ky: 0.045,
                    a: 0.05
                },
                "113": {
                    x: -69.8,
                    y: 97.9,
                    sy: 0.543,
                    kx: 0.346,
                    ky: -0.287,
                    a: 0
                }
            })
            .addTimedChild(instance1, 0, 114, {
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
                /* stop();
                //gotoAndPlay(31); //to test the bacteria animation*/
            }, 0)
            .addAction(function () {
                /* stop();*/
            }, 14)
            .addAction(function () {
                /* stop();*/
            }, 29)
            .addAction(function () {
                /* this._parent.bInfected = true;*/
            }, 30)
            .addAction(function () {
                /* this.bac.ant1._visible = false;*/
            }, 42)
            .addAction(function () {
                /* this.bac.ant2._visible = false;*/
            }, 49)
            .addAction(function () {
                /* this.bac.ant3._visible = false;*/
            }, 56)
            .addAction(function () {
                /* this.bac.ant4._visible = false;*/
            }, 63)
            .addAction(function () {
                /* this.bac.ant5._visible = false;*/
            }, 70)
            .addAction(function () {
                /* this.bac.ant6._visible = false;*/
            }, 76)
            .addAction(function () {
                /* this.bac.ant7._visible = false;*/
            }, 83)
            .addAction(function () {
                /* stop();
                this._parent.bInfected = false;*/
            }, 113);
    });

    lib.GameSafe = Container.extend(function () {
        Container.call(this);
        var instance1 = new Graphics()
            .drawCommands(shapes.Internal[82]);
        this.addChild(instance1);
    });

    lib.Internal = MovieClip.extend(function () {
        MovieClip.call(this, {
            duration: 1,
            framerate: 30
        });
        var instance12 = new lib.GameSafe()
            .setTransform(287, 0, 1.017, 0.977);
        var instance11 = new Graphics()
            .drawCommands(shapes.Internal[81]);
        var instance10 = new lib.macro_bacteria_orig()
            .setTransform(574.75, 560.05);
        this[instance10.name = "macrophage3"] = instance10;
        var instance9 = new lib.protein()
            .setTransform(1059.4, 270);
        this[instance9.name = "protein1"] = instance9;
        var instance8 = new lib.macro_bacteria_orig()
            .setTransform(442.4, 380.05);
        this[instance8.name = "macrophage2"] = instance8;
        var instance7 = new lib.macro_bacteria_orig()
            .setTransform(610.05, 269.1);
        this[instance7.name = "macrophage1"] = instance7;
        var instance6 = new lib.protein()
            .setTransform(1099.9, 350.6);
        this[instance6.name = "protein3"] = instance6;
        var instance5 = new lib.protein()
            .setTransform(979.9, 320.6);
        this[instance5.name = "protein2"] = instance5;
        var instance4 = new lib.protein()
            .setTransform(979.9, 410.6);
        this[instance4.name = "protein4"] = instance4;
        var instance3 = new lib.protein()
            .setTransform(1089.9, 450.6);
        this[instance3.name = "protein5"] = instance3;
        var instance2 = new lib.protein()
            .setTransform(1009.9, 489.7);
        this[instance2.name = "protein6"] = instance2;
        var instance1 = new lib.Back()
            .setTransform(340, 50);
        this[instance1.name = "back"] = instance1;
        this.addChild(instance12, instance11, instance10, instance9, instance8, instance7, instance6, instance5, instance4, instance3, instance2, instance1);
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