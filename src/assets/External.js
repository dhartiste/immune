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
            .drawCommands(shapes.External[1]);
        this.addTimedChild(instance1, 3, 1);
    });

    lib.bulb = Container.extend(function () {
        Container.call(this);
        var instance1 = new Graphics()
            .drawCommands(shapes.External[3]);
        this.addChild(instance1);
    });

    lib.jump = Container.extend(function () {
        Container.call(this);
        var instance3 = new lib.bulb();
        this[instance3.name = "thebulb"] = instance3;
        var instance2 = new Graphics()
            .drawCommands(shapes.External[2]);
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

    lib.dCelcius = Container.extend(function () {
        Container.call(this);
        var instance1 = new Text("40")
            .setStyle({
                fontFamily: "Tahoma",
                fontSize: 12,
                fontWeight: "bold",
                leading: 2
            })
            .setTransform(2, 2);
        this[instance1.name = "dCelcius"] = instance1;
        this.addChild(instance1);
    });

    lib.dFarenheit = Container.extend(function () {
        Container.call(this);
        var instance1 = new Text("99")
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

    lib.dTemp = Container.extend(function () {
        Container.call(this);
        var instance2 = new Text("101")
            .setStyle({
                fontFamily: "Tahoma",
                fontSize: 12,
                fontWeight: "bold",
                leading: 2
            })
            .setAlign("right")
            .setTransform(55);
        this[instance2.name = "dFarenheit"] = instance2;
        var instance1 = new Text("38.5")
            .setStyle({
                fontFamily: "Tahoma",
                fontSize: 12,
                fontWeight: "bold",
                leading: 2
            })
            .setTransform(116, 2);
        this[instance1.name = "dCelcius"] = instance1;
        this.addChild(instance2, instance1);
    });

    lib.txtTemperature = MovieClip.extend(function () {
        MovieClip.call(this, {
            duration: 102,
            labels: {
                default: 0,
                healthyToSick: 4,
                healthyToSick_stop: 49,
                sickToBed: 54,
                sickToBed_stop: 101
            }
        });
        var instance2 = new lib.dFarenheit();
        this[instance2.name = "dFarenheit"] = instance2;
        var instance1 = new lib.dCelcius();
        this[instance1.name = "dCelcius"] = instance1;
        var instance4 = new Text("99")
            .setStyle({
                fontFamily: "Tahoma",
                fontSize: 12,
                fontWeight: "bold",
                leading: 2
            })
            .setAlign("right");
        this[instance4.name = "dFarenheit"] = instance4;
        var instance3 = new Text("37.1")
            .setStyle({
                fontFamily: "Tahoma",
                fontSize: 12,
                fontWeight: "bold",
                leading: 2
            });
        this[instance3.name = "dCelcius"] = instance3;
        var instance6 = new Text("99")
            .setStyle({
                fontFamily: "Tahoma",
                fontSize: 12,
                fontWeight: "bold",
                leading: 2
            })
            .setAlign("right");
        this[instance6.name = "dFarenheit"] = instance6;
        var instance5 = new Text("37.2")
            .setStyle({
                fontFamily: "Tahoma",
                fontSize: 12,
                fontWeight: "bold",
                leading: 2
            });
        this[instance5.name = "dCelcius"] = instance5;
        var instance8 = new Text("99")
            .setStyle({
                fontFamily: "Tahoma",
                fontSize: 12,
                fontWeight: "bold",
                leading: 2
            })
            .setAlign("right");
        this[instance8.name = "dFarenheit"] = instance8;
        var instance7 = new Text("37.3")
            .setStyle({
                fontFamily: "Tahoma",
                fontSize: 12,
                fontWeight: "bold",
                leading: 2
            });
        this[instance7.name = "dCelcius"] = instance7;
        var instance10 = new Text("99")
            .setStyle({
                fontFamily: "Tahoma",
                fontSize: 12,
                fontWeight: "bold",
                leading: 2
            })
            .setAlign("right");
        this[instance10.name = "dFarenheit"] = instance10;
        var instance9 = new Text("37.4")
            .setStyle({
                fontFamily: "Tahoma",
                fontSize: 12,
                fontWeight: "bold",
                leading: 2
            });
        this[instance9.name = "dCelcius"] = instance9;
        var instance12 = new Text("99")
            .setStyle({
                fontFamily: "Tahoma",
                fontSize: 12,
                fontWeight: "bold",
                leading: 2
            })
            .setAlign("right");
        this[instance12.name = "dFarenheit"] = instance12;
        var instance11 = new Text("37.5")
            .setStyle({
                fontFamily: "Tahoma",
                fontSize: 12,
                fontWeight: "bold",
                leading: 2
            });
        this[instance11.name = "dCelcius"] = instance11;
        var instance14 = new Text("100")
            .setStyle({
                fontFamily: "Tahoma",
                fontSize: 12,
                fontWeight: "bold",
                leading: 2
            })
            .setAlign("right");
        this[instance14.name = "dFarenheit"] = instance14;
        var instance13 = new Text("37.6")
            .setStyle({
                fontFamily: "Tahoma",
                fontSize: 12,
                fontWeight: "bold",
                leading: 2
            });
        this[instance13.name = "dCelcius"] = instance13;
        var instance16 = new Text("100")
            .setStyle({
                fontFamily: "Tahoma",
                fontSize: 12,
                fontWeight: "bold",
                leading: 2
            })
            .setAlign("right");
        this[instance16.name = "dFarenheit"] = instance16;
        var instance15 = new Text("37.7")
            .setStyle({
                fontFamily: "Tahoma",
                fontSize: 12,
                fontWeight: "bold",
                leading: 2
            });
        this[instance15.name = "dCelcius"] = instance15;
        var instance18 = new Text("100")
            .setStyle({
                fontFamily: "Tahoma",
                fontSize: 12,
                fontWeight: "bold",
                leading: 2
            })
            .setAlign("right");
        this[instance18.name = "dFarenheit"] = instance18;
        var instance17 = new Text("37.8")
            .setStyle({
                fontFamily: "Tahoma",
                fontSize: 12,
                fontWeight: "bold",
                leading: 2
            });
        this[instance17.name = "dCelcius"] = instance17;
        var instance20 = new Text("100")
            .setStyle({
                fontFamily: "Tahoma",
                fontSize: 12,
                fontWeight: "bold",
                leading: 2
            })
            .setAlign("right");
        this[instance20.name = "dFarenheit"] = instance20;
        var instance19 = new Text("37.9")
            .setStyle({
                fontFamily: "Tahoma",
                fontSize: 12,
                fontWeight: "bold",
                leading: 2
            });
        this[instance19.name = "dCelcius"] = instance19;
        var instance22 = new Text("100")
            .setStyle({
                fontFamily: "Tahoma",
                fontSize: 12,
                fontWeight: "bold",
                leading: 2
            })
            .setAlign("right");
        this[instance22.name = "dFarenheit"] = instance22;
        var instance21 = new Text("38.0")
            .setStyle({
                fontFamily: "Tahoma",
                fontSize: 12,
                fontWeight: "bold",
                leading: 2
            });
        this[instance21.name = "dCelcius"] = instance21;
        var instance24 = new Text("101")
            .setStyle({
                fontFamily: "Tahoma",
                fontSize: 12,
                fontWeight: "bold",
                leading: 2
            })
            .setAlign("right");
        this[instance24.name = "dFarenheit"] = instance24;
        var instance23 = new Text("38.1")
            .setStyle({
                fontFamily: "Tahoma",
                fontSize: 12,
                fontWeight: "bold",
                leading: 2
            });
        this[instance23.name = "dCelcius"] = instance23;
        var instance26 = new Text("101")
            .setStyle({
                fontFamily: "Tahoma",
                fontSize: 12,
                fontWeight: "bold",
                leading: 2
            })
            .setAlign("right");
        this[instance26.name = "dFarenheit"] = instance26;
        var instance25 = new Text("38.2")
            .setStyle({
                fontFamily: "Tahoma",
                fontSize: 12,
                fontWeight: "bold",
                leading: 2
            });
        this[instance25.name = "dCelcius"] = instance25;
        var instance28 = new Text("101")
            .setStyle({
                fontFamily: "Tahoma",
                fontSize: 12,
                fontWeight: "bold",
                leading: 2
            })
            .setAlign("right");
        this[instance28.name = "dFarenheit"] = instance28;
        var instance27 = new Text("38.3")
            .setStyle({
                fontFamily: "Tahoma",
                fontSize: 12,
                fontWeight: "bold",
                leading: 2
            });
        this[instance27.name = "dCelcius"] = instance27;
        var instance30 = new Text("101")
            .setStyle({
                fontFamily: "Tahoma",
                fontSize: 12,
                fontWeight: "bold",
                leading: 2
            })
            .setAlign("right");
        this[instance30.name = "dFarenheit"] = instance30;
        var instance29 = new Text("38.4")
            .setStyle({
                fontFamily: "Tahoma",
                fontSize: 12,
                fontWeight: "bold",
                leading: 2
            });
        this[instance29.name = "dCelcius"] = instance29;
        var instance32 = new Text("101")
            .setStyle({
                fontFamily: "Tahoma",
                fontSize: 12,
                fontWeight: "bold",
                leading: 2
            })
            .setAlign("right");
        this[instance32.name = "dFarenheit"] = instance32;
        var instance31 = new Text("38.5")
            .setStyle({
                fontFamily: "Tahoma",
                fontSize: 12,
                fontWeight: "bold",
                leading: 2
            });
        this[instance31.name = "dCelcius"] = instance31;
        var instance33 = new lib.dTemp();
        this[instance33.name = "dTemperature"] = instance33;
        var instance35 = new Text("101")
            .setStyle({
                fontFamily: "Tahoma",
                fontSize: 12,
                fontWeight: "bold",
                leading: 2
            })
            .setAlign("right");
        this[instance35.name = "dFarenheit"] = instance35;
        var instance34 = new Text("38.5")
            .setStyle({
                fontFamily: "Tahoma",
                fontSize: 12,
                fontWeight: "bold",
                leading: 2
            });
        this[instance34.name = "dCelcius"] = instance34;
        var instance37 = new Text("101")
            .setStyle({
                fontFamily: "Tahoma",
                fontSize: 12,
                fontWeight: "bold",
                leading: 2
            })
            .setAlign("right");
        this[instance37.name = "dFarenheit"] = instance37;
        var instance36 = new Text("38.6")
            .setStyle({
                fontFamily: "Tahoma",
                fontSize: 12,
                fontWeight: "bold",
                leading: 2
            });
        this[instance36.name = "dCelcius"] = instance36;
        var instance39 = new Text("101")
            .setStyle({
                fontFamily: "Tahoma",
                fontSize: 12,
                fontWeight: "bold",
                leading: 2
            })
            .setAlign("right");
        this[instance39.name = "dFarenheit"] = instance39;
        var instance38 = new Text("38.7")
            .setStyle({
                fontFamily: "Tahoma",
                fontSize: 12,
                fontWeight: "bold",
                leading: 2
            });
        this[instance38.name = "dCelcius"] = instance38;
        var instance41 = new Text("101")
            .setStyle({
                fontFamily: "Tahoma",
                fontSize: 12,
                fontWeight: "bold",
                leading: 2
            })
            .setAlign("right");
        this[instance41.name = "dFarenheit"] = instance41;
        var instance40 = new Text("38.8")
            .setStyle({
                fontFamily: "Tahoma",
                fontSize: 12,
                fontWeight: "bold",
                leading: 2
            });
        this[instance40.name = "dCelcius"] = instance40;
        var instance43 = new Text("101")
            .setStyle({
                fontFamily: "Tahoma",
                fontSize: 12,
                fontWeight: "bold",
                leading: 2
            })
            .setAlign("right");
        this[instance43.name = "dFarenheit"] = instance43;
        var instance42 = new Text("38.9")
            .setStyle({
                fontFamily: "Tahoma",
                fontSize: 12,
                fontWeight: "bold",
                leading: 2
            });
        this[instance42.name = "dCelcius"] = instance42;
        var instance45 = new Text("101")
            .setStyle({
                fontFamily: "Tahoma",
                fontSize: 12,
                fontWeight: "bold",
                leading: 2
            })
            .setAlign("right");
        this[instance45.name = "dFarenheit"] = instance45;
        var instance44 = new Text("39.0")
            .setStyle({
                fontFamily: "Tahoma",
                fontSize: 12,
                fontWeight: "bold",
                leading: 2
            });
        this[instance44.name = "dCelcius"] = instance44;
        var instance47 = new Text("102")
            .setStyle({
                fontFamily: "Tahoma",
                fontSize: 12,
                fontWeight: "bold",
                leading: 2
            })
            .setAlign("right");
        this[instance47.name = "dFarenheit"] = instance47;
        var instance46 = new Text("39.1")
            .setStyle({
                fontFamily: "Tahoma",
                fontSize: 12,
                fontWeight: "bold",
                leading: 2
            });
        this[instance46.name = "dCelcius"] = instance46;
        var instance49 = new Text("102")
            .setStyle({
                fontFamily: "Tahoma",
                fontSize: 12,
                fontWeight: "bold",
                leading: 2
            })
            .setAlign("right");
        this[instance49.name = "dFarenheit"] = instance49;
        var instance48 = new Text("39.2")
            .setStyle({
                fontFamily: "Tahoma",
                fontSize: 12,
                fontWeight: "bold",
                leading: 2
            });
        this[instance48.name = "dCelcius"] = instance48;
        var instance51 = new Text("102")
            .setStyle({
                fontFamily: "Tahoma",
                fontSize: 12,
                fontWeight: "bold",
                leading: 2
            })
            .setAlign("right");
        this[instance51.name = "dFarenheit"] = instance51;
        var instance50 = new Text("39.3")
            .setStyle({
                fontFamily: "Tahoma",
                fontSize: 12,
                fontWeight: "bold",
                leading: 2
            });
        this[instance50.name = "dCelcius"] = instance50;
        var instance53 = new Text("102")
            .setStyle({
                fontFamily: "Tahoma",
                fontSize: 12,
                fontWeight: "bold",
                leading: 2
            })
            .setAlign("right");
        this[instance53.name = "dFarenheit"] = instance53;
        var instance52 = new Text("39.4")
            .setStyle({
                fontFamily: "Tahoma",
                fontSize: 12,
                fontWeight: "bold",
                leading: 2
            });
        this[instance52.name = "dCelcius"] = instance52;
        var instance55 = new Text("102")
            .setStyle({
                fontFamily: "Tahoma",
                fontSize: 12,
                fontWeight: "bold",
                leading: 2
            })
            .setAlign("right");
        this[instance55.name = "dFarenheit"] = instance55;
        var instance54 = new Text("39.5")
            .setStyle({
                fontFamily: "Tahoma",
                fontSize: 12,
                fontWeight: "bold",
                leading: 2
            });
        this[instance54.name = "dCelcius"] = instance54;
        var instance57 = new Text("103")
            .setStyle({
                fontFamily: "Tahoma",
                fontSize: 12,
                fontWeight: "bold",
                leading: 2
            })
            .setAlign("right");
        this[instance57.name = "dFarenheit"] = instance57;
        var instance56 = new Text("39.6")
            .setStyle({
                fontFamily: "Tahoma",
                fontSize: 12,
                fontWeight: "bold",
                leading: 2
            });
        this[instance56.name = "dCelcius"] = instance56;
        var instance59 = new Text("103")
            .setStyle({
                fontFamily: "Tahoma",
                fontSize: 12,
                fontWeight: "bold",
                leading: 2
            })
            .setAlign("right");
        this[instance59.name = "dFarenheit"] = instance59;
        var instance58 = new Text("39.6")
            .setStyle({
                fontFamily: "Tahoma",
                fontSize: 12,
                fontWeight: "bold",
                leading: 2
            });
        this[instance58.name = "dCelcius"] = instance58;
        var instance61 = new Text("103")
            .setStyle({
                fontFamily: "Tahoma",
                fontSize: 12,
                fontWeight: "bold",
                leading: 2
            })
            .setAlign("right");
        this[instance61.name = "dFarenheit"] = instance61;
        var instance60 = new Text("39.7")
            .setStyle({
                fontFamily: "Tahoma",
                fontSize: 12,
                fontWeight: "bold",
                leading: 2
            });
        this[instance60.name = "dCelcius"] = instance60;
        var instance63 = new Text("103")
            .setStyle({
                fontFamily: "Tahoma",
                fontSize: 12,
                fontWeight: "bold",
                leading: 2
            })
            .setAlign("right");
        this[instance63.name = "dFarenheit"] = instance63;
        var instance62 = new Text("39.8")
            .setStyle({
                fontFamily: "Tahoma",
                fontSize: 12,
                fontWeight: "bold",
                leading: 2
            });
        this[instance62.name = "dCelcius"] = instance62;
        var instance65 = new Text("103")
            .setStyle({
                fontFamily: "Tahoma",
                fontSize: 12,
                fontWeight: "bold",
                leading: 2
            })
            .setAlign("right");
        this[instance65.name = "dFarenheit"] = instance65;
        var instance64 = new Text("39.9")
            .setStyle({
                fontFamily: "Tahoma",
                fontSize: 12,
                fontWeight: "bold",
                leading: 2
            });
        this[instance64.name = "dCelcius"] = instance64;
        var instance67 = new Text("104")
            .setStyle({
                fontFamily: "Tahoma",
                fontSize: 12,
                fontWeight: "bold",
                leading: 2
            })
            .setAlign("right");
        this[instance67.name = "dFarenheit"] = instance67;
        var instance66 = new Text("40")
            .setStyle({
                fontFamily: "Tahoma",
                fontSize: 12,
                fontWeight: "bold",
                leading: 2
            });
        this[instance66.name = "dCelcius"] = instance66;
        var instance69 = new Text("104")
            .setStyle({
                fontFamily: "Tahoma",
                fontSize: 12,
                fontWeight: "bold",
                leading: 2
            })
            .setAlign("right")
            .setTransform(43);
        this[instance69.name = "dFarenheit"] = instance69;
        var instance68 = new Text("40")
            .setStyle({
                fontFamily: "Tahoma",
                fontSize: 12,
                fontWeight: "bold",
                leading: 2
            })
            .setTransform(104, 2);
        this[instance68.name = "dCelcius"] = instance68;
        this.addTimedChild(instance2, 0, 4, {
                "0": {
                    x: -12
                }
            })
            .addTimedChild(instance1, 0, 4, {
                "0": {
                    x: 102
                }
            })
            .addTimedChild(instance4, 4, 3, {
                "4": {
                    x: -10,
                    y: 2
                }
            })
            .addTimedChild(instance3, 4, 3, {
                "4": {
                    x: 104,
                    y: 2
                }
            })
            .addTimedChild(instance6, 7, 3, {
                "7": {
                    x: -10,
                    y: 2
                }
            })
            .addTimedChild(instance5, 7, 3, {
                "7": {
                    x: 104,
                    y: 2
                }
            })
            .addTimedChild(instance8, 10, 3, {
                "10": {
                    x: -10,
                    y: 2
                }
            })
            .addTimedChild(instance7, 10, 3, {
                "10": {
                    x: 104,
                    y: 2
                }
            })
            .addTimedChild(instance10, 13, 3, {
                "13": {
                    x: -9,
                    y: 2
                }
            })
            .addTimedChild(instance9, 13, 3, {
                "13": {
                    x: 105,
                    y: 2
                }
            })
            .addTimedChild(instance12, 16, 3, {
                "16": {
                    x: -10,
                    y: 2
                }
            })
            .addTimedChild(instance11, 16, 3, {
                "16": {
                    x: 104,
                    y: 2
                }
            })
            .addTimedChild(instance14, 19, 3, {
                "19": {
                    x: -10,
                    y: 2
                }
            })
            .addTimedChild(instance13, 19, 3, {
                "19": {
                    x: 104,
                    y: 2
                }
            })
            .addTimedChild(instance16, 22, 3, {
                "22": {
                    x: -10,
                    y: 2
                }
            })
            .addTimedChild(instance15, 22, 3, {
                "22": {
                    x: 104,
                    y: 2
                }
            })
            .addTimedChild(instance18, 25, 3, {
                "25": {
                    x: -10,
                    y: 2
                }
            })
            .addTimedChild(instance17, 25, 3, {
                "25": {
                    x: 104,
                    y: 2
                }
            })
            .addTimedChild(instance20, 28, 3, {
                "28": {
                    x: -10,
                    y: 2
                }
            })
            .addTimedChild(instance19, 28, 3, {
                "28": {
                    x: 104,
                    y: 2
                }
            })
            .addTimedChild(instance22, 31, 3, {
                "31": {
                    x: -10,
                    y: 2
                }
            })
            .addTimedChild(instance21, 31, 3, {
                "31": {
                    x: 104,
                    y: 2
                }
            })
            .addTimedChild(instance24, 34, 3, {
                "34": {
                    x: -10,
                    y: 2
                }
            })
            .addTimedChild(instance23, 34, 3, {
                "34": {
                    x: 104,
                    y: 2
                }
            })
            .addTimedChild(instance26, 37, 3, {
                "37": {
                    x: -10,
                    y: 2
                }
            })
            .addTimedChild(instance25, 37, 3, {
                "37": {
                    x: 104,
                    y: 2
                }
            })
            .addTimedChild(instance28, 40, 3, {
                "40": {
                    x: -10,
                    y: 2
                }
            })
            .addTimedChild(instance27, 40, 3, {
                "40": {
                    x: 104,
                    y: 2
                }
            })
            .addTimedChild(instance30, 43, 3, {
                "43": {
                    x: -10,
                    y: 2
                }
            })
            .addTimedChild(instance29, 43, 3, {
                "43": {
                    x: 104,
                    y: 2
                }
            })
            .addTimedChild(instance32, 46, 8, {
                "46": {
                    x: -10,
                    y: 2
                }
            })
            .addTimedChild(instance31, 46, 8, {
                "46": {
                    x: 104,
                    y: 2
                }
            })
            .addTimedChild(instance33, 54, 1, {
                "54": {
                    x: -12
                }
            })
            .addTimedChild(instance35, 55, 3, {
                "55": {
                    x: -10,
                    y: 2
                }
            })
            .addTimedChild(instance34, 55, 3, {
                "55": {
                    x: 104,
                    y: 2
                }
            })
            .addTimedChild(instance37, 58, 3, {
                "58": {
                    x: -10,
                    y: 2
                }
            })
            .addTimedChild(instance36, 58, 3, {
                "58": {
                    x: 104,
                    y: 2
                }
            })
            .addTimedChild(instance39, 61, 2, {
                "61": {
                    x: -10,
                    y: 2
                }
            })
            .addTimedChild(instance38, 61, 2, {
                "61": {
                    x: 104,
                    y: 2
                }
            })
            .addTimedChild(instance41, 63, 3, {
                "63": {
                    x: -10,
                    y: 2
                }
            })
            .addTimedChild(instance40, 63, 3, {
                "63": {
                    x: 104,
                    y: 2
                }
            })
            .addTimedChild(instance43, 66, 3, {
                "66": {
                    x: -10,
                    y: 2
                }
            })
            .addTimedChild(instance42, 66, 3, {
                "66": {
                    x: 104,
                    y: 2
                }
            })
            .addTimedChild(instance45, 69, 3, {
                "69": {
                    x: -10,
                    y: 2
                }
            })
            .addTimedChild(instance44, 69, 3, {
                "69": {
                    x: 104,
                    y: 2
                }
            })
            .addTimedChild(instance47, 72, 3, {
                "72": {
                    x: -10,
                    y: 2
                }
            })
            .addTimedChild(instance46, 72, 3, {
                "72": {
                    x: 104,
                    y: 2
                }
            })
            .addTimedChild(instance49, 75, 3, {
                "75": {
                    x: -10,
                    y: 2
                }
            })
            .addTimedChild(instance48, 75, 3, {
                "75": {
                    x: 104,
                    y: 2
                }
            })
            .addTimedChild(instance51, 78, 3, {
                "78": {
                    x: -10,
                    y: 2
                }
            })
            .addTimedChild(instance50, 78, 3, {
                "78": {
                    x: 104,
                    y: 2
                }
            })
            .addTimedChild(instance53, 81, 2, {
                "81": {
                    x: -10,
                    y: 2
                }
            })
            .addTimedChild(instance52, 81, 2, {
                "81": {
                    x: 104,
                    y: 2
                }
            })
            .addTimedChild(instance55, 83, 3, {
                "83": {
                    x: -10,
                    y: 2
                }
            })
            .addTimedChild(instance54, 83, 3, {
                "83": {
                    x: 104,
                    y: 2
                }
            })
            .addTimedChild(instance57, 86, 2, {
                "86": {
                    x: -10,
                    y: 2
                }
            })
            .addTimedChild(instance56, 86, 2, {
                "86": {
                    x: 104,
                    y: 2
                }
            })
            .addTimedChild(instance59, 88, 3, {
                "88": {
                    x: -10,
                    y: 2
                }
            })
            .addTimedChild(instance58, 88, 3, {
                "88": {
                    x: 104,
                    y: 2
                }
            })
            .addTimedChild(instance61, 91, 3, {
                "91": {
                    x: -10,
                    y: 2
                }
            })
            .addTimedChild(instance60, 91, 3, {
                "91": {
                    x: 104,
                    y: 2
                }
            })
            .addTimedChild(instance63, 94, 3, {
                "94": {
                    x: -10,
                    y: 2
                }
            })
            .addTimedChild(instance62, 94, 3, {
                "94": {
                    x: 104,
                    y: 2
                }
            })
            .addTimedChild(instance65, 97, 3, {
                "97": {
                    x: -10,
                    y: 2
                }
            })
            .addTimedChild(instance64, 97, 3, {
                "97": {
                    x: 104,
                    y: 2
                }
            })
            .addTimedChild(instance67, 100, 1, {
                "100": {
                    x: -10,
                    y: 2
                }
            })
            .addTimedChild(instance66, 100, 1, {
                "100": {
                    x: 104,
                    y: 2
                }
            })
            .addTimedChild(instance69, 101, 1)
            .addTimedChild(instance68, 101, 1);
    });

    lib.hitme = Container.extend(function () {
        Container.call(this);
        var instance1 = new Graphics()
            .drawCommands(shapes.External[5]);
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

    lib.nub_circle = Container.extend(function () {
        Container.call(this);
        var instance1 = new Graphics()
            .drawCommands(shapes.External[7]);
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
            .drawCommands(shapes.External[6]);
        this.addChild(instance20, instance19, instance18, instance17, instance16, instance15, instance14, instance13, instance12, instance11, instance10, instance9, instance8, instance7, instance6, instance5, instance4, instance3, instance2, instance1);
    });

    lib.nub_only = Container.extend(function () {
        Container.call(this);
        var instance1 = new Graphics()
            .drawCommands(shapes.External[8]);
        this.addChild(instance1);
    });

    lib.ba_color = Container.extend(function () {
        Container.call(this);
        var instance1 = new Graphics()
            .drawCommands(shapes.External[0])
            .setTransform(-647.6, -214.95);
        this.addChild(instance1);
    });

    lib.bandaid = Container.extend(function () {
        Container.call(this);
        var instance4 = new lib.ba_color()
            .setColorTransform(0, 0.8, 0, 0.8, 0, 0.8);
        this[instance4.name = "bacolor"] = instance4;
        var instance3 = new Graphics()
            .drawCommands(shapes.External[9]);
        var instance2 = new lib.nub_only()
            .setTransform(0, 91.85);
        this[instance2.name = "nub"] = instance2;
        var instance1 = new lib.nub_circles()
            .setTransform(-1.1, 91.1);
        this[instance1.name = "circles"] = instance1;
        this.addChild(instance4, instance3, instance2, instance1);
    });

    var Graphic1 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 93, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.External[11])
            .setTransform(-668.6, -361.1);
        this.addTimedChild(instance1);
    });

    lib.text = Container.extend(function () {
        Container.call(this);
        var instance1 = new lib.txtTemperature()
            .setTransform(12)
            .setColorTransform(0, 0.31, 0, 0.38, 0, 0.25);
        this[instance1.name = "dTempFC"] = instance1;
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
            .drawCommands(shapes.External[11])
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
        var instance16 = new Graphics()
            .drawCommands(shapes.External[10]);
        var instance15 = new lib.bandaid();
        this[instance15.name = "bandaid"] = instance15;
        var instance14 = new lib.txtHealth();
        this[instance14.name = "Health"] = instance14;
        var instance13 = new lib.txtProtection();
        this[instance13.name = "Protection"] = instance13;
        var instance12 = new Text("(after the shot)...")
            .setStyle({
                fontFamily: "Tahoma",
                fontSize: 12,
                fontWeight: "bold",
                fill: "#4e6040",
                leading: 2,
                wordWrap: true,
                wordWrapWidth: 248.55
            });
        this[instance12.name = "dDescription"] = instance12;
        var instance11 = new Text("Next Act...")
            .setStyle({
                fontFamily: "Tahoma",
                fontSize: 12,
                fontWeight: "bold",
                fill: "#d09214",
                leading: 2
            });
        var instance22 = new Text("(after the shot)...")
            .setStyle({
                fontFamily: "Tahoma",
                fontSize: 12,
                fontWeight: "bold",
                fill: "#4e6040",
                leading: 2,
                wordWrap: true,
                wordWrapWidth: 248.55
            });
        this[instance22.name = "dDescription"] = instance22;
        var instance21 = new Text("Next Act...")
            .setStyle({
                fontFamily: "Tahoma",
                fontSize: 12,
                fontWeight: "bold",
                fill: "#d09214",
                leading: 2
            });
        var instance27 = new lib.Sick();
        this[instance27.name = "Health"] = instance27;
        var instance26 = new lib._70Protection();
        this[instance26.name = "Protection"] = instance26;
        var instance25 = new Text("(after the shot)...")
            .setStyle({
                fontFamily: "Tahoma",
                fontSize: 12,
                fontWeight: "bold",
                fill: "#4e6040",
                leading: 2,
                wordWrap: true,
                wordWrapWidth: 248.55
            });
        this[instance25.name = "dDescription"] = instance25;
        var instance24 = new Text("Next Act...")
            .setStyle({
                fontFamily: "Tahoma",
                fontSize: 12,
                fontWeight: "bold",
                fill: "#d09214",
                leading: 2
            });
        var instance32 = new lib.InBed()
            .setTransform(436, 185.95)
            .setColorTransform(0, 0.82, 0, 0.57, 0, 0.08);
        this[instance32.name = "Health"] = instance32;
        var instance31 = new lib._95Protect()
            .setTransform(593.2, 183.95)
            .setColorTransform(0, 0.82, 0, 0.57, 0, 0.08);
        this[instance31.name = "Protection"] = instance31;
        var instance30 = new Text("(after the shot)...")
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
        this[instance30.name = "dDescription"] = instance30;
        var instance29 = new Text("Next Act...")
            .setStyle({
                fontFamily: "Tahoma",
                fontSize: 12,
                fontWeight: "bold",
                fill: "#d09214",
                leading: 2
            })
            .setTransform(766.2, 521.65);
        var instance10 = new lib.gray_kid2();
        this[instance10.name = "patient"] = instance10;
        var instance20 = new lib.text();
        var instance23 = new lib.text();
        this[instance23.name = "text"] = instance23;
        var instance36 = new lib.dFarenheit()
            .setTransform(393.95, 292.55);
        this[instance36.name = "dFarenheit"] = instance36;
        var instance35 = new lib.dCelcius()
            .setTransform(508, 292.55);
        this[instance35.name = "dCelcius"] = instance35;
        var instance9 = new Graphics()
            .drawCommands(shapes.External[4]);
        var instance8 = new Text("°F ")
            .setStyle({
                fontFamily: "Tahoma",
                fontSize: 12,
                fontWeight: "bold",
                fill: "#4e6040",
                leading: 2
            });
        var instance7 = new Text("°C")
            .setStyle({
                fontFamily: "Tahoma",
                fontSize: 12,
                fontWeight: "bold",
                fill: "#4e6040",
                leading: 2
            })
            .setAlign("right");
        var instance6 = new lib.txtTemperature();
        this[instance6.name = "dTempFC"] = instance6;
        var instance19 = new Text("°F ")
            .setStyle({
                fontFamily: "Tahoma",
                fontSize: 12,
                fontWeight: "bold",
                fill: "#4e6040",
                leading: 2
            });
        var instance18 = new Text("°C")
            .setStyle({
                fontFamily: "Tahoma",
                fontSize: 12,
                fontWeight: "bold",
                fill: "#4e6040",
                leading: 2
            })
            .setAlign("right");
        var instance34 = new Text("°F ")
            .setStyle({
                fontFamily: "Tahoma",
                fontSize: 12,
                fontWeight: "bold",
                fill: "#4e6040",
                leading: 2
            })
            .setTransform(431.7, 270.25);
        var instance33 = new Text("°C")
            .setStyle({
                fontFamily: "Tahoma",
                fontSize: 12,
                fontWeight: "bold",
                fill: "#4e6040",
                leading: 2
            })
            .setAlign("right")
            .setTransform(526.7, 270.05);
        var instance5 = new lib.jump()
            .setTransform(764.2, 544.45);
        this[instance5.name = "btnMoveOn"] = instance5;
        var instance4 = new lib.jump()
            .setTransform(930.6, 544.55);
        this[instance4.name = "btnBack"] = instance4;
        var instance3 = new lib.press()
            .setTransform(931.6, 544.65);
        this[instance3.name = "btnBack"] = instance3;
        var instance2 = new lib.press();
        this[instance2.name = "btnAhead"] = instance2;
        var instance1 = new Graphics()
            .drawCommands(shapes.External[0]);
        var instance17 = new Graphic1(MovieClip.SYNCHED);
        var instance28 = new Graphic2(MovieClip.SYNCHED)
            .setTransform(668.6, 361.1)
            .setAlpha(0);
        this.addTimedChild(instance16)
            .addTimedChild(instance15, 0, 101, {
                "0": {
                    x: 647.6,
                    y: 214.95
                }
            })
            .addTimedChild(instance14, 0, 45, {
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
            .addTimedChild(instance13, 0, 45, {
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
            .addTimedChild(instance12, 0, 4, {
                "0": {
                    x: 793.25,
                    y: 326.05
                }
            })
            .addTimedChild(instance11, 0, 4, {
                "0": {
                    x: 766.2,
                    y: 521.65
                }
            })
            .addTimedChild(instance22, 4, 41, {
                "4": {
                    x: 793.25,
                    y: 326.05
                }
            })
            .addTimedChild(instance21, 4, 41, {
                "4": {
                    x: 766.2,
                    y: 521.65
                }
            })
            .addTimedChild(instance27, 45, 52, {
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
            .addTimedChild(instance26, 45, 52, {
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
            .addTimedChild(instance25, 45, 52, {
                "45": {
                    x: 793.25,
                    y: 326.05
                }
            })
            .addTimedChild(instance24, 45, 52, {
                "45": {
                    x: 766.2,
                    y: 521.65
                }
            })
            .addTimedChild(instance32, 97, 4)
            .addTimedChild(instance31, 97, 4)
            .addTimedChild(instance30, 97, 4)
            .addTimedChild(instance29, 97, 4)
            .addTimedChild(instance10, 0, 101, {
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
            .addTimedChild(instance20, 4, 1, {
                "4": {
                    x: 395.05,
                    y: 379.1
                }
            })
            .addTimedChild(instance23, 5, 95, {
                "5": {
                    x: 395.05,
                    y: 378.1
                },
                "6": {
                    y: 377.1
                },
                "7": {
                    y: 376.1
                },
                "8": {
                    y: 375.1
                },
                "9": {
                    y: 374.1
                },
                "10": {
                    y: 373.1
                },
                "11": {
                    y: 372.1
                },
                "12": {
                    y: 371.1
                },
                "13": {
                    y: 370.1
                },
                "14": {
                    y: 369.1
                },
                "15": {
                    y: 368.1
                },
                "16": {
                    y: 367.1
                },
                "17": {
                    y: 366.1
                },
                "18": {
                    y: 365.1
                },
                "19": {
                    y: 364.1
                },
                "20": {
                    y: 363.1
                },
                "21": {
                    y: 362.1
                },
                "22": {
                    y: 361.1
                },
                "23": {
                    y: 360.1
                },
                "24": {
                    y: 359.1
                },
                "25": {
                    y: 358.1
                },
                "26": {
                    y: 357.1
                },
                "27": {
                    y: 356.1
                },
                "28": {
                    y: 355.1
                },
                "29": {
                    y: 354.1
                },
                "30": {
                    y: 353.1
                },
                "31": {
                    y: 352.1
                },
                "32": {
                    y: 351.1
                },
                "33": {
                    y: 350.1
                },
                "34": {
                    y: 349.1
                },
                "35": {
                    y: 348.1
                },
                "36": {
                    y: 347.1
                },
                "37": {
                    y: 346.1
                },
                "38": {
                    y: 345.15
                },
                "39": {
                    y: 344.15
                },
                "40": {
                    y: 343.15
                },
                "41": {
                    y: 342.15
                },
                "42": {
                    y: 341.15
                },
                "43": {
                    y: 340.15
                },
                "44": {
                    y: 339.15
                },
                "45": {
                    y: 338.15
                },
                "46": {
                    y: 337.15
                },
                "47": {
                    y: 336.15
                },
                "48": {
                    y: 335.15
                },
                "49": {
                    y: 334.15
                },
                "55": {
                    y: 333.25
                },
                "56": {
                    x: 395,
                    y: 332.3
                },
                "57": {
                    y: 331.4
                },
                "58": {
                    x: 394.95,
                    y: 330.45
                },
                "59": {
                    y: 329.55
                },
                "60": {
                    x: 394.9,
                    y: 328.6
                },
                "61": {
                    y: 327.7
                },
                "62": {
                    x: 394.85,
                    y: 326.75
                },
                "63": {
                    y: 325.85
                },
                "64": {
                    x: 394.8,
                    y: 324.9
                },
                "65": {
                    y: 324
                },
                "66": {
                    x: 394.75,
                    y: 323.05
                },
                "67": {
                    y: 322.15
                },
                "68": {
                    x: 394.7,
                    y: 321.2
                },
                "69": {
                    y: 320.3
                },
                "70": {
                    x: 394.65,
                    y: 319.35
                },
                "71": {
                    y: 318.45
                },
                "72": {
                    x: 394.6,
                    y: 317.5
                },
                "73": {
                    y: 316.6
                },
                "74": {
                    x: 394.55,
                    y: 315.65
                },
                "75": {
                    y: 314.75
                },
                "76": {
                    x: 394.5,
                    y: 313.8
                },
                "77": {
                    y: 312.9
                },
                "78": {
                    x: 394.45,
                    y: 311.95
                },
                "79": {
                    y: 311.05
                },
                "80": {
                    y: 310.1
                },
                "81": {
                    x: 394.4,
                    y: 309.2
                },
                "82": {
                    y: 308.25
                },
                "83": {
                    x: 394.35,
                    y: 307.35
                },
                "84": {
                    y: 306.4
                },
                "85": {
                    x: 394.3,
                    y: 305.5
                },
                "86": {
                    y: 304.55
                },
                "87": {
                    x: 394.25,
                    y: 303.65
                },
                "88": {
                    y: 302.7
                },
                "89": {
                    x: 394.2,
                    y: 301.8
                },
                "90": {
                    y: 300.85
                },
                "91": {
                    y: 299.95
                },
                "92": {
                    x: 394.15,
                    y: 299
                },
                "93": {
                    y: 298.1
                },
                "94": {
                    x: 394.1,
                    y: 297.15
                },
                "95": {
                    y: 296.25
                },
                "96": {
                    x: 394.05,
                    y: 295.3
                },
                "97": {
                    y: 294.4
                },
                "98": {
                    x: 394,
                    y: 293.45
                },
                "99": {
                    y: 292.55
                }
            })
            .addTimedChild(instance36, 100, 1)
            .addTimedChild(instance35, 100, 1)
            .addTimedChild(instance9)
            .addTimedChild(instance8, 0, 4, {
                "0": {
                    x: 431.7,
                    y: 270.25
                }
            })
            .addTimedChild(instance7, 0, 4, {
                "0": {
                    x: 500.7,
                    y: 272.05
                }
            })
            .addTimedChild(instance6, 0, 4, {
                "0": {
                    x: 407.05,
                    y: 379.1,
                    c: [
                        0,
                        0.31,
                        0,
                        0.38,
                        0,
                        0.25
                    ]
                }
            })
            .addTimedChild(instance19, 4, 96, {
                "4": {
                    x: 431.7,
                    y: 270.25
                }
            })
            .addTimedChild(instance18, 4, 96, {
                "4": {
                    x: 500.7,
                    y: 272.05
                }
            })
            .addTimedChild(instance34, 100, 1)
            .addTimedChild(instance33, 100, 1)
            .addTimedChild(instance5)
            .addTimedChild(instance4)
            .addTimedChild(instance3)
            .addTimedChild(instance2, 0, 101, {
                "0": {
                    x: 764.2,
                    y: 544.65
                }
            })
            .addTimedChild(instance1, 0, 4)
            .addTimedChild(instance17, 4, 93, {
                "4": {
                    x: 668.6,
                    y: 361.1,
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
            .addTimedChild(instance28, 97, 4);
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