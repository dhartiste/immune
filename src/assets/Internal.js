(function (PIXI, lib) {

    var MovieClip = PIXI.animate.MovieClip;
    var Container = PIXI.Container;
    var Text = PIXI.Text;
    var Graphics = PIXI.Graphics;
    var shapes = PIXI.animate.ShapesCache;

    lib.Back = Container.extend(function () {
        Container.call(this);
        var instance1 = new Graphics()
            .drawCommands(shapes.Internal[0]);
        this.addChild(instance1);
    });

    lib.Eye = Container.extend(function () {
        Container.call(this);
        var instance1 = new Graphics()
            .drawCommands(shapes.Internal[1])
            .setTransform(-341.15, -254.4, 0.84, 0.837);
        this.addChild(instance1);
    });

    lib.RightAnt = Container.extend(function () {
        Container.call(this);
        var instance3 = new Graphics()
            .drawCommands(shapes.Internal[4])
            .setTransform(-341.7, -234.6, 0.84, 0.837);
        var instance2 = new Graphics()
            .drawCommands(shapes.Internal[3])
            .setTransform(-341.7, -234.6, 0.84, 0.837);
        var instance1 = new Graphics()
            .drawCommands(shapes.Internal[2])
            .setTransform(-341.7, -234.6, 0.84, 0.837);
        this.addChild(instance3, instance2, instance1);
    });

    lib.protein = MovieClip.extend(function () {
        MovieClip.call(this, {
            duration: 65,
            labels: {
                intro: 0,
                intro_stop: 19,
                reveal: 25,
                reveal_stop: 64
            }
        });
        var instance14 = new Graphics()
            .drawCommands(shapes.Internal[15])
            .setTransform(-336, -251.3, 0.84, 0.837);
        var instance13 = new Graphics()
            .drawCommands(shapes.Internal[14])
            .setTransform(-336, -251.3, 0.84, 0.837);
        var instance12 = new Graphics()
            .drawCommands(shapes.Internal[13])
            .setTransform(-336, -251.3, 0.84, 0.837);
        var instance11 = new Graphics()
            .drawCommands(shapes.Internal[12])
            .setTransform(-336, -251.3, 0.84, 0.837);
        var instance10 = new Graphics()
            .drawCommands(shapes.Internal[11])
            .setTransform(-336, -251.3, 0.84, 0.837);
        var instance9 = new Graphics()
            .drawCommands(shapes.Internal[10])
            .setTransform(-336, -251.3, 0.84, 0.837);
        var instance8 = new Graphics()
            .drawCommands(shapes.Internal[9])
            .setTransform(-336, -251.3, 0.84, 0.837);
        var instance7 = new Graphics()
            .drawCommands(shapes.Internal[8])
            .setTransform(-336, -251.3, 0.84, 0.837);
        var instance6 = new Graphics()
            .drawCommands(shapes.Internal[7])
            .setTransform(-336, -251.3, 0.84, 0.837);
        var instance5 = new Graphics()
            .drawCommands(shapes.Internal[6])
            .setTransform(-336, -251.3, 0.84, 0.837);
        var instance4 = new Graphics()
            .drawCommands(shapes.Internal[5]);
        var instance3 = new Text("Hi")
            .setStyle({
                fontFamily: "Muli ExtraBold",
                fontSize: 12,
                fill: "#fc0",
                leading: 2
            });
        var instance15 = new Text("Hi")
            .setStyle({
                fontFamily: "Muli ExtraBold",
                fontSize: 12,
                fill: "#fc0",
                leading: 2
            })
            .setTransform(-1.55, -25.8);
        var instance2 = new lib.RightAnt();
        var instance1 = new lib.Eye();
        this.addTimedChild(instance14)
            .addTimedChild(instance13)
            .addTimedChild(instance12)
            .addTimedChild(instance11)
            .addTimedChild(instance10)
            .addTimedChild(instance9)
            .addTimedChild(instance8)
            .addTimedChild(instance7)
            .addTimedChild(instance6)
            .addTimedChild(instance5)
            .addTimedChild(instance4, 0, 65, {
                "0": {
                    x: -336,
                    y: -251.3,
                    sx: 0.84,
                    sy: 0.837
                }
            })
            .addTimedChild(instance3, 0, 64, {
                "0": {
                    x: -1.55,
                    y: -25.8
                }
            })
            .addTimedChild(instance15, 64, 1)
            .addTimedChild(instance2, 0, 65, {
                "0": {
                    x: 5.7,
                    y: -16.7
                },
                "26": {
                    y: -18.65
                },
                "27": {
                    x: 5.65,
                    y: -20.6
                },
                "28": {
                    y: -22.6
                },
                "29": {
                    x: 5.6,
                    y: -24.55
                },
                "30": {
                    y: -26.5
                },
                "31": {
                    x: 5.55,
                    y: -28.45
                },
                "32": {
                    y: -30.45
                },
                "33": {
                    x: 5.5,
                    y: -32.4
                },
                "34": {
                    y: -34.35
                },
                "48": {
                    y: -33.3
                },
                "49": {
                    y: -32.25
                },
                "50": {
                    x: 5.55,
                    y: -31.25
                },
                "51": {
                    y: -30.2
                },
                "52": {
                    y: -29.15
                },
                "53": {
                    y: -28.1
                },
                "54": {
                    x: 5.6,
                    y: -27.1
                },
                "55": {
                    y: -26.05
                },
                "56": {
                    y: -25
                },
                "57": {
                    y: -23.95
                },
                "58": {
                    x: 5.65,
                    y: -22.95
                },
                "59": {
                    y: -21.9
                },
                "60": {
                    y: -20.85
                },
                "61": {
                    y: -19.8
                },
                "62": {
                    x: 5.7,
                    y: -18.8
                },
                "63": {
                    y: -17.75
                },
                "64": {
                    y: -16.7
                }
            })
            .addTimedChild(instance1, 0, 65, {
                "0": {
                    x: 5.15,
                    y: 3.1
                },
                "1": {
                    x: 5,
                    y: 2.75
                },
                "2": {
                    x: 4.85,
                    y: 2.35
                },
                "3": {
                    x: 4.75,
                    y: 2
                },
                "4": {
                    x: 4.6,
                    y: 1.65
                },
                "5": {
                    x: 4.45,
                    y: 1.25
                },
                "6": {
                    x: 4.3,
                    y: 0.9
                },
                "7": {
                    x: 4.2,
                    y: 0.55
                },
                "8": {
                    x: 4.05,
                    y: 0.15
                },
                "9": {
                    x: 3.9,
                    y: -0.2
                },
                "10": {
                    x: 4.05,
                    y: 0.15
                },
                "11": {
                    x: 4.15,
                    y: 0.45
                },
                "12": {
                    x: 4.3,
                    y: 0.8
                },
                "13": {
                    x: 4.4,
                    y: 1.1
                },
                "14": {
                    x: 4.55,
                    y: 1.45
                },
                "15": {
                    x: 4.65,
                    y: 1.8
                },
                "16": {
                    x: 4.8,
                    y: 2.1
                },
                "17": {
                    x: 4.9,
                    y: 2.45
                },
                "18": {
                    x: 5.05,
                    y: 2.75
                },
                "19": {
                    x: 5.15,
                    y: 3.1
                }
            });
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
            .drawCommands(shapes.Internal[37])
            .setTransform(0, 0.85, 1, 1.055);
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
            .drawCommands(shapes.Internal[10])
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

    lib.macro_bacteria = MovieClip.extend(function () {
        MovieClip.call(this, {
            duration: 82,
            labels: {
                intro: 0,
                intro_stop: 14,
                reveal: 30,
                reveal_stop: 81
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
        var instance5 = new lib.GameSafe()
            .setTransform(287, 0, 1.017, 0.977)
            .setAlpha(0.18);
        var instance4 = new Graphics()
            .drawCommands(shapes.Internal[81]);
        var instance3 = new lib.macro_bacteria()
            .setTransform(530.05, 230);
        this[instance3.name = "bacteria"] = instance3;
        var instance2 = new lib.protein()
            .setTransform(889.9, 200);
        this[instance2.name = "protein"] = instance2;
        var instance1 = new lib.Back()
            .setTransform(340, 50);
        this[instance1.name = "back"] = instance1;
        this.addChild(instance5, instance4, instance3, instance2, instance1);
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