(function (PIXI, lib) {

    var MovieClip = PIXI.animate.MovieClip;
    var Container = PIXI.Container;
    var Graphics = PIXI.Graphics;
    var shapes = PIXI.animate.ShapesCache;

    lib.hitmesquare = Container.extend(function () {
        Container.call(this);
        var instance1 = new Graphics()
            .drawCommands(shapes.InternalBacteria[0]);
        this.addChild(instance1);
    });

    lib.yellow_bacteria = Container.extend(function () {
        Container.call(this);
        var instance3 = new Graphics()
            .drawCommands(shapes.InternalBacteria[3])
            .setTransform(168.75, 20.1);
        var instance2 = new Graphics()
            .drawCommands(shapes.InternalBacteria[2])
            .setTransform(168.75, 20.1);
        var instance1 = new Graphics()
            .drawCommands(shapes.InternalBacteria[1])
            .setTransform(170.45, 24.05);
        this.addChild(instance3, instance2, instance1);
    });

    lib.antenae_single = Container.extend(function () {
        Container.call(this);
        var instance3 = new Graphics()
            .drawCommands(shapes.InternalBacteria[6])
            .setTransform(-277.05, -95.65);
        var instance2 = new Graphics()
            .drawCommands(shapes.InternalBacteria[5])
            .setTransform(-277.05, -95.65);
        var instance1 = new Graphics()
            .drawCommands(shapes.InternalBacteria[4])
            .setTransform(-277.05, -95.65);
        this.addChild(instance3, instance2, instance1);
    });

    lib.four_attenae = Container.extend(function () {
        Container.call(this);
        var instance4 = new lib.antenae_single()
            .setTransform(54.9, 3.8, 0.998, 0.998, -0.276);
        var instance3 = new lib.antenae_single()
            .setTransform(0, 17.15, 0.998, 0.998, -0.399);
        var instance2 = new lib.antenae_single()
            .setTransform(269.7, 2.25, 0.999, 0.999, 0.018);
        var instance1 = new lib.antenae_single()
            .setTransform(318, 13.35, 0.998, 0.998, 0.118);
        this.addChild(instance4, instance3, instance2, instance1);
    });

    lib.eyelash = Container.extend(function () {
        Container.call(this);
        var instance2 = new Graphics()
            .drawCommands(shapes.InternalBacteria[44])
            .setTransform(-157.8, -117.1);
        var instance1 = new Graphics()
            .drawCommands(shapes.InternalBacteria[45])
            .setTransform(-157.8, -117.1);
        this.addChild(instance2, instance1);
    });

    lib.eye = Container.extend(function () {
        Container.call(this);
        var instance2 = new Graphics()
            .drawCommands(shapes.InternalBacteria[47])
            .setTransform(-161.95, -119.45);
        var instance1 = new Graphics()
            .drawCommands(shapes.InternalBacteria[46])
            .setTransform(-161.95, -119.45);
        this.addChild(instance2, instance1);
    });

    lib.body = Container.extend(function () {
        Container.call(this);
        var instance4 = new Graphics()
            .drawCommands(shapes.InternalBacteria[49])
            .setTransform(0.15, -0.55);
        var instance3 = new Graphics()
            .drawCommands(shapes.InternalBacteria[48])
            .setTransform(0.15, -0.55);
        var instance2 = new Graphics()
            .drawCommands(shapes.InternalBacteria[49]);
        var instance1 = new Graphics()
            .drawCommands(shapes.InternalBacteria[48]);
        this.addChild(instance4, instance3, instance2, instance1);
    });

    lib.tail_clip = MovieClip.extend(function () {
        MovieClip.call(this, {
            duration: 30
        });
        var instance1 = new Graphics()
            .drawCommands(shapes.InternalBacteria[50]);
        var instance2 = new Graphics()
            .drawCommands(shapes.InternalBacteria[51]);
        var instance3 = new Graphics()
            .drawCommands(shapes.InternalBacteria[52]);
        var instance4 = new Graphics()
            .drawCommands(shapes.InternalBacteria[53]);
        var instance5 = new Graphics()
            .drawCommands(shapes.InternalBacteria[54]);
        var instance6 = new Graphics()
            .drawCommands(shapes.InternalBacteria[55]);
        var instance7 = new Graphics()
            .drawCommands(shapes.InternalBacteria[56]);
        var instance8 = new Graphics()
            .drawCommands(shapes.InternalBacteria[57]);
        var instance9 = new Graphics()
            .drawCommands(shapes.InternalBacteria[58]);
        var instance10 = new Graphics()
            .drawCommands(shapes.InternalBacteria[59]);
        var instance11 = new Graphics()
            .drawCommands(shapes.InternalBacteria[60]);
        var instance12 = new Graphics()
            .drawCommands(shapes.InternalBacteria[61]);
        var instance13 = new Graphics()
            .drawCommands(shapes.InternalBacteria[62]);
        var instance14 = new Graphics()
            .drawCommands(shapes.InternalBacteria[63]);
        var instance15 = new Graphics()
            .drawCommands(shapes.InternalBacteria[64]);
        var instance16 = new Graphics()
            .drawCommands(shapes.InternalBacteria[65]);
        var instance17 = new Graphics()
            .drawCommands(shapes.InternalBacteria[66]);
        var instance18 = new Graphics()
            .drawCommands(shapes.InternalBacteria[67]);
        var instance19 = new Graphics()
            .drawCommands(shapes.InternalBacteria[68]);
        var instance20 = new Graphics()
            .drawCommands(shapes.InternalBacteria[69]);
        var instance21 = new Graphics()
            .drawCommands(shapes.InternalBacteria[70]);
        var instance22 = new Graphics()
            .drawCommands(shapes.InternalBacteria[71]);
        var instance23 = new Graphics()
            .drawCommands(shapes.InternalBacteria[72]);
        var instance24 = new Graphics()
            .drawCommands(shapes.InternalBacteria[73]);
        var instance25 = new Graphics()
            .drawCommands(shapes.InternalBacteria[74]);
        var instance26 = new Graphics()
            .drawCommands(shapes.InternalBacteria[75]);
        var instance27 = new Graphics()
            .drawCommands(shapes.InternalBacteria[76]);
        var instance28 = new Graphics()
            .drawCommands(shapes.InternalBacteria[77]);
        var instance29 = new Graphics()
            .drawCommands(shapes.InternalBacteria[78]);
        var instance30 = new Graphics()
            .drawCommands(shapes.InternalBacteria[50]);
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

    lib.tic2 = Container.extend(function () {
        Container.call(this);
        var instance1 = new Graphics()
            .drawCommands(shapes.InternalBacteria[154])
            .setTransform(-216.3, -1.7, 1.973, 0.62, 0, 3.142, 3.141);
        this.addChild(instance1);
    });

    lib.tic1 = Container.extend(function () {
        Container.call(this);
        var instance1 = new Graphics()
            .drawCommands(shapes.InternalBacteria[155])
            .setTransform(-173.6, 11.45, 1.56, 0.916, 0, 3.161, 3.122);
        this.addChild(instance1);
    });

    lib.bacteria_divide = MovieClip.extend(function () {
        MovieClip.call(this, {
            duration: 115
        });
        var instance175 = new lib.body()
            .setRenderable(false);
        this[instance175.name = "body"] = instance175;
        var instance13 = new lib.body();
        this[instance13.name = "body"] = instance13;
        var instance18 = new Graphics()
            .drawCommands(shapes.InternalBacteria[49]);
        var instance17 = new Graphics()
            .drawCommands(shapes.InternalBacteria[48]);
        var instance16 = new Graphics()
            .drawCommands(shapes.InternalBacteria[49]);
        var instance15 = new Graphics()
            .drawCommands(shapes.InternalBacteria[48]);
        var instance19 = new Graphics()
            .drawCommands(shapes.InternalBacteria[48]);
        var instance21 = new Graphics()
            .drawCommands(shapes.InternalBacteria[96]);
        var instance20 = new Graphics()
            .drawCommands(shapes.InternalBacteria[79]);
        var instance23 = new Graphics()
            .drawCommands(shapes.InternalBacteria[97]);
        var instance22 = new Graphics()
            .drawCommands(shapes.InternalBacteria[80]);
        var instance25 = new Graphics()
            .drawCommands(shapes.InternalBacteria[98]);
        var instance24 = new Graphics()
            .drawCommands(shapes.InternalBacteria[81]);
        var instance27 = new Graphics()
            .drawCommands(shapes.InternalBacteria[99]);
        var instance26 = new Graphics()
            .drawCommands(shapes.InternalBacteria[82]);
        var instance29 = new Graphics()
            .drawCommands(shapes.InternalBacteria[100]);
        var instance28 = new Graphics()
            .drawCommands(shapes.InternalBacteria[83]);
        var instance31 = new Graphics()
            .drawCommands(shapes.InternalBacteria[101]);
        var instance30 = new Graphics()
            .drawCommands(shapes.InternalBacteria[84]);
        var instance36 = new Graphics()
            .drawCommands(shapes.InternalBacteria[102]);
        var instance35 = new Graphics()
            .drawCommands(shapes.InternalBacteria[85]);
        var instance42 = new Graphics()
            .drawCommands(shapes.InternalBacteria[103]);
        var instance41 = new Graphics()
            .drawCommands(shapes.InternalBacteria[86]);
        var instance45 = new Graphics()
            .drawCommands(shapes.InternalBacteria[104]);
        var instance44 = new Graphics()
            .drawCommands(shapes.InternalBacteria[87]);
        var instance48 = new Graphics()
            .drawCommands(shapes.InternalBacteria[105]);
        var instance47 = new Graphics()
            .drawCommands(shapes.InternalBacteria[88]);
        var instance51 = new Graphics()
            .drawCommands(shapes.InternalBacteria[106]);
        var instance50 = new Graphics()
            .drawCommands(shapes.InternalBacteria[89]);
        var instance54 = new Graphics()
            .drawCommands(shapes.InternalBacteria[107]);
        var instance53 = new Graphics()
            .drawCommands(shapes.InternalBacteria[90]);
        var instance57 = new Graphics()
            .drawCommands(shapes.InternalBacteria[108]);
        var instance56 = new Graphics()
            .drawCommands(shapes.InternalBacteria[91]);
        var instance60 = new Graphics()
            .drawCommands(shapes.InternalBacteria[109]);
        var instance59 = new Graphics()
            .drawCommands(shapes.InternalBacteria[92]);
        var instance63 = new Graphics()
            .drawCommands(shapes.InternalBacteria[110]);
        var instance62 = new Graphics()
            .drawCommands(shapes.InternalBacteria[93]);
        var instance66 = new Graphics()
            .drawCommands(shapes.InternalBacteria[111]);
        var instance65 = new Graphics()
            .drawCommands(shapes.InternalBacteria[94]);
        var instance69 = new Graphics()
            .drawCommands(shapes.InternalBacteria[112]);
        var instance68 = new Graphics()
            .drawCommands(shapes.InternalBacteria[95]);
        var instance73 = new Graphics()
            .drawCommands(shapes.InternalBacteria[113]);
        var instance75 = new Graphics()
            .drawCommands(shapes.InternalBacteria[114]);
        var instance78 = new Graphics()
            .drawCommands(shapes.InternalBacteria[115]);
        var instance81 = new Graphics()
            .drawCommands(shapes.InternalBacteria[116]);
        var instance84 = new Graphics()
            .drawCommands(shapes.InternalBacteria[117]);
        var instance89 = new Graphics()
            .drawCommands(shapes.InternalBacteria[118]);
        var instance92 = new Graphics()
            .drawCommands(shapes.InternalBacteria[119]);
        var instance94 = new Graphics()
            .drawCommands(shapes.InternalBacteria[120]);
        var instance99 = new Graphics()
            .drawCommands(shapes.InternalBacteria[121]);
        var instance102 = new Graphics()
            .drawCommands(shapes.InternalBacteria[122]);
        var instance105 = new Graphics()
            .drawCommands(shapes.InternalBacteria[123]);
        var instance108 = new Graphics()
            .drawCommands(shapes.InternalBacteria[124]);
        var instance113 = new Graphics()
            .drawCommands(shapes.InternalBacteria[125]);
        var instance115 = new Graphics()
            .drawCommands(shapes.InternalBacteria[140]);
        var instance114 = new Graphics()
            .drawCommands(shapes.InternalBacteria[126]);
        var instance117 = new Graphics()
            .drawCommands(shapes.InternalBacteria[141]);
        var instance116 = new Graphics()
            .drawCommands(shapes.InternalBacteria[127]);
        var instance119 = new Graphics()
            .drawCommands(shapes.InternalBacteria[142]);
        var instance118 = new Graphics()
            .drawCommands(shapes.InternalBacteria[128]);
        var instance121 = new Graphics()
            .drawCommands(shapes.InternalBacteria[143]);
        var instance120 = new Graphics()
            .drawCommands(shapes.InternalBacteria[129]);
        var instance123 = new Graphics()
            .drawCommands(shapes.InternalBacteria[144]);
        var instance122 = new Graphics()
            .drawCommands(shapes.InternalBacteria[130]);
        var instance127 = new Graphics()
            .drawCommands(shapes.InternalBacteria[145]);
        var instance126 = new Graphics()
            .drawCommands(shapes.InternalBacteria[131]);
        var instance130 = new Graphics()
            .drawCommands(shapes.InternalBacteria[146]);
        var instance129 = new Graphics()
            .drawCommands(shapes.InternalBacteria[132]);
        var instance133 = new Graphics()
            .drawCommands(shapes.InternalBacteria[147]);
        var instance132 = new Graphics()
            .drawCommands(shapes.InternalBacteria[133]);
        var instance136 = new Graphics()
            .drawCommands(shapes.InternalBacteria[148]);
        var instance135 = new Graphics()
            .drawCommands(shapes.InternalBacteria[134]);
        var instance142 = new Graphics()
            .drawCommands(shapes.InternalBacteria[149]);
        var instance141 = new Graphics()
            .drawCommands(shapes.InternalBacteria[135]);
        var instance152 = new Graphics()
            .drawCommands(shapes.InternalBacteria[150]);
        var instance151 = new Graphics()
            .drawCommands(shapes.InternalBacteria[136]);
        var instance156 = new Graphics()
            .drawCommands(shapes.InternalBacteria[151]);
        var instance155 = new Graphics()
            .drawCommands(shapes.InternalBacteria[137]);
        var instance160 = new Graphics()
            .drawCommands(shapes.InternalBacteria[152]);
        var instance159 = new Graphics()
            .drawCommands(shapes.InternalBacteria[138]);
        var instance166 = new Graphics()
            .drawCommands(shapes.InternalBacteria[153]);
        var instance165 = new Graphics()
            .drawCommands(shapes.InternalBacteria[139]);
        var instance12 = new lib.tail_clip();
        var instance34 = new lib.tail_clip();
        var instance171 = new lib.body();
        this[instance171.name = "body"] = instance171;
        var instance170 = new Graphics()
            .drawCommands(shapes.InternalBacteria[50]);
        var instance11 = new lib.eye();
        var instance33 = new lib.eye();
        var instance10 = new lib.eyelash();
        var instance9 = new Graphics()
            .drawCommands(shapes.InternalBacteria[7]);
        var instance14 = new Graphics()
            .drawCommands(shapes.InternalBacteria[7]);
        var instance32 = new Graphics()
            .drawCommands(shapes.InternalBacteria[7]);
        var instance40 = new Graphics()
            .drawCommands(shapes.InternalBacteria[45]);
        var instance39 = new Graphics()
            .drawCommands(shapes.InternalBacteria[44]);
        var instance38 = new Graphics()
            .drawCommands(shapes.InternalBacteria[30]);
        var instance37 = new Graphics()
            .drawCommands(shapes.InternalBacteria[8]);
        var instance43 = new Graphics()
            .drawCommands(shapes.InternalBacteria[9]);
        var instance46 = new Graphics()
            .drawCommands(shapes.InternalBacteria[10]);
        var instance49 = new Graphics()
            .drawCommands(shapes.InternalBacteria[11]);
        var instance52 = new Graphics()
            .drawCommands(shapes.InternalBacteria[12]);
        var instance55 = new Graphics()
            .drawCommands(shapes.InternalBacteria[13]);
        var instance58 = new Graphics()
            .drawCommands(shapes.InternalBacteria[14]);
        var instance64 = new Graphics()
            .drawCommands(shapes.InternalBacteria[31]);
        var instance67 = new Graphics()
            .drawCommands(shapes.InternalBacteria[32]);
        var instance72 = new Graphics()
            .drawCommands(shapes.InternalBacteria[45]);
        var instance71 = new Graphics()
            .drawCommands(shapes.InternalBacteria[44]);
        var instance70 = new Graphics()
            .drawCommands(shapes.InternalBacteria[33]);
        var instance74 = new Graphics()
            .drawCommands(shapes.InternalBacteria[34]);
        var instance61 = new Graphics()
            .drawCommands(shapes.InternalBacteria[15]);
        var instance77 = new Graphics()
            .drawCommands(shapes.InternalBacteria[33]);
        var instance76 = new Graphics()
            .drawCommands(shapes.InternalBacteria[16]);
        var instance80 = new Graphics()
            .drawCommands(shapes.InternalBacteria[32]);
        var instance79 = new Graphics()
            .drawCommands(shapes.InternalBacteria[17]);
        var instance83 = new Graphics()
            .drawCommands(shapes.InternalBacteria[31]);
        var instance82 = new Graphics()
            .drawCommands(shapes.InternalBacteria[18]);
        var instance88 = new Graphics()
            .drawCommands(shapes.InternalBacteria[45]);
        var instance87 = new Graphics()
            .drawCommands(shapes.InternalBacteria[44]);
        var instance86 = new Graphics()
            .drawCommands(shapes.InternalBacteria[30]);
        var instance85 = new Graphics()
            .drawCommands(shapes.InternalBacteria[19]);
        var instance91 = new Graphics()
            .drawCommands(shapes.InternalBacteria[35]);
        var instance90 = new Graphics()
            .drawCommands(shapes.InternalBacteria[20]);
        var instance93 = new Graphics()
            .drawCommands(shapes.InternalBacteria[21]);
        var instance98 = new Graphics()
            .drawCommands(shapes.InternalBacteria[45]);
        var instance97 = new Graphics()
            .drawCommands(shapes.InternalBacteria[44]);
        var instance96 = new Graphics()
            .drawCommands(shapes.InternalBacteria[36]);
        var instance95 = new Graphics()
            .drawCommands(shapes.InternalBacteria[22]);
        var instance101 = new Graphics()
            .drawCommands(shapes.InternalBacteria[37]);
        var instance100 = new Graphics()
            .drawCommands(shapes.InternalBacteria[23]);
        var instance104 = new Graphics()
            .drawCommands(shapes.InternalBacteria[38]);
        var instance103 = new Graphics()
            .drawCommands(shapes.InternalBacteria[24]);
        var instance107 = new Graphics()
            .drawCommands(shapes.InternalBacteria[39]);
        var instance106 = new Graphics()
            .drawCommands(shapes.InternalBacteria[25]);
        var instance112 = new Graphics()
            .drawCommands(shapes.InternalBacteria[45]);
        var instance111 = new Graphics()
            .drawCommands(shapes.InternalBacteria[44]);
        var instance125 = new Graphics()
            .drawCommands(shapes.InternalBacteria[45]);
        var instance124 = new Graphics()
            .drawCommands(shapes.InternalBacteria[44]);
        var instance110 = new Graphics()
            .drawCommands(shapes.InternalBacteria[30]);
        var instance128 = new Graphics()
            .drawCommands(shapes.InternalBacteria[40]);
        var instance131 = new Graphics()
            .drawCommands(shapes.InternalBacteria[41]);
        var instance134 = new Graphics()
            .drawCommands(shapes.InternalBacteria[42]);
        var instance140 = new Graphics()
            .drawCommands(shapes.InternalBacteria[45]);
        var instance139 = new Graphics()
            .drawCommands(shapes.InternalBacteria[44]);
        var instance148 = new Graphics()
            .drawCommands(shapes.InternalBacteria[45]);
        var instance147 = new Graphics()
            .drawCommands(shapes.InternalBacteria[44]);
        var instance138 = new Graphics()
            .drawCommands(shapes.InternalBacteria[43]);
        var instance109 = new Graphics()
            .drawCommands(shapes.InternalBacteria[26]);
        var instance150 = new Graphics()
            .drawCommands(shapes.InternalBacteria[42]);
        var instance149 = new Graphics()
            .drawCommands(shapes.InternalBacteria[27]);
        var instance154 = new Graphics()
            .drawCommands(shapes.InternalBacteria[41]);
        var instance153 = new Graphics()
            .drawCommands(shapes.InternalBacteria[8]);
        var instance158 = new Graphics()
            .drawCommands(shapes.InternalBacteria[40]);
        var instance157 = new Graphics()
            .drawCommands(shapes.InternalBacteria[28]);
        var instance164 = new Graphics()
            .drawCommands(shapes.InternalBacteria[45]);
        var instance163 = new Graphics()
            .drawCommands(shapes.InternalBacteria[44]);
        var instance162 = new Graphics()
            .drawCommands(shapes.InternalBacteria[30]);
        var instance161 = new Graphics()
            .drawCommands(shapes.InternalBacteria[29]);
        var instance169 = new lib.eyelash();
        var instance168 = new Graphics()
            .drawCommands(shapes.InternalBacteria[7]);
        var instance173 = new Graphics()
            .drawCommands(shapes.InternalBacteria[155]);
        var instance172 = new Graphics()
            .drawCommands(shapes.InternalBacteria[154]);
        var instance174 = new Graphics()
            .drawCommands(shapes.InternalBacteria[7]);
        var instance176 = new Graphics()
            .drawCommands(shapes.InternalBacteria[154]);
        var instance177 = new Graphics()
            .drawCommands(shapes.InternalBacteria[7]);
        var instance179 = new Graphics()
            .drawCommands(shapes.InternalBacteria[154]);
        var instance178 = new Graphics()
            .drawCommands(shapes.InternalBacteria[7]);
        var instance181 = new Graphics()
            .drawCommands(shapes.InternalBacteria[155]);
        var instance182 = new lib.tic1();
        var instance180 = new lib.tic2();
        var instance183 = new Graphics()
            .drawCommands(shapes.InternalBacteria[7]);
        var instance186 = new Graphics()
            .drawCommands(shapes.InternalBacteria[158]);
        var instance185 = new Graphics()
            .drawCommands(shapes.InternalBacteria[157]);
        var instance184 = new Graphics()
            .drawCommands(shapes.InternalBacteria[156]);
        var instance187 = new Graphics()
            .drawCommands(shapes.InternalBacteria[159]);
        var instance8 = new lib.antenae_single();
        var instance7 = new lib.antenae_single();
        var instance6 = new lib.antenae_single();
        var instance5 = new lib.antenae_single();
        var instance4 = new lib.antenae_single();
        var instance3 = new lib.antenae_single();
        var instance2 = new lib.antenae_single();
        var instance146 = new lib.antenae_single();
        var instance145 = new lib.antenae_single();
        var instance144 = new lib.antenae_single();
        var instance143 = new lib.antenae_single();
        var instance137 = new lib.four_attenae();
        var instance167 = new lib.antenae_single();
        var instance1 = new lib.hitmesquare();
        this[instance1.name = "hittestie"] = instance1;
        var instance188 = new lib.yellow_bacteria();
        this.addTimedChild(instance175, 68, 31, {
                "68": {
                    x: -93.75,
                    y: -20.55
                }
            })
            .addTimedChild(instance13, 0, 7, {
                "0": {
                    x: -93.75,
                    y: -25.55,
                    sx: 1,
                    sy: 1
                },
                "1": {
                    x: -98.922,
                    y: -25.119,
                    sx: 1.058,
                    sy: 0.983
                },
                "2": {
                    x: -104.093,
                    y: -24.788,
                    sx: 1.116,
                    sy: 0.966
                },
                "3": {
                    x: -109.215,
                    y: -24.358,
                    sx: 1.173,
                    sy: 0.949
                },
                "4": {
                    x: -114.335,
                    y: -23.976,
                    sx: 1.231,
                    sy: 0.933
                },
                "5": {
                    x: -119.507,
                    y: -23.546,
                    sx: 1.289,
                    sy: 0.916
                },
                "6": {
                    x: -124.678,
                    y: -23.215,
                    sx: 1.347,
                    sy: 0.899
                }
            })
            .addTimedChild(instance18, 7, 2, {
                "7": {
                    x: -129.668,
                    y: -23.037,
                    sx: 1.405,
                    sy: 0.882
                },
                "8": {
                    x: -129.7,
                    y: -23.05
                }
            })
            .addTimedChild(instance17, 7, 1, {
                "7": {
                    x: -129.668,
                    y: -23.051,
                    sx: 1.405,
                    sy: 0.882
                }
            })
            .addTimedChild(instance16, 7, 1, {
                "7": {
                    x: -129.9,
                    y: -22.55,
                    sx: 1.405,
                    sy: 0.882
                }
            })
            .addTimedChild(instance15, 7, 1, {
                "7": {
                    x: -129.868,
                    y: -22.551,
                    sx: 1.405,
                    sy: 0.882
                }
            })
            .addTimedChild(instance19, 8, 1, {
                "8": {
                    x: -129.85,
                    y: -22.55,
                    sx: 1.405,
                    sy: 0.882
                }
            })
            .addTimedChild(instance21, 9, 1)
            .addTimedChild(instance20, 9, 1)
            .addTimedChild(instance23, 10, 1)
            .addTimedChild(instance22, 10, 1)
            .addTimedChild(instance25, 11, 1)
            .addTimedChild(instance24, 11, 1)
            .addTimedChild(instance27, 12, 1)
            .addTimedChild(instance26, 12, 1)
            .addTimedChild(instance29, 13, 1)
            .addTimedChild(instance28, 13, 1)
            .addTimedChild(instance31, 14, 1)
            .addTimedChild(instance30, 14, 1)
            .addTimedChild(instance36, 15, 1)
            .addTimedChild(instance35, 15, 1)
            .addTimedChild(instance42, 16, 1)
            .addTimedChild(instance41, 16, 1)
            .addTimedChild(instance45, 17, 1)
            .addTimedChild(instance44, 17, 1)
            .addTimedChild(instance48, 18, 1)
            .addTimedChild(instance47, 18, 1)
            .addTimedChild(instance51, 19, 1)
            .addTimedChild(instance50, 19, 1)
            .addTimedChild(instance54, 20, 1)
            .addTimedChild(instance53, 20, 1)
            .addTimedChild(instance57, 21, 1)
            .addTimedChild(instance56, 21, 1)
            .addTimedChild(instance60, 22, 1)
            .addTimedChild(instance59, 22, 1)
            .addTimedChild(instance63, 23, 1)
            .addTimedChild(instance62, 23, 1)
            .addTimedChild(instance66, 24, 1)
            .addTimedChild(instance65, 24, 1)
            .addTimedChild(instance69, 25, 1)
            .addTimedChild(instance68, 25, 1)
            .addTimedChild(instance73, 26, 1)
            .addTimedChild(instance75, 27, 1)
            .addTimedChild(instance78, 28, 1)
            .addTimedChild(instance81, 29, 1)
            .addTimedChild(instance84, 30, 1)
            .addTimedChild(instance89, 31, 1)
            .addTimedChild(instance92, 32, 1)
            .addTimedChild(instance94, 33, 1)
            .addTimedChild(instance99, 34, 1)
            .addTimedChild(instance102, 35, 1)
            .addTimedChild(instance105, 36, 1)
            .addTimedChild(instance108, 37, 1)
            .addTimedChild(instance113, 38, 1)
            .addTimedChild(instance115, 39, 1)
            .addTimedChild(instance114, 39, 1)
            .addTimedChild(instance117, 40, 1)
            .addTimedChild(instance116, 40, 1)
            .addTimedChild(instance119, 41, 1)
            .addTimedChild(instance118, 41, 1)
            .addTimedChild(instance121, 42, 1)
            .addTimedChild(instance120, 42, 1)
            .addTimedChild(instance123, 43, 1)
            .addTimedChild(instance122, 43, 1)
            .addTimedChild(instance127, 44, 1)
            .addTimedChild(instance126, 44, 1)
            .addTimedChild(instance130, 45, 1)
            .addTimedChild(instance129, 45, 1)
            .addTimedChild(instance133, 46, 1)
            .addTimedChild(instance132, 46, 1)
            .addTimedChild(instance136, 47, 1)
            .addTimedChild(instance135, 47, 1)
            .addTimedChild(instance142, 48, 3)
            .addTimedChild(instance141, 48, 3)
            .addTimedChild(instance152, 51, 1)
            .addTimedChild(instance151, 51, 1)
            .addTimedChild(instance156, 52, 1)
            .addTimedChild(instance155, 52, 1)
            .addTimedChild(instance160, 53, 1)
            .addTimedChild(instance159, 53, 1)
            .addTimedChild(instance166, 54, 1)
            .addTimedChild(instance165, 54, 1)
            .addTimedChild(instance12, 0, 55, {
                "0": {
                    x: 87.7,
                    y: 9.1,
                    sx: 1,
                    sy: 1,
                    kx: 0,
                    ky: 0
                },
                "1": {
                    x: 92.9,
                    y: 9
                },
                "2": {
                    x: 98.05,
                    y: 8.85
                },
                "3": {
                    x: 103.25,
                    y: 8.75
                },
                "4": {
                    x: 108.45,
                    y: 8.65
                },
                "5": {
                    x: 113.65,
                    y: 8.55
                },
                "6": {
                    x: 118.8,
                    y: 8.4
                },
                "7": {
                    x: 124,
                    y: 8.3
                },
                "8": {
                    x: 124.464,
                    y: 8.231,
                    sx: 0.968,
                    sy: 0.974
                },
                "9": {
                    x: 124.829,
                    y: 8.162,
                    sx: 0.937,
                    sy: 0.947
                },
                "10": {
                    x: 125.291,
                    y: 8.043,
                    sx: 0.905,
                    sy: 0.921
                },
                "11": {
                    x: 125.706,
                    y: 7.924,
                    sx: 0.873,
                    sy: 0.895
                },
                "12": {
                    x: 126.07,
                    y: 7.806,
                    sx: 0.841,
                    sy: 0.868
                },
                "13": {
                    x: 126.535,
                    y: 7.737,
                    sx: 0.81,
                    sy: 0.842
                },
                "14": {
                    x: 126.897,
                    y: 7.618,
                    sx: 0.778,
                    sy: 0.815
                },
                "15": {
                    x: 127.3,
                    y: 7.5,
                    sx: 0.746,
                    sy: 0.789
                },
                "16": {
                    x: 130.409,
                    y: 9.899,
                    sx: 0.771,
                    sy: 0.81,
                    kx: -0.014,
                    ky: 0.012
                },
                "17": {
                    x: 133.547,
                    y: 12.252,
                    sx: 0.797,
                    sy: 0.831,
                    kx: -0.027,
                    ky: 0.024
                },
                "18": {
                    x: 136.654,
                    y: 14.555,
                    sx: 0.822,
                    sy: 0.852,
                    kx: -0.041,
                    ky: 0.035
                },
                "19": {
                    x: 139.74,
                    y: 16.806,
                    sx: 0.847,
                    sy: 0.873,
                    kx: -0.055,
                    ky: 0.047
                },
                "20": {
                    x: 142.89,
                    y: 19.057,
                    sx: 0.873,
                    sy: 0.894,
                    kx: -0.068,
                    ky: 0.059
                },
                "21": {
                    x: 146.159,
                    y: 21.155,
                    sx: 0.898,
                    sy: 0.915,
                    kx: -0.082,
                    ky: 0.071
                },
                "22": {
                    x: 149.345,
                    y: 23.304,
                    sx: 0.924,
                    sy: 0.937,
                    kx: -0.096,
                    ky: 0.083
                },
                "23": {
                    x: 152.543,
                    y: 25.4,
                    sx: 0.949,
                    sy: 0.958,
                    kx: -0.109,
                    ky: 0.094
                },
                "24": {
                    x: 155.759,
                    y: 27.49,
                    sx: 0.974,
                    sy: 0.979,
                    kx: -0.123,
                    ky: 0.106
                },
                "25": {
                    x: 159,
                    y: 29.4,
                    sx: 1,
                    sy: 1,
                    kx: -0.137,
                    ky: 0.118
                },
                "26": {
                    x: 161.5,
                    y: 29.9
                },
                "27": {
                    x: 164,
                    y: 30.3
                },
                "28": {
                    x: 166.5,
                    y: 30.75
                },
                "29": {
                    x: 169,
                    y: 31.15
                },
                "30": {
                    x: 171.5,
                    y: 31.55
                },
                "31": {
                    x: 174,
                    y: 31.85
                },
                "32": {
                    x: 172.2,
                    y: 33.05
                },
                "33": {
                    x: 170.4,
                    y: 34.15
                },
                "34": {
                    x: 168.5,
                    y: 35.25
                },
                "35": {
                    x: 168.7,
                    y: 34.699
                },
                "36": {
                    x: 168.9,
                    y: 34.149
                },
                "37": {
                    x: 169.05,
                    y: 33.549
                },
                "38": {
                    x: 169.25,
                    y: 32.9
                },
                "39": {
                    x: 171.25,
                    y: 32.8
                },
                "40": {
                    x: 173.2,
                    y: 32.599
                },
                "41": {
                    x: 175.2,
                    y: 32.449
                },
                "42": {
                    x: 177.15,
                    y: 32.249
                },
                "43": {
                    x: 179.1,
                    y: 32.099
                },
                "44": {
                    x: 181,
                    y: 31.85
                },
                "45": {
                    x: 185.05,
                    y: 31.65
                },
                "46": {
                    x: 189.05,
                    y: 31.35
                },
                "47": {
                    x: 193.05,
                    y: 31.05
                },
                "48": {
                    x: 197,
                    y: 30.65
                },
                "49": {
                    x: 197.05,
                    y: 31.3
                },
                "50": {
                    x: 197,
                    y: 31.85
                },
                "51": {
                    x: 204.05,
                    y: 25.35
                },
                "52": {
                    x: 211.05,
                    y: 18.8
                },
                "53": {
                    x: 218.05,
                    y: 12.2
                },
                "54": {
                    x: 225,
                    y: 5.6
                }
            })
            .addTimedChild(instance34, 15, 40, {
                "15": {
                    x: -129.3,
                    y: 5.05,
                    sx: 0.299,
                    sy: 0.344,
                    kx: 0,
                    ky: 3.142
                },
                "16": {
                    x: -131.967,
                    y: 8.53,
                    sx: 0.369,
                    sy: 0.41,
                    kx: 0.015,
                    ky: 3.127
                },
                "17": {
                    x: -134.596,
                    y: 11.85,
                    sx: 0.44,
                    sy: 0.475,
                    kx: 0.029,
                    ky: 3.113
                },
                "18": {
                    x: -137.297,
                    y: 15.004,
                    sx: 0.511,
                    sy: 0.541,
                    kx: 0.044,
                    ky: 3.098
                },
                "19": {
                    x: -140.077,
                    y: 17.945,
                    sx: 0.582,
                    sy: 0.606,
                    kx: 0.058,
                    ky: 3.084
                },
                "20": {
                    x: -142.832,
                    y: 20.87,
                    sx: 0.653,
                    sy: 0.672,
                    kx: 0.073,
                    ky: 3.069
                },
                "21": {
                    x: -145.728,
                    y: 23.621,
                    sx: 0.723,
                    sy: 0.737,
                    kx: 0.087,
                    ky: 3.055
                },
                "22": {
                    x: -148.556,
                    y: 26.199,
                    sx: 0.794,
                    sy: 0.803,
                    kx: 0.102,
                    ky: 3.04
                },
                "23": {
                    x: -151.547,
                    y: 28.604,
                    sx: 0.865,
                    sy: 0.868,
                    kx: 0.116,
                    ky: 3.025
                },
                "24": {
                    x: -154.517,
                    y: 30.968,
                    sx: 0.936,
                    sy: 0.934,
                    kx: 0.131,
                    ky: 3.011
                },
                "25": {
                    x: -157.6,
                    y: 32.95,
                    sx: 1.007,
                    sy: 1,
                    kx: 0.145,
                    ky: 2.996
                },
                "26": {
                    x: -159.745,
                    y: 29.751,
                    sy: 0.999
                },
                "27": {
                    x: -161.895,
                    y: 26.451
                },
                "28": {
                    x: -163.995,
                    y: 23.151
                },
                "29": {
                    x: -166.145,
                    y: 19.801
                },
                "30": {
                    x: -168.245,
                    y: 16.501
                },
                "31": {
                    x: -170.35,
                    y: 13.1,
                    sy: 1
                },
                "32": {
                    x: -171.545,
                    y: 13.702,
                    sy: 0.999
                },
                "33": {
                    x: -172.745,
                    y: 14.202
                },
                "34": {
                    x: -173.85,
                    y: 14.6,
                    sy: 1
                },
                "35": {
                    x: -172.894,
                    y: 14.952,
                    sy: 0.999
                },
                "36": {
                    x: -171.944,
                    y: 15.202
                },
                "37": {
                    x: -171.044,
                    y: 15.452
                },
                "38": {
                    x: -170.1,
                    y: 15.6,
                    sy: 1
                },
                "39": {
                    x: -171.245,
                    y: 15.652,
                    sy: 0.999
                },
                "40": {
                    x: -172.345
                },
                "41": {
                    x: -173.445
                },
                "42": {
                    x: -174.545
                },
                "43": {
                    x: -175.645
                },
                "44": {
                    x: -176.7,
                    y: 15.6,
                    sy: 1
                },
                "45": {
                    x: -181.694,
                    y: 19.702,
                    sy: 0.999
                },
                "46": {
                    x: -186.694,
                    y: 23.802
                },
                "47": {
                    x: -191.644,
                    y: 27.852
                },
                "48": {
                    x: -196.6,
                    y: 31.85,
                    sy: 1
                },
                "49": {
                    x: -196.894,
                    y: 31.902,
                    sy: 0.999
                },
                "50": {
                    x: -197.1,
                    y: 31.85,
                    sy: 1
                },
                "51": {
                    x: -203.544,
                    y: 25.402,
                    sy: 0.999
                },
                "52": {
                    x: -209.993,
                    y: 18.902
                },
                "53": {
                    x: -216.394,
                    y: 12.402
                },
                "54": {
                    x: -222.75,
                    y: 5.85,
                    sy: 1
                }
            })
            .addTimedChild(instance171, 55, 44, {
                "55": {
                    x: -93.75,
                    y: -21.55
                }
            })
            .addTimedChild(instance170, 55, 44, {
                "55": {
                    x: 87.7,
                    y: 12.3
                }
            })
            .addTimedMask(instance11, {
                "68": instance175,
                "99": null
            })
            .addTimedChild(instance11, 0, 99, {
                "0": {
                    x: -61.95,
                    y: -13.9,
                    sx: 1,
                    sy: 1,
                    c: [
                        1,
                        0,
                        1,
                        0,
                        1,
                        0
                    ]
                },
                "1": {
                    x: -56.834,
                    sx: 1.033
                },
                "2": {
                    x: -51.718,
                    sx: 1.066
                },
                "3": {
                    x: -46.553,
                    sx: 1.099
                },
                "4": {
                    x: -41.388,
                    sx: 1.131
                },
                "5": {
                    x: -36.222,
                    sx: 1.164
                },
                "6": {
                    x: -31.156,
                    sx: 1.197
                },
                "7": {
                    x: -25.95,
                    sx: 1.23
                },
                "8": {
                    x: -23.615,
                    y: -13.353,
                    sx: 1.302,
                    sy: 0.975
                },
                "9": {
                    x: -21.331,
                    y: -12.755,
                    sx: 1.374,
                    sy: 0.95
                },
                "10": {
                    x: -18.996,
                    y: -12.258,
                    sx: 1.445,
                    sy: 0.925
                },
                "11": {
                    x: -16.712,
                    y: -11.66,
                    sx: 1.517,
                    sy: 0.9
                },
                "12": {
                    x: -14.378,
                    y: -11.112,
                    sx: 1.589,
                    sy: 0.875
                },
                "13": {
                    x: -12.094,
                    y: -10.515,
                    sx: 1.661,
                    sy: 0.85
                },
                "14": {
                    x: -9.76,
                    y: -10.017,
                    sx: 1.733,
                    sy: 0.825
                },
                "15": {
                    x: -7.45,
                    y: -9.4,
                    sx: 1.805,
                    sy: 0.8
                },
                "16": {
                    x: -12.22,
                    y: -9.5,
                    sx: 1.737
                },
                "17": {
                    x: -17.139,
                    sx: 1.669
                },
                "18": {
                    x: -22.009,
                    y: -9.55,
                    sx: 1.601
                },
                "19": {
                    x: -26.879,
                    y: -9.6,
                    sx: 1.533
                },
                "20": {
                    x: -31.699,
                    y: -9.65,
                    sx: 1.465
                },
                "21": {
                    x: -36.618,
                    sx: 1.397
                },
                "22": {
                    x: -41.488,
                    y: -9.7,
                    sx: 1.329
                },
                "23": {
                    x: -46.358,
                    y: -9.75,
                    sx: 1.261
                },
                "24": {
                    x: -51.178,
                    y: -9.8,
                    sx: 1.194
                },
                "25": {
                    x: -56.097,
                    sx: 1.126
                },
                "26": {
                    x: -61,
                    sx: 1.058
                },
                "27": {
                    x: -61.049,
                    y: -10.65
                },
                "28": {
                    y: -11.45
                },
                "29": {
                    y: -12.25
                },
                "30": {
                    y: -13.05
                },
                "31": {
                    x: -61,
                    y: -13.8
                },
                "32": {
                    x: -65.549,
                    y: -13
                },
                "33": {
                    x: -70.049,
                    y: -12.2
                },
                "34": {
                    x: -74.5,
                    y: -11.3
                },
                "35": {
                    x: -76.249,
                    y: -11.65
                },
                "36": {
                    x: -77.999,
                    y: -12.05
                },
                "37": {
                    x: -79.749,
                    y: -12.4
                },
                "38": {
                    x: -81.5,
                    y: -12.8
                },
                "39": {
                    x: -82.899,
                    y: -12.15
                },
                "40": {
                    x: -84.349,
                    y: -11.5
                },
                "41": {
                    x: -85.749,
                    y: -10.8
                },
                "42": {
                    x: -87.149,
                    y: -10.1
                },
                "43": {
                    x: -88.599,
                    y: -9.45
                },
                "44": {
                    x: -90,
                    y: -8.7
                },
                "45": {
                    x: -90.499,
                    y: -7.75
                },
                "46": {
                    x: -90.999,
                    y: -6.8
                },
                "47": {
                    x: -91.499,
                    y: -5.85
                },
                "48": {
                    x: -92,
                    y: -4.9
                },
                "51": {
                    x: -90.649,
                    y: -6.9
                },
                "52": {
                    x: -89.299,
                    y: -8.9
                },
                "53": {
                    x: -87.899,
                    y: -10.95
                },
                "54": {
                    x: -86.5,
                    y: -12.95
                },
                "55": {
                    x: -61.95,
                    y: -9.9,
                    sx: 1,
                    sy: 1
                },
                "56": {
                    x: -62.622,
                    y: -10.049,
                    sx: 1.163,
                    sy: 1.045,
                    c: [
                        0.92,
                        0.07,
                        0.92,
                        0.07,
                        0.92,
                        0.05
                    ]
                },
                "57": {
                    x: -63.294,
                    y: -10.249,
                    sx: 1.327,
                    sy: 1.091,
                    c: [
                        0.85,
                        0.15,
                        0.85,
                        0.15,
                        0.85,
                        0.11
                    ]
                },
                "58": {
                    x: -63.968,
                    y: -10.348,
                    sx: 1.49,
                    sy: 1.136,
                    c: [
                        0.77,
                        0.23,
                        0.77,
                        0.22,
                        0.77,
                        0.16
                    ]
                },
                "59": {
                    x: -64.641,
                    y: -10.547,
                    sx: 1.654,
                    sy: 1.182,
                    c: [
                        0.69,
                        0.31,
                        0.69,
                        0.29,
                        0.69,
                        0.21
                    ]
                },
                "60": {
                    x: -65.263,
                    y: -10.646,
                    sx: 1.817,
                    sy: 1.227,
                    c: [
                        0.62,
                        0.38,
                        0.62,
                        0.37,
                        0.62,
                        0.26
                    ]
                },
                "61": {
                    x: -65.935,
                    y: -10.846,
                    sx: 1.98,
                    sy: 1.272,
                    c: [
                        0.54,
                        0.45,
                        0.54,
                        0.44,
                        0.54,
                        0.31
                    ]
                },
                "62": {
                    x: -66.559,
                    y: -10.945,
                    sx: 2.144,
                    sy: 1.318,
                    c: [
                        0.46,
                        0.53,
                        0.46,
                        0.52,
                        0.46,
                        0.37
                    ]
                },
                "63": {
                    x: -67.231,
                    y: -11.144,
                    sx: 2.307,
                    sy: 1.363,
                    c: [
                        0.38,
                        0.61,
                        0.38,
                        0.59,
                        0.38,
                        0.42
                    ]
                },
                "64": {
                    x: -67.853,
                    y: -11.244,
                    sx: 2.471,
                    sy: 1.408,
                    c: [
                        0.31,
                        0.68,
                        0.31,
                        0.67,
                        0.31,
                        0.47
                    ]
                },
                "65": {
                    x: -68.526,
                    y: -11.443,
                    sx: 2.634,
                    sy: 1.454,
                    c: [
                        0.23,
                        0.76,
                        0.23,
                        0.74,
                        0.23,
                        0.53
                    ]
                },
                "66": {
                    x: -69.2,
                    y: -11.592,
                    sx: 2.797,
                    sy: 1.499,
                    c: [
                        0.15,
                        0.84,
                        0.15,
                        0.81,
                        0.15,
                        0.58
                    ]
                },
                "67": {
                    x: -69.873,
                    y: -11.742,
                    sx: 2.961,
                    sy: 1.545,
                    c: [
                        0.08,
                        0.91,
                        0.08,
                        0.89,
                        0.08,
                        0.63
                    ]
                },
                "68": {
                    x: -70.5,
                    y: -11.85,
                    sx: 3.124,
                    sy: 1.59,
                    c: [
                        0,
                        0.99,
                        0,
                        0.96,
                        0,
                        0.68
                    ]
                },
                "69": {
                    x: -71.163,
                    y: -12.463,
                    sx: 3.683,
                    sy: 1.793
                },
                "70": {
                    x: -71.674,
                    y: -13.026,
                    sx: 4.242,
                    sy: 1.996
                },
                "71": {
                    x: -72.29,
                    y: -13.589,
                    sx: 4.801,
                    sy: 2.199
                },
                "72": {
                    x: -72.851,
                    y: -14.151,
                    sx: 5.36,
                    sy: 2.402
                },
                "73": {
                    x: -73.418,
                    y: -14.714,
                    sx: 5.919,
                    sy: 2.605
                },
                "74": {
                    x: -73.979,
                    y: -15.277,
                    sx: 6.478,
                    sy: 2.808
                },
                "75": {
                    x: -74.545,
                    y: -15.84,
                    sx: 7.037,
                    sy: 3.011
                },
                "76": {
                    x: -75.106,
                    y: -16.403,
                    sx: 7.596,
                    sy: 3.214
                },
                "77": {
                    x: -75.722,
                    y: -16.966,
                    sx: 8.155,
                    sy: 3.417
                },
                "78": {
                    x: -76.283,
                    y: -17.528,
                    sx: 8.714,
                    sy: 3.62
                },
                "79": {
                    x: -76.85,
                    y: -18.091,
                    sx: 9.273,
                    sy: 3.823
                },
                "80": {
                    x: -77.461,
                    y: -18.654,
                    sx: 9.832,
                    sy: 4.026
                },
                "81": {
                    x: -77.977,
                    y: -19.217,
                    sx: 10.391,
                    sy: 4.229
                },
                "82": {
                    x: -78.588,
                    y: -19.78,
                    sx: 10.95,
                    sy: 4.432
                },
                "83": {
                    x: -79.104,
                    y: -20.343,
                    sx: 11.509,
                    sy: 4.635
                },
                "84": {
                    x: -79.72,
                    y: -20.906,
                    sx: 12.068,
                    sy: 4.838
                },
                "85": {
                    x: -80.281,
                    y: -21.518,
                    sx: 12.627,
                    sy: 5.041
                },
                "86": {
                    x: -80.848,
                    y: -22.082,
                    sx: 13.186,
                    sy: 5.244
                },
                "87": {
                    x: -81.409,
                    y: -22.644,
                    sx: 13.745,
                    sy: 5.447
                },
                "88": {
                    x: -82.025,
                    y: -23.207,
                    sx: 14.304,
                    sy: 5.65
                },
                "89": {
                    x: -82.536,
                    y: -23.77,
                    sx: 14.863,
                    sy: 5.853
                },
                "90": {
                    x: -83.152,
                    y: -24.333,
                    sx: 15.422,
                    sy: 6.056
                },
                "91": {
                    x: -83.713,
                    y: -24.896,
                    sx: 15.981,
                    sy: 6.259
                },
                "92": {
                    x: -84.28,
                    y: -25.459,
                    sx: 16.54,
                    sy: 6.462
                },
                "93": {
                    x: -84.841,
                    y: -26.021,
                    sx: 17.099,
                    sy: 6.665
                },
                "94": {
                    x: -85.408,
                    y: -26.584,
                    sx: 17.658,
                    sy: 6.868
                },
                "95": {
                    x: -85.968,
                    y: -27.147,
                    sx: 18.216,
                    sy: 7.071
                },
                "96": {
                    x: -86.584,
                    y: -27.71,
                    sx: 18.776,
                    sy: 7.274
                },
                "97": {
                    x: -87.095,
                    y: -28.273,
                    sx: 19.334,
                    sy: 7.477
                },
                "98": {
                    x: -87.4,
                    y: -28.8,
                    sx: 19.894,
                    sy: 7.68
                }
            })
            .addTimedChild(instance33, 15, 40, {
                "15": {
                    x: -7.45,
                    y: -9.4,
                    sx: 1.805,
                    sy: 0.8
                },
                "16": {
                    x: -0.819,
                    y: -9.05,
                    sx: 1.725
                },
                "17": {
                    x: 5.761,
                    y: -8.65,
                    sx: 1.644
                },
                "18": {
                    x: 12.292,
                    y: -8.2,
                    sx: 1.564
                },
                "19": {
                    x: 18.872,
                    y: -7.8,
                    sx: 1.484
                },
                "20": {
                    x: 25.402,
                    y: -7.4,
                    sx: 1.404
                },
                "21": {
                    x: 31.983,
                    y: -7,
                    sx: 1.324
                },
                "22": {
                    x: 38.563,
                    y: -6.6,
                    sx: 1.244
                },
                "23": {
                    x: 45.094,
                    y: -6.2,
                    sx: 1.164
                },
                "24": {
                    x: 51.624,
                    y: -5.75,
                    sx: 1.084
                },
                "25": {
                    x: 58.205,
                    y: -5.35,
                    sx: 1.004
                },
                "26": {
                    x: 64.75,
                    y: -4.9,
                    sx: 0.924
                },
                "27": {
                    x: 65.349,
                    y: -3.8
                },
                "28": {
                    x: 65.949,
                    y: -2.7
                },
                "29": {
                    x: 66.549,
                    y: -1.6
                },
                "30": {
                    x: 67.149,
                    y: -0.5
                },
                "31": {
                    x: 67.75,
                    y: 0.6
                },
                "32": {
                    x: 65.749,
                    y: 0.65
                },
                "33": {
                    x: 63.749
                },
                "34": {
                    x: 61.75,
                    y: 0.6
                },
                "35": {
                    x: 62.499,
                    y: -0.1
                },
                "36": {
                    x: 63.249,
                    y: -0.85
                },
                "37": {
                    x: 63.999,
                    y: -1.6
                },
                "38": {
                    x: 64.75,
                    y: -2.4
                },
                "39": {
                    x: 67.499,
                    y: -2.2
                },
                "40": {
                    x: 70.249,
                    y: -2
                },
                "41": {
                    x: 72.999,
                    y: -1.85
                },
                "42": {
                    x: 75.749,
                    y: -1.7
                },
                "43": {
                    x: 78.499,
                    y: -1.5
                },
                "44": {
                    x: 81.25,
                    y: -1.4
                },
                "45": {
                    x: 83.699,
                    y: -1.35
                },
                "46": {
                    x: 86.049
                },
                "47": {
                    x: 88.449
                },
                "48": {
                    x: 90.75,
                    y: -1.4
                },
                "51": {
                    x: 88.149,
                    y: -3.6
                },
                "52": {
                    x: 85.499,
                    y: -5.85
                },
                "53": {
                    x: 82.899,
                    y: -8.1
                },
                "54": {
                    x: 80.25,
                    y: -10.4
                }
            })
            .addTimedChild(instance10, 0, 16, {
                "0": {
                    x: -66.1,
                    y: -16.25,
                    sx: 1,
                    r: 0
                },
                "1": {
                    x: -61.1
                },
                "2": {
                    x: -56.1
                },
                "3": {
                    x: -51.1
                },
                "4": {
                    x: -46.1
                },
                "5": {
                    x: -41.1
                },
                "6": {
                    x: -36.1
                },
                "7": {
                    x: -31.1
                },
                "8": {
                    x: -28.868,
                    y: -15.837,
                    sx: 1.037,
                    r: 0.012
                },
                "9": {
                    x: -26.58,
                    y: -15.35,
                    sx: 1.075,
                    r: 0.024
                },
                "10": {
                    x: -24.288,
                    y: -14.888,
                    sx: 1.112,
                    r: 0.036
                },
                "11": {
                    x: -21.94,
                    y: -14.453,
                    sx: 1.15,
                    r: 0.048
                },
                "12": {
                    x: -19.684,
                    y: -13.992,
                    sx: 1.187,
                    r: 0.06
                },
                "13": {
                    x: -17.373,
                    y: -13.558,
                    sx: 1.225,
                    r: 0.072
                },
                "14": {
                    x: -15.103,
                    y: -13.148,
                    sx: 1.262,
                    r: 0.084
                },
                "15": {
                    x: -12.8,
                    y: -12.65,
                    sx: 1.3,
                    r: 0.096
                }
            })
            .addTimedChild(instance9, 0, 1, {
                "0": {
                    x: -224.75,
                    y: -133.1
                }
            })
            .addTimedChild(instance14, 7, 1, {
                "7": {
                    x: -189.75,
                    y: -133.1
                }
            })
            .addTimedChild(instance32, 15, 1, {
                "15": {
                    x: -310.95,
                    y: -140.25,
                    sx: 1.847
                }
            })
            .addTimedChild(instance40, 16, 1, {
                "16": {
                    x: -218.9,
                    y: -128.2,
                    sx: 1.301
                }
            })
            .addTimedChild(instance39, 16, 1, {
                "16": {
                    x: -211.85,
                    y: -128.7,
                    sx: 1.258
                }
            })
            .addTimedChild(instance38, 16, 8, {
                "16": {
                    x: 0,
                    sx: 1
                },
                "17": {
                    x: -1.85,
                    sx: 1.031
                },
                "18": {
                    x: -3.65,
                    sx: 1.062
                },
                "19": {
                    x: -5.5,
                    sx: 1.093
                },
                "20": {
                    x: -7.35,
                    sx: 1.124
                },
                "21": {
                    x: -9.2,
                    sx: 1.155
                },
                "22": {
                    x: -11,
                    sx: 1.186
                },
                "23": {
                    x: -12.9,
                    sx: 1.216
                }
            })
            .addTimedChild(instance37, 16, 1)
            .addTimedChild(instance43, 17, 1)
            .addTimedChild(instance46, 18, 1)
            .addTimedChild(instance49, 19, 1)
            .addTimedChild(instance52, 20, 1)
            .addTimedChild(instance55, 21, 1)
            .addTimedChild(instance58, 22, 1)
            .addTimedChild(instance64, 24, 1)
            .addTimedChild(instance67, 25, 1)
            .addTimedChild(instance72, 26, 1, {
                "26": {
                    x: -231.15,
                    y: -131.1,
                    sx: 1.048
                }
            })
            .addTimedChild(instance71, 26, 1, {
                "26": {
                    x: -99.35,
                    y: -96.05,
                    sy: 0.754
                }
            })
            .addTimedChild(instance70, 26, 1)
            .addTimedChild(instance74, 27, 1)
            .addTimedChild(instance61, 23, 5, {
                "23": {
                    x: 0,
                    y: 0,
                    sx: 1,
                    sy: 1
                },
                "24": {
                    x: -0.25,
                    y: 0.1,
                    sx: 1.037,
                    sy: 1.005
                },
                "25": {
                    x: -0.45,
                    y: 0.2,
                    sx: 1.073
                },
                "26": {
                    x: -0.7,
                    y: 0.35,
                    sx: 1.11
                },
                "27": {
                    x: -0.9,
                    y: 0.5,
                    sx: 1.145,
                    sy: 1
                }
            })
            .addTimedChild(instance77, 28, 1, {
                "28": {
                    x: -4.9,
                    y: 0.45,
                    sx: 0.949,
                    sy: 1.004
                }
            })
            .addTimedChild(instance76, 28, 1)
            .addTimedChild(instance80, 29, 1, {
                "29": {
                    x: -9.45,
                    y: 0.95,
                    sx: 0.901,
                    sy: 1.004
                }
            })
            .addTimedChild(instance79, 29, 1)
            .addTimedChild(instance83, 30, 1, {
                "30": {
                    x: -13.45,
                    y: 1.5,
                    sx: 0.859,
                    sy: 0.996
                }
            })
            .addTimedChild(instance82, 30, 1)
            .addTimedChild(instance88, 31, 1, {
                "31": {
                    x: -231.15,
                    y: -134.1,
                    sx: 1.048
                }
            })
            .addTimedChild(instance87, 31, 1, {
                "31": {
                    x: -95,
                    y: -92.1,
                    sy: 0.754
                }
            })
            .addTimedChild(instance86, 31, 1, {
                "31": {
                    x: -27.65,
                    y: 1.95
                }
            })
            .addTimedChild(instance85, 31, 1)
            .addTimedChild(instance91, 32, 2, {
                "32": {
                    x: 0,
                    y: 0,
                    sx: 1
                },
                "33": {
                    x: -1,
                    y: 0.2,
                    sx: 1.048
                }
            })
            .addTimedChild(instance90, 32, 1)
            .addTimedChild(instance93, 33, 1)
            .addTimedChild(instance98, 34, 1, {
                "34": {
                    x: -246.25,
                    y: -132.1,
                    sx: 1.048
                }
            })
            .addTimedChild(instance97, 34, 1, {
                "34": {
                    x: -102.35,
                    y: -89.3,
                    sy: 0.754
                }
            })
            .addTimedChild(instance96, 34, 1)
            .addTimedChild(instance95, 34, 1)
            .addTimedChild(instance101, 35, 1)
            .addTimedChild(instance100, 35, 1)
            .addTimedChild(instance104, 36, 1)
            .addTimedChild(instance103, 36, 1)
            .addTimedChild(instance107, 37, 1)
            .addTimedChild(instance106, 37, 1)
            .addTimedChild(instance112, 38, 1, {
                "38": {
                    x: -252.9,
                    y: -132.05,
                    sx: 1.048
                }
            })
            .addTimedChild(instance111, 38, 1, {
                "38": {
                    x: -99.35,
                    y: -94.05,
                    sy: 0.754
                }
            })
            .addTimedChild(instance125, 44, 1, {
                "44": {
                    x: -261.5,
                    y: -128.85,
                    sx: 1.048
                }
            })
            .addTimedChild(instance124, 44, 1, {
                "44": {
                    x: -81.85,
                    y: -92.5,
                    sy: 0.754
                }
            })
            .addTimedChild(instance110, 38, 7, {
                "38": {
                    x: -45.2,
                    y: 3,
                    sx: 1.161
                },
                "39": {
                    x: -45.6,
                    y: 3.3,
                    sx: 1.158
                },
                "40": {
                    x: -46,
                    y: 3.6,
                    sx: 1.155
                },
                "41": {
                    x: -46.35,
                    y: 3.95,
                    sx: 1.153
                },
                "42": {
                    x: -46.75,
                    y: 4.25,
                    sx: 1.15
                },
                "43": {
                    x: -47.15,
                    y: 4.55,
                    sx: 1.147
                },
                "44": {
                    x: -47.6,
                    y: 4.85,
                    sx: 1.144
                }
            })
            .addTimedChild(instance128, 45, 1)
            .addTimedChild(instance131, 46, 1)
            .addTimedChild(instance134, 47, 1)
            .addTimedChild(instance140, 48, 1, {
                "48": {
                    x: -263.6,
                    y: -123.2,
                    sx: 1.048
                }
            })
            .addTimedChild(instance139, 48, 1, {
                "48": {
                    x: -73.85,
                    y: -93,
                    sy: 0.754
                }
            })
            .addTimedChild(instance148, 50, 1, {
                "50": {
                    x: -263.6,
                    y: -123.2,
                    sx: 1.048
                }
            })
            .addTimedChild(instance147, 50, 1, {
                "50": {
                    x: -72.85,
                    y: -93,
                    sy: 0.754
                }
            })
            .addTimedChild(instance138, 48, 3)
            .addTimedChild(instance109, 38, 13, {
                "38": {
                    x: 0,
                    y: 0
                },
                "39": {
                    x: 1.85,
                    y: -0.1
                },
                "40": {
                    x: 3.65,
                    y: -0.15
                },
                "41": {
                    x: 5.5,
                    y: -0.25
                },
                "42": {
                    x: 7.35,
                    y: -0.35
                },
                "43": {
                    x: 9.15,
                    y: -0.4
                },
                "44": {
                    x: 11,
                    y: -0.5
                },
                "45": {
                    x: 14.65,
                    y: 0.15
                },
                "46": {
                    x: 18.25,
                    y: 0.75
                },
                "47": {
                    x: 21.9,
                    y: 1.4
                },
                "48": {
                    x: 25.5,
                    y: 2
                },
                "49": {
                    x: 21.5,
                    y: 0
                },
                "50": {
                    x: 17.5,
                    y: -2
                }
            })
            .addTimedChild(instance150, 51, 1, {
                "51": {
                    x: -2.95,
                    y: 0.85,
                    sx: 0.965
                }
            })
            .addTimedChild(instance149, 51, 1)
            .addTimedChild(instance154, 52, 1, {
                "52": {
                    x: -5.5,
                    y: 1.7,
                    sx: 0.932
                }
            })
            .addTimedChild(instance153, 52, 1, {
                "52": {
                    x: 63.15,
                    y: 5.35,
                    sx: 1.087,
                    sy: 1.062
                }
            })
            .addTimedChild(instance158, 53, 1, {
                "53": {
                    x: -7.75,
                    y: 2.55,
                    sx: 0.902
                }
            })
            .addTimedChild(instance157, 53, 1)
            .addTimedChild(instance164, 54, 1, {
                "54": {
                    x: -259.05,
                    y: -131.7,
                    sx: 1.048
                }
            })
            .addTimedChild(instance163, 54, 1, {
                "54": {
                    x: -82.85,
                    y: -101.55,
                    sy: 0.754
                }
            })
            .addTimedChild(instance162, 54, 1, {
                "54": {
                    x: -51.25,
                    y: 8.25
                }
            })
            .addTimedChild(instance161, 54, 1)
            .addTimedChild(instance169, 55, 7, {
                "55": {
                    x: -67.25,
                    y: -12.85,
                    sx: 1,
                    sy: 1,
                    c: [
                        0,
                        0.4,
                        0,
                        0.4,
                        0,
                        0.4
                    ]
                },
                "56": {
                    x: -67.162,
                    y: -13.724,
                    sx: 1.127,
                    sy: 1.087
                },
                "57": {
                    x: -66.974,
                    y: -14.597,
                    sx: 1.255,
                    sy: 1.175
                },
                "58": {
                    x: -66.838,
                    y: -15.421,
                    sx: 1.382,
                    sy: 1.262
                },
                "59": {
                    x: -66.75,
                    y: -16.245,
                    sx: 1.509,
                    sy: 1.35
                },
                "60": {
                    x: -66.562,
                    y: -17.118,
                    sx: 1.637,
                    sy: 1.437
                },
                "61": {
                    x: -66.4,
                    y: -17.9,
                    sx: 1.764,
                    sy: 1.525
                }
            })
            .addTimedChild(instance168, 55, 1, {
                "55": {
                    x: -224.75,
                    y: -129.1
                }
            })
            .addTimedChild(instance173, 62, 1, {
                "62": {
                    x: 87
                }
            })
            .addTimedChild(instance172, 62, 1, {
                "62": {
                    x: 85.3
                }
            })
            .addTimedChild(instance174, 64, 1, {
                "64": {
                    x: -225.75,
                    y: -128.1
                }
            })
            .addTimedChild(instance176, 73, 1, {
                "73": {
                    x: -188.1,
                    y: -17.3,
                    sx: 1.675,
                    sy: 0.62,
                    kx: 3.142,
                    ky: 3.141
                }
            })
            .addTimedChild(instance177, 74, 1, {
                "74": {
                    x: -355.2,
                    y: -151.8,
                    sx: 1.905,
                    sy: 1.087
                }
            })
            .addTimedChild(instance179, 84, 1, {
                "84": {
                    x: -229.5,
                    y: -20.4,
                    sx: 1.973,
                    sy: 0.62,
                    kx: 3.142,
                    ky: 3.141
                }
            })
            .addTimedChild(instance178, 84, 1, {
                "84": {
                    x: -517.15,
                    y: -280.8,
                    sx: 3.076,
                    sy: 1.931
                }
            })
            .addTimedChild(instance181, 86, 1, {
                "86": {
                    x: -228.05,
                    y: 40,
                    sx: 1.56,
                    sy: 0.916,
                    kx: 3.161,
                    ky: 3.122
                }
            })
            .addTimedChild(instance182, 87, 12, {
                "87": {
                    x: -54.45,
                    y: 28.55,
                    a: 1
                },
                "88": {
                    a: 0.91
                },
                "89": {
                    a: 0.82
                },
                "90": {
                    a: 0.73
                },
                "91": {
                    a: 0.64
                },
                "92": {
                    a: 0.55
                },
                "93": {
                    a: 0.45
                },
                "94": {
                    a: 0.36
                },
                "95": {
                    a: 0.27
                },
                "96": {
                    a: 0.18
                },
                "97": {
                    a: 0.09
                },
                "98": {
                    a: 0
                }
            })
            .addTimedChild(instance180, 85, 14, {
                "85": {
                    x: -16.2,
                    y: -18.7,
                    a: 1
                },
                "86": {
                    x: -21.65,
                    a: 0.92
                },
                "87": {
                    x: -27.1,
                    a: 0.85
                },
                "88": {
                    x: -32.6,
                    a: 0.77
                },
                "89": {
                    x: -38.05,
                    a: 0.69
                },
                "90": {
                    x: -43.5,
                    a: 0.62
                },
                "91": {
                    x: -48.95,
                    a: 0.54
                },
                "92": {
                    x: -54.45,
                    a: 0.46
                },
                "93": {
                    x: -59.9,
                    a: 0.38
                },
                "94": {
                    x: -65.35,
                    a: 0.31
                },
                "95": {
                    x: -70.8,
                    a: 0.23
                },
                "96": {
                    x: -76.3,
                    a: 0.15
                },
                "97": {
                    x: -81.75,
                    a: 0.08
                },
                "98": {
                    x: -87.2,
                    a: 0
                }
            })
            .addTimedChild(instance183, 92, 1, {
                "92": {
                    x: -518.15,
                    y: -36.75,
                    sx: 3.076,
                    sy: 0.336
                }
            })
            .addTimedChild(instance186, 93, 5, {
                "93": {
                    x: 73,
                    y: 3.5
                }
            })
            .addTimedChild(instance185, 93, 6, {
                "93": {
                    x: 73
                },
                "98": {
                    x: 75
                }
            })
            .addTimedChild(instance184, 93, 5, {
                "93": {
                    x: 74.7,
                    y: 3.95
                }
            })
            .addTimedChild(instance187, 98, 1, {
                "98": {
                    x: 76.7,
                    y: 3.95
                }
            })
            .addTimedChild(instance8, 0, 99, {
                "0": {
                    x: 52.75,
                    y: -39.15,
                    sx: 1,
                    sy: 1,
                    r: 0,
                    a: 1
                },
                "1": {
                    x: 58.805,
                    y: -38.707,
                    r: 0.019
                },
                "2": {
                    x: 64.793,
                    y: -38.149,
                    r: 0.037
                },
                "3": {
                    x: 70.762,
                    y: -37.63,
                    sx: 0.999,
                    sy: 0.999,
                    r: 0.056
                },
                "4": {
                    x: 76.811,
                    y: -37.098,
                    r: 0.074
                },
                "5": {
                    x: 82.79,
                    y: -36.554,
                    r: 0.093
                },
                "6": {
                    x: 88.751,
                    y: -36,
                    r: 0.111
                },
                "7": {
                    x: 94.75,
                    y: -35.4,
                    sx: 0.998,
                    sy: 0.998,
                    r: 0.13
                },
                "8": {
                    x: 94.959,
                    y: -34.914,
                    r: 0.126
                },
                "9": {
                    x: 95.169,
                    y: -34.279,
                    r: 0.122
                },
                "10": {
                    x: 95.38,
                    y: -33.692,
                    r: 0.118
                },
                "11": {
                    x: 95.687,
                    y: -33.154,
                    r: 0.115
                },
                "12": {
                    x: 95.892,
                    y: -32.566,
                    r: 0.111
                },
                "13": {
                    x: 96.098,
                    y: -31.928,
                    r: 0.107
                },
                "14": {
                    x: 96.3,
                    y: -31.341,
                    r: 0.103
                },
                "15": {
                    x: 96.45,
                    y: -30.75,
                    r: 0.099
                },
                "16": {
                    x: 99.95,
                    y: -28.991,
                    r: 0.107
                },
                "17": {
                    x: 103.446,
                    y: -27.178,
                    r: 0.116
                },
                "18": {
                    x: 106.882,
                    y: -25.416,
                    r: 0.124
                },
                "19": {
                    x: 110.313,
                    y: -23.6,
                    r: 0.133
                },
                "20": {
                    x: 113.788,
                    y: -21.782,
                    r: 0.141
                },
                "21": {
                    x: 117.207,
                    y: -20.014,
                    r: 0.149
                },
                "22": {
                    x: 120.667,
                    y: -18.243,
                    r: 0.158
                },
                "23": {
                    x: 124.121,
                    y: -16.421,
                    r: 0.166
                },
                "24": {
                    x: 127.516,
                    y: -14.648,
                    r: 0.174
                },
                "25": {
                    x: 131.007,
                    y: -12.821,
                    r: 0.183
                },
                "26": {
                    x: 134.4,
                    y: -11,
                    r: 0.191
                },
                "27": {
                    x: 138.1,
                    y: -10
                },
                "28": {
                    x: 141.7,
                    y: -8.95
                },
                "29": {
                    x: 145.25,
                    y: -7.95
                },
                "30": {
                    x: 148.85,
                    y: -6.9
                },
                "31": {
                    x: 152.35,
                    y: -5.8
                },
                "32": {
                    x: 151.55,
                    y: -4.45
                },
                "33": {
                    x: 150.7,
                    y: -3.15
                },
                "34": {
                    x: 149.9,
                    y: -1.8
                },
                "35": {
                    x: 146.1,
                    y: -4.1
                },
                "36": {
                    x: 142.2,
                    y: -6.4
                },
                "37": {
                    x: 138.35,
                    y: -8.7
                },
                "38": {
                    x: 134.4,
                    y: -11
                },
                "39": {
                    x: 138.6,
                    y: -10.45
                },
                "40": {
                    x: 142.65,
                    y: -9.9
                },
                "41": {
                    x: 146.75,
                    y: -9.3
                },
                "42": {
                    x: 150.8,
                    y: -8.75
                },
                "43": {
                    x: 154.9,
                    y: -8.15
                },
                "44": {
                    x: 158.85,
                    y: -7.55
                },
                "45": {
                    x: 163.3
                },
                "46": {
                    x: 167.65,
                    y: -7.6
                },
                "47": {
                    x: 172.05,
                    y: -7.7
                },
                "48": {
                    x: 176.35,
                    y: -7.8
                },
                "51": {
                    x: 179.729,
                    y: -15.286,
                    r: 0.143
                },
                "52": {
                    x: 183.153,
                    y: -22.727,
                    r: 0.095
                },
                "53": {
                    x: 186.527,
                    y: -30.109,
                    sx: 0.997,
                    sy: 0.997,
                    r: 0.047
                },
                "54": {
                    x: 189.9,
                    y: -37.45,
                    r: -0.001
                },
                "55": {
                    x: 52.75,
                    y: -35.15,
                    sx: 1,
                    sy: 1,
                    r: 0
                },
                "92": {
                    x: 55.75,
                    y: -34.15
                },
                "93": {
                    x: 54.25,
                    a: 0.83
                },
                "94": {
                    x: 52.75,
                    a: 0.67
                },
                "95": {
                    x: 51.25,
                    a: 0.5
                },
                "96": {
                    x: 49.75,
                    a: 0.33
                },
                "97": {
                    x: 48.25,
                    a: 0.17
                },
                "98": {
                    x: 46.75,
                    a: 0
                }
            })
            .addTimedChild(instance7, 0, 99, {
                "0": {
                    x: 30.4,
                    y: -40.05,
                    sx: 1,
                    sy: 1,
                    r: -0.14,
                    a: 1
                },
                "1": {
                    x: 34.499,
                    y: -39.698,
                    sx: 0.999,
                    sy: 0.999
                },
                "2": {
                    x: 38.599,
                    y: -39.248
                },
                "3": {
                    x: 42.649,
                    y: -38.848
                },
                "4": {
                    x: 46.749,
                    y: -38.448
                },
                "5": {
                    x: 50.799,
                    y: -38.048
                },
                "6": {
                    x: 54.899,
                    y: -37.598
                },
                "7": {
                    x: 58.9,
                    y: -37.15,
                    sx: 1,
                    sy: 1
                },
                "8": {
                    x: 59.433,
                    y: -36.63,
                    sx: 0.999,
                    sy: 0.999,
                    r: -0.132
                },
                "9": {
                    x: 60.015,
                    y: -35.959,
                    r: -0.124
                },
                "10": {
                    x: 60.593,
                    y: -35.386,
                    r: -0.116
                },
                "11": {
                    x: 61.219,
                    y: -34.76,
                    r: -0.108
                },
                "12": {
                    x: 61.739,
                    y: -34.082,
                    r: -0.1
                },
                "13": {
                    x: 62.305,
                    y: -33.453,
                    r: -0.092
                },
                "14": {
                    x: 62.868,
                    y: -32.872,
                    r: -0.085
                },
                "15": {
                    x: 63.5,
                    y: -32.1,
                    r: -0.077
                },
                "16": {
                    x: 65.982,
                    y: -31.365,
                    r: -0.068
                },
                "17": {
                    x: 68.462,
                    y: -30.526,
                    r: -0.058
                },
                "18": {
                    x: 70.936,
                    y: -29.736,
                    sx: 0.998,
                    sy: 0.998,
                    r: -0.049
                },
                "19": {
                    x: 73.354,
                    y: -28.993,
                    r: -0.04
                },
                "20": {
                    x: 75.767,
                    y: -28.199,
                    r: -0.031
                },
                "21": {
                    x: 78.174,
                    y: -27.351,
                    r: -0.022
                },
                "22": {
                    x: 80.576,
                    y: -26.551,
                    r: -0.013
                },
                "23": {
                    x: 83.022,
                    y: -25.749,
                    r: -0.004
                },
                "24": {
                    x: 85.512,
                    y: -24.996,
                    r: 0.006
                },
                "25": {
                    x: 87.948,
                    y: -24.138,
                    r: 0.015
                },
                "26": {
                    x: 90.35,
                    y: -23.35,
                    r: 0.024
                },
                "27": {
                    x: 93.199,
                    y: -22.65
                },
                "28": {
                    x: 95.999,
                    y: -22
                },
                "29": {
                    x: 98.799,
                    y: -21.3
                },
                "30": {
                    x: 101.599,
                    y: -20.65
                },
                "31": {
                    x: 104.35,
                    y: -19.95
                },
                "32": {
                    x: 104.298,
                    y: -18.95
                },
                "33": {
                    x: 104.098,
                    y: -17.8
                },
                "34": {
                    x: 103.85,
                    y: -16.6
                },
                "35": {
                    x: 100.598,
                    y: -18.35
                },
                "36": {
                    x: 97.198,
                    y: -20
                },
                "37": {
                    x: 93.848,
                    y: -21.7
                },
                "38": {
                    x: 90.35,
                    y: -23.35
                },
                "39": {
                    x: 94.249,
                    y: -22.95
                },
                "40": {
                    x: 98.049,
                    y: -22.5
                },
                "41": {
                    x: 101.899,
                    y: -22.1
                },
                "42": {
                    x: 105.749,
                    y: -21.7
                },
                "43": {
                    x: 109.549,
                    y: -21.25
                },
                "44": {
                    x: 113.35,
                    y: -20.85
                },
                "45": {
                    x: 115.798,
                    y: -21.3
                },
                "46": {
                    x: 118.148,
                    y: -21.7
                },
                "47": {
                    x: 120.548,
                    y: -22.1
                },
                "48": {
                    x: 122.85,
                    y: -22.45
                },
                "51": {
                    x: 129.045,
                    y: -26.282,
                    r: -0.021
                },
                "52": {
                    x: 135.145,
                    y: -30.06,
                    sx: 0.997,
                    sy: 0.997,
                    r: -0.066
                },
                "53": {
                    x: 141.304,
                    y: -33.82,
                    r: -0.111
                },
                "54": {
                    x: 147.4,
                    y: -37.65,
                    r: -0.156
                },
                "55": {
                    x: 30.4,
                    y: -36.05,
                    sx: 1,
                    sy: 1,
                    r: -0.14
                },
                "87": {
                    x: 34.4,
                    y: -35.05
                },
                "88": {
                    x: 33.898,
                    y: -35.098,
                    sx: 0.999,
                    sy: 0.999,
                    a: 0.89
                },
                "89": {
                    x: 33.348,
                    a: 0.78
                },
                "90": {
                    x: 32.798,
                    a: 0.67
                },
                "91": {
                    x: 32.248,
                    a: 0.55
                },
                "92": {
                    x: 31.648,
                    a: 0.45
                },
                "93": {
                    x: 31.098,
                    a: 0.33
                },
                "94": {
                    x: 30.548,
                    a: 0.22
                },
                "95": {
                    x: 29.998,
                    a: 0.11
                },
                "96": {
                    x: 29.4,
                    y: -35.05,
                    sx: 1,
                    sy: 1,
                    a: 0
                }
            })
            .addTimedChild(instance6, 0, 99, {
                "0": {
                    x: 10.9,
                    y: -40.05,
                    sx: 1,
                    sy: 1,
                    r: -0.14,
                    a: 1
                },
                "1": {
                    x: 13.6,
                    y: -39.698,
                    sx: 0.999,
                    sy: 0.999
                },
                "2": {
                    x: 16.25,
                    y: -39.248
                },
                "3": {
                    x: 18.9,
                    y: -38.848
                },
                "4": {
                    x: 21.5,
                    y: -38.448
                },
                "5": {
                    x: 24.15,
                    y: -38.048
                },
                "6": {
                    x: 26.8,
                    y: -37.598
                },
                "7": {
                    x: 29.4,
                    y: -37.15,
                    sx: 1,
                    sy: 1
                },
                "8": {
                    x: 29.399,
                    y: -36.498,
                    sx: 0.999,
                    sy: 0.999
                },
                "9": {
                    y: -35.748
                },
                "10": {
                    y: -34.998
                },
                "11": {
                    y: -34.248
                },
                "12": {
                    y: -33.498
                },
                "13": {
                    y: -32.748
                },
                "14": {
                    y: -31.998
                },
                "15": {
                    x: 29.4,
                    y: -31.15,
                    sx: 1,
                    sy: 1
                },
                "16": {
                    x: 31.083,
                    y: -31.116,
                    sx: 0.999,
                    sy: 0.999,
                    r: -0.137
                },
                "17": {
                    x: 32.668,
                    y: -30.934,
                    r: -0.134
                },
                "18": {
                    x: 34.251,
                    y: -30.8,
                    r: -0.132
                },
                "19": {
                    x: 35.885,
                    y: -30.667,
                    r: -0.129
                },
                "20": {
                    x: 37.468,
                    y: -30.533,
                    r: -0.126
                },
                "21": {
                    x: 39.101,
                    y: -30.349,
                    r: -0.123
                },
                "22": {
                    x: 40.734,
                    y: -30.214,
                    r: -0.12
                },
                "23": {
                    x: 42.367,
                    y: -30.081,
                    r: -0.118
                },
                "24": {
                    x: 43.9,
                    y: -29.946,
                    r: -0.115
                },
                "25": {
                    x: 45.532,
                    y: -29.761,
                    r: -0.112
                },
                "26": {
                    x: 47.1,
                    y: -29.55,
                    r: -0.109
                },
                "27": {
                    x: 47.197,
                    y: -29.198
                },
                "28": {
                    y: -28.798
                },
                "29": {
                    y: -28.398
                },
                "30": {
                    y: -27.998
                },
                "31": {
                    x: 47.1,
                    y: -27.55
                },
                "32": {
                    x: 47.469,
                    y: -25.695,
                    r: -0.187
                },
                "33": {
                    x: 47.723,
                    y: -23.707,
                    sx: 0.998,
                    sy: 0.998,
                    r: -0.264
                },
                "34": {
                    x: 48.05,
                    y: -21.6,
                    r: -0.341
                },
                "35": {
                    x: 47.428,
                    y: -22.432,
                    r: -0.283
                },
                "36": {
                    x: 46.844,
                    y: -23.3,
                    sx: 0.999,
                    sy: 0.999,
                    r: -0.225
                },
                "37": {
                    x: 46.239,
                    y: -24.115,
                    r: -0.167
                },
                "38": {
                    x: 45.6,
                    y: -24.95,
                    r: -0.109
                },
                "39": {
                    x: 48.983,
                    y: -25.355,
                    r: -0.114
                },
                "40": {
                    x: 52.369,
                    y: -25.612,
                    r: -0.119
                },
                "41": {
                    x: 55.703,
                    y: -25.916,
                    r: -0.123
                },
                "42": {
                    x: 59.086,
                    y: -26.221,
                    r: -0.128
                },
                "43": {
                    x: 62.468,
                    y: -26.477,
                    r: -0.132
                },
                "44": {
                    x: 65.75,
                    y: -26.75,
                    r: -0.137
                },
                "45": {
                    x: 68.481,
                    y: -27.253,
                    r: -0.13
                },
                "46": {
                    x: 71.209,
                    y: -27.703,
                    r: -0.123
                },
                "47": {
                    x: 73.884,
                    y: -28.103,
                    r: -0.116
                },
                "48": {
                    x: 76.6,
                    y: -28.45,
                    r: -0.109
                },
                "51": {
                    x: 78.899,
                    y: -30.567,
                    r: -0.135
                },
                "52": {
                    x: 81.205,
                    y: -32.567,
                    r: -0.16
                },
                "53": {
                    x: 83.612,
                    y: -34.594,
                    r: -0.185
                },
                "54": {
                    x: 85.85,
                    y: -36.55,
                    r: -0.21
                },
                "55": {
                    x: 10.9,
                    y: -36.05,
                    sx: 1,
                    sy: 1,
                    r: -0.14
                },
                "85": {
                    x: 11.9,
                    y: -35.05
                },
                "86": {
                    x: 12.099,
                    y: -35.098,
                    sx: 0.999,
                    sy: 0.999,
                    a: 0.88
                },
                "87": {
                    x: 12.199,
                    a: 0.75
                },
                "88": {
                    x: 12.349,
                    a: 0.63
                },
                "89": {
                    x: 12.449,
                    a: 0.5
                },
                "90": {
                    x: 12.599,
                    a: 0.38
                },
                "91": {
                    x: 12.699,
                    a: 0.25
                },
                "92": {
                    x: 12.849,
                    a: 0.13
                },
                "93": {
                    x: 12.9,
                    y: -35.05,
                    sx: 1,
                    sy: 1,
                    a: 0
                }
            })
            .addTimedChild(instance5, 0, 99, {
                "0": {
                    x: -29.6,
                    y: -40.9,
                    sx: 0.998,
                    sy: 0.998,
                    r: -0.132,
                    a: 1
                },
                "1": {
                    x: -31.65,
                    y: -40.599
                },
                "2": {
                    x: -33.65,
                    y: -40.249
                },
                "3": {
                    x: -35.65,
                    y: -39.949
                },
                "4": {
                    x: -37.65,
                    y: -39.599
                },
                "5": {
                    x: -39.65,
                    y: -39.299
                },
                "6": {
                    x: -41.65,
                    y: -38.949
                },
                "7": {
                    x: -43.6,
                    y: -38.65
                },
                "8": {
                    x: -43.699,
                    y: -38.449
                },
                "9": {
                    y: -38.249
                },
                "10": {
                    y: -38.099
                },
                "11": {
                    y: -37.899
                },
                "12": {
                    y: -37.699
                },
                "13": {
                    y: -37.499
                },
                "14": {
                    y: -37.349
                },
                "15": {
                    x: -43.6,
                    y: -37.15
                },
                "16": {
                    x: -46.565,
                    y: -36.437,
                    r: -0.138
                },
                "17": {
                    x: -49.48,
                    y: -35.622,
                    sx: 0.997,
                    sy: 0.997,
                    r: -0.144
                },
                "18": {
                    x: -52.343,
                    y: -34.856,
                    r: -0.15
                },
                "19": {
                    x: -55.255,
                    y: -34.088,
                    r: -0.156
                },
                "20": {
                    x: -58.165,
                    y: -33.319,
                    r: -0.162
                },
                "21": {
                    x: -61.073,
                    y: -32.5,
                    r: -0.168
                },
                "22": {
                    x: -63.981,
                    y: -31.83,
                    r: -0.174
                },
                "23": {
                    x: -66.886,
                    y: -31.007,
                    r: -0.18
                },
                "24": {
                    x: -69.739,
                    y: -30.234,
                    r: -0.186
                },
                "25": {
                    x: -72.691,
                    y: -29.458,
                    r: -0.192
                },
                "26": {
                    x: -75.45,
                    y: -28.65,
                    r: -0.198
                },
                "27": {
                    x: -75.254,
                    y: -30.421,
                    sx: 0.996,
                    sy: 0.996,
                    r: -0.16
                },
                "28": {
                    x: -75.006,
                    y: -32.147,
                    r: -0.122
                },
                "29": {
                    x: -74.703,
                    y: -33.825,
                    r: -0.084
                },
                "30": {
                    x: -74.4,
                    y: -35.498,
                    r: -0.047
                },
                "31": {
                    x: -74,
                    y: -37.15,
                    r: -0.009
                },
                "32": {
                    x: -75.197,
                    y: -36.555,
                    r: 0.027
                },
                "33": {
                    x: -76.296,
                    y: -35.859,
                    r: 0.064
                },
                "34": {
                    x: -77.35,
                    y: -35.1,
                    r: 0.1
                },
                "35": {
                    x: -77.813,
                    y: -35.482,
                    sx: 0.995,
                    sy: 0.995,
                    r: 0.086
                },
                "36": {
                    x: -78.257,
                    y: -35.906,
                    r: 0.072
                },
                "37": {
                    x: -78.638,
                    y: -36.275,
                    r: 0.057
                },
                "38": {
                    x: -79.05,
                    y: -36.6,
                    sx: 0.994,
                    sy: 0.994,
                    r: 0.043
                },
                "39": {
                    x: -79.416,
                    y: -36.115,
                    r: 0.053
                },
                "40": {
                    x: -79.575,
                    y: -35.577,
                    sx: 0.995,
                    sy: 0.995,
                    r: 0.062
                },
                "41": {
                    x: -79.876,
                    y: -35.038,
                    r: 0.072
                },
                "42": {
                    x: -80.169,
                    y: -34.543,
                    r: 0.081
                },
                "43": {
                    x: -80.356,
                    y: -33.996,
                    r: 0.091
                },
                "44": {
                    x: -80.55,
                    y: -33.4,
                    sx: 0.996,
                    sy: 0.996,
                    r: 0.1
                },
                "45": {
                    x: -82.281,
                    y: -32.218,
                    r: 0.026
                },
                "46": {
                    x: -83.855,
                    y: -30.882,
                    r: -0.049
                },
                "47": {
                    x: -85.458,
                    y: -29.575,
                    r: -0.123
                },
                "48": {
                    x: -86.95,
                    y: -28.15,
                    sx: 0.997,
                    sy: 0.997,
                    r: -0.198
                },
                "51": {
                    x: -84.905,
                    y: -30.955,
                    sx: 0.996,
                    sy: 0.996,
                    r: -0.112
                },
                "52": {
                    x: -82.652,
                    y: -33.552,
                    r: -0.027
                },
                "53": {
                    x: -80.459,
                    y: -36.232,
                    r: 0.059
                },
                "54": {
                    x: -78.1,
                    y: -38.75,
                    r: 0.144
                },
                "55": {
                    x: -29.6,
                    y: -36.9,
                    sx: 0.998,
                    sy: 0.998,
                    r: -0.132
                },
                "77": {
                    y: -35.9
                },
                "78": {
                    x: -26.5,
                    y: -35.949,
                    a: 0.86
                },
                "79": {
                    x: -23.35,
                    a: 0.71
                },
                "80": {
                    x: -20.2,
                    a: 0.57
                },
                "81": {
                    x: -17.1,
                    a: 0.43
                },
                "82": {
                    x: -13.95,
                    a: 0.29
                },
                "83": {
                    x: -10.8,
                    a: 0.14
                },
                "84": {
                    x: -7.6,
                    y: -35.9,
                    a: 0
                }
            })
            .addTimedChild(instance4, 0, 99, {
                "0": {
                    x: -50.05,
                    y: -41.35,
                    sx: 0.999,
                    sy: 0.999,
                    r: -0.167,
                    a: 1
                },
                "1": {
                    x: -53.799,
                    y: -40.949
                },
                "2": {
                    x: -57.499,
                    y: -40.499
                },
                "3": {
                    x: -61.199,
                    y: -40.049
                },
                "4": {
                    x: -64.899,
                    y: -39.599
                },
                "5": {
                    x: -68.599,
                    y: -39.149
                },
                "6": {
                    x: -72.299,
                    y: -38.699
                },
                "7": {
                    x: -75.95,
                    y: -38.2
                },
                "8": {
                    x: -76.305,
                    y: -37.82,
                    r: -0.178
                },
                "9": {
                    x: -76.5,
                    y: -37.385,
                    r: -0.189
                },
                "10": {
                    x: -76.788,
                    y: -36.997,
                    r: -0.199
                },
                "11": {
                    x: -77.065,
                    y: -36.605,
                    r: -0.21
                },
                "12": {
                    x: -77.384,
                    y: -36.208,
                    r: -0.221
                },
                "13": {
                    x: -77.594,
                    y: -35.756,
                    r: -0.232
                },
                "14": {
                    x: -77.844,
                    y: -35.353,
                    r: -0.243
                },
                "15": {
                    x: -78.05,
                    y: -34.95,
                    r: -0.254
                },
                "16": {
                    x: -81.738,
                    y: -34.193,
                    r: -0.261
                },
                "17": {
                    x: -85.321,
                    y: -33.437,
                    r: -0.268
                },
                "18": {
                    x: -88.903,
                    y: -32.629,
                    r: -0.275
                },
                "19": {
                    x: -92.529,
                    y: -31.768,
                    r: -0.282
                },
                "20": {
                    x: -96.102,
                    y: -30.956,
                    sx: 0.998,
                    sy: 0.998,
                    r: -0.289
                },
                "21": {
                    x: -99.672,
                    y: -30.192,
                    r: -0.296
                },
                "22": {
                    x: -103.285,
                    y: -29.376,
                    r: -0.303
                },
                "23": {
                    x: -106.896,
                    y: -28.561,
                    r: -0.31
                },
                "24": {
                    x: -110.504,
                    y: -27.744,
                    r: -0.317
                },
                "25": {
                    x: -114.056,
                    y: -26.972,
                    r: -0.325
                },
                "26": {
                    x: -117.5,
                    y: -26.1,
                    r: -0.332
                },
                "27": {
                    x: -118.243,
                    y: -28.406,
                    r: -0.325
                },
                "28": {
                    x: -118.883,
                    y: -30.658,
                    r: -0.318
                },
                "29": {
                    x: -119.566,
                    y: -32.862,
                    sx: 0.997,
                    sy: 0.997,
                    r: -0.311
                },
                "30": {
                    x: -120.245,
                    y: -35.112,
                    r: -0.304
                },
                "31": {
                    x: -120.8,
                    y: -37.35,
                    r: -0.297
                },
                "32": {
                    x: -123.904,
                    y: -36.616,
                    r: -0.309
                },
                "33": {
                    x: -126.947,
                    y: -35.83,
                    sx: 0.998,
                    sy: 0.998,
                    r: -0.32
                },
                "34": {
                    x: -129.95,
                    y: -35,
                    r: -0.332
                },
                "35": {
                    x: -129.994,
                    y: -35.948
                },
                "36": {
                    y: -36.848
                },
                "37": {
                    x: -130.044,
                    y: -37.798
                },
                "38": {
                    x: -130,
                    y: -38.65
                },
                "39": {
                    x: -130.594,
                    y: -38.098
                },
                "40": {
                    x: -131.094,
                    y: -37.498
                },
                "41": {
                    x: -131.594,
                    y: -36.848
                },
                "42": {
                    x: -132.094,
                    y: -36.248
                },
                "43": {
                    x: -132.594,
                    y: -35.648
                },
                "44": {
                    x: -133,
                    y: -35
                },
                "45": {
                    x: -135.122,
                    y: -30.806,
                    r: -0.346
                },
                "46": {
                    x: -137.222,
                    y: -26.507,
                    r: -0.36
                },
                "47": {
                    x: -139.297,
                    y: -22.303,
                    r: -0.374
                },
                "48": {
                    x: -141.3,
                    y: -18.1,
                    r: -0.388
                },
                "51": {
                    x: -141.484,
                    y: -23.372,
                    r: -0.328
                },
                "52": {
                    x: -141.618,
                    y: -28.598,
                    r: -0.268
                },
                "53": {
                    x: -141.697,
                    y: -33.895,
                    r: -0.208
                },
                "54": {
                    x: -141.8,
                    y: -39.05,
                    sx: 0.997,
                    sy: 0.997,
                    r: -0.147
                },
                "55": {
                    x: -50.05,
                    y: -37.35,
                    sx: 0.999,
                    sy: 0.999,
                    r: -0.167
                },
                "72": {
                    y: -36.35
                },
                "73": {
                    x: -50.449,
                    y: -36.399,
                    a: 0.89
                },
                "74": {
                    x: -50.749,
                    a: 0.78
                },
                "75": {
                    x: -51.099,
                    a: 0.67
                },
                "76": {
                    x: -51.449,
                    a: 0.55
                },
                "77": {
                    x: -51.749,
                    a: 0.45
                },
                "78": {
                    x: -52.099,
                    a: 0.33
                },
                "79": {
                    x: -52.449,
                    a: 0.22
                },
                "80": {
                    x: -52.749,
                    a: 0.11
                },
                "81": {
                    x: -53.05,
                    y: -36.35,
                    a: 0
                }
            })
            .addTimedChild(instance3, 0, 99, {
                "0": {
                    x: -71.4,
                    y: -38.4,
                    sx: 0.999,
                    sy: 0.999,
                    r: -0.315,
                    a: 1
                },
                "1": {
                    x: -76.801,
                    y: -37.537,
                    r: -0.327
                },
                "2": {
                    x: -82.194,
                    y: -36.672,
                    r: -0.339
                },
                "3": {
                    x: -87.574,
                    y: -35.749,
                    r: -0.351
                },
                "4": {
                    x: -92.897,
                    y: -34.874,
                    r: -0.363
                },
                "5": {
                    x: -98.257,
                    y: -33.942,
                    r: -0.375
                },
                "6": {
                    x: -103.608,
                    y: -33.105,
                    r: -0.387
                },
                "7": {
                    x: -108.9,
                    y: -32.05,
                    r: -0.399
                },
                "8": {
                    x: -109.045,
                    y: -31.799
                },
                "9": {
                    x: -109.095,
                    y: -31.449
                },
                "10": {
                    x: -109.195,
                    y: -31.149
                },
                "11": {
                    x: -109.245,
                    y: -30.849
                },
                "12": {
                    x: -109.295,
                    y: -30.549
                },
                "13": {
                    x: -109.345,
                    y: -30.199
                },
                "14": {
                    x: -109.445,
                    y: -29.899
                },
                "15": {
                    x: -109.4,
                    y: -29.55
                },
                "16": {
                    x: -114.355,
                    y: -26.732,
                    r: -0.443
                },
                "17": {
                    x: -119.257,
                    y: -23.921,
                    sx: 0.998,
                    sy: 0.998,
                    r: -0.486
                },
                "18": {
                    x: -124.098,
                    y: -21.075,
                    r: -0.529
                },
                "19": {
                    x: -128.93,
                    y: -18.202,
                    r: -0.573
                },
                "20": {
                    x: -133.701,
                    y: -15.359,
                    r: -0.616
                },
                "21": {
                    x: -138.51,
                    y: -12.41,
                    r: -0.659
                },
                "22": {
                    x: -143.204,
                    y: -9.561,
                    r: -0.702
                },
                "23": {
                    x: -147.989,
                    y: -6.672,
                    sx: 0.997,
                    sy: 0.997,
                    r: -0.746
                },
                "24": {
                    x: -152.663,
                    y: -3.802,
                    r: -0.789
                },
                "25": {
                    x: -157.428,
                    y: -0.959,
                    r: -0.832
                },
                "26": {
                    x: -162.05,
                    y: 1.95,
                    r: -0.876
                },
                "27": {
                    x: -164.029,
                    y: -1.453,
                    r: -0.84
                },
                "28": {
                    x: -165.86,
                    y: -4.853,
                    r: -0.804
                },
                "29": {
                    x: -167.683,
                    y: -8.235,
                    r: -0.768
                },
                "30": {
                    x: -169.598,
                    y: -11.644,
                    sx: 0.996,
                    sy: 0.996,
                    r: -0.732
                },
                "31": {
                    x: -171.35,
                    y: -15,
                    r: -0.697
                },
                "32": {
                    x: -174.684,
                    y: -12.251,
                    r: -0.756
                },
                "33": {
                    x: -177.964,
                    y: -9.479,
                    sx: 0.997,
                    sy: 0.997,
                    r: -0.816
                },
                "34": {
                    x: -181.05,
                    y: -6.75,
                    r: -0.876
                },
                "35": {
                    x: -180.292,
                    y: -7.6
                },
                "36": {
                    x: -179.492,
                    y: -8.45
                },
                "37": {
                    x: -178.742,
                    y: -9.25
                },
                "38": {
                    x: -177.9,
                    y: -10.05
                },
                "39": {
                    x: -178.642,
                    y: -9.45
                },
                "40": {
                    x: -179.342,
                    y: -8.85
                },
                "41": {
                    x: -179.992,
                    y: -8.2
                },
                "42": {
                    x: -180.692,
                    y: -7.6
                },
                "43": {
                    x: -181.392,
                    y: -6.95
                },
                "44": {
                    x: -182.05,
                    y: -6.3
                },
                "45": {
                    x: -185.236,
                    y: -5.236,
                    r: -0.767
                },
                "46": {
                    x: -188.274,
                    y: -4.111,
                    sx: 0.996,
                    sy: 0.996,
                    r: -0.659
                },
                "47": {
                    x: -191.143,
                    y: -3.041,
                    r: -0.551
                },
                "48": {
                    x: -193.75,
                    y: -1.85,
                    r: -0.442
                },
                "51": {
                    x: -196.23,
                    y: -10.386,
                    r: -0.394
                },
                "52": {
                    x: -198.621,
                    y: -18.895,
                    sx: 0.995,
                    sy: 0.995,
                    r: -0.346
                },
                "53": {
                    x: -201.074,
                    y: -27.355,
                    r: -0.298
                },
                "54": {
                    x: -203.25,
                    y: -35.8,
                    r: -0.25
                },
                "55": {
                    x: -71.4,
                    y: -34.4,
                    sx: 0.999,
                    sy: 0.999,
                    r: -0.315
                },
                "70": {
                    x: -70.4
                },
                "71": {
                    x: -70.298,
                    y: -34.298,
                    a: 0.89
                },
                "72": {
                    x: -70.198,
                    y: -34.198,
                    a: 0.78
                },
                "73": {
                    x: -70.048,
                    y: -34.048,
                    a: 0.67
                },
                "74": {
                    x: -69.948,
                    y: -33.948,
                    a: 0.55
                },
                "75": {
                    x: -69.848,
                    y: -33.848,
                    a: 0.45
                },
                "76": {
                    x: -69.748,
                    y: -33.748,
                    a: 0.33
                },
                "77": {
                    x: -69.598,
                    y: -33.598,
                    a: 0.22
                },
                "78": {
                    x: -69.498,
                    y: -33.498,
                    a: 0.11
                },
                "79": {
                    x: -69.4,
                    y: -33.4,
                    a: 0
                }
            })
            .addTimedChild(instance2, 0, 16, {
                "0": {
                    x: -8.95,
                    y: -40.2,
                    r: -0.123,
                    a: 1
                },
                "1": {
                    y: -39.849,
                    a: 0.97
                },
                "2": {
                    y: -39.449,
                    a: 0.94
                },
                "3": {
                    y: -38.999,
                    a: 0.91
                },
                "4": {
                    y: -38.599,
                    a: 0.88
                },
                "5": {
                    y: -38.149,
                    a: 0.85
                },
                "6": {
                    y: -37.749,
                    a: 0.82
                },
                "7": {
                    y: -37.2,
                    a: 0.79
                },
                "8": {
                    x: -8.6,
                    y: -36.549,
                    a: 0.69
                },
                "9": {
                    x: -8.25,
                    y: -35.799,
                    a: 0.59
                },
                "10": {
                    x: -7.95,
                    y: -35.049,
                    a: 0.49
                },
                "11": {
                    x: -7.65,
                    y: -34.299,
                    a: 0.39
                },
                "12": {
                    x: -7.35,
                    y: -33.549,
                    a: 0.3
                },
                "13": {
                    x: -7,
                    y: -32.799,
                    a: 0.2
                },
                "14": {
                    x: -6.7,
                    y: -32.049,
                    a: 0.1
                },
                "15": {
                    x: -6.45,
                    y: -31.2,
                    a: 0
                }
            })
            .addTimedChild(instance146, 50, 5, {
                "50": {
                    x: 148.95,
                    y: -15,
                    sx: 0.994,
                    sy: 0.994,
                    r: 0.143
                },
                "51": {
                    x: 154.049,
                    y: -20.77,
                    r: 0.083
                },
                "52": {
                    x: 159.266,
                    y: -26.457,
                    r: 0.023
                },
                "53": {
                    x: 164.405,
                    y: -32.064,
                    r: -0.037
                },
                "54": {
                    x: 169.5,
                    y: -37.65,
                    r: -0.097
                }
            })
            .addTimedChild(instance145, 50, 5, {
                "50": {
                    x: 100.15,
                    y: -26.15,
                    sx: 0.995,
                    sy: 0.995,
                    r: 0.004
                },
                "51": {
                    x: 102.109,
                    y: -29.148,
                    sx: 0.994,
                    sy: 0.994,
                    r: -0.029
                },
                "52": {
                    x: 104.009,
                    y: -32.018,
                    r: -0.063
                },
                "53": {
                    x: 105.904,
                    y: -34.899,
                    r: -0.096
                },
                "54": {
                    x: 107.8,
                    y: -37.75,
                    r: -0.129
                }
            })
            .addTimedChild(instance144, 50, 5, {
                "50": {
                    x: -114.5,
                    y: -24.5,
                    sx: 0.995,
                    sy: 0.995,
                    r: -0.271
                },
                "51": {
                    x: -110.931,
                    y: -28.489,
                    r: -0.225
                },
                "52": {
                    x: -107.276,
                    y: -32.413,
                    r: -0.179
                },
                "53": {
                    x: -103.582,
                    y: -36.262,
                    r: -0.133
                },
                "54": {
                    x: -99.8,
                    y: -40.2,
                    r: -0.087
                }
            })
            .addTimedChild(instance143, 50, 5, {
                "50": {
                    x: -169.15,
                    y: -10.95,
                    sx: 0.996,
                    sy: 0.996,
                    r: -0.415
                },
                "51": {
                    x: -167.518,
                    y: -17.882,
                    sx: 0.995,
                    sy: 0.995,
                    r: -0.35
                },
                "52": {
                    x: -165.809,
                    y: -24.763,
                    r: -0.284
                },
                "53": {
                    x: -164.036,
                    y: -31.648,
                    r: -0.218
                },
                "54": {
                    x: -162.2,
                    y: -38.4,
                    r: -0.152
                }
            })
            .addTimedChild(instance137, 48, 3, {
                "48": {
                    x: -169.35,
                    y: -28.4,
                    a: 0.01
                },
                "49": {
                    a: 0.61
                },
                "50": {
                    a: 1
                }
            })
            .addTimedChild(instance167, 55, 44, {
                "55": {
                    x: -8.95,
                    y: -36.2,
                    r: -0.123,
                    a: 1
                },
                "81": {
                    x: -35.95,
                    y: -35.2
                },
                "82": {
                    x: -40.849,
                    y: -35.249,
                    a: 0.9
                },
                "83": {
                    x: -45.649,
                    a: 0.8
                },
                "84": {
                    x: -50.449,
                    a: 0.7
                },
                "85": {
                    x: -55.249,
                    a: 0.6
                },
                "86": {
                    x: -60.049,
                    a: 0.5
                },
                "87": {
                    x: -64.849,
                    a: 0.4
                },
                "88": {
                    x: -69.649,
                    a: 0.3
                },
                "89": {
                    x: -74.449,
                    a: 0.2
                },
                "90": {
                    x: -79.249,
                    a: 0.1
                },
                "91": {
                    x: -83.95,
                    y: -35.2,
                    a: 0
                }
            })
            .addTimedChild(instance1, 0, 99, {
                "0": {
                    x: -1.1,
                    y: -4.05,
                    sx: 6.057,
                    sy: 2.559,
                    a: 0
                },
                "1": {
                    x: -0.831,
                    y: -4,
                    sx: 6.23,
                    sy: 2.558
                },
                "2": {
                    x: -0.663,
                    sx: 6.403
                },
                "3": {
                    x: -0.544,
                    sx: 6.577
                },
                "4": {
                    x: -0.376,
                    sx: 6.75
                },
                "5": {
                    x: -0.207,
                    sx: 6.924
                },
                "6": {
                    x: 0.011,
                    sx: 7.097
                },
                "7": {
                    x: 0.13,
                    sx: 7.271
                },
                "8": {
                    x: 0.298,
                    sx: 7.444
                },
                "9": {
                    x: 0.467,
                    sx: 7.618
                },
                "10": {
                    x: 0.635,
                    sx: 7.791
                },
                "11": {
                    x: 0.804,
                    sx: 7.964
                },
                "12": {
                    x: 0.972,
                    sx: 8.138
                },
                "13": {
                    x: 1.141,
                    sx: 8.311
                },
                "14": {
                    x: 1.309,
                    sx: 8.485
                },
                "15": {
                    x: 1.478,
                    sx: 8.658
                },
                "16": {
                    x: 1.596,
                    sx: 8.832
                },
                "17": {
                    x: 1.815,
                    sx: 9.005
                },
                "18": {
                    x: 1.983,
                    sx: 9.178
                },
                "19": {
                    x: 2.152,
                    sx: 9.352
                },
                "20": {
                    x: 2.32,
                    sx: 9.526
                },
                "21": {
                    x: 2.439,
                    sx: 9.699
                },
                "22": {
                    x: 2.607,
                    sx: 9.872
                },
                "23": {
                    x: 2.826,
                    sx: 10.046
                },
                "24": {
                    x: 2.994,
                    sx: 10.219
                },
                "25": {
                    x: 3.113,
                    sx: 10.393
                },
                "26": {
                    x: 3.281,
                    sx: 10.566
                },
                "27": {
                    x: 3.45,
                    sx: 10.739
                },
                "28": {
                    x: 3.618,
                    sx: 10.913
                },
                "29": {
                    x: 3.837,
                    sx: 11.086
                },
                "30": {
                    x: 3.955,
                    sx: 11.26
                },
                "31": {
                    x: 4.124,
                    sx: 11.433
                },
                "32": {
                    x: 4.292,
                    sx: 11.607
                },
                "33": {
                    x: 4.461,
                    sx: 11.78
                },
                "34": {
                    x: 4.579,
                    sx: 11.954
                },
                "35": {
                    x: 4.798,
                    sx: 12.127
                },
                "36": {
                    x: 4.966,
                    sx: 12.301
                },
                "37": {
                    x: 5.135,
                    sx: 12.474
                },
                "38": {
                    x: 5.303,
                    sx: 12.647
                },
                "39": {
                    x: 5.422,
                    sx: 12.821
                },
                "40": {
                    x: 5.59,
                    sx: 12.994
                },
                "41": {
                    x: 5.809,
                    sx: 13.168
                },
                "42": {
                    x: 5.977,
                    sx: 13.341
                },
                "43": {
                    x: 6.096,
                    sx: 13.515
                },
                "44": {
                    x: 6.264,
                    sx: 13.688
                },
                "45": {
                    x: 6.433,
                    sx: 13.861
                },
                "46": {
                    x: 6.651,
                    sx: 14.035
                },
                "47": {
                    x: 6.82,
                    sx: 14.208
                },
                "48": {
                    x: 6.938,
                    sx: 14.382
                },
                "49": {
                    x: 7.107,
                    sx: 14.555
                },
                "50": {
                    x: 7.275,
                    sx: 14.729
                },
                "51": {
                    x: 7.444,
                    sx: 14.902
                },
                "52": {
                    x: 7.612,
                    sx: 15.076
                },
                "53": {
                    x: 7.781,
                    sx: 15.249
                },
                "54": {
                    x: 7.7,
                    y: -4.05,
                    sx: 15.424,
                    sy: 2.559
                },
                "55": {
                    x: -1.1,
                    y: -2.35,
                    sx: 6.057
                }
            })
            .addTimedChild(instance188, 99, 15, {
                "99": {
                    x: -93.75,
                    y: -20.1,
                    a: 1
                },
                "100": {
                    x: -93.7,
                    a: 0.93
                },
                "101": {
                    x: -93.6,
                    a: 0.86
                },
                "102": {
                    x: -93.55,
                    a: 0.79
                },
                "103": {
                    x: -93.5,
                    a: 0.71
                },
                "104": {
                    x: -93.4,
                    a: 0.64
                },
                "105": {
                    x: -93.35,
                    a: 0.57
                },
                "106": {
                    x: -93.25,
                    a: 0.5
                },
                "107": {
                    x: -93.2,
                    a: 0.43
                },
                "108": {
                    x: -93.15,
                    a: 0.36
                },
                "109": {
                    x: -93.05,
                    a: 0.29
                },
                "110": {
                    x: -93,
                    a: 0.21
                },
                "111": {
                    x: -92.95,
                    a: 0.14
                },
                "112": {
                    x: -92.85,
                    a: 0.07
                },
                "113": {
                    x: -92.8,
                    a: 0
                }
            })
            .addAction(function () {
                /* stop();
                var nTime:Number = 0;
                var nTimeMax:Number;
                var nFrameEnd:Number = this._totalframes;
                var nFrameDie:Number = 56;

                //temp
                //gotoAndPlay(nFrameDie);

                this.body.onEnterFrame = function() {
                nTime++;
                if (nTime == 3) {
                trace("time passed variable, from enterframe bacteria ="+nTimeMax);
                }
                if (nTime == nTimeMax) {
                gotoAndPlay(2);
                }
                };
                function Die() {
                // this function can be called from the outside to start the kill animation
                gotoAndPlay(nFrameDie);
                tc.stop();
                }
                */
            }, 0)
            .addAction(function () {
                /* // this is the end of the split animation
                gotoAndPlay(nFrameEnd);*/
            }, 54)
            .addAction(function () {
                /* //stop();

                //this is the beginning of the kill animation
                this.tc.gotoAndStop(1);*/
            }, 55)
            .addAction(function () {
                /* // this is the end of the kill animation
                //
                this._parent.Inform("endKill");
                stop();*/
            }, 113)
            .addAction(function () {
                /* // this needs to be the last frame of the animation

                // communicate that the split is complete
                this._parent.Inform("endAnim");
                gotoAndPlay(1);*/
            }, 114);
    });

    lib.hittestie = Container.extend(function () {
        Container.call(this);
        var instance1 = new Graphics()
            .drawCommands(shapes.InternalBacteria[160])
            .setTransform(32.45, -30.8);
        this.addChild(instance1);
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
            .drawCommands(shapes.InternalBacteria[7])
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
            .drawCommands(shapes.InternalBacteria[169])
            .setTransform(-318.4, -198.2, 0.872, 0.872);
        var instance7 = new Graphics()
            .drawCommands(shapes.InternalBacteria[168])
            .setTransform(-318.4, -198.2, 0.872, 0.872);
        var instance6 = new Graphics()
            .drawCommands(shapes.InternalBacteria[167])
            .setTransform(-318.4, -198.2, 0.872, 0.872);
        var instance5 = new Graphics()
            .drawCommands(shapes.InternalBacteria[166])
            .setTransform(-318.4, -198.2, 0.872, 0.872);
        var instance4 = new Graphics()
            .drawCommands(shapes.InternalBacteria[165])
            .setTransform(-318.4, -198.2, 0.872, 0.872);
        var instance3 = new Graphics()
            .drawCommands(shapes.InternalBacteria[164])
            .setTransform(-318.4, -198.2, 0.872, 0.872);
        var instance2 = new Graphics()
            .drawCommands(shapes.InternalBacteria[163])
            .setTransform(-318.4, -198.2, 0.872, 0.872);
        var instance1 = new Graphics()
            .drawCommands(shapes.InternalBacteria[162])
            .setTransform(-318.4, -198.2, 0.872, 0.872);
        this.addChild(instance8, instance7, instance6, instance5, instance4, instance3, instance2, instance1);
    });

    lib.crown = Container.extend(function () {
        Container.call(this);
        var instance2 = new Graphics()
            .drawCommands(shapes.InternalBacteria[184])
            .setTransform(15.4, 112.75);
        var instance1 = new Graphics()
            .drawCommands(shapes.InternalBacteria[183])
            .setTransform(-398.45, -207.15);
        this.addChild(instance2, instance1);
    });

    lib.macro_bac_blue = Container.extend(function () {
        Container.call(this);
        var instance1 = new Graphics()
            .drawCommands(shapes.InternalBacteria[181])
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
            .drawCommands(shapes.InternalBacteria[182]);
        var instance21 = new Graphics()
            .drawCommands(shapes.InternalBacteria[181]);
        var instance29 = new lib.macro_bac_blue();
        var instance68 = new Graphics()
            .drawCommands(shapes.InternalBacteria[185]);
        var instance67 = new lib.crown()
            .setTransform(-3.7, -104.15, 0.932, 0.932);
        var instance66 = new Graphics()
            .drawCommands(shapes.InternalBacteria[181])
            .setTransform(4, 3.3);
        var instance20 = new Graphics()
            .drawCommands(shapes.InternalBacteria[176]);
        var instance19 = new Graphics()
            .drawCommands(shapes.InternalBacteria[175]);
        var instance18 = new Graphics()
            .drawCommands(shapes.InternalBacteria[176]);
        var instance17 = new Graphics()
            .drawCommands(shapes.InternalBacteria[175]);
        var instance16 = new Graphics()
            .drawCommands(shapes.InternalBacteria[179]);
        var instance15 = new Graphics()
            .drawCommands(shapes.InternalBacteria[178]);
        var instance14 = new Graphics()
            .drawCommands(shapes.InternalBacteria[173]);
        var instance13 = new Graphics()
            .drawCommands(shapes.InternalBacteria[172]);
        var instance12 = new Graphics()
            .drawCommands(shapes.InternalBacteria[171]);
        var instance11 = new Graphics()
            .drawCommands(shapes.InternalBacteria[170]);
        var instance10 = new Graphics()
            .drawCommands(shapes.InternalBacteria[169]);
        var instance9 = new Graphics()
            .drawCommands(shapes.InternalBacteria[168]);
        var instance8 = new Graphics()
            .drawCommands(shapes.InternalBacteria[167]);
        var instance7 = new Graphics()
            .drawCommands(shapes.InternalBacteria[166]);
        var instance6 = new Graphics()
            .drawCommands(shapes.InternalBacteria[165]);
        var instance5 = new Graphics()
            .drawCommands(shapes.InternalBacteria[164]);
        var instance4 = new Graphics()
            .drawCommands(shapes.InternalBacteria[163]);
        var instance3 = new Graphics()
            .drawCommands(shapes.InternalBacteria[162]);
        var instance65 = new Graphics()
            .drawCommands(shapes.InternalBacteria[179])
            .setTransform(-347.5, -262.25, 0.872, 0.872);
        var instance64 = new Graphics()
            .drawCommands(shapes.InternalBacteria[178])
            .setTransform(-347.5, -262.25, 0.872, 0.872);
        var instance63 = new Graphics()
            .drawCommands(shapes.InternalBacteria[173])
            .setTransform(-347.5, -262.25, 0.872, 0.872);
        var instance62 = new Graphics()
            .drawCommands(shapes.InternalBacteria[172])
            .setTransform(-347.5, -262.25, 0.872, 0.872);
        var instance61 = new Graphics()
            .drawCommands(shapes.InternalBacteria[171])
            .setTransform(-347.5, -262.25, 0.872, 0.872);
        var instance60 = new Graphics()
            .drawCommands(shapes.InternalBacteria[170])
            .setTransform(-347.5, -262.25, 0.872, 0.872);
        var instance59 = new Graphics()
            .drawCommands(shapes.InternalBacteria[169])
            .setTransform(-347.5, -262.25, 0.872, 0.872);
        var instance58 = new Graphics()
            .drawCommands(shapes.InternalBacteria[168])
            .setTransform(-347.5, -262.25, 0.872, 0.872);
        var instance57 = new Graphics()
            .drawCommands(shapes.InternalBacteria[167])
            .setTransform(-347.5, -262.25, 0.872, 0.872);
        var instance56 = new Graphics()
            .drawCommands(shapes.InternalBacteria[166])
            .setTransform(-347.5, -262.25, 0.872, 0.872);
        var instance55 = new Graphics()
            .drawCommands(shapes.InternalBacteria[165])
            .setTransform(-347.5, -262.25, 0.872, 0.872);
        var instance54 = new Graphics()
            .drawCommands(shapes.InternalBacteria[164])
            .setTransform(-347.5, -262.25, 0.872, 0.872);
        var instance53 = new Graphics()
            .drawCommands(shapes.InternalBacteria[163])
            .setTransform(-347.5, -262.25, 0.872, 0.872);
        var instance52 = new Graphics()
            .drawCommands(shapes.InternalBacteria[162])
            .setTransform(-347.5, -262.25, 0.872, 0.872);
        var instance2 = new Graphics()
            .drawCommands(shapes.InternalBacteria[180]);
        var instance28 = new Graphics()
            .drawCommands(shapes.InternalBacteria[171]);
        var instance31 = new Graphics()
            .drawCommands(shapes.InternalBacteria[171]);
        var instance27 = new lib.mac_baceyebrows();
        var instance26 = new Graphics()
            .drawCommands(shapes.InternalBacteria[179]);
        var instance25 = new Graphics()
            .drawCommands(shapes.InternalBacteria[178]);
        var instance24 = new Graphics()
            .drawCommands(shapes.InternalBacteria[173]);
        var instance30 = new Graphics()
            .drawCommands(shapes.InternalBacteria[173]);
        var instance51 = new lib.bacteria_simple();
        this[instance51.name = "bac"] = instance51;
        var instance72 = new lib.tail_clip();
        var instance50 = new Graphics()
            .drawCommands(shapes.InternalBacteria[177]);
        var instance49 = new Graphics()
            .drawCommands(shapes.InternalBacteria[176])
            .setTransform(-397.658, -255.136, 0.872, 0.872);
        var instance48 = new Graphics()
            .drawCommands(shapes.InternalBacteria[175])
            .setTransform(-397.658, -255.136, 0.872, 0.872);
        var instance47 = new Graphics()
            .drawCommands(shapes.InternalBacteria[176])
            .setTransform(-347.5, -262.2, 0.872, 0.872);
        var instance46 = new Graphics()
            .drawCommands(shapes.InternalBacteria[175])
            .setTransform(-347.5, -262.2, 0.872, 0.872);
        var instance45 = new Graphics()
            .drawCommands(shapes.InternalBacteria[174]);
        var instance44 = new Graphics()
            .drawCommands(shapes.InternalBacteria[173])
            .setTransform(-347.5, -262.2, 0.872, 0.872);
        var instance43 = new Graphics()
            .drawCommands(shapes.InternalBacteria[172])
            .setTransform(-347.5, -262.2, 0.872, 0.872);
        var instance42 = new Graphics()
            .drawCommands(shapes.InternalBacteria[171])
            .setTransform(-347.5, -262.2, 0.872, 0.872);
        var instance41 = new Graphics()
            .drawCommands(shapes.InternalBacteria[170])
            .setTransform(-347.5, -262.2, 0.872, 0.872);
        var instance40 = new Graphics()
            .drawCommands(shapes.InternalBacteria[169])
            .setTransform(-347.5, -262.2, 0.872, 0.872);
        var instance39 = new Graphics()
            .drawCommands(shapes.InternalBacteria[168])
            .setTransform(-347.5, -262.2, 0.872, 0.872);
        var instance38 = new Graphics()
            .drawCommands(shapes.InternalBacteria[167])
            .setTransform(-347.5, -262.2, 0.872, 0.872);
        var instance37 = new Graphics()
            .drawCommands(shapes.InternalBacteria[166])
            .setTransform(-347.5, -262.2, 0.872, 0.872);
        var instance36 = new Graphics()
            .drawCommands(shapes.InternalBacteria[165])
            .setTransform(-347.5, -262.2, 0.872, 0.872);
        var instance35 = new Graphics()
            .drawCommands(shapes.InternalBacteria[164])
            .setTransform(-347.5, -262.2, 0.872, 0.872);
        var instance34 = new Graphics()
            .drawCommands(shapes.InternalBacteria[163])
            .setTransform(-347.5, -262.2, 0.872, 0.872);
        var instance33 = new Graphics()
            .drawCommands(shapes.InternalBacteria[162])
            .setTransform(-347.5, -262.2, 0.872, 0.872);
        var instance32 = new Graphics()
            .drawCommands(shapes.InternalBacteria[161]);
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
            .drawCommands(shapes.InternalBacteria[187]);
        this.addChild(instance1);
    });

    lib.InternalBacteria = MovieClip.extend(function () {
        MovieClip.call(this, {
            duration: 1,
            framerate: 30
        });
        var instance10 = new lib.GameSafe()
            .setTransform(287, 0, 1.017, 0.977);
        var instance9 = new Graphics()
            .drawCommands(shapes.InternalBacteria[186]);
        var instance8 = new lib.macro_bacteria_orig()
            .setTransform(574.75, 560.05);
        this[instance8.name = "macrophage3"] = instance8;
        var instance7 = new lib.macro_bacteria_orig()
            .setTransform(442.4, 380.05);
        this[instance7.name = "macrophage2"] = instance7;
        var instance6 = new lib.macro_bacteria_orig()
            .setTransform(610.05, 269.1);
        this[instance6.name = "macrophage1"] = instance6;
        var instance5 = new lib.bacteria_divide()
            .setTransform(914.05, 178);
        this[instance5.name = "bacteria1"] = instance5;
        var instance4 = new lib.bacteria_divide()
            .setTransform(977.05, 267.95);
        this[instance4.name = "bacteria2"] = instance4;
        var instance3 = new lib.bacteria_divide()
            .setTransform(988.05, 387.9);
        this[instance3.name = "bacteria3"] = instance3;
        var instance2 = new lib.bacteria_divide()
            .setTransform(929.05, 492.9);
        this[instance2.name = "bacteria4"] = instance2;
        var instance1 = new lib.bacteria_divide()
            .setTransform(1096.3, 613.9);
        this[instance1.name = "bacteria5"] = instance1;
        this.addChild(instance10, instance9, instance8, instance7, instance6, instance5, instance4, instance3, instance2, instance1);
    });

    lib.InternalBacteria.assets = {
        "InternalBacteria": "images/InternalBacteria.shapes.txt"
    };
})(PIXI, lib = lib || {});
var lib;
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        stage: lib.InternalBacteria,
        background: 0xffffff,
        width: 1624,
        height: 750,
        framerate: 30,
        totalFrames: 1,
        library: lib
    };
}