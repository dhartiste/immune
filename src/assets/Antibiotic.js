(function (PIXI, lib) {

    var MovieClip = PIXI.animate.MovieClip;
    var Container = PIXI.Container;
    var Sprite = PIXI.Sprite;
    var fromFrame = PIXI.Texture.fromFrame;
    var Text = PIXI.Text;
    var Graphics = PIXI.Graphics;
    var shapes = PIXI.animate.ShapesCache;

    lib.hitsource = Container.extend(function () {
        Container.call(this);
        var instance1 = new Graphics()
            .drawCommands(shapes.Antibiotic[0]);
        this.addChild(instance1);
    });

    lib.antibiotic = Container.extend(function () {
        Container.call(this);
        var instance1 = new Graphics()
            .drawCommands(shapes.Antibiotic[1])
            .setTransform(-518.7, -396.9, 1.298, 1.298);
        this.addChild(instance1);
    });

    lib.antibiotic_1 = Container.extend(function () {
        Container.call(this);
        var instance16 = new Graphics()
            .drawCommands(shapes.Antibiotic[13])
            .setTransform(-518.85, -389.35, 1.298, 1.298);
        var instance15 = new Graphics()
            .drawCommands(shapes.Antibiotic[12])
            .setTransform(-518.85, -389.35, 1.298, 1.298);
        var instance14 = new Graphics()
            .drawCommands(shapes.Antibiotic[11])
            .setTransform(-518.85, -389.35, 1.298, 1.298);
        var instance13 = new Graphics()
            .drawCommands(shapes.Antibiotic[10])
            .setTransform(-518.85, -389.35, 1.298, 1.298);
        var instance12 = new Graphics()
            .drawCommands(shapes.Antibiotic[9]);
        var instance11 = new Graphics()
            .drawCommands(shapes.Antibiotic[2])
            .setTransform(-518.85, -389.35, 1.298, 1.298);
        var instance10 = new Graphics()
            .drawCommands(shapes.Antibiotic[8])
            .setTransform(-518.85, -389.35, 1.298, 1.298);
        var instance9 = new Graphics()
            .drawCommands(shapes.Antibiotic[6])
            .setTransform(-545.46, -366.569, 1.438, 1.401);
        var instance8 = new Graphics()
            .drawCommands(shapes.Antibiotic[7]);
        var instance7 = new Graphics()
            .drawCommands(shapes.Antibiotic[6])
            .setTransform(-518.85, -389.35, 1.298, 1.298);
        var instance6 = new Graphics()
            .drawCommands(shapes.Antibiotic[5])
            .setTransform(-518.85, -389.35, 1.298, 1.298);
        var instance5 = new Graphics()
            .drawCommands(shapes.Antibiotic[4]);
        var instance4 = new Graphics()
            .drawCommands(shapes.Antibiotic[3]);
        var instance3 = new Graphics()
            .drawCommands(shapes.Antibiotic[2])
            .setTransform(519.8, -389.45, 1.298, 1.298, 0, 0, 3.142);
        var instance2 = new lib.antibiotic()
            .setTransform(-0.15, 7.55);
        this[instance2.name = "antibiotic"] = instance2;
        var instance1 = new lib.hitsource()
            .setTransform(-14.5, -9.85, 0.646, 0.646)
            .setAlpha(0);
        this[instance1.name = "hittestie"] = instance1;
        this.addChild(instance16, instance15, instance14, instance13, instance12, instance11, instance10, instance9, instance8, instance7, instance6, instance5, instance4, instance3, instance2, instance1);
    });

    lib.hitme = Container.extend(function () {
        Container.call(this);
        var instance1 = new Graphics()
            .drawCommands(shapes.Antibiotic[0])
            .setTransform(-5.7, 0, 0.461, 1.849);
        this.addChild(instance1);
    });

    lib.syringe = Container.extend(function () {
        Container.call(this);
        var instance20 = new Graphics()
            .drawCommands(shapes.Antibiotic[32])
            .setTransform(-436.9, -242.4);
        var instance19 = new Graphics()
            .drawCommands(shapes.Antibiotic[31])
            .setTransform(-436.9, -242.4);
        var instance18 = new Graphics()
            .drawCommands(shapes.Antibiotic[30])
            .setTransform(-436.9, -242.4);
        var instance17 = new Graphics()
            .drawCommands(shapes.Antibiotic[29]);
        var instance16 = new Graphics()
            .drawCommands(shapes.Antibiotic[28])
            .setTransform(-436.9, -242.4);
        var instance15 = new Graphics()
            .drawCommands(shapes.Antibiotic[27])
            .setTransform(-436.9, -242.4);
        var instance14 = new Graphics()
            .drawCommands(shapes.Antibiotic[26])
            .setTransform(-436.9, -242.4);
        var instance13 = new Graphics()
            .drawCommands(shapes.Antibiotic[25])
            .setTransform(-436.9, -242.4);
        var instance12 = new Graphics()
            .drawCommands(shapes.Antibiotic[24])
            .setTransform(-436.9, -242.4);
        var instance11 = new Graphics()
            .drawCommands(shapes.Antibiotic[23])
            .setTransform(-436.9, -242.4);
        var instance10 = new Graphics()
            .drawCommands(shapes.Antibiotic[22])
            .setTransform(-436.9, -242.4);
        var instance9 = new Graphics()
            .drawCommands(shapes.Antibiotic[21])
            .setTransform(-436.9, -242.4);
        var instance8 = new Graphics()
            .drawCommands(shapes.Antibiotic[20])
            .setTransform(-436.9, -242.4);
        var instance7 = new Graphics()
            .drawCommands(shapes.Antibiotic[19])
            .setTransform(-436.9, -242.4);
        var instance6 = new Graphics()
            .drawCommands(shapes.Antibiotic[18])
            .setTransform(-436.9, -242.4);
        var instance5 = new Graphics()
            .drawCommands(shapes.Antibiotic[17])
            .setTransform(-436.9, -242.4);
        var instance4 = new Graphics()
            .drawCommands(shapes.Antibiotic[16])
            .setTransform(-436.9, -242.4);
        var instance3 = new Graphics()
            .drawCommands(shapes.Antibiotic[15])
            .setTransform(-436.9, -242.4);
        var instance2 = new Graphics()
            .drawCommands(shapes.Antibiotic[14])
            .setTransform(-436.9, -242.4);
        var instance1 = new lib.hitme()
            .setTransform(20, 68.85)
            .setAlpha(0);
        this[instance1.name = "hitme"] = instance1;
        this.addChild(instance20, instance19, instance18, instance17, instance16, instance15, instance14, instance13, instance12, instance11, instance10, instance9, instance8, instance7, instance6, instance5, instance4, instance3, instance2, instance1);
    });

    lib.syringe_1 = MovieClip.extend(function () {
        MovieClip.call(this, {
            duration: 2
        });
        var instance1 = new lib.syringe();
        this[instance1.name = "syringe"] = instance1;
        this.addTimedChild(instance1, 0, 2, {
            "0": {
                c: [
                    0.58,
                    0.42,
                    0.58,
                    0.42,
                    0.58,
                    0.42
                ]
            },
            "1": {
                c: [
                    1,
                    0,
                    1,
                    0,
                    1,
                    0
                ]
            }
        });
    });

    lib.gray_Nat = Container.extend(function () {
        Container.call(this);
        var instance1 = new Sprite(fromFrame("NatOutline"));
        this.addChild(instance1);
    });

    lib.gray_kid2 = Container.extend(function () {
        Container.call(this);
        var instance2 = new lib.gray_Nat()
            .setColorTransform(0, 0.61, 0, 0.54, 0, 0.35);
        this[instance2.name = "patient"] = instance2;
        var instance1 = new lib.hitme()
            .setTransform(38, 25.05, 1.75, 1.848)
            .setAlpha(0);
        this[instance1.name = "hitme"] = instance1;
        this.addChild(instance2, instance1);
    });

    lib.girl = MovieClip.extend(function () {
        MovieClip.call(this, {
            duration: 2
        });
        var instance1 = new lib.gray_kid2();
        this.addTimedChild(instance1, 0, 2, {
            "0": {
                c: [
                    0.49,
                    0.51,
                    0.49,
                    0.51,
                    0.49,
                    0.51
                ]
            },
            "1": {
                c: [
                    0,
                    0.64,
                    0,
                    0.54,
                    0,
                    0.35
                ]
            }
        });
    });

    lib.inject_txt = Container.extend(function () {
        Container.call(this);
        var instance1 = new Text("Inject")
            .setStyle({
                fontFamily: "Tahoma",
                fontSize: 14,
                fontWeight: "bold",
                leading: 2
            })
            .setTransform(2, 2);
        this.addChild(instance1);
    });

    lib.expose_txt = Container.extend(function () {
        Container.call(this);
        var instance1 = new Text("Expose")
            .setStyle({
                fontFamily: "Tahoma",
                fontSize: 14,
                fontWeight: "bold",
                leading: 2
            })
            .setTransform(2, 2);
        this.addChild(instance1);
    });

    lib.Antibiotic = MovieClip.extend(function () {
        MovieClip.call(this, {
            duration: 1,
            framerate: 30
        });
        var instance7 = new Graphics()
            .drawCommands(shapes.Antibiotic[33]);
        var instance6 = new lib.expose_txt()
            .setTransform(1022.25, 245.05)
            .setColorTransform(0, 0.82, 0, 0.57, 0, 0.08);
        var instance5 = new lib.inject_txt()
            .setTransform(799.1, 245.05)
            .setColorTransform(0, 0.82, 0, 0.57, 0, 0.08);
        var instance4 = new Text("now that your patient is sick, try giving some antibiotics to make them feel better\n")
            .setStyle({
                fontFamily: "Tahoma",
                fontSize: 12,
                fontWeight: "bold",
                fill: "#4e6040",
                leading: 2,
                wordWrap: true,
                wordWrapWidth: 311
            })
            .setTransform(796.35, 124.55);
        this[instance4.name = "instructions"] = instance4;
        var instance3 = new lib.girl()
            .setTransform(997.4, 293.1);
        this[instance3.name = "girl"] = instance3;
        var instance2 = new lib.syringe_1()
            .setTransform(794.35, 302.1);
        this[instance2.name = "syringe"] = instance2;
        var instance1 = new lib.antibiotic_1()
            .setTransform(630.1, 447.05);
        this[instance1.name = "antibiotic"] = instance1;
        this.addChild(instance7, instance6, instance5, instance4, instance3, instance2, instance1);
    });

    lib.Antibiotic.assets = {
        "Antibiotic": "images/Antibiotic.shapes.txt",
        "Antibiotic_atlas_1": "images/Antibiotic_atlas_1.json"
    };
})(PIXI, lib = lib || {});
var lib;
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        stage: lib.Antibiotic,
        background: 0xffffff,
        width: 1624,
        height: 750,
        framerate: 30,
        totalFrames: 1,
        library: lib
    };
}