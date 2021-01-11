(function (PIXI, lib) {

    var MovieClip = PIXI.animate.MovieClip;
    var Container = PIXI.Container;
    var Sprite = PIXI.Sprite;
    var fromFrame = PIXI.Texture.fromFrame;
    var Text = PIXI.Text;
    var Graphics = PIXI.Graphics;
    var shapes = PIXI.animate.ShapesCache;

    lib.press = MovieClip.extend(function () {
        MovieClip.call(this, {
            duration: 4
        });
        var instance1 = new Graphics()
            .drawCommands(shapes.External[0]);
        this.addTimedChild(instance1, 3, 1);
    });

    lib.bulb = Container.extend(function () {
        Container.call(this);
        var instance1 = new Graphics()
            .drawCommands(shapes.External[2]);
        this.addChild(instance1);
    });

    lib.jump = Container.extend(function () {
        Container.call(this);
        var instance3 = new lib.bulb();
        this[instance3.name = "thebulb"] = instance3;
        var instance2 = new Graphics()
            .drawCommands(shapes.External[1]);
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

    lib.txtTemperature = Container.extend(function () {
        Container.call(this);
        var instance2 = new Text("98.6")
            .setStyle({
                fontFamily: "Tahoma",
                fontSize: 12,
                fontWeight: "bold",
                leading: 2
            })
            .setAlign("right")
            .setTransform(43);
        this[instance2.name = "dFarenheit"] = instance2;
        var instance1 = new Text("37.0")
            .setStyle({
                fontFamily: "Tahoma",
                fontSize: 12,
                fontWeight: "bold",
                leading: 2
            })
            .setTransform(104, 2);
        this[instance1.name = "dCelcius"] = instance1;
        this.addChild(instance2, instance1);
    });

    lib.hitme = Container.extend(function () {
        Container.call(this);
        var instance1 = new Graphics()
            .drawCommands(shapes.External[4]);
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
        var instance2 = new Text("100% ")
            .setStyle({
                fontFamily: "Tahoma",
                fontSize: 14,
                fontWeight: "bold",
                leading: 2
            })
            .setAlign("right")
            .setTransform(47.3);
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

    lib.nub_circle = Container.extend(function () {
        Container.call(this);
        var instance1 = new Graphics()
            .drawCommands(shapes.External[6]);
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
            .drawCommands(shapes.External[5]);
        this.addChild(instance20, instance19, instance18, instance17, instance16, instance15, instance14, instance13, instance12, instance11, instance10, instance9, instance8, instance7, instance6, instance5, instance4, instance3, instance2, instance1);
    });

    lib.nub_only = Container.extend(function () {
        Container.call(this);
        var instance1 = new Graphics()
            .drawCommands(shapes.External[7]);
        this.addChild(instance1);
    });

    lib.ba_color = Container.extend(function () {
        Container.call(this);
        var instance1 = new Graphics()
            .drawCommands(shapes.External[9]);
        this.addChild(instance1);
    });

    lib.bandaid = Container.extend(function () {
        Container.call(this);
        var instance4 = new lib.ba_color()
            .setColorTransform(0, 0.8, 0, 0.8, 0, 0.8);
        this[instance4.name = "bacolor"] = instance4;
        var instance3 = new Graphics()
            .drawCommands(shapes.External[8]);
        var instance2 = new lib.nub_only()
            .setTransform(0, 91.85);
        this[instance2.name = "nub"] = instance2;
        var instance1 = new lib.nub_circles()
            .setTransform(-1.1, 91.1);
        this[instance1.name = "circles"] = instance1;
        this.addChild(instance4, instance3, instance2, instance1);
    });

    lib.External = MovieClip.extend(function () {
        MovieClip.call(this, {
            duration: 75,
            framerate: 30,
            labels: {
                default: 0,
                healthyToSick: 4,
                sickToSickInBed: 39
            }
        });
        var instance15 = new Graphics()
            .drawCommands(shapes.External[10]);
        var instance14 = new lib.bandaid()
            .setTransform(647.6, 214.95);
        this[instance14.name = "bandaid"] = instance14;
        var instance13 = new lib.txtHealth()
            .setTransform(450, 183.95)
            .setColorTransform(0, 0.82, 0, 0.57, 0, 0.08);
        this[instance13.name = "Health"] = instance13;
        var instance12 = new lib.txtProtection()
            .setTransform(606.2, 183.95)
            .setColorTransform(0, 0.82, 0, 0.57, 0, 0.08);
        this[instance12.name = "Protection"] = instance12;
        var instance11 = new Text("(after the shot)...")
            .setStyle({
                fontFamily: "Tahoma",
                fontSize: 12,
                fontWeight: "bold",
                fill: "#4e6040",
                leading: 2,
                wordWrap: true,
                wordWrapWidth: 248.55
            })
            .setTransform(793.25, 326.05);
        this[instance11.name = "dDescription"] = instance11;
        var instance10 = new Text("Next Act...")
            .setStyle({
                fontFamily: "Tahoma",
                fontSize: 12,
                fontWeight: "bold",
                fill: "#d09214",
                leading: 2
            })
            .setTransform(766.2, 521.65);
        var instance9 = new lib.gray_kid2();
        this[instance9.name = "patient"] = instance9;
        var instance8 = new Graphics()
            .drawCommands(shapes.External[3]);
        var instance7 = new Text("°F ")
            .setStyle({
                fontFamily: "Tahoma",
                fontSize: 12,
                fontWeight: "bold",
                fill: "#4e6040",
                leading: 2
            })
            .setTransform(431.7, 270.25);
        var instance6 = new Text("°C")
            .setStyle({
                fontFamily: "Tahoma",
                fontSize: 12,
                fontWeight: "bold",
                fill: "#4e6040",
                leading: 2
            })
            .setAlign("right")
            .setTransform(526.7, 270.05);
        var instance5 = new lib.txtTemperature()
            .setTransform(407.05, 379.1)
            .setColorTransform(0, 0.31, 0, 0.38, 0, 0.25);
        this[instance5.name = "dTempFC"] = instance5;
        var instance4 = new lib.jump()
            .setTransform(764.2, 544.45);
        this[instance4.name = "btnMoveOn"] = instance4;
        var instance3 = new lib.jump()
            .setTransform(930.6, 544.55);
        this[instance3.name = "btnBack"] = instance3;
        var instance2 = new lib.press()
            .setTransform(931.6, 544.65);
        this[instance2.name = "btnBack"] = instance2;
        var instance1 = new lib.press()
            .setTransform(764.2, 544.65);
        this[instance1.name = "btnAhead"] = instance1;
        this.addTimedChild(instance15)
            .addTimedChild(instance14)
            .addTimedChild(instance13)
            .addTimedChild(instance12)
            .addTimedChild(instance11)
            .addTimedChild(instance10)
            .addTimedChild(instance9, 0, 75, {
                "0": {
                    x: 427.7,
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
                        0.03,
                        0,
                        0.87,
                        0,
                        0
                    ]
                },
                "6": {
                    c: [
                        0,
                        0.06,
                        0,
                        0.87,
                        0,
                        0
                    ]
                },
                "7": {
                    c: [
                        0,
                        0.09,
                        0,
                        0.87,
                        0,
                        0
                    ]
                },
                "8": {
                    c: [
                        0,
                        0.11,
                        0,
                        0.87,
                        0,
                        0
                    ]
                },
                "9": {
                    c: [
                        0,
                        0.14,
                        0,
                        0.87,
                        0,
                        0
                    ]
                },
                "10": {
                    c: [
                        0,
                        0.17,
                        0,
                        0.87,
                        0,
                        0
                    ]
                },
                "11": {
                    c: [
                        0,
                        0.2,
                        0,
                        0.88,
                        0,
                        0
                    ]
                },
                "12": {
                    c: [
                        0,
                        0.23,
                        0,
                        0.88,
                        0,
                        0
                    ]
                },
                "13": {
                    c: [
                        0,
                        0.26,
                        0,
                        0.88,
                        0,
                        0
                    ]
                },
                "14": {
                    c: [
                        0,
                        0.29,
                        0,
                        0.88,
                        0,
                        0
                    ]
                },
                "15": {
                    c: [
                        0,
                        0.31,
                        0,
                        0.88,
                        0,
                        0
                    ]
                },
                "16": {
                    c: [
                        0,
                        0.34,
                        0,
                        0.88,
                        0,
                        0
                    ]
                },
                "17": {
                    c: [
                        0,
                        0.37,
                        0,
                        0.89,
                        0,
                        0
                    ]
                },
                "18": {
                    c: [
                        0,
                        0.4,
                        0,
                        0.89,
                        0,
                        0
                    ]
                },
                "19": {
                    c: [
                        0,
                        0.43,
                        0,
                        0.89,
                        0,
                        0
                    ]
                },
                "20": {
                    c: [
                        0,
                        0.46,
                        0,
                        0.89,
                        0,
                        0
                    ]
                },
                "21": {
                    c: [
                        0,
                        0.49,
                        0,
                        0.89,
                        0,
                        0
                    ]
                },
                "22": {
                    c: [
                        0,
                        0.51,
                        0,
                        0.89,
                        0,
                        0
                    ]
                },
                "23": {
                    c: [
                        0,
                        0.54,
                        0,
                        0.89,
                        0,
                        0
                    ]
                },
                "24": {
                    c: [
                        0,
                        0.57,
                        0,
                        0.89,
                        0,
                        0
                    ]
                },
                "25": {
                    c: [
                        0,
                        0.6,
                        0,
                        0.9,
                        0,
                        0
                    ]
                },
                "26": {
                    c: [
                        0,
                        0.63,
                        0,
                        0.9,
                        0,
                        0
                    ]
                },
                "27": {
                    c: [
                        0,
                        0.66,
                        0,
                        0.9,
                        0,
                        0
                    ]
                },
                "28": {
                    c: [
                        0,
                        0.69,
                        0,
                        0.9,
                        0,
                        0
                    ]
                },
                "29": {
                    c: [
                        0,
                        0.71,
                        0,
                        0.9,
                        0,
                        0
                    ]
                },
                "30": {
                    c: [
                        0,
                        0.74,
                        0,
                        0.91,
                        0,
                        0
                    ]
                },
                "31": {
                    c: [
                        0,
                        0.77,
                        0,
                        0.91,
                        0,
                        0
                    ]
                },
                "32": {
                    c: [
                        0,
                        0.8,
                        0,
                        0.91,
                        0,
                        0
                    ]
                },
                "33": {
                    c: [
                        0,
                        0.83,
                        0,
                        0.91,
                        0,
                        0
                    ]
                },
                "34": {
                    c: [
                        0,
                        0.86,
                        0,
                        0.91,
                        0,
                        0
                    ]
                },
                "35": {
                    c: [
                        0,
                        0.89,
                        0,
                        0.91,
                        0,
                        0
                    ]
                },
                "36": {
                    c: [
                        0,
                        0.91,
                        0,
                        0.91,
                        0,
                        0
                    ]
                },
                "37": {
                    c: [
                        0,
                        0.94,
                        0,
                        0.91,
                        0,
                        0
                    ]
                },
                "38": {
                    c: [
                        0,
                        0.97,
                        0,
                        0.92,
                        0,
                        0
                    ]
                },
                "39": {
                    c: [
                        0,
                        1,
                        0,
                        0.92,
                        0,
                        0
                    ]
                },
                "40": {
                    c: [
                        0,
                        1,
                        0,
                        0.89,
                        0,
                        0
                    ]
                },
                "41": {
                    c: [
                        0,
                        0.99,
                        0,
                        0.87,
                        0,
                        0
                    ]
                },
                "42": {
                    c: [
                        0,
                        0.99,
                        0,
                        0.84,
                        0,
                        0
                    ]
                },
                "43": {
                    c: [
                        0,
                        0.98,
                        0,
                        0.81,
                        0,
                        0
                    ]
                },
                "44": {
                    c: [
                        0,
                        0.98,
                        0,
                        0.79,
                        0,
                        0
                    ]
                },
                "45": {
                    c: [
                        0,
                        0.98,
                        0,
                        0.76,
                        0,
                        0
                    ]
                },
                "46": {
                    c: [
                        0,
                        0.98,
                        0,
                        0.73,
                        0,
                        0
                    ]
                },
                "47": {
                    c: [
                        0,
                        0.97,
                        0,
                        0.71,
                        0,
                        0
                    ]
                },
                "48": {
                    c: [
                        0,
                        0.97,
                        0,
                        0.68,
                        0,
                        0
                    ]
                },
                "49": {
                    c: [
                        0,
                        0.96,
                        0,
                        0.65,
                        0,
                        0
                    ]
                },
                "50": {
                    c: [
                        0,
                        0.96,
                        0,
                        0.63,
                        0,
                        0
                    ]
                },
                "51": {
                    c: [
                        0,
                        0.96,
                        0,
                        0.6,
                        0,
                        0
                    ]
                },
                "52": {
                    c: [
                        0,
                        0.95,
                        0,
                        0.58,
                        0,
                        0
                    ]
                },
                "53": {
                    c: [
                        0,
                        0.95,
                        0,
                        0.55,
                        0,
                        0
                    ]
                },
                "54": {
                    c: [
                        0,
                        0.95,
                        0,
                        0.53,
                        0,
                        0
                    ]
                },
                "55": {
                    c: [
                        0,
                        0.94,
                        0,
                        0.5,
                        0,
                        0
                    ]
                },
                "56": {
                    c: [
                        0,
                        0.94,
                        0,
                        0.47,
                        0,
                        0
                    ]
                },
                "57": {
                    c: [
                        0,
                        0.94,
                        0,
                        0.45,
                        0,
                        0
                    ]
                },
                "58": {
                    c: [
                        0,
                        0.93,
                        0,
                        0.42,
                        0,
                        0
                    ]
                },
                "59": {
                    c: [
                        0,
                        0.93,
                        0,
                        0.39,
                        0,
                        0
                    ]
                },
                "60": {
                    c: [
                        0,
                        0.93,
                        0,
                        0.37,
                        0,
                        0
                    ]
                },
                "61": {
                    c: [
                        0,
                        0.92,
                        0,
                        0.34,
                        0,
                        0
                    ]
                },
                "62": {
                    c: [
                        0,
                        0.92,
                        0,
                        0.31,
                        0,
                        0
                    ]
                },
                "63": {
                    c: [
                        0,
                        0.91,
                        0,
                        0.29,
                        0,
                        0
                    ]
                },
                "64": {
                    c: [
                        0,
                        0.91,
                        0,
                        0.26,
                        0,
                        0
                    ]
                },
                "65": {
                    c: [
                        0,
                        0.91,
                        0,
                        0.24,
                        0,
                        0
                    ]
                },
                "66": {
                    c: [
                        0,
                        0.9,
                        0,
                        0.21,
                        0,
                        0
                    ]
                },
                "67": {
                    c: [
                        0,
                        0.9,
                        0,
                        0.18,
                        0,
                        0
                    ]
                },
                "68": {
                    c: [
                        0,
                        0.89,
                        0,
                        0.16,
                        0,
                        0
                    ]
                },
                "69": {
                    c: [
                        0,
                        0.89,
                        0,
                        0.13,
                        0,
                        0
                    ]
                },
                "70": {
                    c: [
                        0,
                        0.89,
                        0,
                        0.11,
                        0,
                        0
                    ]
                },
                "71": {
                    c: [
                        0,
                        0.89,
                        0,
                        0.08,
                        0,
                        0
                    ]
                },
                "72": {
                    c: [
                        0,
                        0.88,
                        0,
                        0.05,
                        0,
                        0
                    ]
                },
                "73": {
                    c: [
                        0,
                        0.88,
                        0,
                        0.03,
                        0,
                        0
                    ]
                },
                "74": {
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
            .addTimedChild(instance8)
            .addTimedChild(instance7)
            .addTimedChild(instance6)
            .addTimedChild(instance5)
            .addTimedChild(instance4)
            .addTimedChild(instance3)
            .addTimedChild(instance2)
            .addTimedChild(instance1);
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
        totalFrames: 75,
        library: lib
    };
}