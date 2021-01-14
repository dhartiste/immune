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
            .drawCommands(shapes.External[0]);
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
                fill: "#666",
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
                fill: "#666",
                leading: 2
            })
            .setAlign("right")
            .setTransform(55);
        this[instance1.name = "dFarenheit"] = instance1;
        this.addChild(instance1);
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

    lib._39 = Container.extend(function () {
        Container.call(this);
        var instance1 = new Text("37.1")
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

    lib._40 = Container.extend(function () {
        Container.call(this);
        var instance1 = new Text("37.2")
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

    lib._41 = Container.extend(function () {
        Container.call(this);
        var instance1 = new Text("37.3")
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

    lib._42 = Container.extend(function () {
        Container.call(this);
        var instance1 = new Text("37.4")
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

    lib._43 = Container.extend(function () {
        Container.call(this);
        var instance1 = new Text("37.5")
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

    lib._44 = Container.extend(function () {
        Container.call(this);
        var instance1 = new Text("37.6")
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

    lib._45 = Container.extend(function () {
        Container.call(this);
        var instance1 = new Text("37.7")
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

    lib._46 = Container.extend(function () {
        Container.call(this);
        var instance1 = new Text("37.8")
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

    lib._47 = Container.extend(function () {
        Container.call(this);
        var instance1 = new Text("37.9")
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

    lib._48 = Container.extend(function () {
        Container.call(this);
        var instance1 = new Text("38.0")
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

    lib._49 = Container.extend(function () {
        Container.call(this);
        var instance1 = new Text("38.1")
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

    lib._50 = Container.extend(function () {
        Container.call(this);
        var instance1 = new Text("38.2")
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

    lib._51 = Container.extend(function () {
        Container.call(this);
        var instance1 = new Text("38.3")
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

    lib._52 = Container.extend(function () {
        Container.call(this);
        var instance1 = new Text("38.4")
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

    lib._53 = Container.extend(function () {
        Container.call(this);
        var instance1 = new Text("38.5")
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

    lib._54 = Container.extend(function () {
        Container.call(this);
        var instance1 = new lib._53();
        this.addChild(instance1);
    });

    lib._55 = Container.extend(function () {
        Container.call(this);
        var instance1 = new Text("38.6")
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

    lib._56 = Container.extend(function () {
        Container.call(this);
        var instance1 = new Text("38.7")
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

    lib._57 = Container.extend(function () {
        Container.call(this);
        var instance1 = new Text("38.8")
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

    lib._58 = Container.extend(function () {
        Container.call(this);
        var instance1 = new Text("38.9")
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

    lib._59 = Container.extend(function () {
        Container.call(this);
        var instance1 = new Text("39.0")
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

    lib._60 = Container.extend(function () {
        Container.call(this);
        var instance1 = new Text("39.1")
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

    lib._102 = Container.extend(function () {
        Container.call(this);
        var instance1 = new Text("102\n")
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

    lib._61 = Container.extend(function () {
        Container.call(this);
        var instance1 = new Text("39.2")
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

    lib._62 = Container.extend(function () {
        Container.call(this);
        var instance1 = new Text("39.3")
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

    lib._63 = Container.extend(function () {
        Container.call(this);
        var instance1 = new Text("39.4")
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

    lib._64 = Container.extend(function () {
        Container.call(this);
        var instance1 = new Text("39.5")
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

    lib._65 = Container.extend(function () {
        Container.call(this);
        var instance1 = new Text("39.6")
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

    lib._103 = Container.extend(function () {
        Container.call(this);
        var instance1 = new Text("103\n")
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

    lib._66 = Container.extend(function () {
        Container.call(this);
        var instance1 = new Text("39.7")
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

    lib._67 = Container.extend(function () {
        Container.call(this);
        var instance1 = new Text("39.8")
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

    lib._68 = Container.extend(function () {
        Container.call(this);
        var instance1 = new Text("39.9")
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

    lib._104 = Container.extend(function () {
        Container.call(this);
        var instance1 = new Text("104\n")
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

    lib._69 = Container.extend(function () {
        Container.call(this);
        var instance1 = new Text("40")
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

    var Graphic2 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 7, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.External[0]);
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
            duration: 200,
            framerate: 30,
            labels: {
                default: 0,
                healthyToSick: 4,
                "0% - 70%": 4,
                healthyToSick_stop: 49,
                "70% - 95%": 49,
                sickToBed: 54,
                sickToBed_stop: 100,
                bedToHealthy: 104,
                bedToHealthy_stop: 198
            }
        });
        var instance17 = new Graphics()
            .drawCommands(shapes.External[10]);
        var instance16 = new lib.bandaid();
        this[instance16.name = "bandaid"] = instance16;
        var instance15 = new lib.txtHealth();
        this[instance15.name = "Health"] = instance15;
        var instance14 = new lib.txtProtection();
        this[instance14.name = "Protection"] = instance14;
        var instance13 = new Text("Next Act...")
            .setStyle({
                fontFamily: "Tahoma",
                fontSize: 12,
                fontWeight: "bold",
                fill: "#d09214",
                leading: 2
            });
        var instance20 = new Text("Next Act...")
            .setStyle({
                fontFamily: "Tahoma",
                fontSize: 12,
                fontWeight: "bold",
                fill: "#d09214",
                leading: 2
            });
        var instance39 = new lib.bandaid();
        this[instance39.name = "bandaid"] = instance39;
        var instance38 = new lib.Sick();
        this[instance38.name = "Health"] = instance38;
        var instance37 = new lib._70Protection();
        this[instance37.name = "Protection"] = instance37;
        var instance36 = new Text("Next Act...")
            .setStyle({
                fontFamily: "Tahoma",
                fontSize: 12,
                fontWeight: "bold",
                fill: "#d09214",
                leading: 2
            });
        var instance62 = new lib.InBed()
            .setTransform(436, 185.95)
            .setColorTransform(0, 0.82, 0, 0.57, 0, 0.08);
        this[instance62.name = "Health"] = instance62;
        var instance61 = new lib._95Protect()
            .setTransform(593.2, 183.95)
            .setColorTransform(0, 0.82, 0, 0.57, 0, 0.08);
        this[instance61.name = "Protection"] = instance61;
        var instance60 = new Text("Next Act...")
            .setStyle({
                fontFamily: "Tahoma",
                fontSize: 12,
                fontWeight: "bold",
                fill: "#d09214",
                leading: 2
            })
            .setTransform(766.2, 521.65);
        var instance12 = new Text("(after exposure to the live virus) If the patient falls ill, there is little one can do to fight the viral infection. You normally have to wait for the body to work it out.")
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
        this[instance12.name = "dDescription"] = instance12;
        var instance11 = new lib.gray_kid2();
        this[instance11.name = "patient"] = instance11;
        var instance10 = new Graphics()
            .drawCommands(shapes.External[8]);
        var instance9 = new lib.jump()
            .setTransform(764.2, 544.45);
        this[instance9.name = "btnMoveOn"] = instance9;
        var instance8 = new lib.jump()
            .setTransform(930.6, 544.55);
        this[instance8.name = "btnBack"] = instance8;
        var instance7 = new Text("°F ")
            .setStyle({
                fontFamily: "Tahoma",
                fontSize: 12,
                fontWeight: "bold",
                fill: "#4e6040",
                leading: 2
            })
            .setTransform(432, 262);
        var instance6 = new Text("°C")
            .setStyle({
                fontFamily: "Tahoma",
                fontSize: 12,
                fontWeight: "bold",
                fill: "#4e6040",
                leading: 2
            })
            .setAlign("right");
        var instance5 = new lib._98();
        var instance4 = new lib._38();
        var instance19 = new lib._99();
        var instance18 = new lib._39();
        var instance21 = new lib._40();
        var instance22 = new lib._41();
        var instance23 = new lib._42();
        var instance24 = new lib._43();
        var instance26 = new lib._100();
        var instance25 = new lib._44();
        var instance27 = new lib._45();
        var instance28 = new lib._46();
        var instance29 = new lib._47();
        var instance30 = new lib._48();
        var instance32 = new lib._101();
        var instance31 = new lib._49();
        var instance33 = new lib._50();
        var instance34 = new lib._51();
        var instance35 = new lib._52();
        var instance40 = new lib._54();
        var instance41 = new lib._55();
        var instance42 = new lib._56();
        var instance43 = new lib._57();
        var instance44 = new lib._58();
        var instance45 = new lib._59();
        var instance47 = new lib._102();
        var instance46 = new lib._60();
        var instance48 = new lib._61();
        var instance49 = new lib._62();
        var instance50 = new lib._63();
        var instance51 = new lib._64();
        var instance53 = new lib._103();
        var instance52 = new lib._65();
        var instance54 = new lib._66();
        var instance55 = new lib._67();
        var instance57 = new lib._104();
        var instance56 = new lib._68();
        var instance58 = new lib._69();
        var instance3 = new lib.bandaid();
        this[instance3.name = "bandaid"] = instance3;
        var instance2 = new Graphics()
            .drawCommands(shapes.External[1]);
        var instance1 = new Graphic1(MovieClip.SYNCHED);
        var instance59 = new Graphic2(MovieClip.SYNCHED);
        var instance63 = new lib._68();
        var instance64 = new lib._67();
        var instance65 = new lib._66();
        var instance66 = new lib._65();
        var instance68 = new lib._103();
        var instance67 = new lib._64();
        var instance69 = new lib._63();
        var instance70 = new lib._62();
        var instance71 = new lib._61();
        var instance73 = new lib._102();
        var instance72 = new lib._60();
        var instance74 = new lib._59();
        var instance75 = new lib._58();
        var instance76 = new lib._57();
        var instance77 = new lib._56();
        var instance79 = new lib._101();
        var instance78 = new lib._55();
        var instance80 = new lib._54();
        var instance81 = new lib._52();
        var instance82 = new lib._51();
        var instance83 = new lib._50();
        var instance84 = new lib._49();
        var instance85 = new lib._48();
        var instance86 = new lib._47();
        var instance87 = new lib._46();
        var instance88 = new lib._45();
        var instance90 = new lib._100();
        var instance89 = new lib._44();
        var instance91 = new lib._43();
        var instance92 = new lib._42();
        var instance93 = new lib._41();
        var instance95 = new lib._99();
        var instance94 = new lib._40();
        var instance96 = new lib._39();
        var instance98 = new lib._98()
            .setTransform(382.95, 374.5);
        var instance97 = new lib._38()
            .setTransform(493, 374.5);
        this.addTimedChild(instance17)
            .addTimedChild(instance16, 0, 4, {
                "0": {
                    x: 647.6,
                    y: 214.95
                }
            })
            .addTimedChild(instance15, 0, 45, {
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
            .addTimedChild(instance14, 0, 45, {
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
            .addTimedChild(instance13, 0, 4, {
                "0": {
                    x: 766.2,
                    y: 521.65
                }
            })
            .addTimedChild(instance20, 4, 41, {
                "4": {
                    x: 766.2,
                    y: 521.65
                }
            })
            .addTimedChild(instance39, 45, 155, {
                "45": {
                    x: 647.6,
                    y: 214.95
                }
            })
            .addTimedChild(instance38, 45, 52, {
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
            .addTimedChild(instance37, 45, 52, {
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
            .addTimedChild(instance36, 45, 52, {
                "45": {
                    x: 766.2,
                    y: 521.65
                }
            })
            .addTimedChild(instance62, 97, 103)
            .addTimedChild(instance61, 97, 103)
            .addTimedChild(instance60, 97, 103)
            .addTimedChild(instance12)
            .addTimedChild(instance11, 0, 200, {
                "0": {
                    x: 427.7,
                    y: 219.65,
                    c: [
                        0,
                        0,
                        0,
                        1,
                        0,
                        0
                    ]
                },
                "5": {
                    c: [
                        0,
                        0.02,
                        0,
                        1,
                        0,
                        0
                    ]
                },
                "6": {
                    c: [
                        0,
                        0.04,
                        0,
                        1,
                        0,
                        0
                    ]
                },
                "7": {
                    c: [
                        0,
                        0.07,
                        0,
                        1,
                        0,
                        0
                    ]
                },
                "8": {
                    c: [
                        0,
                        0.09,
                        0,
                        0.99,
                        0,
                        0
                    ]
                },
                "9": {
                    c: [
                        0,
                        0.11,
                        0,
                        0.99,
                        0,
                        0
                    ]
                },
                "10": {
                    c: [
                        0,
                        0.13,
                        0,
                        0.99,
                        0,
                        0
                    ]
                },
                "11": {
                    c: [
                        0,
                        0.16,
                        0,
                        0.99,
                        0,
                        0
                    ]
                },
                "12": {
                    c: [
                        0,
                        0.18,
                        0,
                        0.98,
                        0,
                        0
                    ]
                },
                "13": {
                    c: [
                        0,
                        0.2,
                        0,
                        0.98,
                        0,
                        0
                    ]
                },
                "14": {
                    c: [
                        0,
                        0.22,
                        0,
                        0.98,
                        0,
                        0
                    ]
                },
                "15": {
                    c: [
                        0,
                        0.24,
                        0,
                        0.98,
                        0,
                        0
                    ]
                },
                "16": {
                    c: [
                        0,
                        0.27,
                        0,
                        0.98,
                        0,
                        0
                    ]
                },
                "17": {
                    c: [
                        0,
                        0.29,
                        0,
                        0.98,
                        0,
                        0
                    ]
                },
                "18": {
                    c: [
                        0,
                        0.31,
                        0,
                        0.97,
                        0,
                        0
                    ]
                },
                "19": {
                    c: [
                        0,
                        0.33,
                        0,
                        0.97,
                        0,
                        0
                    ]
                },
                "20": {
                    c: [
                        0,
                        0.36,
                        0,
                        0.97,
                        0,
                        0
                    ]
                },
                "21": {
                    c: [
                        0,
                        0.38,
                        0,
                        0.97,
                        0,
                        0
                    ]
                },
                "22": {
                    c: [
                        0,
                        0.4,
                        0,
                        0.97,
                        0,
                        0
                    ]
                },
                "23": {
                    c: [
                        0,
                        0.42,
                        0,
                        0.96,
                        0,
                        0
                    ]
                },
                "24": {
                    c: [
                        0,
                        0.44,
                        0,
                        0.96,
                        0,
                        0
                    ]
                },
                "25": {
                    c: [
                        0,
                        0.47,
                        0,
                        0.96,
                        0,
                        0
                    ]
                },
                "26": {
                    c: [
                        0,
                        0.49,
                        0,
                        0.96,
                        0,
                        0
                    ]
                },
                "27": {
                    c: [
                        0,
                        0.51,
                        0,
                        0.96,
                        0,
                        0
                    ]
                },
                "28": {
                    c: [
                        0,
                        0.53,
                        0,
                        0.96,
                        0,
                        0
                    ]
                },
                "29": {
                    c: [
                        0,
                        0.56,
                        0,
                        0.95,
                        0,
                        0
                    ]
                },
                "30": {
                    c: [
                        0,
                        0.58,
                        0,
                        0.95,
                        0,
                        0
                    ]
                },
                "31": {
                    c: [
                        0,
                        0.6,
                        0,
                        0.95,
                        0,
                        0
                    ]
                },
                "32": {
                    c: [
                        0,
                        0.62,
                        0,
                        0.95,
                        0,
                        0
                    ]
                },
                "33": {
                    c: [
                        0,
                        0.64,
                        0,
                        0.95,
                        0,
                        0
                    ]
                },
                "34": {
                    c: [
                        0,
                        0.67,
                        0,
                        0.95,
                        0,
                        0
                    ]
                },
                "35": {
                    c: [
                        0,
                        0.69,
                        0,
                        0.95,
                        0,
                        0
                    ]
                },
                "36": {
                    c: [
                        0,
                        0.71,
                        0,
                        0.94,
                        0,
                        0
                    ]
                },
                "37": {
                    c: [
                        0,
                        0.73,
                        0,
                        0.94,
                        0,
                        0
                    ]
                },
                "38": {
                    c: [
                        0,
                        0.76,
                        0,
                        0.94,
                        0,
                        0
                    ]
                },
                "39": {
                    c: [
                        0,
                        0.78,
                        0,
                        0.94,
                        0,
                        0
                    ]
                },
                "40": {
                    c: [
                        0,
                        0.8,
                        0,
                        0.93,
                        0,
                        0
                    ]
                },
                "41": {
                    c: [
                        0,
                        0.82,
                        0,
                        0.93,
                        0,
                        0
                    ]
                },
                "42": {
                    c: [
                        0,
                        0.84,
                        0,
                        0.93,
                        0,
                        0
                    ]
                },
                "43": {
                    c: [
                        0,
                        0.87,
                        0,
                        0.93,
                        0,
                        0
                    ]
                },
                "44": {
                    c: [
                        0,
                        0.89,
                        0,
                        0.93,
                        0,
                        0
                    ]
                },
                "45": {
                    c: [
                        0,
                        0.91,
                        0,
                        0.93,
                        0,
                        0
                    ]
                },
                "46": {
                    c: [
                        0,
                        0.93,
                        0,
                        0.92,
                        0,
                        0
                    ]
                },
                "47": {
                    c: [
                        0,
                        0.96,
                        0,
                        0.92,
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
                },
                "105": {
                    c: [
                        0,
                        0.87,
                        0,
                        0.01,
                        0,
                        0
                    ]
                },
                "106": {
                    c: [
                        0,
                        0.85,
                        0,
                        0.02,
                        0,
                        0
                    ]
                },
                "107": {
                    c: [
                        0,
                        0.85,
                        0,
                        0.03,
                        0,
                        0
                    ]
                },
                "108": {
                    c: [
                        0,
                        0.84,
                        0,
                        0.04,
                        0,
                        0
                    ]
                },
                "109": {
                    c: [
                        0,
                        0.83,
                        0,
                        0.05,
                        0,
                        0
                    ]
                },
                "110": {
                    c: [
                        0,
                        0.82,
                        0,
                        0.06,
                        0,
                        0
                    ]
                },
                "111": {
                    c: [
                        0,
                        0.81,
                        0,
                        0.07,
                        0,
                        0
                    ]
                },
                "112": {
                    c: [
                        0,
                        0.8,
                        0,
                        0.08,
                        0,
                        0
                    ]
                },
                "113": {
                    c: [
                        0,
                        0.79,
                        0,
                        0.09,
                        0,
                        0
                    ]
                },
                "114": {
                    c: [
                        0,
                        0.78,
                        0,
                        0.11,
                        0,
                        0
                    ]
                },
                "115": {
                    c: [
                        0,
                        0.77,
                        0,
                        0.12,
                        0,
                        0
                    ]
                },
                "116": {
                    c: [
                        0,
                        0.76,
                        0,
                        0.13,
                        0,
                        0
                    ]
                },
                "117": {
                    c: [
                        0,
                        0.75,
                        0,
                        0.14,
                        0,
                        0
                    ]
                },
                "118": {
                    c: [
                        0,
                        0.75,
                        0,
                        0.15,
                        0,
                        0
                    ]
                },
                "119": {
                    c: [
                        0,
                        0.74,
                        0,
                        0.16,
                        0,
                        0
                    ]
                },
                "120": {
                    c: [
                        0,
                        0.73,
                        0,
                        0.17,
                        0,
                        0
                    ]
                },
                "121": {
                    c: [
                        0,
                        0.72,
                        0,
                        0.18,
                        0,
                        0
                    ]
                },
                "122": {
                    c: [
                        0,
                        0.71,
                        0,
                        0.19,
                        0,
                        0
                    ]
                },
                "123": {
                    c: [
                        0,
                        0.7,
                        0,
                        0.2,
                        0,
                        0
                    ]
                },
                "124": {
                    c: [
                        0,
                        0.69,
                        0,
                        0.21,
                        0,
                        0
                    ]
                },
                "125": {
                    c: [
                        0,
                        0.68,
                        0,
                        0.22,
                        0,
                        0
                    ]
                },
                "126": {
                    c: [
                        0,
                        0.67,
                        0,
                        0.23,
                        0,
                        0
                    ]
                },
                "127": {
                    c: [
                        0,
                        0.66,
                        0,
                        0.24,
                        0,
                        0
                    ]
                },
                "128": {
                    c: [
                        0,
                        0.65,
                        0,
                        0.25,
                        0,
                        0
                    ]
                },
                "129": {
                    c: [
                        0,
                        0.64,
                        0,
                        0.26,
                        0,
                        0
                    ]
                },
                "130": {
                    c: [
                        0,
                        0.64,
                        0,
                        0.27,
                        0,
                        0
                    ]
                },
                "131": {
                    c: [
                        0,
                        0.63,
                        0,
                        0.28,
                        0,
                        0
                    ]
                },
                "132": {
                    c: [
                        0,
                        0.62,
                        0,
                        0.29,
                        0,
                        0
                    ]
                },
                "133": {
                    c: [
                        0,
                        0.61,
                        0,
                        0.31,
                        0,
                        0
                    ]
                },
                "134": {
                    c: [
                        0,
                        0.6,
                        0,
                        0.32,
                        0,
                        0
                    ]
                },
                "135": {
                    c: [
                        0,
                        0.59,
                        0,
                        0.33,
                        0,
                        0
                    ]
                },
                "136": {
                    c: [
                        0,
                        0.58,
                        0,
                        0.34,
                        0,
                        0
                    ]
                },
                "137": {
                    c: [
                        0,
                        0.57,
                        0,
                        0.35,
                        0,
                        0
                    ]
                },
                "138": {
                    c: [
                        0,
                        0.56,
                        0,
                        0.36,
                        0,
                        0
                    ]
                },
                "139": {
                    c: [
                        0,
                        0.55,
                        0,
                        0.37,
                        0,
                        0
                    ]
                },
                "140": {
                    c: [
                        0,
                        0.54,
                        0,
                        0.38,
                        0,
                        0
                    ]
                },
                "141": {
                    c: [
                        0,
                        0.53,
                        0,
                        0.39,
                        0,
                        0
                    ]
                },
                "142": {
                    c: [
                        0,
                        0.53,
                        0,
                        0.4,
                        0,
                        0
                    ]
                },
                "143": {
                    c: [
                        0,
                        0.51,
                        0,
                        0.41,
                        0,
                        0
                    ]
                },
                "144": {
                    c: [
                        0,
                        0.51,
                        0,
                        0.42,
                        0,
                        0
                    ]
                },
                "145": {
                    c: [
                        0,
                        0.5,
                        0,
                        0.43,
                        0,
                        0
                    ]
                },
                "146": {
                    c: [
                        0,
                        0.49,
                        0,
                        0.44,
                        0,
                        0
                    ]
                },
                "147": {
                    c: [
                        0,
                        0.48,
                        0,
                        0.45,
                        0,
                        0
                    ]
                },
                "148": {
                    c: [
                        0,
                        0.47,
                        0,
                        0.46,
                        0,
                        0
                    ]
                },
                "149": {
                    c: [
                        0,
                        0.46,
                        0,
                        0.47,
                        0,
                        0
                    ]
                },
                "150": {
                    c: [
                        0,
                        0.45,
                        0,
                        0.48,
                        0,
                        0
                    ]
                },
                "151": {
                    c: [
                        0,
                        0.44,
                        0,
                        0.49,
                        0,
                        0
                    ]
                },
                "152": {
                    c: [
                        0,
                        0.43,
                        0,
                        0.51,
                        0,
                        0
                    ]
                },
                "153": {
                    c: [
                        0,
                        0.42,
                        0,
                        0.52,
                        0,
                        0
                    ]
                },
                "154": {
                    c: [
                        0,
                        0.42,
                        0,
                        0.53,
                        0,
                        0
                    ]
                },
                "155": {
                    c: [
                        0,
                        0.4,
                        0,
                        0.54,
                        0,
                        0
                    ]
                },
                "156": {
                    c: [
                        0,
                        0.4,
                        0,
                        0.55,
                        0,
                        0
                    ]
                },
                "157": {
                    c: [
                        0,
                        0.39,
                        0,
                        0.56,
                        0,
                        0
                    ]
                },
                "158": {
                    c: [
                        0,
                        0.38,
                        0,
                        0.57,
                        0,
                        0
                    ]
                },
                "159": {
                    c: [
                        0,
                        0.37,
                        0,
                        0.58,
                        0,
                        0
                    ]
                },
                "160": {
                    c: [
                        0,
                        0.36,
                        0,
                        0.59,
                        0,
                        0
                    ]
                },
                "161": {
                    c: [
                        0,
                        0.35,
                        0,
                        0.6,
                        0,
                        0
                    ]
                },
                "162": {
                    c: [
                        0,
                        0.34,
                        0,
                        0.61,
                        0,
                        0
                    ]
                },
                "163": {
                    c: [
                        0,
                        0.33,
                        0,
                        0.62,
                        0,
                        0
                    ]
                },
                "164": {
                    c: [
                        0,
                        0.32,
                        0,
                        0.63,
                        0,
                        0
                    ]
                },
                "165": {
                    c: [
                        0,
                        0.31,
                        0,
                        0.64,
                        0,
                        0
                    ]
                },
                "166": {
                    c: [
                        0,
                        0.3,
                        0,
                        0.65,
                        0,
                        0
                    ]
                },
                "167": {
                    c: [
                        0,
                        0.29,
                        0,
                        0.66,
                        0,
                        0
                    ]
                },
                "168": {
                    c: [
                        0,
                        0.29,
                        0,
                        0.67,
                        0,
                        0
                    ]
                },
                "169": {
                    c: [
                        0,
                        0.27,
                        0,
                        0.68,
                        0,
                        0
                    ]
                },
                "170": {
                    c: [
                        0,
                        0.27,
                        0,
                        0.69,
                        0,
                        0
                    ]
                },
                "171": {
                    c: [
                        0,
                        0.26,
                        0,
                        0.71,
                        0,
                        0
                    ]
                },
                "172": {
                    c: [
                        0,
                        0.25,
                        0,
                        0.72,
                        0,
                        0
                    ]
                },
                "173": {
                    c: [
                        0,
                        0.24,
                        0,
                        0.73,
                        0,
                        0
                    ]
                },
                "174": {
                    c: [
                        0,
                        0.23,
                        0,
                        0.74,
                        0,
                        0
                    ]
                },
                "175": {
                    c: [
                        0,
                        0.22,
                        0,
                        0.75,
                        0,
                        0
                    ]
                },
                "176": {
                    c: [
                        0,
                        0.21,
                        0,
                        0.76,
                        0,
                        0
                    ]
                },
                "177": {
                    c: [
                        0,
                        0.2,
                        0,
                        0.77,
                        0,
                        0
                    ]
                },
                "178": {
                    c: [
                        0,
                        0.19,
                        0,
                        0.78,
                        0,
                        0
                    ]
                },
                "179": {
                    c: [
                        0,
                        0.18,
                        0,
                        0.79,
                        0,
                        0
                    ]
                },
                "180": {
                    c: [
                        0,
                        0.18,
                        0,
                        0.8,
                        0,
                        0
                    ]
                },
                "181": {
                    c: [
                        0,
                        0.16,
                        0,
                        0.81,
                        0,
                        0
                    ]
                },
                "182": {
                    c: [
                        0,
                        0.16,
                        0,
                        0.82,
                        0,
                        0
                    ]
                },
                "183": {
                    c: [
                        0,
                        0.15,
                        0,
                        0.83,
                        0,
                        0
                    ]
                },
                "184": {
                    c: [
                        0,
                        0.14,
                        0,
                        0.84,
                        0,
                        0
                    ]
                },
                "185": {
                    c: [
                        0,
                        0.13,
                        0,
                        0.85,
                        0,
                        0
                    ]
                },
                "186": {
                    c: [
                        0,
                        0.12,
                        0,
                        0.86,
                        0,
                        0
                    ]
                },
                "187": {
                    c: [
                        0,
                        0.11,
                        0,
                        0.87,
                        0,
                        0
                    ]
                },
                "188": {
                    c: [
                        0,
                        0.1,
                        0,
                        0.88,
                        0,
                        0
                    ]
                },
                "189": {
                    c: [
                        0,
                        0.09,
                        0,
                        0.89,
                        0,
                        0
                    ]
                },
                "190": {
                    c: [
                        0,
                        0.08,
                        0,
                        0.91,
                        0,
                        0
                    ]
                },
                "191": {
                    c: [
                        0,
                        0.07,
                        0,
                        0.92,
                        0,
                        0
                    ]
                },
                "192": {
                    c: [
                        0,
                        0.06,
                        0,
                        0.93,
                        0,
                        0
                    ]
                },
                "193": {
                    c: [
                        0,
                        0.05,
                        0,
                        0.94,
                        0,
                        0
                    ]
                },
                "194": {
                    c: [
                        0,
                        0.05,
                        0,
                        0.95,
                        0,
                        0
                    ]
                },
                "195": {
                    c: [
                        0,
                        0.04,
                        0,
                        0.96,
                        0,
                        0
                    ]
                },
                "196": {
                    c: [
                        0,
                        0.03,
                        0,
                        0.97,
                        0,
                        0
                    ]
                },
                "197": {
                    c: [
                        0,
                        0.02,
                        0,
                        0.98,
                        0,
                        0
                    ]
                },
                "198": {
                    c: [
                        0,
                        0.01,
                        0,
                        0.99,
                        0,
                        0
                    ]
                },
                "199": {
                    c: [
                        0,
                        0,
                        0,
                        1,
                        0,
                        0
                    ]
                }
            })
            .addTimedChild(instance10)
            .addTimedChild(instance9)
            .addTimedChild(instance8)
            .addTimedChild(instance7)
            .addTimedChild(instance6, 0, 200, {
                "0": {
                    x: 522,
                    y: 262
                }
            })
            .addTimedChild(instance5, 0, 4, {
                "0": {
                    x: 382.95,
                    y: 374.5
                }
            })
            .addTimedChild(instance4, 0, 4, {
                "0": {
                    x: 490,
                    y: 374.5
                }
            })
            .addTimedChild(instance19, 4, 15, {
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
            .addTimedChild(instance18, 4, 3, {
                "4": {
                    x: 493,
                    y: 374.5
                },
                "5": {
                    y: 373.6
                },
                "6": {
                    y: 372.75
                }
            })
            .addTimedChild(instance21, 7, 3, {
                "7": {
                    x: 493,
                    y: 371.85
                },
                "8": {
                    y: 371
                },
                "9": {
                    y: 370.1
                }
            })
            .addTimedChild(instance22, 10, 3, {
                "10": {
                    x: 493,
                    y: 369.25
                },
                "11": {
                    y: 368.35
                },
                "12": {
                    y: 367.5
                }
            })
            .addTimedChild(instance23, 13, 3, {
                "13": {
                    x: 493,
                    y: 366.6
                },
                "14": {
                    y: 365.75
                },
                "15": {
                    y: 364.85
                }
            })
            .addTimedChild(instance24, 16, 3, {
                "16": {
                    x: 493,
                    y: 364
                },
                "17": {
                    y: 363.1
                },
                "18": {
                    y: 362.25
                }
            })
            .addTimedChild(instance26, 19, 15, {
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
            .addTimedChild(instance25, 19, 4, {
                "19": {
                    x: 493,
                    y: 361.35
                },
                "20": {
                    y: 360.5
                },
                "21": {
                    y: 359.6
                },
                "22": {
                    y: 358.75
                }
            })
            .addTimedChild(instance27, 23, 3, {
                "23": {
                    x: 493,
                    y: 357.85
                },
                "24": {
                    y: 356.95
                },
                "25": {
                    y: 356.1
                }
            })
            .addTimedChild(instance28, 26, 3, {
                "26": {
                    x: 493,
                    y: 355.2
                },
                "27": {
                    y: 354.3
                },
                "28": {
                    y: 353.45
                }
            })
            .addTimedChild(instance29, 29, 3, {
                "29": {
                    x: 493,
                    y: 352.55
                },
                "30": {
                    y: 351.7
                },
                "31": {
                    y: 350.8
                }
            })
            .addTimedChild(instance30, 32, 2, {
                "32": {
                    x: 493,
                    y: 349.95
                },
                "33": {
                    y: 349.1
                }
            })
            .addTimedChild(instance32, 34, 35, {
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
                }
            })
            .addTimedChild(instance31, 34, 3, {
                "34": {
                    x: 493,
                    y: 348.2
                },
                "35": {
                    y: 347.3
                },
                "36": {
                    y: 346.45
                }
            })
            .addTimedChild(instance33, 37, 3, {
                "37": {
                    x: 493,
                    y: 345.55
                },
                "38": {
                    y: 344.7
                },
                "39": {
                    y: 343.8
                }
            })
            .addTimedChild(instance34, 40, 3, {
                "40": {
                    x: 493,
                    y: 342.95
                },
                "41": {
                    y: 342.05
                },
                "42": {
                    y: 341.2
                }
            })
            .addTimedChild(instance35, 43, 3, {
                "43": {
                    x: 493,
                    y: 340.3
                },
                "44": {
                    y: 339.45
                },
                "45": {
                    y: 338.55
                }
            })
            .addTimedChild(instance40, 46, 8, {
                "46": {
                    x: 493,
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
                }
            })
            .addTimedChild(instance41, 54, 3, {
                "54": {
                    x: 493,
                    y: 335.05
                },
                "55": {
                    y: 334.1
                },
                "56": {
                    y: 333.1
                }
            })
            .addTimedChild(instance42, 57, 3, {
                "57": {
                    x: 493,
                    y: 332.15
                },
                "58": {
                    y: 331.2
                },
                "59": {
                    y: 330.2
                }
            })
            .addTimedChild(instance43, 60, 3, {
                "60": {
                    x: 493,
                    y: 329.25
                },
                "61": {
                    y: 328.3
                },
                "62": {
                    y: 327.3
                }
            })
            .addTimedChild(instance44, 63, 3, {
                "63": {
                    x: 493,
                    y: 326.35
                },
                "64": {
                    y: 325.4
                },
                "65": {
                    y: 324.4
                }
            })
            .addTimedChild(instance45, 66, 3, {
                "66": {
                    x: 493,
                    y: 323.45
                },
                "67": {
                    y: 322.5
                },
                "68": {
                    y: 321.5
                }
            })
            .addTimedChild(instance47, 69, 15, {
                "69": {
                    x: 382.95,
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
                }
            })
            .addTimedChild(instance46, 69, 3, {
                "69": {
                    x: 493,
                    y: 320.55
                },
                "70": {
                    y: 319.6
                },
                "71": {
                    y: 318.6
                }
            })
            .addTimedChild(instance48, 72, 3, {
                "72": {
                    x: 493,
                    y: 317.65
                },
                "73": {
                    y: 316.7
                },
                "74": {
                    y: 315.7
                }
            })
            .addTimedChild(instance49, 75, 3, {
                "75": {
                    x: 493,
                    y: 314.75
                },
                "76": {
                    y: 313.8
                },
                "77": {
                    y: 312.8
                }
            })
            .addTimedChild(instance50, 78, 3, {
                "78": {
                    x: 493,
                    y: 311.85
                },
                "79": {
                    y: 310.9
                },
                "80": {
                    y: 309.9
                }
            })
            .addTimedChild(instance51, 81, 3, {
                "81": {
                    x: 493,
                    y: 308.95
                },
                "82": {
                    y: 308
                },
                "83": {
                    y: 307
                }
            })
            .addTimedChild(instance53, 84, 9, {
                "84": {
                    x: 382.95,
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
                }
            })
            .addTimedChild(instance52, 84, 3, {
                "84": {
                    x: 493,
                    y: 306.05
                },
                "85": {
                    y: 305.1
                },
                "86": {
                    y: 304.1
                }
            })
            .addTimedChild(instance54, 87, 3, {
                "87": {
                    x: 493,
                    y: 303.15
                },
                "88": {
                    y: 302.2
                },
                "89": {
                    y: 301.2
                }
            })
            .addTimedChild(instance55, 90, 3, {
                "90": {
                    x: 493,
                    y: 300.25
                },
                "91": {
                    y: 299.3
                },
                "92": {
                    y: 298.3
                }
            })
            .addTimedChild(instance57, 93, 26, {
                "93": {
                    x: 382.95,
                    y: 297.35
                },
                "105": {
                    y: 297.95
                },
                "106": {
                    y: 298.5
                },
                "107": {
                    y: 299.1
                },
                "108": {
                    y: 299.65
                },
                "109": {
                    y: 300.25
                },
                "110": {
                    y: 300.85
                },
                "111": {
                    y: 301.4
                },
                "112": {
                    y: 302
                },
                "113": {
                    y: 302.55
                },
                "114": {
                    y: 303.15
                },
                "115": {
                    y: 303.75
                },
                "116": {
                    y: 304.3
                },
                "117": {
                    y: 304.9
                },
                "118": {
                    y: 305.45
                }
            })
            .addTimedChild(instance56, 93, 3, {
                "93": {
                    x: 493,
                    y: 297.35
                },
                "94": {
                    y: 296.4
                },
                "95": {
                    y: 295.4
                }
            })
            .addTimedChild(instance58, 96, 11, {
                "96": {
                    x: 493,
                    y: 294.45
                },
                "105": {
                    y: 295.4
                },
                "106": {
                    y: 296.4
                }
            })
            .addTimedChild(instance3, 0, 104, {
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
                    a: 0.96
                },
                "7": {
                    a: 0.95
                },
                "8": {
                    a: 0.93
                },
                "9": {
                    a: 0.92
                },
                "10": {
                    a: 0.9
                },
                "11": {
                    a: 0.89
                },
                "12": {
                    a: 0.87
                },
                "13": {
                    a: 0.86
                },
                "14": {
                    a: 0.84
                },
                "15": {
                    a: 0.82
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
                    a: 0.59
                },
                "31": {
                    a: 0.58
                },
                "32": {
                    a: 0.56
                },
                "33": {
                    a: 0.55
                },
                "34": {
                    a: 0.53
                },
                "35": {
                    a: 0.52
                },
                "36": {
                    a: 0.5
                },
                "37": {
                    a: 0.48
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
            .addTimedChild(instance59, 97, 7, {
                "97": {
                    x: 668.6,
                    y: 361.1,
                    a: 0
                }
            })
            .addTimedChild(instance63, 107, 3, {
                "107": {
                    x: 493,
                    y: 297.35
                },
                "108": {
                    y: 298.3
                },
                "109": {
                    y: 299.3
                }
            })
            .addTimedChild(instance64, 110, 3, {
                "110": {
                    x: 493,
                    y: 300.25
                },
                "111": {
                    y: 301.2
                },
                "112": {
                    y: 302.2
                }
            })
            .addTimedChild(instance65, 113, 3, {
                "113": {
                    x: 493,
                    y: 303.15
                },
                "114": {
                    y: 304.1
                },
                "115": {
                    y: 305.1
                }
            })
            .addTimedChild(instance66, 116, 3, {
                "116": {
                    x: 493,
                    y: 306.05
                },
                "117": {
                    y: 307
                },
                "118": {
                    y: 308
                }
            })
            .addTimedChild(instance68, 119, 14, {
                "119": {
                    x: 382.95,
                    y: 306.05
                },
                "120": {
                    y: 307.1
                },
                "121": {
                    y: 308.1
                },
                "122": {
                    y: 309.15
                },
                "123": {
                    y: 310.2
                },
                "124": {
                    y: 311.25
                },
                "125": {
                    y: 312.25
                },
                "126": {
                    y: 313.3
                },
                "127": {
                    y: 314.35
                },
                "128": {
                    y: 315.35
                },
                "129": {
                    y: 316.4
                },
                "130": {
                    y: 317.45
                },
                "131": {
                    y: 318.5
                },
                "132": {
                    y: 319.5
                }
            })
            .addTimedChild(instance67, 119, 3, {
                "119": {
                    x: 493,
                    y: 308.95
                },
                "120": {
                    y: 309.9
                },
                "121": {
                    y: 310.9
                }
            })
            .addTimedChild(instance69, 122, 3, {
                "122": {
                    x: 493,
                    y: 311.85
                },
                "123": {
                    y: 312.8
                },
                "124": {
                    y: 313.8
                }
            })
            .addTimedChild(instance70, 125, 3, {
                "125": {
                    x: 493,
                    y: 314.75
                },
                "126": {
                    y: 315.7
                },
                "127": {
                    y: 316.7
                }
            })
            .addTimedChild(instance71, 128, 3, {
                "128": {
                    x: 493,
                    y: 317.65
                },
                "129": {
                    y: 318.6
                },
                "130": {
                    y: 319.6
                }
            })
            .addTimedChild(instance73, 133, 13, {
                "133": {
                    x: 382.95,
                    y: 320.55
                },
                "134": {
                    y: 321.65
                },
                "135": {
                    y: 322.8
                },
                "136": {
                    y: 323.9
                },
                "137": {
                    y: 325
                },
                "138": {
                    y: 326.15
                },
                "139": {
                    y: 327.25
                },
                "140": {
                    y: 328.35
                },
                "141": {
                    y: 329.45
                },
                "142": {
                    y: 330.6
                },
                "143": {
                    y: 331.7
                },
                "144": {
                    y: 332.8
                },
                "145": {
                    y: 333.95
                }
            })
            .addTimedChild(instance72, 131, 3, {
                "131": {
                    x: 493,
                    y: 320.55
                },
                "132": {
                    y: 321.5
                },
                "133": {
                    y: 322.5
                }
            })
            .addTimedChild(instance74, 134, 3, {
                "134": {
                    x: 493,
                    y: 323.45
                },
                "135": {
                    y: 324.4
                },
                "136": {
                    y: 325.4
                }
            })
            .addTimedChild(instance75, 137, 3, {
                "137": {
                    x: 493,
                    y: 326.35
                },
                "138": {
                    y: 327.3
                },
                "139": {
                    y: 328.3
                }
            })
            .addTimedChild(instance76, 140, 3, {
                "140": {
                    x: 493,
                    y: 329.25
                },
                "141": {
                    y: 330.2
                },
                "142": {
                    y: 331.2
                }
            })
            .addTimedChild(instance77, 143, 3, {
                "143": {
                    x: 493,
                    y: 332.15
                },
                "144": {
                    y: 333.1
                },
                "145": {
                    y: 334.1
                }
            })
            .addTimedChild(instance79, 146, 30, {
                "146": {
                    x: 382.95,
                    y: 335.05
                },
                "147": {
                    y: 335.95
                },
                "148": {
                    y: 336.8
                },
                "149": {
                    y: 337.7
                },
                "150": {
                    y: 338.55
                },
                "151": {
                    y: 339.45
                },
                "152": {
                    y: 340.3
                },
                "153": {
                    y: 341.2
                },
                "154": {
                    y: 342.05
                },
                "155": {
                    y: 342.95
                },
                "156": {
                    y: 343.8
                },
                "157": {
                    y: 344.7
                },
                "158": {
                    y: 345.55
                },
                "159": {
                    y: 346.45
                },
                "160": {
                    y: 347.3
                },
                "161": {
                    y: 348.2
                },
                "162": {
                    y: 349.1
                },
                "163": {
                    y: 349.95
                },
                "164": {
                    y: 350.85
                },
                "165": {
                    y: 351.7
                },
                "166": {
                    y: 352.6
                },
                "167": {
                    y: 353.45
                },
                "168": {
                    y: 354.35
                },
                "169": {
                    y: 355.2
                },
                "170": {
                    y: 356.1
                },
                "171": {
                    y: 356.95
                },
                "172": {
                    y: 357.85
                },
                "173": {
                    y: 358.7
                },
                "174": {
                    y: 359.6
                },
                "175": {
                    y: 360.45
                }
            })
            .addTimedChild(instance78, 146, 3, {
                "146": {
                    x: 493,
                    y: 335.05
                }
            })
            .addTimedChild(instance80, 149, 3, {
                "149": {
                    x: 493,
                    y: 335.05
                },
                "150": {
                    y: 336.8
                },
                "151": {
                    y: 338.55
                }
            })
            .addTimedChild(instance81, 152, 3, {
                "152": {
                    x: 493,
                    y: 340.3
                },
                "153": {
                    y: 341.2
                },
                "154": {
                    y: 342.05
                }
            })
            .addTimedChild(instance82, 155, 3, {
                "155": {
                    x: 493,
                    y: 342.95
                },
                "156": {
                    y: 343.8
                },
                "157": {
                    y: 344.7
                }
            })
            .addTimedChild(instance83, 158, 3, {
                "158": {
                    x: 493,
                    y: 345.55
                },
                "159": {
                    y: 346.45
                },
                "160": {
                    y: 347.3
                }
            })
            .addTimedChild(instance84, 161, 2, {
                "161": {
                    x: 493,
                    y: 348.2
                },
                "162": {
                    y: 349.1
                }
            })
            .addTimedChild(instance85, 163, 3, {
                "163": {
                    x: 493,
                    y: 349.95
                },
                "164": {
                    y: 350.8
                },
                "165": {
                    y: 351.7
                }
            })
            .addTimedChild(instance86, 166, 3, {
                "166": {
                    x: 493,
                    y: 352.55
                },
                "167": {
                    y: 353.45
                },
                "168": {
                    y: 354.3
                }
            })
            .addTimedChild(instance87, 169, 3, {
                "169": {
                    x: 493,
                    y: 355.2
                },
                "170": {
                    y: 356.1
                },
                "171": {
                    y: 356.95
                }
            })
            .addTimedChild(instance88, 172, 4, {
                "172": {
                    x: 493,
                    y: 357.85
                },
                "173": {
                    y: 358.75
                },
                "174": {
                    y: 359.6
                },
                "175": {
                    y: 360.5
                }
            })
            .addTimedChild(instance90, 176, 13, {
                "176": {
                    x: 382.95,
                    y: 361.35
                },
                "177": {
                    y: 362.35
                },
                "178": {
                    y: 363.35
                },
                "179": {
                    y: 364.4
                },
                "180": {
                    y: 365.4
                },
                "181": {
                    y: 366.4
                },
                "182": {
                    y: 367.4
                },
                "183": {
                    y: 368.45
                },
                "184": {
                    y: 369.45
                },
                "185": {
                    y: 370.45
                },
                "186": {
                    y: 371.45
                },
                "187": {
                    y: 372.5
                },
                "188": {
                    y: 373.5
                }
            })
            .addTimedChild(instance89, 176, 3, {
                "176": {
                    x: 493,
                    y: 361.35
                },
                "177": {
                    y: 362.25
                },
                "178": {
                    y: 363.1
                }
            })
            .addTimedChild(instance91, 179, 3, {
                "179": {
                    x: 493,
                    y: 364
                },
                "180": {
                    y: 364.85
                },
                "181": {
                    y: 365.75
                }
            })
            .addTimedChild(instance92, 182, 3, {
                "182": {
                    x: 493,
                    y: 366.6
                },
                "183": {
                    y: 367.5
                },
                "184": {
                    y: 368.35
                }
            })
            .addTimedChild(instance93, 185, 3, {
                "185": {
                    x: 493,
                    y: 369.25
                },
                "186": {
                    y: 370.1
                },
                "187": {
                    y: 371
                }
            })
            .addTimedChild(instance95, 189, 6, {
                "189": {
                    x: 382.95,
                    y: 374.5
                }
            })
            .addTimedChild(instance94, 188, 3, {
                "188": {
                    x: 493,
                    y: 371.85
                },
                "189": {
                    y: 372.75
                },
                "190": {
                    y: 373.6
                }
            })
            .addTimedChild(instance96, 191, 4, {
                "191": {
                    x: 493,
                    y: 374.5
                }
            })
            .addTimedChild(instance98, 195, 5)
            .addTimedChild(instance97, 195, 5);
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
        background: 0x4e6040,
        width: 1624,
        height: 750,
        framerate: 30,
        totalFrames: 200,
        library: lib
    };
}