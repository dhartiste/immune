(function (PIXI, lib) {

    var MovieClip = PIXI.animate.MovieClip;
    var Container = PIXI.Container;
    var Sprite = PIXI.Sprite;
    var fromFrame = PIXI.Texture.fromFrame;
    var Text = PIXI.Text;
    var Graphics = PIXI.Graphics;
    var shapes = PIXI.animate.ShapesCache;

    lib.invisible = MovieClip.extend(function () {
        MovieClip.call(this, {
            duration: 4
        });
        var instance1 = new Graphics()
            .drawCommands(shapes.Game[0]);
        this.addTimedChild(instance1, 3, 1);
    });

    lib.hitsource = Container.extend(function () {
        Container.call(this);
        var instance1 = new Graphics()
            .drawCommands(shapes.Game[0])
            .setTransform(0, 0, 0.468, 0.55);
        this.addChild(instance1);
    });

    lib.antibiotic = Container.extend(function () {
        Container.call(this);
        var instance17 = new Graphics()
            .drawCommands(shapes.Game[13])
            .setTransform(-518.85, -389.35, 1.298, 1.298);
        var instance16 = new Graphics()
            .drawCommands(shapes.Game[12])
            .setTransform(-518.85, -389.35, 1.298, 1.298);
        var instance15 = new Graphics()
            .drawCommands(shapes.Game[11])
            .setTransform(-518.85, -389.35, 1.298, 1.298);
        var instance14 = new Graphics()
            .drawCommands(shapes.Game[10])
            .setTransform(-518.85, -389.35, 1.298, 1.298);
        var instance13 = new Graphics()
            .drawCommands(shapes.Game[9])
            .setTransform(-518.85, -389.35, 1.298, 1.298);
        var instance12 = new Graphics()
            .drawCommands(shapes.Game[8]);
        var instance11 = new Graphics()
            .drawCommands(shapes.Game[1])
            .setTransform(-518.85, -389.35, 1.298, 1.298);
        var instance10 = new Graphics()
            .drawCommands(shapes.Game[7])
            .setTransform(-518.85, -389.35, 1.298, 1.298);
        var instance9 = new Graphics()
            .drawCommands(shapes.Game[5])
            .setTransform(-545.46, -366.569, 1.438, 1.401);
        var instance8 = new Graphics()
            .drawCommands(shapes.Game[6]);
        var instance7 = new Graphics()
            .drawCommands(shapes.Game[5])
            .setTransform(-518.85, -389.35, 1.298, 1.298);
        var instance6 = new Graphics()
            .drawCommands(shapes.Game[4])
            .setTransform(-518.85, -389.35, 1.298, 1.298);
        var instance5 = new Graphics()
            .drawCommands(shapes.Game[3]);
        var instance4 = new Graphics()
            .drawCommands(shapes.Game[2]);
        var instance3 = new Graphics()
            .drawCommands(shapes.Game[1])
            .setTransform(519.8, -389.45, 1.298, 1.298, 0, 0, 3.142);
        var instance2 = new lib.hitsource()
            .setTransform(-14.5, -9.85, 0.646, 0.646)
            .setAlpha(0);
        this[instance2.name = "hittestie"] = instance2;
        var instance1 = new lib.invisible()
            .setTransform(-34.25, -30.65, 0.659, 0.659)
            .setAlpha(0);
        this[instance1.name = "btnAntibody"] = instance1;
        this.addChild(instance17, instance16, instance15, instance14, instance13, instance12, instance11, instance10, instance9, instance8, instance7, instance6, instance5, instance4, instance3, instance2, instance1);
    });

    lib.virus_attenuated = Container.extend(function () {
        Container.call(this);
        var instance38 = new Graphics()
            .drawCommands(shapes.Game[44]);
        var instance37 = new Graphics()
            .drawCommands(shapes.Game[43]);
        var instance36 = new Graphics()
            .drawCommands(shapes.Game[42])
            .setTransform(-238, -129.95);
        var instance35 = new Graphics()
            .drawCommands(shapes.Game[41])
            .setTransform(-238, -129.95);
        var instance34 = new Graphics()
            .drawCommands(shapes.Game[40])
            .setTransform(-238, -129.95);
        var instance33 = new Graphics()
            .drawCommands(shapes.Game[39])
            .setTransform(-238, -129.95);
        var instance32 = new Graphics()
            .drawCommands(shapes.Game[38])
            .setTransform(-238, -129.95);
        var instance31 = new Graphics()
            .drawCommands(shapes.Game[37])
            .setTransform(-238, -129.95);
        var instance30 = new Graphics()
            .drawCommands(shapes.Game[36])
            .setTransform(-238, -129.95);
        var instance29 = new Graphics()
            .drawCommands(shapes.Game[35])
            .setTransform(-238, -129.95);
        var instance28 = new Graphics()
            .drawCommands(shapes.Game[34])
            .setTransform(-238, -129.95);
        var instance27 = new Graphics()
            .drawCommands(shapes.Game[33])
            .setTransform(-238, -129.95);
        var instance26 = new Graphics()
            .drawCommands(shapes.Game[32])
            .setTransform(-238, -129.95);
        var instance25 = new Graphics()
            .drawCommands(shapes.Game[31])
            .setTransform(-238, -129.95);
        var instance24 = new Graphics()
            .drawCommands(shapes.Game[30])
            .setTransform(-238, -129.95);
        var instance23 = new Graphics()
            .drawCommands(shapes.Game[29])
            .setTransform(-225.45, -138.75, 0.868, 1.109);
        var instance22 = new Graphics()
            .drawCommands(shapes.Game[29])
            .setTransform(-238, -129.95);
        var instance21 = new Graphics()
            .drawCommands(shapes.Game[28])
            .setTransform(-245.8, -113.35, 0.995);
        var instance20 = new Graphics()
            .drawCommands(shapes.Game[28])
            .setTransform(-238, -129.95);
        var instance19 = new Graphics()
            .drawCommands(shapes.Game[27])
            .setTransform(-238, -129.95);
        var instance18 = new Graphics()
            .drawCommands(shapes.Game[26])
            .setTransform(-306.3, -135.25, 1.115, 0.822);
        var instance17 = new Graphics()
            .drawCommands(shapes.Game[26])
            .setTransform(-238, -129.95);
        var instance16 = new Graphics()
            .drawCommands(shapes.Game[25])
            .setTransform(-238, -129.95);
        var instance15 = new Graphics()
            .drawCommands(shapes.Game[24])
            .setTransform(-238, -129.95);
        var instance14 = new Graphics()
            .drawCommands(shapes.Game[23])
            .setTransform(-238, -129.95);
        var instance13 = new Graphics()
            .drawCommands(shapes.Game[22])
            .setTransform(-238, -129.95);
        var instance12 = new Graphics()
            .drawCommands(shapes.Game[21])
            .setTransform(-238, -129.95);
        var instance11 = new Graphics()
            .drawCommands(shapes.Game[20])
            .setTransform(-264.35, -124.2, 0.997, 1.003);
        var instance10 = new Graphics()
            .drawCommands(shapes.Game[19])
            .setTransform(-264.35, -124.2, 0.997, 1.003);
        var instance9 = new Graphics()
            .drawCommands(shapes.Game[20])
            .setTransform(-238, -129.95);
        var instance8 = new Graphics()
            .drawCommands(shapes.Game[19])
            .setTransform(-238, -129.95);
        var instance7 = new Graphics()
            .drawCommands(shapes.Game[18])
            .setTransform(-238, -129.95);
        var instance6 = new Graphics()
            .drawCommands(shapes.Game[17])
            .setTransform(-238, -129.95);
        var instance5 = new Graphics()
            .drawCommands(shapes.Game[16])
            .setTransform(-238, -129.95);
        var instance4 = new Graphics()
            .drawCommands(shapes.Game[15])
            .setTransform(-238, -129.95);
        var instance3 = new Graphics()
            .drawCommands(shapes.Game[14]);
        var instance2 = new lib.invisible()
            .setTransform(-52.8, -45.1)
            .setAlpha(0);
        this[instance2.name = "b_av"] = instance2;
        var instance1 = new lib.hitsource()
            .setTransform(-7.9, -7.5, 0.502, 0.422)
            .setAlpha(0);
        this[instance1.name = "hittestie"] = instance1;
        this.addChild(instance38, instance37, instance36, instance35, instance34, instance33, instance32, instance31, instance30, instance29, instance28, instance27, instance26, instance25, instance24, instance23, instance22, instance21, instance20, instance19, instance18, instance17, instance16, instance15, instance14, instance13, instance12, instance11, instance10, instance9, instance8, instance7, instance6, instance5, instance4, instance3, instance2, instance1);
    });

    lib.virus_dead = Container.extend(function () {
        Container.call(this);
        var instance33 = new Graphics()
            .drawCommands(shapes.Game[62])
            .setTransform(-242.8, -307.2);
        var instance32 = new Graphics()
            .drawCommands(shapes.Game[42])
            .setTransform(-237.6, -133.1);
        var instance31 = new Graphics()
            .drawCommands(shapes.Game[61])
            .setTransform(-242.8, -307.2);
        var instance30 = new Graphics()
            .drawCommands(shapes.Game[60])
            .setTransform(-242.8, -307.2);
        var instance29 = new Graphics()
            .drawCommands(shapes.Game[59])
            .setTransform(-242.8, -307.2);
        var instance28 = new Graphics()
            .drawCommands(shapes.Game[58])
            .setTransform(-242.8, -307.2);
        var instance27 = new Graphics()
            .drawCommands(shapes.Game[57])
            .setTransform(-242.8, -307.2);
        var instance26 = new Graphics()
            .drawCommands(shapes.Game[56])
            .setTransform(-242.8, -307.2);
        var instance25 = new Graphics()
            .drawCommands(shapes.Game[55])
            .setTransform(-242.8, -307.2);
        var instance24 = new Graphics()
            .drawCommands(shapes.Game[54])
            .setTransform(-242.8, -307.2);
        var instance23 = new Graphics()
            .drawCommands(shapes.Game[45])
            .setTransform(-242.8, -307.2);
        var instance22 = new Graphics()
            .drawCommands(shapes.Game[53])
            .setTransform(-242.8, -307.2);
        var instance21 = new Graphics()
            .drawCommands(shapes.Game[52])
            .setTransform(-242.8, -307.2);
        var instance20 = new Graphics()
            .drawCommands(shapes.Game[25])
            .setTransform(-257.05, -198.65, 1, 0.783);
        var instance19 = new Graphics()
            .drawCommands(shapes.Game[25])
            .setTransform(-237.6, -198.65, 1, 0.783);
        var instance18 = new Graphics()
            .drawCommands(shapes.Game[50])
            .setTransform(-329.55, -337.2, 0.949, 0.993);
        var instance17 = new Graphics()
            .drawCommands(shapes.Game[50])
            .setTransform(-319.7, -356.2, 0.949);
        var instance16 = new Graphics()
            .drawCommands(shapes.Game[49])
            .setTransform(-316.5, -250, 0.941, 0.988);
        var instance15 = new Graphics()
            .drawCommands(shapes.Game[49])
            .setTransform(-326.9, -264.8, 0.941, 0.983);
        var instance14 = new Graphics()
            .drawCommands(shapes.Game[51])
            .setTransform(-262.25, -307.2);
        var instance13 = new Graphics()
            .drawCommands(shapes.Game[51])
            .setTransform(-242.8, -307.2);
        var instance12 = new Graphics()
            .drawCommands(shapes.Game[50])
            .setTransform(-252.2, -290.15);
        var instance11 = new Graphics()
            .drawCommands(shapes.Game[50])
            .setTransform(-242.8, -307.2);
        var instance10 = new Graphics()
            .drawCommands(shapes.Game[49])
            .setTransform(-251.6, -323.85, 0.996);
        var instance9 = new Graphics()
            .drawCommands(shapes.Game[49])
            .setTransform(-242.8, -307.2);
        var instance8 = new Graphics()
            .drawCommands(shapes.Game[48])
            .setTransform(-274.75, -307.2, 1.003);
        var instance7 = new Graphics()
            .drawCommands(shapes.Game[47])
            .setTransform(-274.75, -307.2, 1.003);
        var instance6 = new Graphics()
            .drawCommands(shapes.Game[48])
            .setTransform(-242.8, -307.2);
        var instance5 = new Graphics()
            .drawCommands(shapes.Game[47])
            .setTransform(-242.8, -307.2);
        var instance4 = new Graphics()
            .drawCommands(shapes.Game[46])
            .setTransform(-242.8, -307.2);
        var instance3 = new Graphics()
            .drawCommands(shapes.Game[45])
            .setTransform(243.95, -304.95, 1, 1, 0, 0, 3.142);
        var instance2 = new lib.invisible()
            .setTransform(-55.8, -48.9)
            .setAlpha(0);
        this[instance2.name = "b_dv"] = instance2;
        var instance1 = new lib.hitsource()
            .setTransform(-11.9, -11.35, 0.502, 0.422)
            .setAlpha(0);
        this[instance1.name = "hittestie"] = instance1;
        this.addChild(instance33, instance32, instance31, instance30, instance29, instance28, instance27, instance26, instance25, instance24, instance23, instance22, instance21, instance20, instance19, instance18, instance17, instance16, instance15, instance14, instance13, instance12, instance11, instance10, instance9, instance8, instance7, instance6, instance5, instance4, instance3, instance2, instance1);
    });

    lib.virus_alive = Container.extend(function () {
        Container.call(this);
        var instance37 = new Graphics()
            .drawCommands(shapes.Game[43])
            .setTransform(1.4, -2.15);
        var instance36 = new Graphics()
            .drawCommands(shapes.Game[42])
            .setTransform(-236.6, -132.1);
        var instance35 = new Graphics()
            .drawCommands(shapes.Game[75])
            .setTransform(-447.1, -305.1);
        var instance34 = new Graphics()
            .drawCommands(shapes.Game[74])
            .setTransform(-447.1, -305.1);
        var instance33 = new Graphics()
            .drawCommands(shapes.Game[73])
            .setTransform(-447.1, -305.1);
        var instance32 = new Graphics()
            .drawCommands(shapes.Game[72])
            .setTransform(-447.1, -305.1);
        var instance31 = new Graphics()
            .drawCommands(shapes.Game[71])
            .setTransform(-447.1, -305.1);
        var instance30 = new Graphics()
            .drawCommands(shapes.Game[70])
            .setTransform(-447.1, -305.1);
        var instance29 = new Graphics()
            .drawCommands(shapes.Game[69])
            .setTransform(-447.1, -305.1);
        var instance28 = new Graphics()
            .drawCommands(shapes.Game[68])
            .setTransform(-447.1, -305.1);
        var instance27 = new Graphics()
            .drawCommands(shapes.Game[45])
            .setTransform(-241.3, -307.35, 0.998, 1.004);
        var instance26 = new Graphics()
            .drawCommands(shapes.Game[67])
            .setTransform(-447.1, -305.1);
        var instance25 = new Graphics()
            .drawCommands(shapes.Game[52])
            .setTransform(-241.8, -305.45, 1, 0.998);
        var instance24 = new Graphics()
            .drawCommands(shapes.Game[25])
            .setTransform(-256.05, -197.65, 1, 0.783);
        var instance23 = new Graphics()
            .drawCommands(shapes.Game[25])
            .setTransform(-236.6, -197.65, 1, 0.783);
        var instance22 = new Graphics()
            .drawCommands(shapes.Game[66])
            .setTransform(-476.15, -305.1);
        var instance21 = new Graphics()
            .drawCommands(shapes.Game[65])
            .setTransform(-473.9, -305.1, 0.995);
        var instance20 = new Graphics()
            .drawCommands(shapes.Game[66])
            .setTransform(-447.1, -305.1);
        var instance19 = new Graphics()
            .drawCommands(shapes.Game[65])
            .setTransform(-447.1, -305.1);
        var instance18 = new Graphics()
            .drawCommands(shapes.Game[50])
            .setTransform(-328.55, -338.4, 0.949);
        var instance17 = new Graphics()
            .drawCommands(shapes.Game[50])
            .setTransform(-318.7, -355.2, 0.949);
        var instance16 = new Graphics()
            .drawCommands(shapes.Game[49])
            .setTransform(-315.5, -249, 0.941, 0.988);
        var instance15 = new Graphics()
            .drawCommands(shapes.Game[49])
            .setTransform(-324.7, -265.45, 0.937, 0.988);
        var instance14 = new Graphics()
            .drawCommands(shapes.Game[25])
            .setTransform(-256.05, -88.15, 1, 0.757);
        var instance13 = new Graphics()
            .drawCommands(shapes.Game[25])
            .setTransform(-236.6, -88.15, 1, 0.757);
        var instance12 = new Graphics()
            .drawCommands(shapes.Game[50])
            .setTransform(-252.6, -289.15, 1.005);
        var instance11 = new Graphics()
            .drawCommands(shapes.Game[50])
            .setTransform(-241.8, -306.2);
        var instance10 = new Graphics()
            .drawCommands(shapes.Game[49])
            .setTransform(-251.85, -322.85);
        var instance9 = new Graphics()
            .drawCommands(shapes.Game[49])
            .setTransform(-241.8, -306.2);
        var instance8 = new Graphics()
            .drawCommands(shapes.Game[20])
            .setTransform(-122.6, -60.75, 0.43, 0.432);
        var instance7 = new Graphics()
            .drawCommands(shapes.Game[64])
            .setTransform(-476.4, -305.1);
        var instance6 = new Graphics()
            .drawCommands(shapes.Game[20])
            .setTransform(-93.3, -60.75, 0.43, 0.432);
        var instance5 = new Graphics()
            .drawCommands(shapes.Game[64])
            .setTransform(-447.1, -305.1);
        var instance4 = new Graphics()
            .drawCommands(shapes.Game[63])
            .setTransform(-447.1, -305.1);
        var instance3 = new lib.invisible()
            .setTransform(-53.95, -47.9)
            .setAlpha(0);
        this[instance3.name = "b_lv"] = instance3;
        var instance2 = new Graphics()
            .drawCommands(shapes.Game[45])
            .setTransform(244.4, -305.15, 0.998, 1.004, 0, 0, 3.142);
        var instance1 = new lib.hitsource()
            .setTransform(-12.3, -12.75, 0.502, 0.422)
            .setAlpha(0);
        this[instance1.name = "hittestie"] = instance1;
        this.addChild(instance37, instance36, instance35, instance34, instance33, instance32, instance31, instance30, instance29, instance28, instance27, instance26, instance25, instance24, instance23, instance22, instance21, instance20, instance19, instance18, instance17, instance16, instance15, instance14, instance13, instance12, instance11, instance10, instance9, instance8, instance7, instance6, instance5, instance4, instance3, instance2, instance1);
    });

    lib.protein = Container.extend(function () {
        Container.call(this);
        var instance1 = new Sprite(fromFrame("protein1"))
            .setTransform(-26, -31);
        this.addChild(instance1);
    });

    lib.bacteria = Container.extend(function () {
        Container.call(this);
        var instance31 = new Graphics()
            .drawCommands(shapes.Game[99])
            .setTransform(-329.2, -306.5);
        var instance30 = new Graphics()
            .drawCommands(shapes.Game[95])
            .setTransform(-306.4, -305.9, 0.996);
        var instance29 = new Graphics()
            .drawCommands(shapes.Game[94])
            .setTransform(-306.4, -305.9, 0.996);
        var instance28 = new Graphics()
            .drawCommands(shapes.Game[95])
            .setTransform(-285.9, -305, 0.996);
        var instance27 = new Graphics()
            .drawCommands(shapes.Game[94])
            .setTransform(-285.9, -305, 0.996);
        var instance26 = new Graphics()
            .drawCommands(shapes.Game[93])
            .setTransform(-238.4, -297.6, 0.98, 0.976);
        var instance25 = new Graphics()
            .drawCommands(shapes.Game[98])
            .setTransform(-329.2, -306.5);
        var instance24 = new Graphics()
            .drawCommands(shapes.Game[97])
            .setTransform(-329.2, -306.5);
        var instance23 = new Graphics()
            .drawCommands(shapes.Game[96])
            .setTransform(-329.2, -306.5);
        var instance22 = new Graphics()
            .drawCommands(shapes.Game[95])
            .setTransform(-329.2, -306.5);
        var instance21 = new Graphics()
            .drawCommands(shapes.Game[94])
            .setTransform(-329.2, -306.5);
        var instance20 = new Graphics()
            .drawCommands(shapes.Game[93])
            .setTransform(-329.2, -306.5);
        var instance19 = new Graphics()
            .drawCommands(shapes.Game[92])
            .setTransform(-329.2, -306.5);
        var instance18 = new Graphics()
            .drawCommands(shapes.Game[91])
            .setTransform(-329.2, -306.5);
        var instance17 = new Graphics()
            .drawCommands(shapes.Game[90])
            .setTransform(-329.2, -306.5);
        var instance16 = new Graphics()
            .drawCommands(shapes.Game[89])
            .setTransform(-329.2, -306.5);
        var instance15 = new Graphics()
            .drawCommands(shapes.Game[88])
            .setTransform(-329.2, -306.5);
        var instance14 = new Graphics()
            .drawCommands(shapes.Game[87])
            .setTransform(-329.2, -306.5);
        var instance13 = new Graphics()
            .drawCommands(shapes.Game[86])
            .setTransform(-329.2, -306.5);
        var instance12 = new Graphics()
            .drawCommands(shapes.Game[85])
            .setTransform(-329.2, -306.5);
        var instance11 = new Graphics()
            .drawCommands(shapes.Game[84])
            .setTransform(-329.2, -306.5);
        var instance10 = new Graphics()
            .drawCommands(shapes.Game[83])
            .setTransform(-329.2, -306.5);
        var instance9 = new Graphics()
            .drawCommands(shapes.Game[82])
            .setTransform(-329.2, -306.5);
        var instance8 = new Graphics()
            .drawCommands(shapes.Game[81])
            .setTransform(-329.2, -306.5);
        var instance7 = new Graphics()
            .drawCommands(shapes.Game[80])
            .setTransform(-329.2, -306.5);
        var instance6 = new Graphics()
            .drawCommands(shapes.Game[79])
            .setTransform(-329.2, -306.5);
        var instance5 = new Graphics()
            .drawCommands(shapes.Game[78])
            .setTransform(-329.2, -306.5);
        var instance4 = new Graphics()
            .drawCommands(shapes.Game[77])
            .setTransform(-329.2, -306.5);
        var instance3 = new lib.invisible()
            .setTransform(-79, -23.8, 1.608, 0.551)
            .setAlpha(0);
        this[instance3.name = "b_prot"] = instance3;
        var instance2 = new Graphics()
            .drawCommands(shapes.Game[76])
            .setTransform(-329.2, -306.5);
        var instance1 = new lib.hitsource()
            .setTransform(-4.9, -4.7, 0.307, 0.293)
            .setAlpha(0);
        this[instance1.name = "hittestie"] = instance1;
        this.addChild(instance31, instance30, instance29, instance28, instance27, instance26, instance25, instance24, instance23, instance22, instance21, instance20, instance19, instance18, instance17, instance16, instance15, instance14, instance13, instance12, instance11, instance10, instance9, instance8, instance7, instance6, instance5, instance4, instance3, instance2, instance1);
    });

    lib.LipsyncScene = Container.extend(function () {
        Container.call(this);
        var instance2 = new Graphics()
            .drawCommands(shapes.Game[100]);
        var instance1 = new Text("Lipsync w/ rhubarb")
            .setStyle({
                fontFamily: "Arial Rounded MT Bold",
                fontSize: 18,
                fill: "#fff",
                leading: 2
            })
            .setTransform(-96.95, -10.35);
        this.addChild(instance2, instance1);
    });

    lib.Paper = Container.extend(function () {
        Container.call(this);
        var instance1 = new Graphics()
            .drawCommands(shapes.Game[102]);
        this.addChild(instance1);
    });

    lib.Button = MovieClip.extend(function () {
        MovieClip.call(this, {
            duration: 2
        });
        var instance3 = new Graphics()
            .drawCommands(shapes.Game[105]);
        var instance2 = new Graphics()
            .drawCommands(shapes.Game[104]);
        var instance1 = new Graphics()
            .drawCommands(shapes.Game[103]);
        var instance4 = new Graphics()
            .drawCommands(shapes.Game[106])
            .setTransform(140.35, 38.75);
        this.addTimedChild(instance3, 0, 1)
            .addTimedChild(instance2, 0, 1, {
                "0": {
                    x: 140.35,
                    y: 38.75
                }
            })
            .addTimedChild(instance1, 0, 1, {
                "0": {
                    x: 140.35,
                    y: 28.85
                }
            })
            .addTimedChild(instance4, 1, 1);
    });

    lib.Remote = Container.extend(function () {
        Container.call(this);
        var instance2 = new Graphics()
            .drawCommands(shapes.Game[107]);
        var instance1 = new lib.Button()
            .setTransform(-98.35, -37.2);
        this[instance1.name = "button"] = instance1;
        this.addChild(instance2, instance1);
    });

    var Graphic1 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 117, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.Game[108]);
        this.addTimedChild(instance1);
    });

    var Graphic3 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 117, loop: false });
        var instance2 = new Graphics()
            .drawCommands(shapes.Game[109]);
        var instance1 = new Graphic1(MovieClip.SYNCHED);
        this.addTimedChild(instance2)
            .addTimedChild(instance1, 0, 117, {
                "0": {
                    x: -9.4,
                    y: -45.95,
                    sy: 1
                },
                "36": {
                    y: -46,
                    sy: 0.109
                },
                "37": {
                    y: -46.023,
                    sy: 0.555
                },
                "38": {
                    y: -45.95,
                    sy: 1
                },
                "72": {
                    y: -46,
                    sy: 0.109
                },
                "73": {
                    y: -45.95,
                    sy: 1
                },
                "75": {
                    y: -46,
                    sy: 0.109
                },
                "76": {
                    y: -46.023,
                    sy: 0.555
                },
                "77": {
                    y: -45.95,
                    sy: 1
                }
            });
    });

    var Graphic2 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 123, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.Game[110])
            .setTransform(-744.2, -383.1);
        this.addTimedChild(instance1);
    });

    lib.Screen = MovieClip.extend(function () {
        MovieClip.call(this, {
            duration: 123,
            labels: {
                turnOn: 0,
                turnOn_stop: 19,
                watchTV: 20,
                watchTV_loop: 109,
                turnOff: 110,
                turnOff_stop: 122
            }
        });
        var instance2 = new Graphics()
            .drawCommands(shapes.Game[111])
            .setTransform(-744.2, -383.1);
        var instance1 = new Graphic2(MovieClip.SYNCHED);
        var instance3 = new Graphic3(MovieClip.SYNCHED);
        this.addTimedChild(instance2)
            .addTimedChild(instance1, 0, 123, {
                "0": {
                    sx: 1,
                    sy: 1,
                    a: 0
                },
                "1": {
                    a: 0.05
                },
                "2": {
                    a: 0.11
                },
                "3": {
                    a: 0.16
                },
                "4": {
                    a: 0.21
                },
                "5": {
                    a: 0.26
                },
                "6": {
                    a: 0.32
                },
                "7": {
                    a: 0.37
                },
                "8": {
                    a: 0.42
                },
                "9": {
                    a: 0.47
                },
                "10": {
                    a: 0.53
                },
                "11": {
                    a: 0.58
                },
                "12": {
                    a: 0.63
                },
                "13": {
                    a: 0.68
                },
                "14": {
                    a: 0.74
                },
                "15": {
                    a: 0.79
                },
                "16": {
                    a: 0.84
                },
                "17": {
                    a: 0.89
                },
                "18": {
                    a: 0.95
                },
                "19": {
                    a: 1
                },
                "111": {
                    a: 0.8
                },
                "112": {
                    a: 0.59
                },
                "113": {
                    sx: 0.689,
                    sy: 0.689,
                    a: 0.51
                },
                "114": {
                    sx: 0.377,
                    sy: 0.377,
                    a: 0.43
                },
                "115": {
                    sx: 0.066,
                    sy: 0.066,
                    a: 0.35
                },
                "116": {
                    sx: 0.299,
                    sy: 0.052,
                    a: 0.52
                },
                "117": {
                    sx: 0.533,
                    sy: 0.038,
                    a: 0.68
                },
                "118": {
                    sx: 0.766,
                    sy: 0.024,
                    a: 0.84
                },
                "119": {
                    sx: 0.999,
                    sy: 0.01,
                    a: 1
                },
                "120": {
                    a: 0.67
                },
                "121": {
                    a: 0.33
                },
                "122": {
                    a: 0
                }
            })
            .addTimedChild(instance3, 6, 117, {
                "6": {
                    x: -3.05,
                    y: 16.35,
                    a: 0
                },
                "7": {
                    a: 0.08
                },
                "8": {
                    a: 0.15
                },
                "9": {
                    a: 0.23
                },
                "10": {
                    a: 0.31
                },
                "11": {
                    a: 0.38
                },
                "12": {
                    a: 0.46
                },
                "13": {
                    a: 0.54
                },
                "14": {
                    a: 0.62
                },
                "15": {
                    a: 0.69
                },
                "16": {
                    a: 0.77
                },
                "17": {
                    a: 0.85
                },
                "18": {
                    a: 0.92
                },
                "19": {
                    a: 1
                },
                "111": {
                    a: 0.75
                },
                "112": {
                    a: 0.5
                },
                "113": {
                    a: 0.25
                },
                "114": {
                    a: 0
                }
            });
    });

    lib.Game = MovieClip.extend(function () {
        MovieClip.call(this, {
            duration: 1,
            framerate: 30
        });
        var instance19 = new Graphics()
            .drawCommands(shapes.Game[116]);
        var instance18 = new Graphics()
            .drawCommands(shapes.Game[115])
            .setTransform(-5.15, -2.6);
        var instance17 = new Graphics()
            .drawCommands(shapes.Game[114]);
        var instance16 = new Graphics()
            .drawCommands(shapes.Game[113])
            .setTransform(30.8, -6.15);
        var instance15 = new Graphics()
            .drawCommands(shapes.Game[112])
            .setTransform(4.2, 12.6);
        var instance14 = new Graphics()
            .drawCommands(shapes.Game[112])
            .setTransform(4.2, 90);
        var instance13 = new lib.Screen()
            .setTransform(744.2, 383.1);
        this[instance13.name = "screen"] = instance13;
        var instance12 = new lib.Remote()
            .setTransform(762.85, 695.8);
        this[instance12.name = "remote"] = instance12;
        var instance11 = new lib.Paper()
            .setTransform(1150.2, 389);
        var instance10 = new Graphics()
            .drawCommands(shapes.Game[101]);
        var instance9 = new Text("Game + captions (here)")
            .setStyle({
                fontFamily: "Arial Rounded MT Bold",
                fontSize: 18,
                fill: "#fff",
                leading: 2
            })
            .setTransform(1042.95, 302.8);
        var instance8 = new lib.LipsyncScene()
            .setTransform(1148.9, 355.6);
        this[instance8.name = "lipsyncScene"] = instance8;
        var instance7 = new Text("WGBH TV Guide \n(example scenes)")
            .setStyle({
                fontFamily: "Arial Rounded MT Bold",
                fontSize: 20,
                fill: "#663499",
                leading: 2
            })
            .setAlign("center")
            .setTransform(1146.85, 235.55);
        var instance6 = new lib.bacteria()
            .setTransform(469.95, 114, 0.621, 0.621);
        this[instance6.name = "bacteria"] = instance6;
        var instance5 = new lib.protein()
            .setTransform(613.9, 124.1);
        this[instance5.name = "protein"] = instance5;
        var instance4 = new lib.virus_alive()
            .setTransform(455.45, 246.15, 0.709, 0.709);
        this[instance4.name = "virus_alive"] = instance4;
        var instance3 = new lib.virus_dead()
            .setTransform(425.5, 404.45, 0.714, 0.714);
        this[instance3.name = "virus_dead"] = instance3;
        var instance2 = new lib.virus_attenuated()
            .setTransform(574.7, 355.95, 0.709, 0.709);
        this[instance2.name = "virus_attenuated"] = instance2;
        var instance1 = new lib.antibiotic()
            .setTransform(818.6, 521.1, 0.741, 0.741);
        this[instance1.name = "antibiotic"] = instance1;
        this.addChild(instance19, instance18, instance17, instance16, instance15, instance14, instance13, instance12, instance11, instance10, instance9, instance8, instance7, instance6, instance5, instance4, instance3, instance2, instance1);
    });

    lib.Game.assets = {
        "Game": "images/Game.shapes.txt",
        "Game_atlas_1": "images/Game_atlas_1.json"
    };
})(PIXI, lib = lib || {});
var lib;
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        stage: lib.Game,
        background: 0xffffff,
        width: 1536,
        height: 768,
        framerate: 30,
        totalFrames: 1,
        library: lib
    };
}