(function (PIXI, lib) {

    var MovieClip = PIXI.animate.MovieClip;
    var Container = PIXI.Container;
    var Text = PIXI.Text;
    var Graphics = PIXI.Graphics;
    var shapes = PIXI.animate.ShapesCache;

    lib.hitme = Container.extend(function () {
        Container.call(this);
        var instance1 = new Graphics()
            .drawCommands(shapes.TitleNew[1]);
        this.addChild(instance1);
    });

    lib.syringe = Container.extend(function () {
        Container.call(this);
        var instance20 = new Graphics()
            .drawCommands(shapes.TitleNew[20])
            .setTransform(-436.9, -242.4);
        var instance19 = new Graphics()
            .drawCommands(shapes.TitleNew[19])
            .setTransform(-436.9, -242.4);
        var instance18 = new Graphics()
            .drawCommands(shapes.TitleNew[18])
            .setTransform(-436.9, -242.4);
        var instance17 = new Graphics()
            .drawCommands(shapes.TitleNew[17]);
        var instance16 = new Graphics()
            .drawCommands(shapes.TitleNew[16])
            .setTransform(-436.9, -242.4);
        var instance15 = new Graphics()
            .drawCommands(shapes.TitleNew[15])
            .setTransform(-436.9, -242.4);
        var instance14 = new Graphics()
            .drawCommands(shapes.TitleNew[14])
            .setTransform(-436.9, -242.4);
        var instance13 = new Graphics()
            .drawCommands(shapes.TitleNew[13])
            .setTransform(-436.9, -242.4);
        var instance12 = new Graphics()
            .drawCommands(shapes.TitleNew[12])
            .setTransform(-436.9, -242.4);
        var instance11 = new Graphics()
            .drawCommands(shapes.TitleNew[11])
            .setTransform(-436.9, -242.4);
        var instance10 = new Graphics()
            .drawCommands(shapes.TitleNew[10])
            .setTransform(-436.9, -242.4);
        var instance9 = new Graphics()
            .drawCommands(shapes.TitleNew[9])
            .setTransform(-436.9, -242.4);
        var instance8 = new Graphics()
            .drawCommands(shapes.TitleNew[8])
            .setTransform(-436.9, -242.4);
        var instance7 = new Graphics()
            .drawCommands(shapes.TitleNew[7])
            .setTransform(-436.9, -242.4);
        var instance6 = new Graphics()
            .drawCommands(shapes.TitleNew[6])
            .setTransform(-436.9, -242.4);
        var instance5 = new Graphics()
            .drawCommands(shapes.TitleNew[5])
            .setTransform(-436.9, -242.4);
        var instance4 = new Graphics()
            .drawCommands(shapes.TitleNew[4])
            .setTransform(-436.9, -242.4);
        var instance3 = new Graphics()
            .drawCommands(shapes.TitleNew[3])
            .setTransform(-436.9, -242.4);
        var instance2 = new Graphics()
            .drawCommands(shapes.TitleNew[2])
            .setTransform(-436.9, -242.4);
        var instance1 = new lib.hitme()
            .setTransform(20, 68.85)
            .setAlpha(0);
        this[instance1.name = "hitme"] = instance1;
        this.addChild(instance20, instance19, instance18, instance17, instance16, instance15, instance14, instance13, instance12, instance11, instance10, instance9, instance8, instance7, instance6, instance5, instance4, instance3, instance2, instance1);
    });

    lib.Syringe = Container.extend(function () {
        Container.call(this);
        var instance1 = new lib.syringe();
        this[instance1.name = "syringe"] = instance1;
        this.addChild(instance1);
    });

    lib.Name = MovieClip.extend(function () {
        MovieClip.call(this, {
            duration: 30
        });
        var instance1 = new Text("Microbe Madness")
            .setStyle({
                fontFamily: "Tahoma",
                fontSize: 60,
                fontWeight: "bold",
                fill: "#393",
                leading: 2
            })
            .setTransform(2, 2);
        this.addTimedChild(instance1);
    });

    lib.hitsource = Container.extend(function () {
        Container.call(this);
        var instance1 = new Graphics()
            .drawCommands(shapes.TitleNew[1])
            .setTransform(12.35, 0, 2.169, 0.541);
        this.addChild(instance1);
    });

    lib.invisible = MovieClip.extend(function () {
        MovieClip.call(this, {
            duration: 4
        });
        var instance1 = new Graphics()
            .drawCommands(shapes.TitleNew[21]);
        this.addTimedChild(instance1, 3, 1);
    });

    lib.virus_attenuated = Container.extend(function () {
        Container.call(this);
        var instance38 = new Graphics()
            .drawCommands(shapes.TitleNew[52]);
        var instance37 = new Graphics()
            .drawCommands(shapes.TitleNew[51]);
        var instance36 = new Graphics()
            .drawCommands(shapes.TitleNew[50])
            .setTransform(-238, -129.95);
        var instance35 = new Graphics()
            .drawCommands(shapes.TitleNew[49])
            .setTransform(-238, -129.95);
        var instance34 = new Graphics()
            .drawCommands(shapes.TitleNew[48])
            .setTransform(-238, -129.95);
        var instance33 = new Graphics()
            .drawCommands(shapes.TitleNew[47])
            .setTransform(-238, -129.95);
        var instance32 = new Graphics()
            .drawCommands(shapes.TitleNew[46])
            .setTransform(-238, -129.95);
        var instance31 = new Graphics()
            .drawCommands(shapes.TitleNew[45])
            .setTransform(-238, -129.95);
        var instance30 = new Graphics()
            .drawCommands(shapes.TitleNew[44])
            .setTransform(-238, -129.95);
        var instance29 = new Graphics()
            .drawCommands(shapes.TitleNew[43])
            .setTransform(-238, -129.95);
        var instance28 = new Graphics()
            .drawCommands(shapes.TitleNew[42])
            .setTransform(-238, -129.95);
        var instance27 = new Graphics()
            .drawCommands(shapes.TitleNew[41])
            .setTransform(-238, -129.95);
        var instance26 = new Graphics()
            .drawCommands(shapes.TitleNew[40])
            .setTransform(-238, -129.95);
        var instance25 = new Graphics()
            .drawCommands(shapes.TitleNew[39])
            .setTransform(-238, -129.95);
        var instance24 = new Graphics()
            .drawCommands(shapes.TitleNew[38])
            .setTransform(-238, -129.95);
        var instance23 = new Graphics()
            .drawCommands(shapes.TitleNew[37])
            .setTransform(-225.45, -138.75, 0.868, 1.109);
        var instance22 = new Graphics()
            .drawCommands(shapes.TitleNew[37])
            .setTransform(-238, -129.95);
        var instance21 = new Graphics()
            .drawCommands(shapes.TitleNew[36])
            .setTransform(-245.8, -113.35, 0.995);
        var instance20 = new Graphics()
            .drawCommands(shapes.TitleNew[36])
            .setTransform(-238, -129.95);
        var instance19 = new Graphics()
            .drawCommands(shapes.TitleNew[35])
            .setTransform(-238, -129.95);
        var instance18 = new Graphics()
            .drawCommands(shapes.TitleNew[34])
            .setTransform(-306.3, -135.25, 1.115, 0.822);
        var instance17 = new Graphics()
            .drawCommands(shapes.TitleNew[34])
            .setTransform(-238, -129.95);
        var instance16 = new Graphics()
            .drawCommands(shapes.TitleNew[33])
            .setTransform(-238, -129.95);
        var instance15 = new Graphics()
            .drawCommands(shapes.TitleNew[32])
            .setTransform(-238, -129.95);
        var instance14 = new Graphics()
            .drawCommands(shapes.TitleNew[31])
            .setTransform(-238, -129.95);
        var instance13 = new Graphics()
            .drawCommands(shapes.TitleNew[30])
            .setTransform(-238, -129.95);
        var instance12 = new Graphics()
            .drawCommands(shapes.TitleNew[29])
            .setTransform(-238, -129.95);
        var instance11 = new Graphics()
            .drawCommands(shapes.TitleNew[28])
            .setTransform(-264.35, -124.2, 0.997, 1.003);
        var instance10 = new Graphics()
            .drawCommands(shapes.TitleNew[27])
            .setTransform(-264.35, -124.2, 0.997, 1.003);
        var instance9 = new Graphics()
            .drawCommands(shapes.TitleNew[28])
            .setTransform(-238, -129.95);
        var instance8 = new Graphics()
            .drawCommands(shapes.TitleNew[27])
            .setTransform(-238, -129.95);
        var instance7 = new Graphics()
            .drawCommands(shapes.TitleNew[26])
            .setTransform(-238, -129.95);
        var instance6 = new Graphics()
            .drawCommands(shapes.TitleNew[25])
            .setTransform(-238, -129.95);
        var instance5 = new Graphics()
            .drawCommands(shapes.TitleNew[24])
            .setTransform(-238, -129.95);
        var instance4 = new Graphics()
            .drawCommands(shapes.TitleNew[23])
            .setTransform(-238, -129.95);
        var instance3 = new Graphics()
            .drawCommands(shapes.TitleNew[22]);
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

    lib.protein = Container.extend(function () {
        Container.call(this);
        var instance17 = new Graphics()
            .drawCommands(shapes.TitleNew[67])
            .setTransform(-399.85, -300.15);
        var instance16 = new Graphics()
            .drawCommands(shapes.TitleNew[66])
            .setTransform(-399.85, -300.15);
        var instance15 = new Graphics()
            .drawCommands(shapes.TitleNew[65])
            .setTransform(-399.85, -300.15);
        var instance14 = new Graphics()
            .drawCommands(shapes.TitleNew[64])
            .setTransform(-399.85, -300.15);
        var instance13 = new Graphics()
            .drawCommands(shapes.TitleNew[63])
            .setTransform(-399.85, -300.15);
        var instance12 = new Graphics()
            .drawCommands(shapes.TitleNew[62])
            .setTransform(-399.85, -300.15);
        var instance11 = new Graphics()
            .drawCommands(shapes.TitleNew[61])
            .setTransform(-399.85, -300.15);
        var instance10 = new Graphics()
            .drawCommands(shapes.TitleNew[60])
            .setTransform(-399.85, -300.15);
        var instance9 = new Graphics()
            .drawCommands(shapes.TitleNew[59])
            .setTransform(-399.85, -300.15);
        var instance8 = new Graphics()
            .drawCommands(shapes.TitleNew[58])
            .setTransform(-399.85, -300.15);
        var instance7 = new Graphics()
            .drawCommands(shapes.TitleNew[57])
            .setTransform(-399.85, -300.15);
        var instance6 = new Graphics()
            .drawCommands(shapes.TitleNew[56])
            .setTransform(-399.85, -300.15);
        var instance5 = new Graphics()
            .drawCommands(shapes.TitleNew[55])
            .setTransform(-399.85, -300.15);
        var instance4 = new Graphics()
            .drawCommands(shapes.TitleNew[54])
            .setTransform(-399.85, -300.15);
        var instance3 = new Graphics()
            .drawCommands(shapes.TitleNew[53])
            .setTransform(-399.85, -300.15);
        var instance2 = new lib.invisible()
            .setTransform(-25.75, -14.25, 0.465, 0.485)
            .setAlpha(0);
        this[instance2.name = "b_prot"] = instance2;
        var instance1 = new lib.hitsource()
            .setTransform(-79.9, -33.35, 0.307, 0.293)
            .setAlpha(0);
        this[instance1.name = "hittestie"] = instance1;
        this.addChild(instance17, instance16, instance15, instance14, instance13, instance12, instance11, instance10, instance9, instance8, instance7, instance6, instance5, instance4, instance3, instance2, instance1);
    });

    lib.hitmesquare = Container.extend(function () {
        Container.call(this);
        var instance1 = new Graphics()
            .drawCommands(shapes.TitleNew[68])
            .setTransform(0, 0.85, 1, 1.055);
        this.addChild(instance1);
    });

    lib.mouth_virus_normal = Container.extend(function () {
        Container.call(this);
        var instance2 = new Graphics()
            .drawCommands(shapes.TitleNew[70]);
        var instance1 = new Graphics()
            .drawCommands(shapes.TitleNew[69]);
        this.addChild(instance2, instance1);
    });

    lib.RightEye_virus = Container.extend(function () {
        Container.call(this);
        var instance8 = new Graphics()
            .drawCommands(shapes.TitleNew[78]);
        var instance7 = new Graphics()
            .drawCommands(shapes.TitleNew[77])
            .setTransform(-257.6, -134.7, 0.625, 0.625);
        var instance6 = new Graphics()
            .drawCommands(shapes.TitleNew[76])
            .setTransform(-257.6, -134.7, 0.625, 0.625);
        var instance5 = new Graphics()
            .drawCommands(shapes.TitleNew[75])
            .setTransform(-257.6, -134.7, 0.625, 0.625);
        var instance4 = new Graphics()
            .drawCommands(shapes.TitleNew[74])
            .setTransform(-257.6, -134.7, 0.625, 0.625);
        var instance3 = new Graphics()
            .drawCommands(shapes.TitleNew[73]);
        var instance2 = new Graphics()
            .drawCommands(shapes.TitleNew[72])
            .setTransform(-257.6, -134.7, 0.625, 0.625);
        var instance1 = new Graphics()
            .drawCommands(shapes.TitleNew[71])
            .setTransform(1.8);
        this.addChild(instance8, instance7, instance6, instance5, instance4, instance3, instance2, instance1);
    });

    lib.LeftEye_virus = Container.extend(function () {
        Container.call(this);
        var instance8 = new Graphics()
            .drawCommands(shapes.TitleNew[78])
            .setTransform(1.1, 1.35);
        var instance7 = new Graphics()
            .drawCommands(shapes.TitleNew[77])
            .setTransform(-256.48, -133.35, 0.625, 0.625);
        var instance6 = new Graphics()
            .drawCommands(shapes.TitleNew[84])
            .setTransform(-206.5, -134.35, 0.625, 0.625);
        var instance5 = new Graphics()
            .drawCommands(shapes.TitleNew[83])
            .setTransform(-206.5, -134.35, 0.625, 0.625);
        var instance4 = new Graphics()
            .drawCommands(shapes.TitleNew[82])
            .setTransform(2);
        var instance3 = new Graphics()
            .drawCommands(shapes.TitleNew[81])
            .setTransform(1.4);
        var instance2 = new Graphics()
            .drawCommands(shapes.TitleNew[80])
            .setTransform(2);
        var instance1 = new Graphics()
            .drawCommands(shapes.TitleNew[79])
            .setTransform(2);
        this.addChild(instance8, instance7, instance6, instance5, instance4, instance3, instance2, instance1);
    });

    lib.macro_virus_at = Container.extend(function () {
        Container.call(this);
        var instance10 = new Graphics()
            .drawCommands(shapes.TitleNew[86]);
        var instance9 = new Graphics()
            .drawCommands(shapes.TitleNew[85])
            .setTransform(-236.95, -172.75, 0.625, 0.625);
        var instance8 = new lib.LeftEye_virus()
            .setTransform(-30.45, -38.4);
        var instance7 = new lib.RightEye_virus()
            .setTransform(20.65, -38.05);
        var instance6 = new lib.mouth_virus_normal()
            .setTransform(-25.2, 18.05);
        var instance5 = new lib.hitmesquare()
            .setTransform(61.9, 17, 2.359, 1.461)
            .setAlpha(0);
        this[instance5.name = "hittestie4"] = instance5;
        var instance4 = new lib.hitmesquare()
            .setTransform(7.95, -64.15, 1.734, 0.793)
            .setAlpha(0);
        this[instance4.name = "hittestie1"] = instance4;
        var instance3 = new lib.hitmesquare()
            .setTransform(78.95, -62.15, 1.733, 0.793)
            .setAlpha(0);
        this[instance3.name = "hittestie2"] = instance3;
        var instance2 = new lib.hitmesquare()
            .setTransform(-16.85, -30.75, 0.932, 1.426)
            .setAlpha(0);
        this[instance2.name = "hittestie5"] = instance2;
        var instance1 = new lib.hitmesquare()
            .setTransform(3.9, 2.7, 4.676, 5.735)
            .setAlpha(0);
        this[instance1.name = "hittestie3"] = instance1;
        this.addChild(instance10, instance9, instance8, instance7, instance6, instance5, instance4, instance3, instance2, instance1);
        /* stop();
        var myLoop:Number = this._parent.nLoop; //store this for resetting later*/
    });

    lib.hittestie = Container.extend(function () {
        Container.call(this);
        var instance1 = new Graphics()
            .drawCommands(shapes.TitleNew[87])
            .setTransform(32.45, -30.8);
        this.addChild(instance1);
    });

    lib.macro_bacteria = Container.extend(function () {
        Container.call(this);
        var instance22 = new Graphics()
            .drawCommands(shapes.TitleNew[94]);
        var instance21 = new Graphics()
            .drawCommands(shapes.TitleNew[93])
            .setTransform(4, 3.35);
        var instance20 = new Graphics()
            .drawCommands(shapes.TitleNew[92])
            .setTransform(-397.658, -255.136, 0.872, 0.872);
        var instance19 = new Graphics()
            .drawCommands(shapes.TitleNew[77])
            .setTransform(-387.714, -244.977, 0.874, 0.872);
        var instance18 = new Graphics()
            .drawCommands(shapes.TitleNew[92])
            .setTransform(-347.5, -262.2, 0.872, 0.872);
        var instance17 = new Graphics()
            .drawCommands(shapes.TitleNew[77])
            .setTransform(-337.556, -252.04, 0.874, 0.872);
        var instance16 = new Graphics()
            .drawCommands(shapes.TitleNew[91])
            .setTransform(-347.5, -262.2, 0.872, 0.872);
        var instance15 = new Graphics()
            .drawCommands(shapes.TitleNew[90])
            .setTransform(-347.5, -262.2, 0.872, 0.872);
        var instance14 = new Graphics()
            .drawCommands(shapes.TitleNew[84])
            .setTransform(-317.929, -246.372, 0.874, 0.872);
        var instance13 = new Graphics()
            .drawCommands(shapes.TitleNew[83])
            .setTransform(-317.885, -245.936, 0.874, 0.87);
        var instance12 = new Graphics()
            .drawCommands(shapes.TitleNew[89])
            .setTransform(-347.5, -262.2, 0.872, 0.872);
        var instance11 = new Graphics()
            .drawCommands(shapes.TitleNew[75])
            .setTransform(-336.989, -252.433, 0.872, 0.874);
        var instance10 = new Graphics()
            .drawCommands(shapes.TitleNew[74])
            .setTransform(-335.549, -251.604, 0.869, 0.87);
        var instance9 = new Graphics()
            .drawCommands(shapes.TitleNew[73])
            .setTransform(22.797, -64.022, 1.387, 1.395);
        var instance8 = new Graphics()
            .drawCommands(shapes.TitleNew[72])
            .setTransform(-338.253, -252.04, 0.875, 0.872);
        var instance7 = new Graphics()
            .drawCommands(shapes.TitleNew[71])
            .setTransform(25.153, -63.891, 1.391, 1.386);
        var instance6 = new Graphics()
            .drawCommands(shapes.TitleNew[82])
            .setTransform(-26.183, -58.833, 1.39, 1.395);
        var instance5 = new Graphics()
            .drawCommands(shapes.TitleNew[81])
            .setTransform(-26.139, -58.79, 1.386, 1.395);
        var instance4 = new Graphics()
            .drawCommands(shapes.TitleNew[80])
            .setTransform(-26.27, -58.833, 1.396, 1.398);
        var instance3 = new Graphics()
            .drawCommands(shapes.TitleNew[79])
            .setTransform(-26.27, -58.833, 1.396, 1.396);
        var instance2 = new Graphics()
            .drawCommands(shapes.TitleNew[88])
            .setTransform(-348.5, -284.2, 0.872, 0.872);
        var instance1 = new lib.hittestie()
            .setTransform(-46.7, -76.5, 1.364, 1.15)
            .setAlpha(0);
        this[instance1.name = "hittestie"] = instance1;
        this.addChild(instance22, instance21, instance20, instance19, instance18, instance17, instance16, instance15, instance14, instance13, instance12, instance11, instance10, instance9, instance8, instance7, instance6, instance5, instance4, instance3, instance2, instance1);
        /* stop();
        //gotoAndPlay(31); //to test the bacteria animation*/
    });

    lib.Symbol_1 = Container.extend(function () {
        Container.call(this);
        var instance1 = new Graphics()
            .drawCommands(shapes.TitleNew[0])
            .setTransform(-518.25, -325.5);
        this.addChild(instance1);
    });

    lib.TitleNew = MovieClip.extend(function () {
        MovieClip.call(this, {
            duration: 60,
            framerate: 30
        });
        var instance7 = new lib.macro_bacteria()
            .setTransform(453.95, 497.4, 0.858, 0.81);
        var instance6 = new lib.macro_virus_at()
            .setTransform(1160.85, 214, 0.889, 0.838);
        var instance5 = new lib.protein()
            .setTransform(565.95, 567.85, 1.233, 1.373);
        var instance4 = new lib.virus_attenuated()
            .setTransform(1053.5, 276.15, 0.628, 0.681);
        var instance3 = new lib.Name()
            .setTransform(552.65, 359.9);
        var instance2 = new lib.Syringe();
        var instance1 = new Graphics()
            .drawCommands(shapes.TitleNew[0]);
        var instance8 = new lib.Symbol_1();
        this.addTimedChild(instance7)
            .addTimedChild(instance6)
            .addTimedChild(instance5)
            .addTimedChild(instance4)
            .addTimedChild(instance3)
            .addTimedChild(instance2, 0, 60, {
                "0": {
                    x: 660.7,
                    y: 298.95,
                    sx: 0.786,
                    sy: 0.786,
                    kx: 3.665,
                    ky: 2.618,
                    r: 0
                },
                "1": {
                    x: 669.828,
                    y: 290.262,
                    kx: 3.774,
                    ky: 2.51
                },
                "2": {
                    x: 677.844,
                    y: 280.56,
                    kx: 3.882,
                    ky: 2.401
                },
                "3": {
                    x: 684.847,
                    y: 270.025,
                    kx: 3.99,
                    ky: 2.293
                },
                "4": {
                    x: 690.634,
                    y: 258.809,
                    kx: 4.099,
                    ky: 2.185
                },
                "5": {
                    x: 695.18,
                    y: 247.05,
                    kx: 4.207,
                    ky: 2.076
                },
                "6": {
                    x: 698.42,
                    y: 234.863,
                    kx: 4.315,
                    ky: 1.968
                },
                "7": {
                    x: 700.33,
                    y: 222.376,
                    kx: 4.424,
                    ky: 1.86
                },
                "8": {
                    x: 700.86,
                    y: 209.781,
                    kx: 4.532,
                    ky: 1.751
                },
                "9": {
                    x: 700.052,
                    y: 197.213,
                    kx: 4.64,
                    ky: 1.643
                },
                "10": {
                    x: 697.893,
                    y: 184.8,
                    kx: 0,
                    ky: 0,
                    r: 1.535
                },
                "11": {
                    x: 694.368,
                    y: 172.695,
                    r: 1.426
                },
                "12": {
                    x: 689.616,
                    y: 161.028,
                    r: 1.318
                },
                "13": {
                    x: 683.598,
                    y: 149.987,
                    r: 1.21
                },
                "14": {
                    x: 676.372,
                    y: 139.623,
                    r: 1.101
                },
                "15": {
                    x: 668.149,
                    y: 130.148,
                    r: 0.993
                },
                "16": {
                    x: 658.92,
                    y: 121.558,
                    r: 0.885
                },
                "17": {
                    x: 648.799,
                    y: 114.02,
                    r: 0.776
                },
                "18": {
                    x: 637.865,
                    y: 107.638,
                    r: 0.668
                },
                "19": {
                    x: 626.376,
                    y: 102.493,
                    r: 0.56
                },
                "20": {
                    x: 614.379,
                    y: 98.592,
                    r: 0.451
                },
                "21": {
                    x: 602.031,
                    y: 96.009,
                    r: 0.343
                },
                "22": {
                    x: 589.481,
                    y: 94.805,
                    r: 0.235
                },
                "23": {
                    x: 576.872,
                    y: 94.971,
                    r: 0.126
                },
                "24": {
                    x: 564.383,
                    y: 96.425,
                    r: 0.018
                },
                "25": {
                    x: 552.085,
                    y: 99.318,
                    r: -0.09
                },
                "26": {
                    x: 540.2,
                    y: 103.426,
                    r: -0.199
                },
                "27": {
                    x: 528.824,
                    y: 108.855,
                    r: -0.307
                },
                "28": {
                    x: 518.095,
                    y: 115.464,
                    r: -0.415
                },
                "29": {
                    x: 508.15,
                    y: 123.05,
                    r: -0.524
                }
            })
            .addTimedChild(instance1, 0, 29)
            .addTimedChild(instance8, 29, 31, {
                "29": {
                    x: 518.25,
                    y: 325.5,
                    a: 1
                },
                "30": {
                    a: 0.96
                },
                "31": {
                    a: 0.93
                },
                "32": {
                    a: 0.9
                },
                "33": {
                    a: 0.86
                },
                "34": {
                    a: 0.83
                },
                "35": {
                    a: 0.8
                },
                "36": {
                    a: 0.76
                },
                "37": {
                    a: 0.73
                },
                "38": {
                    a: 0.7
                },
                "39": {
                    a: 0.66
                },
                "40": {
                    a: 0.63
                },
                "41": {
                    a: 0.6
                },
                "42": {
                    a: 0.56
                },
                "43": {
                    a: 0.53
                },
                "44": {
                    a: 0.5
                },
                "45": {
                    a: 0.46
                },
                "46": {
                    a: 0.43
                },
                "47": {
                    a: 0.4
                },
                "48": {
                    a: 0.36
                },
                "49": {
                    a: 0.33
                },
                "50": {
                    a: 0.3
                },
                "51": {
                    a: 0.26
                },
                "52": {
                    a: 0.23
                },
                "53": {
                    a: 0.2
                },
                "54": {
                    a: 0.16
                },
                "55": {
                    a: 0.13
                },
                "56": {
                    a: 0.1
                },
                "57": {
                    a: 0.06
                },
                "58": {
                    a: 0.03
                },
                "59": {
                    a: 0
                }
            });
    });

    lib.TitleNew.assets = {
        "TitleNew": "images/TitleNew.shapes.txt"
    };
})(PIXI, lib = lib || {});
var lib;
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        stage: lib.TitleNew,
        background: 0xffffcc,
        width: 1624,
        height: 750,
        framerate: 30,
        totalFrames: 60,
        library: lib
    };
}