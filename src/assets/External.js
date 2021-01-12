(function (PIXI, lib) {

    var MovieClip = PIXI.animate.MovieClip;
    var Container = PIXI.Container;
    var Sprite = PIXI.Sprite;
    var fromFrame = PIXI.Texture.fromFrame;
    var Text = PIXI.Text;
    var Graphics = PIXI.Graphics;
    var shapes = PIXI.animate.ShapesCache;

    var Graphic1 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 97, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.External[0])
            .setTransform(-668.6, -361.1);
        this.addTimedChild(instance1);
    });

    lib.nub_circle = Container.extend(function () {
        Container.call(this);
        var instance1 = new Graphics()
            .drawCommands(shapes.External[3]);
        this.addChild(instance1);
    });

    lib.nub_circles = Container.extend(function () {
        Container.call(this);
        var instance20 = new lib.nub_circle()
            .setTransform(18.3, 6.45);
        var instance19 = new lib.nub_circle()
            .setTransform(18.3, 20.65);
        var instance18 = new lib.nub_circle()
            .setTransform(18.3, 49.05);
        var instance17 = new lib.nub_circle()
            .setTransform(18.3, 34.85);
        var instance16 = new lib.nub_circle()
            .setTransform(18.3, 63.25);
        var instance15 = new lib.nub_circle()
            .setTransform(18.3, 77.45);
        var instance14 = new lib.nub_circle()
            .setTransform(18.3, 91.65);
        var instance13 = new lib.nub_circle()
            .setTransform(33.55, 14.15);
        var instance12 = new lib.nub_circle()
            .setTransform(33.55, 28.35);
        var instance11 = new lib.nub_circle()
            .setTransform(33.55, 56.75);
        var instance10 = new lib.nub_circle()
            .setTransform(33.55, 42.55);
        var instance9 = new lib.nub_circle()
            .setTransform(33.55, 70.95);
        var instance8 = new lib.nub_circle()
            .setTransform(33.55, 85.15);
        var instance7 = new lib.nub_circle()
            .setTransform(3.25, 12.85);
        var instance6 = new lib.nub_circle()
            .setTransform(3.25, 41.25);
        var instance5 = new lib.nub_circle()
            .setTransform(3.25, 27.05);
        var instance4 = new lib.nub_circle()
            .setTransform(3.25, 55.45);
        var instance3 = new lib.nub_circle()
            .setTransform(3.25, 69.65);
        var instance2 = new lib.nub_circle()
            .setTransform(3.25, 83.85);
        var instance1 = new Graphics()
            .drawCommands(shapes.External[2]);
        this.addChild(instance20, instance19, instance18, instance17, instance16, instance15, instance14, instance13, instance12, instance11, instance10, instance9, instance8, instance7, instance6, instance5, instance4, instance3, instance2, instance1);
    });

    lib.nub_only = Container.extend(function () {
        Container.call(this);
        var instance1 = new Graphics()
            .drawCommands(shapes.External[4]);
        this.addChild(instance1);
    });

    lib.ba_color = Container.extend(function () {
        Container.call(this);
        var instance1 = new Graphics()
            .drawCommands(shapes.External[1])
            .setTransform(-647.6, -214.95);
        this.addChild(instance1);
    });

    lib.bandaid = Container.extend(function () {
        Container.call(this);
        var instance4 = new lib.ba_color()
            .setColorTransform(0, 0.8, 0, 0.8, 0, 0.8);
        this[instance4.name = "bacolor"] = instance4;
        var instance3 = new Graphics()
            .drawCommands(shapes.External[5]);
        var instance2 = new lib.nub_only()
            .setTransform(0, 91.85);
        this[instance2.name = "nub"] = instance2;
        var instance1 = new lib.nub_circles()
            .setTransform(-1.1, 91.1);
        this[instance1.name = "circles"] = instance1;
        this.addChild(instance4, instance3, instance2, instance1);
    });

    lib._37 = Container.extend(function () {
        Container.call(this);
        var instance1 = new Text("37.0")
            .setStyle({
                fontFamily: "Tahoma",
                fontSize: 12,
                fontWeight: "bold",
                leading: 2
            })
            .setAlign("right")
            .setTransform(55);
        this.addChild(instance1);
    });

    lib._38 = Container.extend(function () {
        Container.call(this);
        var instance1 = new lib._37();
        this.addChild(instance1);
    });

    lib._98 = Container.extend(function () {
        Container.call(this);
        var instance1 = new Text("98.6")
            .setStyle({
                fontFamily: "Tahoma",
                fontSize: 12,
                fontWeight: "bold",
                leading: 2
            })
            .setAlign("right")
            .setTransform(55);
        this[instance1.name = "dFarenheit"] = instance1;
        this.addChild(instance1);
    });

    lib.press = MovieClip.extend(function () {
        MovieClip.call(this, {
            duration: 4
        });

    });

    lib.bulb = Container.extend(function () {
        Container.call(this);
        var instance1 = new Graphics()
            .drawCommands(shapes.External[7]);
        this.addChild(instance1);
    });

    lib.jump = Container.extend(function () {
        Container.call(this);
        var instance3 = new lib.bulb();
        this[instance3.name = "thebulb"] = instance3;
        var instance2 = new Graphics()
            .drawCommands(shapes.External[6]);
        var instance1 = new Text("expose to live virus")
            .setStyle({
                fontFamily: "Tahoma",
                fontSize: 12,
                fontWeight: "bold",
                fill: "#39472f",
                leading: 2
            })
            .setAlign("center")
            .setTransform(74.1, 1.9);
        this[instance1.name = "dtext"] = instance1;
        this.addChild(instance3, instance2, instance1);
    });

    lib.hitme = Container.extend(function () {
        Container.call(this);
        var instance1 = new Graphics()
            .drawCommands(shapes.External[9]);
        this.addChild(instance1);
    });

    lib.gray_Nat = Container.extend(function () {
        Container.call(this);
        var instance1 = new Sprite(fromFrame("NatOutline"));
        this.addChild(instance1);
    });

    lib.gray_kid2 = Container.extend(function () {
        Container.call(this);
        var instance2 = new lib.gray_Nat()
            .setColorTransform(0, 0.71, 0, 0.55, 0, 0.56);
        var instance1 = new lib.hitme()
            .setTransform(38, 25.05, 1.75, 1.848)
            .setAlpha(0);
        this[instance1.name = "hitme"] = instance1;
        this.addChild(instance2, instance1);
    });

    lib.txtProtection = Container.extend(function () {
        Container.call(this);
        var instance2 = new Text("0% ")
            .setStyle({
                fontFamily: "Tahoma",
                fontSize: 14,
                fontWeight: "bold",
                leading: 2
            })
            .setAlign("right")
            .setTransform(47.300000000000004);
        this[instance2.name = "dtext"] = instance2;
        var instance1 = new Text("Protection")
            .setStyle({
                fontFamily: "Tahoma",
                fontSize: 14,
                fontWeight: "bold",
                leading: 2
            })
            .setTransform(50, 2);
        this.addChild(instance2, instance1);
    });

    lib.txtHealth = Container.extend(function () {
        Container.call(this);
        var instance1 = new Text("Healthy")
            .setStyle({
                fontFamily: "Tahoma",
                fontSize: 14,
                fontWeight: "bold",
                leading: 2
            })
            .setAlign("center")
            .setTransform(32);
        this[instance1.name = "dtext"] = instance1;
        this.addChild(instance1);
    });

    lib._99 = Container.extend(function () {
        Container.call(this);
        var instance1 = new Text("99")
            .setStyle({
                fontFamily: "Tahoma",
                fontSize: 12,
                fontWeight: "bold",
                fill: "#4e6040",
                leading: 2
            })
            .setAlign("right")
            .setTransform(55);
        this.addChild(instance1);
    });

    lib._100 = Container.extend(function () {
        Container.call(this);
        var instance1 = new Text("100")
            .setStyle({
                fontFamily: "Tahoma",
                fontSize: 12,
                fontWeight: "bold",
                fill: "#4e6040",
                leading: 2
            })
            .setAlign("right")
            .setTransform(55);
        this.addChild(instance1);
    });

    lib._101 = Container.extend(function () {
        Container.call(this);
        var instance1 = new Text("101\n")
            .setStyle({
                fontFamily: "Tahoma",
                fontSize: 12,
                fontWeight: "bold",
                fill: "#4e6040",
                leading: 2
            })
            .setAlign("right")
            .setTransform(55);
        this.addChild(instance1);
    });

    lib._70Protection = Container.extend(function () {
        Container.call(this);
        var instance1 = new Text("70% Protection")
            .setStyle({
                fontFamily: "Tahoma",
                fontSize: 14,
                fontWeight: "bold",
                fill: "#d09318",
                leading: 2
            })
            .setAlign("center")
            .setTransform(70);
        this.addChild(instance1);
    });

    lib.Sick = Container.extend(function () {
        Container.call(this);
        var instance1 = new Text("Sick")
            .setStyle({
                fontFamily: "Tahoma",
                fontSize: 14,
                fontWeight: "bold",
                fill: "#d09215",
                leading: 2
            })
            .setAlign("center")
            .setTransform(37);
        this.addChild(instance1);
    });

    var Graphic2 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 4, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.External[0])
            .setTransform(-668.6, -361.1);
        this.addTimedChild(instance1);
    });

    lib._95Protect = Container.extend(function () {
        Container.call(this);
        var instance1 = new Text("95% Protection")
            .setStyle({
                fontFamily: "Tahoma",
                fontSize: 14,
                fontWeight: "bold",
                fill: "#d09215",
                leading: 2
            })
            .setAlign("center")
            .setTransform(82);
        this.addChild(instance1);
    });

    lib.InBed = Container.extend(function () {
        Container.call(this);
        var instance1 = new Text("Sick in Bed!")
            .setStyle({
                fontFamily: "Tahoma",
                fontSize: 14,
                fontWeight: "bold",
                fill: "#d09318",
                leading: 2
            })
            .setAlign("center")
            .setTransform(52);
        this.addChild(instance1);
    });

    lib.External = MovieClip.extend(function () {
        MovieClip.call(this, {
            duration: 101,
            framerate: 30,
            labels: {
                default: 0,
                healthyToSick: 4,
                "0% - 70%": 4,
                healthyToSick_stop: 49,
                "70% - 95%": 49,
                sickToBed: 54,
                sickToBed_stop: 100
            }
        });
        var instance19 = new Graphics()
            .drawCommands(shapes.External[10]);
        var instance18 = new lib.bandaid();
        this[instance18.name = "bandaid"] = instance18;
        var instance17 = new lib.txtHealth();
        this[instance17.name = "Health"] = instance17;
        var instance16 = new lib.txtProtection();
        this[instance16.name = "Protection"] = instance16;
        var instance15 = new Text("Next Act...")
            .setStyle({
                fontFamily: "Tahoma",
                fontSize: 12,
                fontWeight: "bold",
                fill: "#d09214",
                leading: 2
            });
        var instance23 = new Text("Next Act...")
            .setStyle({
                fontFamily: "Tahoma",
                fontSize: 12,
                fontWeight: "bold",
                fill: "#d09214",
                leading: 2
            });
        var instance29 = new lib.bandaid();
        this[instance29.name = "bandaid"] = instance29;
        var instance28 = new lib.Sick();
        this[instance28.name = "Health"] = instance28;
        var instance27 = new lib._70Protection();
        this[instance27.name = "Protection"] = instance27;
        var instance26 = new Text("Next Act...")
            .setStyle({
                fontFamily: "Tahoma",
                fontSize: 12,
                fontWeight: "bold",
                fill: "#d09214",
                leading: 2
            });
        var instance34 = new lib.InBed()
            .setTransform(436, 185.95)
            .setColorTransform(0, 0.82, 0, 0.57, 0, 0.08);
        this[instance34.name = "Health"] = instance34;
        var instance33 = new lib._95Protect()
            .setTransform(593.2, 183.95)
            .setColorTransform(0, 0.82, 0, 0.57, 0, 0.08);
        this[instance33.name = "Protection"] = instance33;
        var instance32 = new Text("Next Act...")
            .setStyle({
                fontFamily: "Tahoma",
                fontSize: 12,
                fontWeight: "bold",
                fill: "#d09214",
                leading: 2
            })
            .setTransform(766.2, 521.65);
        var instance14 = new Text("(after exposure to the live virus) If the patient falls ill, there is little one can do to fight the viral infection. You normally have to wait for the body to work it out.")
            .setStyle({
                fontFamily: "Tahoma",
                fontSize: 12,
                fontWeight: "bold",
                fill: "#4e6040",
                leading: 2,
                wordWrap: true,
                wordWrapWidth: 248.55
            })
            .setTransform(792.7, 333.15);
        this[instance14.name = "dDescription"] = instance14;
        var instance13 = new lib.gray_kid2();
        this[instance13.name = "patient"] = instance13;
        var instance12 = new Graphics()
            .drawCommands(shapes.External[8]);
        var instance11 = new Text("°F ")
            .setStyle({
                fontFamily: "Tahoma",
                fontSize: 12,
                fontWeight: "bold",
                fill: "#4e6040",
                leading: 2
            });
        var instance10 = new Text("°C")
            .setStyle({
                fontFamily: "Tahoma",
                fontSize: 12,
                fontWeight: "bold",
                fill: "#4e6040",
                leading: 2
            })
            .setAlign("right");
        var instance22 = new Text("°F ")
            .setStyle({
                fontFamily: "Tahoma",
                fontSize: 12,
                fontWeight: "bold",
                fill: "#4e6040",
                leading: 2
            })
            .setTransform(431.7, 270.25);
        var instance21 = new Text("°C")
            .setStyle({
                fontFamily: "Tahoma",
                fontSize: 12,
                fontWeight: "bold",
                fill: "#4e6040",
                leading: 2
            })
            .setAlign("right")
            .setTransform(526.7, 270.05);
        var instance9 = new lib.jump()
            .setTransform(764.2, 544.45);
        this[instance9.name = "btnMoveOn"] = instance9;
        var instance8 = new lib.jump()
            .setTransform(930.6, 544.55);
        this[instance8.name = "btnBack"] = instance8;
        var instance7 = new lib.press()
            .setTransform(931.6, 544.65);
        this[instance7.name = "btnBack"] = instance7;
        var instance6 = new lib.press();
        this[instance6.name = "btnAhead"] = instance6;
        var instance5 = new lib._98();
        var instance20 = new lib._99();
        var instance24 = new lib._100();
        var instance25 = new lib._101();
        var instance30 = new lib._99();
        var instance4 = new lib._38();
        var instance3 = new lib.bandaid();
        this[instance3.name = "bandaid"] = instance3;
        var instance2 = new Graphics()
            .drawCommands(shapes.External[1]);
        var instance1 = new Graphic1(MovieClip.SYNCHED);
        var instance31 = new Graphic2(MovieClip.SYNCHED)
            .setTransform(668.6, 361.1)
            .setAlpha(0);
        this.addTimedChild(instance19)
            .addTimedChild(instance18, 0, 4, {
                "0": {
                    x: 647.6,
                    y: 214.95
                }
            })
            .addTimedChild(instance17, 0, 45, {
                "0": {
                    x: 450,
                    y: 183.95,
                    c: [
                        0,
                        0.82,
                        0,
                        0.57,
                        0,
                        0.08
                    ]
                }
            })
            .addTimedChild(instance16, 0, 45, {
                "0": {
                    x: 606.2,
                    y: 183.95,
                    c: [
                        0,
                        0.82,
                        0,
                        0.57,
                        0,
                        0.08
                    ]
                }
            })
            .addTimedChild(instance15, 0, 4, {
                "0": {
                    x: 766.2,
                    y: 521.65
                }
            })
            .addTimedChild(instance23, 4, 41, {
                "4": {
                    x: 766.2,
                    y: 521.65
                }
            })
            .addTimedChild(instance29, 45, 56, {
                "45": {
                    x: 647.6,
                    y: 214.95
                }
            })
            .addTimedChild(instance28, 45, 52, {
                "45": {
                    x: 446,
                    y: 185.95,
                    c: [
                        0,
                        0.82,
                        0,
                        0.57,
                        0,
                        0.08
                    ]
                }
            })
            .addTimedChild(instance27, 45, 52, {
                "45": {
                    x: 606.2,
                    y: 183.95,
                    c: [
                        0,
                        0.82,
                        0,
                        0.57,
                        0,
                        0.08
                    ]
                }
            })
            .addTimedChild(instance26, 45, 52, {
                "45": {
                    x: 766.2,
                    y: 521.65
                }
            })
            .addTimedChild(instance34, 97, 4)
            .addTimedChild(instance33, 97, 4)
            .addTimedChild(instance32, 97, 4)
            .addTimedChild(instance14)
            .addTimedChild(instance13, 0, 101, {
                "0": {
                    x: 428.7,
                    y: 219.65,
                    c: [
                        0,
                        0.8,
                        0,
                        0.8,
                        0,
                        0.8
                    ]
                },
                "4": {
                    x: 427.7,
                    c: [
                        0,
                        0,
                        0,
                        0.87,
                        0,
                        0
                    ]
                },
                "5": {
                    c: [
                        0,
                        0.02,
                        0,
                        0.87,
                        0,
                        0
                    ]
                },
                "6": {
                    c: [
                        0,
                        0.04,
                        0,
                        0.87,
                        0,
                        0
                    ]
                },
                "7": {
                    c: [
                        0,
                        0.07,
                        0,
                        0.87,
                        0,
                        0
                    ]
                },
                "8": {
                    c: [
                        0,
                        0.09,
                        0,
                        0.87,
                        0,
                        0
                    ]
                },
                "9": {
                    c: [
                        0,
                        0.11,
                        0,
                        0.87,
                        0,
                        0
                    ]
                },
                "10": {
                    c: [
                        0,
                        0.13,
                        0,
                        0.87,
                        0,
                        0
                    ]
                },
                "11": {
                    c: [
                        0,
                        0.16,
                        0,
                        0.87,
                        0,
                        0
                    ]
                },
                "12": {
                    c: [
                        0,
                        0.18,
                        0,
                        0.87,
                        0,
                        0
                    ]
                },
                "13": {
                    c: [
                        0,
                        0.2,
                        0,
                        0.88,
                        0,
                        0
                    ]
                },
                "14": {
                    c: [
                        0,
                        0.22,
                        0,
                        0.88,
                        0,
                        0
                    ]
                },
                "15": {
                    c: [
                        0,
                        0.24,
                        0,
                        0.88,
                        0,
                        0
                    ]
                },
                "16": {
                    c: [
                        0,
                        0.27,
                        0,
                        0.88,
                        0,
                        0
                    ]
                },
                "17": {
                    c: [
                        0,
                        0.29,
                        0,
                        0.88,
                        0,
                        0
                    ]
                },
                "18": {
                    c: [
                        0,
                        0.31,
                        0,
                        0.88,
                        0,
                        0
                    ]
                },
                "19": {
                    c: [
                        0,
                        0.33,
                        0,
                        0.88,
                        0,
                        0
                    ]
                },
                "20": {
                    c: [
                        0,
                        0.36,
                        0,
                        0.89,
                        0,
                        0
                    ]
                },
                "21": {
                    c: [
                        0,
                        0.38,
                        0,
                        0.89,
                        0,
                        0
                    ]
                },
                "22": {
                    c: [
                        0,
                        0.4,
                        0,
                        0.89,
                        0,
                        0
                    ]
                },
                "23": {
                    c: [
                        0,
                        0.42,
                        0,
                        0.89,
                        0,
                        0
                    ]
                },
                "24": {
                    c: [
                        0,
                        0.44,
                        0,
                        0.89,
                        0,
                        0
                    ]
                },
                "25": {
                    c: [
                        0,
                        0.47,
                        0,
                        0.89,
                        0,
                        0
                    ]
                },
                "26": {
                    c: [
                        0,
                        0.49,
                        0,
                        0.89,
                        0,
                        0
                    ]
                },
                "27": {
                    c: [
                        0,
                        0.51,
                        0,
                        0.89,
                        0,
                        0
                    ]
                },
                "28": {
                    c: [
                        0,
                        0.53,
                        0,
                        0.89,
                        0,
                        0
                    ]
                },
                "29": {
                    c: [
                        0,
                        0.56,
                        0,
                        0.89,
                        0,
                        0
                    ]
                },
                "30": {
                    c: [
                        0,
                        0.58,
                        0,
                        0.9,
                        0,
                        0
                    ]
                },
                "31": {
                    c: [
                        0,
                        0.6,
                        0,
                        0.9,
                        0,
                        0
                    ]
                },
                "32": {
                    c: [
                        0,
                        0.62,
                        0,
                        0.9,
                        0,
                        0
                    ]
                },
                "33": {
                    c: [
                        0,
                        0.64,
                        0,
                        0.9,
                        0,
                        0
                    ]
                },
                "34": {
                    c: [
                        0,
                        0.67,
                        0,
                        0.9,
                        0,
                        0
                    ]
                },
                "35": {
                    c: [
                        0,
                        0.69,
                        0,
                        0.9,
                        0,
                        0
                    ]
                },
                "36": {
                    c: [
                        0,
                        0.71,
                        0,
                        0.9,
                        0,
                        0
                    ]
                },
                "37": {
                    c: [
                        0,
                        0.73,
                        0,
                        0.91,
                        0,
                        0
                    ]
                },
                "38": {
                    c: [
                        0,
                        0.76,
                        0,
                        0.91,
                        0,
                        0
                    ]
                },
                "39": {
                    c: [
                        0,
                        0.78,
                        0,
                        0.91,
                        0,
                        0
                    ]
                },
                "40": {
                    c: [
                        0,
                        0.8,
                        0,
                        0.91,
                        0,
                        0
                    ]
                },
                "41": {
                    c: [
                        0,
                        0.82,
                        0,
                        0.91,
                        0,
                        0
                    ]
                },
                "42": {
                    c: [
                        0,
                        0.84,
                        0,
                        0.91,
                        0,
                        0
                    ]
                },
                "43": {
                    c: [
                        0,
                        0.87,
                        0,
                        0.91,
                        0,
                        0
                    ]
                },
                "44": {
                    c: [
                        0,
                        0.89,
                        0,
                        0.91,
                        0,
                        0
                    ]
                },
                "45": {
                    c: [
                        0,
                        0.91,
                        0,
                        0.91,
                        0,
                        0
                    ]
                },
                "46": {
                    c: [
                        0,
                        0.93,
                        0,
                        0.91,
                        0,
                        0
                    ]
                },
                "47": {
                    c: [
                        0,
                        0.96,
                        0,
                        0.91,
                        0,
                        0
                    ]
                },
                "48": {
                    c: [
                        0,
                        0.98,
                        0,
                        0.92,
                        0,
                        0
                    ]
                },
                "49": {
                    c: [
                        0,
                        1,
                        0,
                        0.92,
                        0,
                        0
                    ]
                },
                "55": {
                    c: [
                        0,
                        1,
                        0,
                        0.9,
                        0,
                        0
                    ]
                },
                "56": {
                    c: [
                        0,
                        1,
                        0,
                        0.88,
                        0,
                        0
                    ]
                },
                "57": {
                    c: [
                        0,
                        0.99,
                        0,
                        0.85,
                        0,
                        0
                    ]
                },
                "58": {
                    c: [
                        0,
                        0.99,
                        0,
                        0.84,
                        0,
                        0
                    ]
                },
                "59": {
                    c: [
                        0,
                        0.98,
                        0,
                        0.82,
                        0,
                        0
                    ]
                },
                "60": {
                    c: [
                        0,
                        0.98,
                        0,
                        0.8,
                        0,
                        0
                    ]
                },
                "61": {
                    c: [
                        0,
                        0.98,
                        0,
                        0.78,
                        0,
                        0
                    ]
                },
                "62": {
                    c: [
                        0,
                        0.98,
                        0,
                        0.75,
                        0,
                        0
                    ]
                },
                "63": {
                    c: [
                        0,
                        0.98,
                        0,
                        0.73,
                        0,
                        0
                    ]
                },
                "64": {
                    c: [
                        0,
                        0.97,
                        0,
                        0.71,
                        0,
                        0
                    ]
                },
                "65": {
                    c: [
                        0,
                        0.97,
                        0,
                        0.69,
                        0,
                        0
                    ]
                },
                "66": {
                    c: [
                        0,
                        0.96,
                        0,
                        0.67,
                        0,
                        0
                    ]
                },
                "67": {
                    c: [
                        0,
                        0.96,
                        0,
                        0.65,
                        0,
                        0
                    ]
                },
                "68": {
                    c: [
                        0,
                        0.96,
                        0,
                        0.63,
                        0,
                        0
                    ]
                },
                "69": {
                    c: [
                        0,
                        0.96,
                        0,
                        0.61,
                        0,
                        0
                    ]
                },
                "70": {
                    c: [
                        0,
                        0.96,
                        0,
                        0.59,
                        0,
                        0
                    ]
                },
                "71": {
                    c: [
                        0,
                        0.95,
                        0,
                        0.57,
                        0,
                        0
                    ]
                },
                "72": {
                    c: [
                        0,
                        0.95,
                        0,
                        0.55,
                        0,
                        0
                    ]
                },
                "73": {
                    c: [
                        0,
                        0.95,
                        0,
                        0.53,
                        0,
                        0
                    ]
                },
                "74": {
                    c: [
                        0,
                        0.95,
                        0,
                        0.51,
                        0,
                        0
                    ]
                },
                "75": {
                    c: [
                        0,
                        0.94,
                        0,
                        0.49,
                        0,
                        0
                    ]
                },
                "76": {
                    c: [
                        0,
                        0.94,
                        0,
                        0.47,
                        0,
                        0
                    ]
                },
                "77": {
                    c: [
                        0,
                        0.94,
                        0,
                        0.45,
                        0,
                        0
                    ]
                },
                "78": {
                    c: [
                        0,
                        0.93,
                        0,
                        0.43,
                        0,
                        0
                    ]
                },
                "79": {
                    c: [
                        0,
                        0.93,
                        0,
                        0.41,
                        0,
                        0
                    ]
                },
                "80": {
                    c: [
                        0,
                        0.93,
                        0,
                        0.39,
                        0,
                        0
                    ]
                },
                "81": {
                    c: [
                        0,
                        0.93,
                        0,
                        0.37,
                        0,
                        0
                    ]
                },
                "82": {
                    c: [
                        0,
                        0.92,
                        0,
                        0.35,
                        0,
                        0
                    ]
                },
                "83": {
                    c: [
                        0,
                        0.92,
                        0,
                        0.33,
                        0,
                        0
                    ]
                },
                "84": {
                    c: [
                        0,
                        0.92,
                        0,
                        0.31,
                        0,
                        0
                    ]
                },
                "85": {
                    c: [
                        0,
                        0.91,
                        0,
                        0.29,
                        0,
                        0
                    ]
                },
                "86": {
                    c: [
                        0,
                        0.91,
                        0,
                        0.27,
                        0,
                        0
                    ]
                },
                "87": {
                    c: [
                        0,
                        0.91,
                        0,
                        0.24,
                        0,
                        0
                    ]
                },
                "88": {
                    c: [
                        0,
                        0.91,
                        0,
                        0.22,
                        0,
                        0
                    ]
                },
                "89": {
                    c: [
                        0,
                        0.9,
                        0,
                        0.2,
                        0,
                        0
                    ]
                },
                "90": {
                    c: [
                        0,
                        0.9,
                        0,
                        0.18,
                        0,
                        0
                    ]
                },
                "91": {
                    c: [
                        0,
                        0.9,
                        0,
                        0.16,
                        0,
                        0
                    ]
                },
                "92": {
                    c: [
                        0,
                        0.89,
                        0,
                        0.14,
                        0,
                        0
                    ]
                },
                "93": {
                    c: [
                        0,
                        0.89,
                        0,
                        0.12,
                        0,
                        0
                    ]
                },
                "94": {
                    c: [
                        0,
                        0.89,
                        0,
                        0.1,
                        0,
                        0
                    ]
                },
                "95": {
                    c: [
                        0,
                        0.89,
                        0,
                        0.08,
                        0,
                        0
                    ]
                },
                "96": {
                    c: [
                        0,
                        0.88,
                        0,
                        0.06,
                        0,
                        0
                    ]
                },
                "97": {
                    c: [
                        0,
                        0.88,
                        0,
                        0.04,
                        0,
                        0
                    ]
                },
                "98": {
                    c: [
                        0,
                        0.88,
                        0,
                        0.02,
                        0,
                        0
                    ]
                },
                "99": {
                    c: [
                        0,
                        0.87,
                        0,
                        0,
                        0,
                        0
                    ]
                }
            })
            .addTimedChild(instance12)
            .addTimedChild(instance11, 0, 4, {
                "0": {
                    x: 431.7,
                    y: 270.25
                }
            })
            .addTimedChild(instance10, 0, 4, {
                "0": {
                    x: 500.7,
                    y: 272.05
                }
            })
            .addTimedChild(instance22, 4, 97)
            .addTimedChild(instance21, 4, 97)
            .addTimedChild(instance9)
            .addTimedChild(instance8)
            .addTimedChild(instance7)
            .addTimedChild(instance6, 0, 101, {
                "0": {
                    x: 764.2,
                    y: 544.65
                }
            })
            .addTimedChild(instance5, 0, 4, {
                "0": {
                    x: 382.95,
                    y: 374.5
                }
            })
            .addTimedChild(instance20, 4, 15, {
                "4": {
                    x: 382.95,
                    y: 374.5
                },
                "5": {
                    y: 373.6
                },
                "6": {
                    y: 372.75
                },
                "7": {
                    y: 371.85
                },
                "8": {
                    y: 371
                },
                "9": {
                    y: 370.1
                },
                "10": {
                    y: 369.25
                },
                "11": {
                    y: 368.35
                },
                "12": {
                    y: 367.5
                },
                "13": {
                    y: 366.6
                },
                "14": {
                    y: 365.75
                },
                "15": {
                    y: 364.85
                },
                "16": {
                    y: 364
                },
                "17": {
                    y: 363.1
                },
                "18": {
                    y: 362.25
                }
            })
            .addTimedChild(instance24, 19, 15, {
                "19": {
                    x: 382.95,
                    y: 361.35
                },
                "20": {
                    y: 360.45
                },
                "21": {
                    y: 359.6
                },
                "22": {
                    y: 358.7
                },
                "23": {
                    y: 357.85
                },
                "24": {
                    y: 356.95
                },
                "25": {
                    y: 356.1
                },
                "26": {
                    y: 355.2
                },
                "27": {
                    y: 354.35
                },
                "28": {
                    y: 353.45
                },
                "29": {
                    y: 352.6
                },
                "30": {
                    y: 351.7
                },
                "31": {
                    y: 350.85
                },
                "32": {
                    y: 349.95
                },
                "33": {
                    y: 349.1
                }
            })
            .addTimedChild(instance25, 34, 15, {
                "34": {
                    x: 382.95,
                    y: 348.2
                },
                "35": {
                    y: 347.3
                },
                "36": {
                    y: 346.45
                },
                "37": {
                    y: 345.55
                },
                "38": {
                    y: 344.7
                },
                "39": {
                    y: 343.8
                },
                "40": {
                    y: 342.95
                },
                "41": {
                    y: 342.05
                },
                "42": {
                    y: 341.2
                },
                "43": {
                    y: 340.3
                },
                "44": {
                    y: 339.45
                },
                "45": {
                    y: 338.55
                },
                "46": {
                    y: 337.7
                },
                "47": {
                    y: 336.8
                },
                "48": {
                    y: 335.95
                }
            })
            .addTimedChild(instance30, 49, 52, {
                "49": {
                    x: 382.95,
                    y: 335.05
                },
                "55": {
                    y: 334.1
                },
                "56": {
                    y: 333.1
                },
                "57": {
                    y: 332.15
                },
                "58": {
                    y: 331.2
                },
                "59": {
                    y: 330.2
                },
                "60": {
                    y: 329.25
                },
                "61": {
                    y: 328.3
                },
                "62": {
                    y: 327.3
                },
                "63": {
                    y: 326.35
                },
                "64": {
                    y: 325.4
                },
                "65": {
                    y: 324.4
                },
                "66": {
                    y: 323.45
                },
                "67": {
                    y: 322.5
                },
                "68": {
                    y: 321.5
                },
                "69": {
                    y: 320.55
                },
                "70": {
                    y: 319.6
                },
                "71": {
                    y: 318.6
                },
                "72": {
                    y: 317.65
                },
                "73": {
                    y: 316.7
                },
                "74": {
                    y: 315.7
                },
                "75": {
                    y: 314.75
                },
                "76": {
                    y: 313.8
                },
                "77": {
                    y: 312.8
                },
                "78": {
                    y: 311.85
                },
                "79": {
                    y: 310.9
                },
                "80": {
                    y: 309.9
                },
                "81": {
                    y: 308.95
                },
                "82": {
                    y: 308
                },
                "83": {
                    y: 307
                },
                "84": {
                    y: 306.05
                },
                "85": {
                    y: 305.1
                },
                "86": {
                    y: 304.1
                },
                "87": {
                    y: 303.15
                },
                "88": {
                    y: 302.2
                },
                "89": {
                    y: 301.2
                },
                "90": {
                    y: 300.25
                },
                "91": {
                    y: 299.3
                },
                "92": {
                    y: 298.3
                },
                "93": {
                    y: 297.35
                },
                "94": {
                    y: 296.4
                },
                "95": {
                    y: 295.4
                },
                "96": {
                    y: 294.45
                },
                "97": {
                    y: 293.5
                },
                "98": {
                    y: 292.5
                },
                "99": {
                    y: 291.55
                }
            })
            .addTimedChild(instance4, 0, 101, {
                "0": {
                    x: 493,
                    y: 374.5
                },
                "5": {
                    y: 373.6
                },
                "6": {
                    y: 372.75
                },
                "7": {
                    y: 371.85
                },
                "8": {
                    y: 371
                },
                "9": {
                    y: 370.1
                },
                "10": {
                    y: 369.25
                },
                "11": {
                    y: 368.35
                },
                "12": {
                    y: 367.5
                },
                "13": {
                    y: 366.6
                },
                "14": {
                    y: 365.75
                },
                "15": {
                    y: 364.85
                },
                "16": {
                    y: 364
                },
                "17": {
                    y: 363.1
                },
                "18": {
                    y: 362.25
                },
                "19": {
                    y: 361.35
                },
                "20": {
                    y: 360.45
                },
                "21": {
                    y: 359.6
                },
                "22": {
                    y: 358.7
                },
                "23": {
                    y: 357.85
                },
                "24": {
                    y: 356.95
                },
                "25": {
                    y: 356.1
                },
                "26": {
                    y: 355.2
                },
                "27": {
                    y: 354.35
                },
                "28": {
                    y: 353.45
                },
                "29": {
                    y: 352.6
                },
                "30": {
                    y: 351.7
                },
                "31": {
                    y: 350.85
                },
                "32": {
                    y: 349.95
                },
                "33": {
                    y: 349.1
                },
                "34": {
                    y: 348.2
                },
                "35": {
                    y: 347.3
                },
                "36": {
                    y: 346.45
                },
                "37": {
                    y: 345.55
                },
                "38": {
                    y: 344.7
                },
                "39": {
                    y: 343.8
                },
                "40": {
                    y: 342.95
                },
                "41": {
                    y: 342.05
                },
                "42": {
                    y: 341.2
                },
                "43": {
                    y: 340.3
                },
                "44": {
                    y: 339.45
                },
                "45": {
                    y: 338.55
                },
                "46": {
                    y: 337.7
                },
                "47": {
                    y: 336.8
                },
                "48": {
                    y: 335.95
                },
                "49": {
                    y: 335.05
                },
                "55": {
                    y: 334.1
                },
                "56": {
                    y: 333.1
                },
                "57": {
                    y: 332.15
                },
                "58": {
                    y: 331.2
                },
                "59": {
                    y: 330.2
                },
                "60": {
                    y: 329.25
                },
                "61": {
                    y: 328.3
                },
                "62": {
                    y: 327.3
                },
                "63": {
                    y: 326.35
                },
                "64": {
                    y: 325.4
                },
                "65": {
                    y: 324.4
                },
                "66": {
                    y: 323.45
                },
                "67": {
                    y: 322.5
                },
                "68": {
                    y: 321.5
                },
                "69": {
                    y: 320.55
                },
                "70": {
                    y: 319.6
                },
                "71": {
                    y: 318.6
                },
                "72": {
                    y: 317.65
                },
                "73": {
                    y: 316.7
                },
                "74": {
                    y: 315.7
                },
                "75": {
                    y: 314.75
                },
                "76": {
                    y: 313.8
                },
                "77": {
                    y: 312.8
                },
                "78": {
                    y: 311.85
                },
                "79": {
                    y: 310.9
                },
                "80": {
                    y: 309.9
                },
                "81": {
                    y: 308.95
                },
                "82": {
                    y: 308
                },
                "83": {
                    y: 307
                },
                "84": {
                    y: 306.05
                },
                "85": {
                    y: 305.1
                },
                "86": {
                    y: 304.1
                },
                "87": {
                    y: 303.15
                },
                "88": {
                    y: 302.2
                },
                "89": {
                    y: 301.2
                },
                "90": {
                    y: 300.25
                },
                "91": {
                    y: 299.3
                },
                "92": {
                    y: 298.3
                },
                "93": {
                    y: 297.35
                },
                "94": {
                    y: 296.4
                },
                "95": {
                    y: 295.4
                },
                "96": {
                    y: 294.45
                },
                "97": {
                    y: 293.5
                },
                "98": {
                    y: 292.5
                },
                "99": {
                    y: 291.55
                }
            })
            .addTimedChild(instance3, 0, 101, {
                "0": {
                    x: 647.9,
                    y: 214.8
                }
            })
            .addTimedChild(instance2, 0, 4)
            .addTimedChild(instance1, 0, 97, {
                "0": {
                    x: 668.6,
                    y: 361.1,
                    a: 0.98
                },
                "4": {
                    a: 1
                },
                "5": {
                    a: 0.98
                },
                "6": {
                    a: 0.97
                },
                "7": {
                    a: 0.95
                },
                "8": {
                    a: 0.94
                },
                "9": {
                    a: 0.92
                },
                "10": {
                    a: 0.91
                },
                "11": {
                    a: 0.89
                },
                "12": {
                    a: 0.88
                },
                "13": {
                    a: 0.86
                },
                "14": {
                    a: 0.84
                },
                "15": {
                    a: 0.83
                },
                "16": {
                    a: 0.81
                },
                "17": {
                    a: 0.8
                },
                "18": {
                    a: 0.78
                },
                "19": {
                    a: 0.77
                },
                "20": {
                    a: 0.75
                },
                "21": {
                    a: 0.73
                },
                "22": {
                    a: 0.72
                },
                "23": {
                    a: 0.7
                },
                "24": {
                    a: 0.69
                },
                "25": {
                    a: 0.67
                },
                "26": {
                    a: 0.66
                },
                "27": {
                    a: 0.64
                },
                "28": {
                    a: 0.63
                },
                "29": {
                    a: 0.61
                },
                "30": {
                    a: 0.6
                },
                "31": {
                    a: 0.58
                },
                "32": {
                    a: 0.57
                },
                "33": {
                    a: 0.55
                },
                "34": {
                    a: 0.54
                },
                "35": {
                    a: 0.52
                },
                "36": {
                    a: 0.5
                },
                "37": {
                    a: 0.49
                },
                "38": {
                    a: 0.47
                },
                "39": {
                    a: 0.46
                },
                "40": {
                    a: 0.44
                },
                "41": {
                    a: 0.43
                },
                "42": {
                    a: 0.41
                },
                "43": {
                    a: 0.39
                },
                "44": {
                    a: 0.38
                },
                "45": {
                    a: 0.36
                },
                "46": {
                    a: 0.35
                },
                "47": {
                    a: 0.33
                },
                "48": {
                    a: 0.32
                },
                "49": {
                    a: 0.3
                },
                "50": {
                    a: 0.29
                },
                "52": {
                    a: 0.28
                },
                "54": {
                    a: 0.27
                },
                "55": {
                    a: 0.26
                },
                "57": {
                    a: 0.25
                },
                "59": {
                    a: 0.24
                },
                "60": {
                    a: 0.23
                },
                "62": {
                    a: 0.22
                },
                "63": {
                    a: 0.21
                },
                "65": {
                    a: 0.2
                },
                "67": {
                    a: 0.19
                },
                "68": {
                    a: 0.18
                },
                "70": {
                    a: 0.17
                },
                "71": {
                    a: 0.16
                },
                "73": {
                    a: 0.15
                },
                "74": {
                    a: 0.14
                },
                "76": {
                    a: 0.13
                },
                "78": {
                    a: 0.12
                },
                "79": {
                    a: 0.11
                },
                "81": {
                    a: 0.1
                },
                "82": {
                    a: 0.09
                },
                "84": {
                    a: 0.08
                },
                "85": {
                    a: 0.07
                },
                "87": {
                    a: 0.06
                },
                "88": {
                    a: 0.05
                },
                "90": {
                    a: 0.04
                },
                "92": {
                    a: 0.03
                },
                "93": {
                    a: 0.02
                },
                "95": {
                    a: 0.01
                }
            })
            .addTimedChild(instance31, 97, 4);
    });

    lib.External.assets = {
        "External": "images/External.shapes.txt",
        "External_atlas_1": "images/External_atlas_1.json"
    };
})(PIXI, lib = lib || {});
var lib;
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        stage: lib.External,
        background: 0x252526,
        width: 1624,
        height: 750,
        framerate: 30,
        totalFrames: 101,
        library: lib
    };
}