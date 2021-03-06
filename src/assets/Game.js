(function (PIXI, lib) {

    var MovieClip = PIXI.animate.MovieClip;
    var Container = PIXI.Container;
    var Sprite = PIXI.Sprite;
    var fromFrame = PIXI.Texture.fromFrame;
    var Text = PIXI.Text;
    var Graphics = PIXI.Graphics;
    var shapes = PIXI.animate.ShapesCache;

    lib.line = Container.extend(function () {
        Container.call(this);
        var instance1 = new Graphics()
            .drawCommands(shapes.Game[0]);
        this.addChild(instance1);
    });

    lib.large_box = Container.extend(function () {
        Container.call(this);
        var instance1 = new Graphics()
            .drawCommands(shapes.Game[1]);
        this.addChild(instance1);
    });

    lib.deadVirusDescription = Container.extend(function () {
        Container.call(this);
        var instance4 = new lib.large_box()
            .setTransform(0, -3.8, 0.947, 0.675)
            .setAlpha(0.75);
        this[instance4.name = "box"] = instance4;
        var instance3 = new Text("A type of vaccine.\nFor example: hepatitis A or influenza vaccines.")
            .setStyle({
                fontFamily: "Tahoma",
                fontSize: 12,
                fontWeight: "bold",
                fill: "#fffccd",
                leading: 2,
                wordWrap: true,
                wordWrapWidth: 142.4
            })
            .setTransform(17, 40.05);
        this[instance3.name = "popuptxt_det"] = instance3;
        var instance2 = new Text("Dead Virus")
            .setStyle({
                fontFamily: "Tahoma",
                fontSize: 12,
                fontWeight: "bold",
                fill: "#fffccd",
                leading: 2
            })
            .setTransform(17, 12);
        this[instance2.name = "popuptxt2"] = instance2;
        var instance1 = new lib.line()
            .setTransform(16.85, 30.6);
        this[instance1.name = "hline"] = instance1;
        this.addChild(instance4, instance3, instance2, instance1);
    });

    lib.bacteriaDescription = Container.extend(function () {
        Container.call(this);
        var instance4 = new lib.large_box()
            .setTransform(0, 0, 1, 0.95)
            .setAlpha(0.75);
        this[instance4.name = "box"] = instance4;
        var instance3 = new Text("Both good and bad.\nGood bacteria in our intestines  help us digest food. Bad bacteria cause  all sorts of infections like tuberculosis, diptheria, and food poisoning.")
            .setStyle({
                fontFamily: "Tahoma",
                fontSize: 12,
                fontWeight: "bold",
                fill: "#fffccd",
                leading: 2,
                wordWrap: true,
                wordWrapWidth: 160
            })
            .setTransform(17, 41.95);
        this[instance3.name = "popuptxt_det"] = instance3;
        var instance2 = new Text("Bacteria")
            .setStyle({
                fontFamily: "Tahoma",
                fontSize: 12,
                fontWeight: "bold",
                fill: "#fffccd",
                leading: 2
            })
            .setTransform(17, 12.4);
        this[instance2.name = "popuptxt2"] = instance2;
        var instance1 = new lib.line()
            .setTransform(15, 32.45, 1.102);
        this[instance1.name = "hline"] = instance1;
        this.addChild(instance4, instance3, instance2, instance1);
    });

    lib.proteinDescription = Container.extend(function () {
        Container.call(this);
        var instance4 = new lib.large_box()
            .setTransform(0, -3.8, 1, 0.65)
            .setAlpha(0.75);
        this[instance4.name = "box"] = instance4;
        var instance3 = new Text("A type of vaccine.\nFor example: tetanus or haemophilus B vaccines.")
            .setStyle({
                fontFamily: "Tahoma",
                fontSize: 12,
                fontWeight: "bold",
                fill: "#fffccd",
                leading: 2,
                wordWrap: true,
                wordWrapWidth: 142.4
            })
            .setTransform(22, 39);
        this[instance3.name = "popuptxt_det"] = instance3;
        var instance2 = new Text("Bacterial Protein")
            .setStyle({
                fontFamily: "Tahoma",
                fontSize: 12,
                fontWeight: "bold",
                fill: "#fffccd",
                leading: 2
            })
            .setTransform(19, 7);
        this[instance2.name = "popuptxt2"] = instance2;
        var instance1 = new lib.line()
            .setTransform(20, 27);
        this[instance1.name = "hline"] = instance1;
        this.addChild(instance4, instance3, instance2, instance1);
    });

    lib.aliveVirusDescription = Container.extend(function () {
        Container.call(this);
        var instance4 = new lib.large_box()
            .setTransform(0, 0, 1, 0.8)
            .setAlpha(0.75);
        this[instance4.name = "box"] = instance4;
        var instance3 = new Text("A little package of DNA/RNA and protein. Viruses cause infections like measles, hepatitis & AIDS.")
            .setStyle({
                fontFamily: "Tahoma",
                fontSize: 12,
                fontWeight: "bold",
                fill: "#fffccd",
                leading: 2,
                wordWrap: true,
                wordWrapWidth: 142.4
            })
            .setTransform(22, 40.05);
        this[instance3.name = "popuptxt_det"] = instance3;
        var instance2 = new Text("Live Virus")
            .setStyle({
                fontFamily: "Tahoma",
                fontSize: 12,
                fontWeight: "bold",
                fill: "#fffccd",
                leading: 2
            })
            .setTransform(22, 12);
        this[instance2.name = "popuptxt2"] = instance2;
        var instance1 = new lib.line()
            .setTransform(21.85, 30.6);
        this[instance1.name = "hline"] = instance1;
        this.addChild(instance4, instance3, instance2, instance1);
    });

    lib.attenuatedVirusDescription = Container.extend(function () {
        Container.call(this);
        var instance4 = new lib.large_box()
            .setTransform(0, 0, 0.947, 0.6)
            .setAlpha(0.75);
        this[instance4.name = "box"] = instance4;
        var instance3 = new Text("A type of vaccine.\nFor example: measles or Sabin polio vaccine.")
            .setStyle({
                fontFamily: "Tahoma",
                fontSize: 12,
                fontWeight: "bold",
                fill: "#fffccd",
                leading: 2,
                wordWrap: true,
                wordWrapWidth: 142.4
            })
            .setTransform(22, 40.05);
        this[instance3.name = "popuptxt_det"] = instance3;
        var instance2 = new Text("Attenuated Virus")
            .setStyle({
                fontFamily: "Tahoma",
                fontSize: 12,
                fontWeight: "bold",
                fill: "#fffccd",
                leading: 2
            })
            .setTransform(22, 12);
        this[instance2.name = "popuptxt2"] = instance2;
        var instance1 = new lib.line()
            .setTransform(21.85, 30.6);
        this[instance1.name = "hline"] = instance1;
        this.addChild(instance4, instance3, instance2, instance1);
    });

    lib.syringe = Container.extend(function () {
        Container.call(this);
        var instance1 = new Sprite(fromFrame("syringe1"))
            .setTransform(-1, -1);
        this.addChild(instance1);
    });

    lib.syringeTop = MovieClip.extend(function () {
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

    lib.hitme = Container.extend(function () {
        Container.call(this);
        var instance1 = new Graphics()
            .drawCommands(shapes.Game[2]);
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

    lib.beaker_front = Container.extend(function () {
        Container.call(this);
        var instance7 = new Graphics()
            .drawCommands(shapes.Game[3])
            .setTransform(-27.9, -361.85);
        var instance6 = new Graphics()
            .drawCommands(shapes.Game[3])
            .setTransform(-27.9, -324.85);
        var instance5 = new Graphics()
            .drawCommands(shapes.Game[3])
            .setTransform(-27.9, -287.85);
        var instance4 = new Graphics()
            .drawCommands(shapes.Game[3])
            .setTransform(-27.9, -250.85);
        var instance3 = new Graphics()
            .drawCommands(shapes.Game[3])
            .setTransform(-27.9, -213.85);
        var instance2 = new Graphics()
            .drawCommands(shapes.Game[3])
            .setTransform(-27.9, -176.85);
        var instance1 = new Text("200 ml")
            .setStyle({
                fontFamily: "Tahoma",
                fontSize: 18,
                fontWeight: "bold",
                fill: "#fff",
                leading: 2
            })
            .setTransform(139, 53);
        this.addChild(instance7, instance6, instance5, instance4, instance3, instance2, instance1);
    });

    lib.shade = Container.extend(function () {
        Container.call(this);
        var instance1 = new Graphics()
            .drawCommands(shapes.Game[4]);
        this.addChild(instance1);
    });

    lib.temp2 = Container.extend(function () {
        Container.call(this);
        var instance1 = new Graphics()
            .drawCommands(shapes.Game[5]);
        this.addChild(instance1);
    });

    lib.beaker_bottom = Container.extend(function () {
        Container.call(this);
        var instance1 = new Graphics()
            .drawCommands(shapes.Game[6]);
        this.addChild(instance1);
    });

    lib.beaker_layered = Container.extend(function () {
        Container.call(this);
        var instance5 = new Graphics()
            .drawCommands(shapes.Game[7]);
        var instance4 = new lib.beaker_bottom()
            .setTransform(1, 405.75, 1.034, 1, 0, 3.142);
        var instance3 = new lib.temp2()
            .setTransform(13.9, 380.85, 0.984)
            .setAlpha(0.73);
        var instance2 = new lib.shade()
            .setAlpha(0.44);
        var instance1 = new lib.beaker_front()
            .setTransform(0.5, 9.95);
        this.addChild(instance5, instance4, instance3, instance2, instance1);
    });

    lib.hitsource = Container.extend(function () {
        Container.call(this);
        var instance1 = new Graphics()
            .drawCommands(shapes.Game[2])
            .setTransform(12.35, 0, 2.169, 0.541);
        this.addChild(instance1);
    });

    lib.invisible = MovieClip.extend(function () {
        MovieClip.call(this, {
            duration: 4
        });
        var instance1 = new Graphics()
            .drawCommands(shapes.Game[8]);
        this.addTimedChild(instance1, 3, 1);
    });

    lib.virus_attenuated = Container.extend(function () {
        Container.call(this);
        var instance38 = new Graphics()
            .drawCommands(shapes.Game[39]);
        var instance37 = new Graphics()
            .drawCommands(shapes.Game[38]);
        var instance36 = new Graphics()
            .drawCommands(shapes.Game[37])
            .setTransform(-238, -129.95);
        var instance35 = new Graphics()
            .drawCommands(shapes.Game[36])
            .setTransform(-238, -129.95);
        var instance34 = new Graphics()
            .drawCommands(shapes.Game[35])
            .setTransform(-238, -129.95);
        var instance33 = new Graphics()
            .drawCommands(shapes.Game[34])
            .setTransform(-238, -129.95);
        var instance32 = new Graphics()
            .drawCommands(shapes.Game[33])
            .setTransform(-238, -129.95);
        var instance31 = new Graphics()
            .drawCommands(shapes.Game[32])
            .setTransform(-238, -129.95);
        var instance30 = new Graphics()
            .drawCommands(shapes.Game[31])
            .setTransform(-238, -129.95);
        var instance29 = new Graphics()
            .drawCommands(shapes.Game[30])
            .setTransform(-238, -129.95);
        var instance28 = new Graphics()
            .drawCommands(shapes.Game[29])
            .setTransform(-238, -129.95);
        var instance27 = new Graphics()
            .drawCommands(shapes.Game[28])
            .setTransform(-238, -129.95);
        var instance26 = new Graphics()
            .drawCommands(shapes.Game[27])
            .setTransform(-238, -129.95);
        var instance25 = new Graphics()
            .drawCommands(shapes.Game[26])
            .setTransform(-238, -129.95);
        var instance24 = new Graphics()
            .drawCommands(shapes.Game[25])
            .setTransform(-238, -129.95);
        var instance23 = new Graphics()
            .drawCommands(shapes.Game[24])
            .setTransform(-225.45, -138.75, 0.868, 1.109);
        var instance22 = new Graphics()
            .drawCommands(shapes.Game[24])
            .setTransform(-238, -129.95);
        var instance21 = new Graphics()
            .drawCommands(shapes.Game[23])
            .setTransform(-245.8, -113.35, 0.995);
        var instance20 = new Graphics()
            .drawCommands(shapes.Game[23])
            .setTransform(-238, -129.95);
        var instance19 = new Graphics()
            .drawCommands(shapes.Game[22])
            .setTransform(-238, -129.95);
        var instance18 = new Graphics()
            .drawCommands(shapes.Game[21])
            .setTransform(-306.3, -135.25, 1.115, 0.822);
        var instance17 = new Graphics()
            .drawCommands(shapes.Game[21])
            .setTransform(-238, -129.95);
        var instance16 = new Graphics()
            .drawCommands(shapes.Game[20])
            .setTransform(-238, -129.95);
        var instance15 = new Graphics()
            .drawCommands(shapes.Game[19])
            .setTransform(-238, -129.95);
        var instance14 = new Graphics()
            .drawCommands(shapes.Game[18])
            .setTransform(-238, -129.95);
        var instance13 = new Graphics()
            .drawCommands(shapes.Game[17])
            .setTransform(-238, -129.95);
        var instance12 = new Graphics()
            .drawCommands(shapes.Game[16])
            .setTransform(-238, -129.95);
        var instance11 = new Graphics()
            .drawCommands(shapes.Game[15])
            .setTransform(-264.35, -124.2, 0.997, 1.003);
        var instance10 = new Graphics()
            .drawCommands(shapes.Game[14])
            .setTransform(-264.35, -124.2, 0.997, 1.003);
        var instance9 = new Graphics()
            .drawCommands(shapes.Game[15])
            .setTransform(-238, -129.95);
        var instance8 = new Graphics()
            .drawCommands(shapes.Game[14])
            .setTransform(-238, -129.95);
        var instance7 = new Graphics()
            .drawCommands(shapes.Game[13])
            .setTransform(-238, -129.95);
        var instance6 = new Graphics()
            .drawCommands(shapes.Game[12])
            .setTransform(-238, -129.95);
        var instance5 = new Graphics()
            .drawCommands(shapes.Game[11])
            .setTransform(-238, -129.95);
        var instance4 = new Graphics()
            .drawCommands(shapes.Game[10])
            .setTransform(-238, -129.95);
        var instance3 = new Graphics()
            .drawCommands(shapes.Game[9]);
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
            .drawCommands(shapes.Game[57])
            .setTransform(-242.8, -307.2);
        var instance32 = new Graphics()
            .drawCommands(shapes.Game[37])
            .setTransform(-237.6, -133.1);
        var instance31 = new Graphics()
            .drawCommands(shapes.Game[56])
            .setTransform(-242.8, -307.2);
        var instance30 = new Graphics()
            .drawCommands(shapes.Game[55])
            .setTransform(-242.8, -307.2);
        var instance29 = new Graphics()
            .drawCommands(shapes.Game[54])
            .setTransform(-242.8, -307.2);
        var instance28 = new Graphics()
            .drawCommands(shapes.Game[53])
            .setTransform(-242.8, -307.2);
        var instance27 = new Graphics()
            .drawCommands(shapes.Game[52])
            .setTransform(-242.8, -307.2);
        var instance26 = new Graphics()
            .drawCommands(shapes.Game[51])
            .setTransform(-242.8, -307.2);
        var instance25 = new Graphics()
            .drawCommands(shapes.Game[50])
            .setTransform(-242.8, -307.2);
        var instance24 = new Graphics()
            .drawCommands(shapes.Game[49])
            .setTransform(-242.8, -307.2);
        var instance23 = new Graphics()
            .drawCommands(shapes.Game[40])
            .setTransform(-242.8, -307.2);
        var instance22 = new Graphics()
            .drawCommands(shapes.Game[48])
            .setTransform(-242.8, -307.2);
        var instance21 = new Graphics()
            .drawCommands(shapes.Game[47])
            .setTransform(-242.8, -307.2);
        var instance20 = new Graphics()
            .drawCommands(shapes.Game[20])
            .setTransform(-257.05, -198.65, 1, 0.783);
        var instance19 = new Graphics()
            .drawCommands(shapes.Game[20])
            .setTransform(-237.6, -198.65, 1, 0.783);
        var instance18 = new Graphics()
            .drawCommands(shapes.Game[45])
            .setTransform(-329.55, -337.2, 0.949, 0.993);
        var instance17 = new Graphics()
            .drawCommands(shapes.Game[45])
            .setTransform(-319.7, -356.2, 0.949);
        var instance16 = new Graphics()
            .drawCommands(shapes.Game[44])
            .setTransform(-316.5, -250, 0.941, 0.988);
        var instance15 = new Graphics()
            .drawCommands(shapes.Game[44])
            .setTransform(-326.9, -264.8, 0.941, 0.983);
        var instance14 = new Graphics()
            .drawCommands(shapes.Game[46])
            .setTransform(-262.25, -307.2);
        var instance13 = new Graphics()
            .drawCommands(shapes.Game[46])
            .setTransform(-242.8, -307.2);
        var instance12 = new Graphics()
            .drawCommands(shapes.Game[45])
            .setTransform(-252.2, -290.15);
        var instance11 = new Graphics()
            .drawCommands(shapes.Game[45])
            .setTransform(-242.8, -307.2);
        var instance10 = new Graphics()
            .drawCommands(shapes.Game[44])
            .setTransform(-251.6, -323.85, 0.996);
        var instance9 = new Graphics()
            .drawCommands(shapes.Game[44])
            .setTransform(-242.8, -307.2);
        var instance8 = new Graphics()
            .drawCommands(shapes.Game[43])
            .setTransform(-274.75, -307.2, 1.003);
        var instance7 = new Graphics()
            .drawCommands(shapes.Game[42])
            .setTransform(-274.75, -307.2, 1.003);
        var instance6 = new Graphics()
            .drawCommands(shapes.Game[43])
            .setTransform(-242.8, -307.2);
        var instance5 = new Graphics()
            .drawCommands(shapes.Game[42])
            .setTransform(-242.8, -307.2);
        var instance4 = new Graphics()
            .drawCommands(shapes.Game[41])
            .setTransform(-242.8, -307.2);
        var instance3 = new Graphics()
            .drawCommands(shapes.Game[40])
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
            .drawCommands(shapes.Game[38])
            .setTransform(1.4, -2.15);
        var instance36 = new Graphics()
            .drawCommands(shapes.Game[37])
            .setTransform(-236.6, -132.1);
        var instance35 = new Graphics()
            .drawCommands(shapes.Game[70])
            .setTransform(-447.1, -305.1);
        var instance34 = new Graphics()
            .drawCommands(shapes.Game[69])
            .setTransform(-447.1, -305.1);
        var instance33 = new Graphics()
            .drawCommands(shapes.Game[68])
            .setTransform(-447.1, -305.1);
        var instance32 = new Graphics()
            .drawCommands(shapes.Game[67])
            .setTransform(-447.1, -305.1);
        var instance31 = new Graphics()
            .drawCommands(shapes.Game[66])
            .setTransform(-447.1, -305.1);
        var instance30 = new Graphics()
            .drawCommands(shapes.Game[65])
            .setTransform(-447.1, -305.1);
        var instance29 = new Graphics()
            .drawCommands(shapes.Game[64])
            .setTransform(-447.1, -305.1);
        var instance28 = new Graphics()
            .drawCommands(shapes.Game[63])
            .setTransform(-447.1, -305.1);
        var instance27 = new Graphics()
            .drawCommands(shapes.Game[40])
            .setTransform(-241.3, -307.35, 0.998, 1.004);
        var instance26 = new Graphics()
            .drawCommands(shapes.Game[62])
            .setTransform(-447.1, -305.1);
        var instance25 = new Graphics()
            .drawCommands(shapes.Game[47])
            .setTransform(-241.8, -305.45, 1, 0.998);
        var instance24 = new Graphics()
            .drawCommands(shapes.Game[20])
            .setTransform(-256.05, -197.65, 1, 0.783);
        var instance23 = new Graphics()
            .drawCommands(shapes.Game[20])
            .setTransform(-236.6, -197.65, 1, 0.783);
        var instance22 = new Graphics()
            .drawCommands(shapes.Game[61])
            .setTransform(-476.15, -305.1);
        var instance21 = new Graphics()
            .drawCommands(shapes.Game[60])
            .setTransform(-473.9, -305.1, 0.995);
        var instance20 = new Graphics()
            .drawCommands(shapes.Game[61])
            .setTransform(-447.1, -305.1);
        var instance19 = new Graphics()
            .drawCommands(shapes.Game[60])
            .setTransform(-447.1, -305.1);
        var instance18 = new Graphics()
            .drawCommands(shapes.Game[45])
            .setTransform(-328.55, -338.4, 0.949);
        var instance17 = new Graphics()
            .drawCommands(shapes.Game[45])
            .setTransform(-318.7, -355.2, 0.949);
        var instance16 = new Graphics()
            .drawCommands(shapes.Game[44])
            .setTransform(-315.5, -249, 0.941, 0.988);
        var instance15 = new Graphics()
            .drawCommands(shapes.Game[44])
            .setTransform(-324.7, -265.45, 0.937, 0.988);
        var instance14 = new Graphics()
            .drawCommands(shapes.Game[20])
            .setTransform(-256.05, -88.15, 1, 0.757);
        var instance13 = new Graphics()
            .drawCommands(shapes.Game[20])
            .setTransform(-236.6, -88.15, 1, 0.757);
        var instance12 = new Graphics()
            .drawCommands(shapes.Game[45])
            .setTransform(-252.6, -289.15, 1.005);
        var instance11 = new Graphics()
            .drawCommands(shapes.Game[45])
            .setTransform(-241.8, -306.2);
        var instance10 = new Graphics()
            .drawCommands(shapes.Game[44])
            .setTransform(-251.85, -322.85);
        var instance9 = new Graphics()
            .drawCommands(shapes.Game[44])
            .setTransform(-241.8, -306.2);
        var instance8 = new Graphics()
            .drawCommands(shapes.Game[15])
            .setTransform(-122.6, -60.75, 0.43, 0.432);
        var instance7 = new Graphics()
            .drawCommands(shapes.Game[59])
            .setTransform(-476.4, -305.1);
        var instance6 = new Graphics()
            .drawCommands(shapes.Game[15])
            .setTransform(-93.3, -60.75, 0.43, 0.432);
        var instance5 = new Graphics()
            .drawCommands(shapes.Game[59])
            .setTransform(-447.1, -305.1);
        var instance4 = new Graphics()
            .drawCommands(shapes.Game[58])
            .setTransform(-447.1, -305.1);
        var instance3 = new lib.invisible()
            .setTransform(-53.95, -47.9)
            .setAlpha(0);
        this[instance3.name = "b_lv"] = instance3;
        var instance2 = new Graphics()
            .drawCommands(shapes.Game[40])
            .setTransform(244.4, -305.15, 0.998, 1.004, 0, 0, 3.142);
        var instance1 = new lib.hitsource()
            .setTransform(-12.3, -12.75, 0.502, 0.422)
            .setAlpha(0);
        this[instance1.name = "hittestie"] = instance1;
        this.addChild(instance37, instance36, instance35, instance34, instance33, instance32, instance31, instance30, instance29, instance28, instance27, instance26, instance25, instance24, instance23, instance22, instance21, instance20, instance19, instance18, instance17, instance16, instance15, instance14, instance13, instance12, instance11, instance10, instance9, instance8, instance7, instance6, instance5, instance4, instance3, instance2, instance1);
    });

    lib.protein = Container.extend(function () {
        Container.call(this);
        var instance17 = new Graphics()
            .drawCommands(shapes.Game[85])
            .setTransform(-399.85, -300.15);
        var instance16 = new Graphics()
            .drawCommands(shapes.Game[84])
            .setTransform(-399.85, -300.15);
        var instance15 = new Graphics()
            .drawCommands(shapes.Game[83])
            .setTransform(-399.85, -300.15);
        var instance14 = new Graphics()
            .drawCommands(shapes.Game[82])
            .setTransform(-399.85, -300.15);
        var instance13 = new Graphics()
            .drawCommands(shapes.Game[81])
            .setTransform(-399.85, -300.15);
        var instance12 = new Graphics()
            .drawCommands(shapes.Game[80])
            .setTransform(-399.85, -300.15);
        var instance11 = new Graphics()
            .drawCommands(shapes.Game[79])
            .setTransform(-399.85, -300.15);
        var instance10 = new Graphics()
            .drawCommands(shapes.Game[78])
            .setTransform(-399.85, -300.15);
        var instance9 = new Graphics()
            .drawCommands(shapes.Game[77])
            .setTransform(-399.85, -300.15);
        var instance8 = new Graphics()
            .drawCommands(shapes.Game[76])
            .setTransform(-399.85, -300.15);
        var instance7 = new Graphics()
            .drawCommands(shapes.Game[75])
            .setTransform(-399.85, -300.15);
        var instance6 = new Graphics()
            .drawCommands(shapes.Game[74])
            .setTransform(-399.85, -300.15);
        var instance5 = new Graphics()
            .drawCommands(shapes.Game[73])
            .setTransform(-399.85, -300.15);
        var instance4 = new Graphics()
            .drawCommands(shapes.Game[72])
            .setTransform(-399.85, -300.15);
        var instance3 = new Graphics()
            .drawCommands(shapes.Game[71])
            .setTransform(-399.85, -300.15);
        var instance2 = new lib.invisible()
            .setTransform(-25.75, -14.25, 0.465, 0.485)
            .setAlpha(0);
        this[instance2.name = "b_prot"] = instance2;
        var instance1 = new lib.hitsource()
            .setTransform(-4.9, 0.5, 0.307, 0.293)
            .setAlpha(0);
        this[instance1.name = "hittestie"] = instance1;
        this.addChild(instance17, instance16, instance15, instance14, instance13, instance12, instance11, instance10, instance9, instance8, instance7, instance6, instance5, instance4, instance3, instance2, instance1);
    });

    lib.bacteria = Container.extend(function () {
        Container.call(this);
        var instance31 = new Graphics()
            .drawCommands(shapes.Game[104])
            .setTransform(-329.2, -306.5);
        var instance30 = new Graphics()
            .drawCommands(shapes.Game[100])
            .setTransform(-306.4, -305.9, 0.996);
        var instance29 = new Graphics()
            .drawCommands(shapes.Game[99])
            .setTransform(-306.4, -305.9, 0.996);
        var instance28 = new Graphics()
            .drawCommands(shapes.Game[100])
            .setTransform(-285.9, -305, 0.996);
        var instance27 = new Graphics()
            .drawCommands(shapes.Game[99])
            .setTransform(-285.9, -305, 0.996);
        var instance26 = new Graphics()
            .drawCommands(shapes.Game[85])
            .setTransform(-353.75, -302.35, 0.98, 0.976);
        var instance25 = new Graphics()
            .drawCommands(shapes.Game[103])
            .setTransform(-329.2, -306.5);
        var instance24 = new Graphics()
            .drawCommands(shapes.Game[102])
            .setTransform(-329.2, -306.5);
        var instance23 = new Graphics()
            .drawCommands(shapes.Game[101])
            .setTransform(-329.2, -306.5);
        var instance22 = new Graphics()
            .drawCommands(shapes.Game[100])
            .setTransform(-329.2, -306.5);
        var instance21 = new Graphics()
            .drawCommands(shapes.Game[99])
            .setTransform(-329.2, -306.5);
        var instance20 = new Graphics()
            .drawCommands(shapes.Game[85])
            .setTransform(-446.9, -311.35);
        var instance19 = new Graphics()
            .drawCommands(shapes.Game[84])
            .setTransform(-446.9, -311.35);
        var instance18 = new Graphics()
            .drawCommands(shapes.Game[83])
            .setTransform(-443.85, -310.65, 0.997);
        var instance17 = new Graphics()
            .drawCommands(shapes.Game[82])
            .setTransform(-443.85, -310.65, 0.997);
        var instance16 = new Graphics()
            .drawCommands(shapes.Game[98])
            .setTransform(-329.2, -306.5);
        var instance15 = new Graphics()
            .drawCommands(shapes.Game[97])
            .setTransform(-329.2, -306.5);
        var instance14 = new Graphics()
            .drawCommands(shapes.Game[96])
            .setTransform(-329.2, -306.5);
        var instance13 = new Graphics()
            .drawCommands(shapes.Game[95])
            .setTransform(-329.2, -306.5);
        var instance12 = new Graphics()
            .drawCommands(shapes.Game[94])
            .setTransform(-329.2, -306.5);
        var instance11 = new Graphics()
            .drawCommands(shapes.Game[93])
            .setTransform(-329.2, -306.5);
        var instance10 = new Graphics()
            .drawCommands(shapes.Game[92])
            .setTransform(-329.2, -306.5);
        var instance9 = new Graphics()
            .drawCommands(shapes.Game[91])
            .setTransform(-329.2, -306.5);
        var instance8 = new Graphics()
            .drawCommands(shapes.Game[90])
            .setTransform(-329.2, -306.5);
        var instance7 = new Graphics()
            .drawCommands(shapes.Game[77])
            .setTransform(-355.35, -203.1, 0.751, 0.641);
        var instance6 = new Graphics()
            .drawCommands(shapes.Game[89])
            .setTransform(-329.2, -306.5);
        var instance5 = new Graphics()
            .drawCommands(shapes.Game[88])
            .setTransform(-329.2, -306.5);
        var instance4 = new Graphics()
            .drawCommands(shapes.Game[87])
            .setTransform(-329.2, -306.5);
        var instance3 = new lib.invisible()
            .setTransform(-79, -23.8, 1.608, 0.551)
            .setAlpha(0);
        this[instance3.name = "b_prot"] = instance3;
        var instance2 = new Graphics()
            .drawCommands(shapes.Game[86])
            .setTransform(-329.2, -306.5);
        var instance1 = new lib.hitsource()
            .setTransform(-4.9, -4.7, 0.307, 0.293)
            .setAlpha(0);
        this[instance1.name = "hittestie"] = instance1;
        this.addChild(instance31, instance30, instance29, instance28, instance27, instance26, instance25, instance24, instance23, instance22, instance21, instance20, instance19, instance18, instance17, instance16, instance15, instance14, instance13, instance12, instance11, instance10, instance9, instance8, instance7, instance6, instance5, instance4, instance3, instance2, instance1);
    });

    lib.bubbles_back = Container.extend(function () {
        Container.call(this);
        var instance72 = new Graphics()
            .drawCommands(shapes.Game[128])
            .setTransform(-84.05, 8.25, 0.558, 0.558);
        var instance71 = new Graphics()
            .drawCommands(shapes.Game[127])
            .setTransform(-84.05, 8.25, 0.558, 0.558);
        var instance70 = new Graphics()
            .drawCommands(shapes.Game[126])
            .setTransform(-84.05, 8.25, 0.558, 0.558);
        var instance69 = new Graphics()
            .drawCommands(shapes.Game[125])
            .setTransform(-84.05, 8.25, 0.558, 0.558);
        var instance68 = new Graphics()
            .drawCommands(shapes.Game[124])
            .setTransform(-84.05, 8.25, 0.558, 0.558);
        var instance67 = new Graphics()
            .drawCommands(shapes.Game[123])
            .setTransform(-84.05, 8.25, 0.558, 0.558);
        var instance66 = new Graphics()
            .drawCommands(shapes.Game[122])
            .setTransform(-84.05, 8.25, 0.558, 0.558);
        var instance65 = new Graphics()
            .drawCommands(shapes.Game[121])
            .setTransform(-84.05, 8.25, 0.558, 0.558);
        var instance64 = new Graphics()
            .drawCommands(shapes.Game[120])
            .setTransform(-84.05, 8.25, 0.558, 0.558);
        var instance63 = new Graphics()
            .drawCommands(shapes.Game[119])
            .setTransform(-84.05, 8.25, 0.558, 0.558);
        var instance62 = new Graphics()
            .drawCommands(shapes.Game[118])
            .setTransform(-84.05, 8.25, 0.558, 0.558);
        var instance61 = new Graphics()
            .drawCommands(shapes.Game[117])
            .setTransform(-84.05, 8.25, 0.558, 0.558);
        var instance60 = new Graphics()
            .drawCommands(shapes.Game[116])
            .setTransform(-84.05, 8.25, 0.558, 0.558);
        var instance59 = new Graphics()
            .drawCommands(shapes.Game[115])
            .setTransform(-84.05, 8.25, 0.558, 0.558);
        var instance58 = new Graphics()
            .drawCommands(shapes.Game[114])
            .setTransform(-84.05, 8.25, 0.558, 0.558);
        var instance57 = new Graphics()
            .drawCommands(shapes.Game[113])
            .setTransform(-84.05, 8.25, 0.558, 0.558);
        var instance56 = new Graphics()
            .drawCommands(shapes.Game[112])
            .setTransform(-84.05, 8.25, 0.558, 0.558);
        var instance55 = new Graphics()
            .drawCommands(shapes.Game[111])
            .setTransform(-84.05, 8.25, 0.558, 0.558);
        var instance54 = new Graphics()
            .drawCommands(shapes.Game[110])
            .setTransform(-84.05, 8.25, 0.558, 0.558);
        var instance53 = new Graphics()
            .drawCommands(shapes.Game[109])
            .setTransform(-84.05, 8.25, 0.558, 0.558);
        var instance52 = new Graphics()
            .drawCommands(shapes.Game[108])
            .setTransform(-84.05, 8.25, 0.558, 0.558);
        var instance51 = new Graphics()
            .drawCommands(shapes.Game[107])
            .setTransform(-84.05, 8.25, 0.558, 0.558);
        var instance50 = new Graphics()
            .drawCommands(shapes.Game[106])
            .setTransform(-84.05, 8.25, 0.558, 0.558);
        var instance49 = new Graphics()
            .drawCommands(shapes.Game[105])
            .setTransform(-84.05, 8.25, 0.558, 0.558);
        var instance48 = new Graphics()
            .drawCommands(shapes.Game[128])
            .setTransform(-235.85, 29.35, 0.651, 0.651);
        var instance47 = new Graphics()
            .drawCommands(shapes.Game[127])
            .setTransform(-235.85, 29.35, 0.651, 0.651);
        var instance46 = new Graphics()
            .drawCommands(shapes.Game[126])
            .setTransform(-235.85, 29.35, 0.651, 0.651);
        var instance45 = new Graphics()
            .drawCommands(shapes.Game[125])
            .setTransform(-235.85, 29.35, 0.651, 0.651);
        var instance44 = new Graphics()
            .drawCommands(shapes.Game[124])
            .setTransform(-235.85, 29.35, 0.651, 0.651);
        var instance43 = new Graphics()
            .drawCommands(shapes.Game[123])
            .setTransform(-235.85, 29.35, 0.651, 0.651);
        var instance42 = new Graphics()
            .drawCommands(shapes.Game[122])
            .setTransform(-235.85, 29.35, 0.651, 0.651);
        var instance41 = new Graphics()
            .drawCommands(shapes.Game[121])
            .setTransform(-235.85, 29.35, 0.651, 0.651);
        var instance40 = new Graphics()
            .drawCommands(shapes.Game[120])
            .setTransform(-235.85, 29.35, 0.651, 0.651);
        var instance39 = new Graphics()
            .drawCommands(shapes.Game[119])
            .setTransform(-235.85, 29.35, 0.651, 0.651);
        var instance38 = new Graphics()
            .drawCommands(shapes.Game[118])
            .setTransform(-235.85, 29.35, 0.651, 0.651);
        var instance37 = new Graphics()
            .drawCommands(shapes.Game[117])
            .setTransform(-235.85, 29.35, 0.651, 0.651);
        var instance36 = new Graphics()
            .drawCommands(shapes.Game[116])
            .setTransform(-235.85, 29.35, 0.651, 0.651);
        var instance35 = new Graphics()
            .drawCommands(shapes.Game[115])
            .setTransform(-235.85, 29.35, 0.651, 0.651);
        var instance34 = new Graphics()
            .drawCommands(shapes.Game[114])
            .setTransform(-235.85, 29.35, 0.651, 0.651);
        var instance33 = new Graphics()
            .drawCommands(shapes.Game[113])
            .setTransform(-235.85, 29.35, 0.651, 0.651);
        var instance32 = new Graphics()
            .drawCommands(shapes.Game[112])
            .setTransform(-235.85, 29.35, 0.651, 0.651);
        var instance31 = new Graphics()
            .drawCommands(shapes.Game[111])
            .setTransform(-235.85, 29.35, 0.651, 0.651);
        var instance30 = new Graphics()
            .drawCommands(shapes.Game[110])
            .setTransform(-235.85, 29.35, 0.651, 0.651);
        var instance29 = new Graphics()
            .drawCommands(shapes.Game[109])
            .setTransform(-235.85, 29.35, 0.651, 0.651);
        var instance28 = new Graphics()
            .drawCommands(shapes.Game[108])
            .setTransform(-235.85, 29.35, 0.651, 0.651);
        var instance27 = new Graphics()
            .drawCommands(shapes.Game[107])
            .setTransform(-235.85, 29.35, 0.651, 0.651);
        var instance26 = new Graphics()
            .drawCommands(shapes.Game[106])
            .setTransform(-235.85, 29.35, 0.651, 0.651);
        var instance25 = new Graphics()
            .drawCommands(shapes.Game[105])
            .setTransform(-235.85, 29.35, 0.651, 0.651);
        var instance24 = new Graphics()
            .drawCommands(shapes.Game[128])
            .setTransform(-170.6, -43.15, 0.488, 0.488);
        var instance23 = new Graphics()
            .drawCommands(shapes.Game[127])
            .setTransform(-170.6, -43.15, 0.488, 0.488);
        var instance22 = new Graphics()
            .drawCommands(shapes.Game[126])
            .setTransform(-170.6, -43.15, 0.488, 0.488);
        var instance21 = new Graphics()
            .drawCommands(shapes.Game[125])
            .setTransform(-170.6, -43.15, 0.488, 0.488);
        var instance20 = new Graphics()
            .drawCommands(shapes.Game[124])
            .setTransform(-170.6, -43.15, 0.488, 0.488);
        var instance19 = new Graphics()
            .drawCommands(shapes.Game[123])
            .setTransform(-170.6, -43.15, 0.488, 0.488);
        var instance18 = new Graphics()
            .drawCommands(shapes.Game[122])
            .setTransform(-170.6, -43.15, 0.488, 0.488);
        var instance17 = new Graphics()
            .drawCommands(shapes.Game[121])
            .setTransform(-170.6, -43.15, 0.488, 0.488);
        var instance16 = new Graphics()
            .drawCommands(shapes.Game[120])
            .setTransform(-170.6, -43.15, 0.488, 0.488);
        var instance15 = new Graphics()
            .drawCommands(shapes.Game[119])
            .setTransform(-170.6, -43.15, 0.488, 0.488);
        var instance14 = new Graphics()
            .drawCommands(shapes.Game[118])
            .setTransform(-170.6, -43.15, 0.488, 0.488);
        var instance13 = new Graphics()
            .drawCommands(shapes.Game[117])
            .setTransform(-170.6, -43.15, 0.488, 0.488);
        var instance12 = new Graphics()
            .drawCommands(shapes.Game[116])
            .setTransform(-170.6, -43.15, 0.488, 0.488);
        var instance11 = new Graphics()
            .drawCommands(shapes.Game[115])
            .setTransform(-170.6, -43.15, 0.488, 0.488);
        var instance10 = new Graphics()
            .drawCommands(shapes.Game[114])
            .setTransform(-170.6, -43.15, 0.488, 0.488);
        var instance9 = new Graphics()
            .drawCommands(shapes.Game[113])
            .setTransform(-170.6, -43.15, 0.488, 0.488);
        var instance8 = new Graphics()
            .drawCommands(shapes.Game[112])
            .setTransform(-170.6, -43.15, 0.488, 0.488);
        var instance7 = new Graphics()
            .drawCommands(shapes.Game[111])
            .setTransform(-170.6, -43.15, 0.488, 0.488);
        var instance6 = new Graphics()
            .drawCommands(shapes.Game[110])
            .setTransform(-170.6, -43.15, 0.488, 0.488);
        var instance5 = new Graphics()
            .drawCommands(shapes.Game[109])
            .setTransform(-170.6, -43.15, 0.488, 0.488);
        var instance4 = new Graphics()
            .drawCommands(shapes.Game[108])
            .setTransform(-170.6, -43.15, 0.488, 0.488);
        var instance3 = new Graphics()
            .drawCommands(shapes.Game[107])
            .setTransform(-170.6, -43.15, 0.488, 0.488);
        var instance2 = new Graphics()
            .drawCommands(shapes.Game[106])
            .setTransform(-170.6, -43.15, 0.488, 0.488);
        var instance1 = new Graphics()
            .drawCommands(shapes.Game[105])
            .setTransform(-170.6, -43.15, 0.488, 0.488);
        this.addChild(instance72, instance71, instance70, instance69, instance68, instance67, instance66, instance65, instance64, instance63, instance62, instance61, instance60, instance59, instance58, instance57, instance56, instance55, instance54, instance53, instance52, instance51, instance50, instance49, instance48, instance47, instance46, instance45, instance44, instance43, instance42, instance41, instance40, instance39, instance38, instance37, instance36, instance35, instance34, instance33, instance32, instance31, instance30, instance29, instance28, instance27, instance26, instance25, instance24, instance23, instance22, instance21, instance20, instance19, instance18, instance17, instance16, instance15, instance14, instance13, instance12, instance11, instance10, instance9, instance8, instance7, instance6, instance5, instance4, instance3, instance2, instance1);
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

    lib.Game = MovieClip.extend(function () {
        MovieClip.call(this, {
            duration: 1,
            framerate: 30,
            labels: {
                bubbles: 0,
                beaker: 0
            }
        });
        var instance20 = new Graphics()
            .drawCommands(shapes.Game[130]);
        var instance19 = new Graphics()
            .drawCommands(shapes.Game[129])
            .setTransform(-5.15, -2.6);
        var instance18 = new lib.expose_txt()
            .setTransform(1063.05, 234.7)
            .setColorTransform(0, 0.82, 0, 0.57, 0, 0.08);
        var instance17 = new lib.inject_txt()
            .setTransform(839.9, 234.7)
            .setColorTransform(0, 0.82, 0, 0.57, 0, 0.08);
        var instance16 = new Text("Chose one of the types of microorganisms in the beaker and drag over to the right. You can inject your patient with a vaccine or expose them to a microbe, depending on what you have chosen.")
            .setStyle({
                fontFamily: "Tahoma",
                fontSize: 12,
                fontWeight: "bold",
                fill: "#4e6040",
                leading: 2,
                wordWrap: true,
                wordWrapWidth: 311
            })
            .setTransform(837.15, 114.2);
        this[instance16.name = "instructions"] = instance16;
        var instance15 = new lib.bubbles_back()
            .setTransform(603.25, 106.3)
            .setAlpha(0.19549)
            .setColorTransform(-0.68, 1, 0.87, -0.6, -0.53, -0.75);
        this[instance15.name = "bubbles"] = instance15;
        var instance14 = new lib.bacteria()
            .setTransform(561.55, 277.05, 0.621, 0.621);
        this[instance14.name = "bacteria"] = instance14;
        var instance13 = new lib.protein()
            .setTransform(675.1, 357.2);
        this[instance13.name = "protein"] = instance13;
        var instance12 = new lib.virus_alive()
            .setTransform(549.7, 389.35, 0.709, 0.709);
        this[instance12.name = "virus_alive"] = instance12;
        var instance11 = new lib.virus_dead()
            .setTransform(519.75, 547.65, 0.714, 0.714);
        this[instance11.name = "virus_dead"] = instance11;
        var instance10 = new lib.virus_attenuated()
            .setTransform(668.95, 499.15, 0.709, 0.709);
        this[instance10.name = "virus_attenuated"] = instance10;
        var instance9 = new lib.beaker_layered()
            .setTransform(459.2, 215)
            .setAlpha(0.5);
        this[instance9.name = "beaker"] = instance9;
        var instance8 = new lib.gray_kid2()
            .setTransform(1038.2, 282.75)
            .setAlpha(0.5);
        this[instance8.name = "patient"] = instance8;
        var instance7 = new lib.girl()
            .setTransform(1038.2, 282.75);
        this[instance7.name = "girl"] = instance7;
        var instance6 = new lib.syringeTop()
            .setTransform(835.15, 291.75);
        this[instance6.name = "syringe"] = instance6;
        var instance5 = new lib.attenuatedVirusDescription()
            .setTransform(686, 821.2);
        this[instance5.name = "attenuatedVirusDescrip"] = instance5;
        var instance4 = new lib.aliveVirusDescription()
            .setTransform(482.9, 821.2);
        this[instance4.name = "aliveVirusDescrip"] = instance4;
        var instance3 = new lib.proteinDescription()
            .setTransform(275.65, 821.2);
        this[instance3.name = "proteinDescrip"] = instance3;
        var instance2 = new lib.bacteriaDescription()
            .setTransform(27.8, 802.3);
        this[instance2.name = "bacteriaDescrip"] = instance2;
        var instance1 = new lib.deadVirusDescription()
            .setTransform(919, 821.2);
        this[instance1.name = "deadVirusDescrip"] = instance1;
        this.addChild(instance20, instance19, instance18, instance17, instance16, instance15, instance14, instance13, instance12, instance11, instance10, instance9, instance8, instance7, instance6, instance5, instance4, instance3, instance2, instance1);
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
        background: 0xffffcc,
        width: 1624,
        height: 600,
        framerate: 30,
        totalFrames: 1,
        library: lib
    };
}