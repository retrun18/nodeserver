/**
 * Created by Administrator on 2018/1/9.
 */
module.exports=(function () {
    const WebSocket = require('ws');
    const wss = new WebSocket.Server({ port: 5500 });
    let gisData={
        "displayFieldName": "name",
        "fieldAliases": {
            "OBJECTID": "OBJECTID",
            "name": "name",
            "number": "number",
            "time": "time",
            "date": "date"
        },
        "geometryType": "esriGeometryPoint",
        "spatialReference": {
            "wkid": 2374,
            "latestWkid": 2374
        },
        "fields": [
            {
                "name": "OBJECTID",
                "type": "esriFieldTypeOID",
                "alias": "OBJECTID"
            },
            {
                "name": "name",
                "type": "esriFieldTypeString",
                "alias": "name",
                "length": 50
            },
            {
                "name": "number",
                "type": "esriFieldTypeString",
                "alias": "number",
                "length": 50
            },
            {
                "name": "time",
                "type": "esriFieldTypeString",
                "alias": "time",
                "length": 50
            },
            {
                "name": "date",
                "type": "esriFieldTypeDate",
                "alias": "date",
                "length": 8
            }
        ],
        "features": [
            {
                "attributes": {
                    "OBJECTID": 1,
                    "name": null,
                    "number": "1",
                    "time": "2017/12/28 11:50:40 AM UTC",
                    "date": 1514470695000
                },
                "geometry": {
                    "x": 419939.73770000041,
                    "y": 4628754.6349999998
                }
            },
            {
                "attributes": {
                    "OBJECTID": 2,
                    "name": null,
                    "number": "2",
                    "time": "2017/12/28 12:05:04 AM UTC",
                    "date": 1514471559000
                },
                "geometry": {
                    "x": 420066.7379999999,
                    "y": 4628881.6351999994
                }
            },
            {
                "attributes": {
                    "OBJECTID": 3,
                    "name": null,
                    "number": "3",
                    "time": "2017/12/28 12:19:28 AM UTC",
                    "date": 1514472423000
                },
                "geometry": {
                    "x": 420278.40510000009,
                    "y": 4629114.4690000005
                }
            },
            {
                "attributes": {
                    "OBJECTID": 4,
                    "name": null,
                    "number": "4",
                    "time": "2017/12/28 12:33:52 AM UTC",
                    "date": 1514473287000
                },
                "geometry": {
                    "x": 420415.98869999964,
                    "y": 4629294.3859999999
                }
            },
            {
                "attributes": {
                    "OBJECTID": 5,
                    "name": null,
                    "number": "5",
                    "time": "2017/12/28 12:48:16 AM UTC",
                    "date": 1514474151000
                },
                "geometry": {
                    "x": 420585.32239999995,
                    "y": 4629453.1363999993
                }
            },
            {
                "attributes": {
                    "OBJECTID": 6,
                    "name": null,
                    "number": "6",
                    "time": "2017/12/28 13:02:40 AM UTC",
                    "date": 1514475015000
                },
                "geometry": {
                    "x": 420744.07270000037,
                    "y": 4629580.1366000008
                }
            },
            {
                "attributes": {
                    "OBJECTID": 7,
                    "name": null,
                    "number": "7",
                    "time": "2017/12/28 13:17:04 AM UTC",
                    "date": 1514475879000
                },
                "geometry": {
                    "x": 421072.15670000017,
                    "y": 4629728.3036000002
                }
            },
            {
                "attributes": {
                    "OBJECTID": 8,
                    "name": null,
                    "number": "8",
                    "time": "2017/12/28 13:31:28 AM UTC",
                    "date": 1514476743000
                },
                "geometry": {
                    "x": 421368.49060000014,
                    "y": 4629781.2204
                }
            },
            {
                "attributes": {
                    "OBJECTID": 9,
                    "name": null,
                    "number": "9",
                    "time": "2017/12/28 13:45:52 AM UTC",
                    "date": 1514477607000
                },
                "geometry": {
                    "x": 421622.49110000022,
                    "y": 4629823.5537999999
                }
            },
            {
                "attributes": {
                    "OBJECTID": 10,
                    "name": null,
                    "number": "10",
                    "time": "2017/12/28 14:00:16 AM UTC",
                    "date": 1514478471000
                },
                "geometry": {
                    "x": 421781.24139999971,
                    "y": 4629876.4704999998
                }
            },
            {
                "attributes": {
                    "OBJECTID": 11,
                    "name": null,
                    "number": "11",
                    "time": "2017/12/28 14:14:40 AM UTC",
                    "date": 1514479335000
                },
                "geometry": {
                    "x": 422172.82550000027,
                    "y": 4629887.0538999997
                }
            },
            {
                "attributes": {
                    "OBJECTID": 12,
                    "name": null,
                    "number": "12",
                    "time": "2017/12/28 14:29:04 AM UTC",
                    "date": 1514480199000
                },
                "geometry": {
                    "x": 422426.82600000035,
                    "y": 4629887.0538999997
                }
            },
            {
                "attributes": {
                    "OBJECTID": 13,
                    "name": null,
                    "number": "13",
                    "time": "2017/12/28 14:43:28 AM UTC",
                    "date": 1514481063000
                },
                "geometry": {
                    "x": 422574.99299999978,
                    "y": 4629887.0538999997
                }
            },
            {
                "attributes": {
                    "OBJECTID": 14,
                    "name": null,
                    "number": "14",
                    "time": "2017/12/28 14:57:52 AM UTC",
                    "date": 1514481927000
                },
                "geometry": {
                    "x": 422892.4935999997,
                    "y": 4629855.3037999999
                }
            },
            {
                "attributes": {
                    "OBJECTID": 15,
                    "name": null,
                    "number": "15",
                    "time": "2017/12/28 15:12:16 AM UTC",
                    "date": 1514482791000
                },
                "geometry": {
                    "x": 423167.66089999955,
                    "y": 4629855.3037999999
                }
            },
            {
                "attributes": {
                    "OBJECTID": 16,
                    "name": null,
                    "number": "16",
                    "time": "2017/12/28 15:26:40 AM UTC",
                    "date": 1514483655000
                },
                "geometry": {
                    "x": 423336.99450000003,
                    "y": 4629855.3037999999
                }
            },
            {
                "attributes": {
                    "OBJECTID": 17,
                    "name": null,
                    "number": "17",
                    "time": "2017/12/28 15:41:04 AM UTC",
                    "date": 1514484519000
                },
                "geometry": {
                    "x": 423453.41139999963,
                    "y": 4629844.7204999998
                }
            },
            {
                "attributes": {
                    "OBJECTID": 18,
                    "name": null,
                    "number": "18",
                    "time": "2017/12/28 15:55:28 AM UTC",
                    "date": 1514485383000
                },
                "geometry": {
                    "x": 423643.91179999989,
                    "y": 4629855.3037999999
                }
            },
            {
                "attributes": {
                    "OBJECTID": 19,
                    "name": null,
                    "number": "19",
                    "time": "2017/12/28 16:09:52 AM UTC",
                    "date": 1514486247000
                },
                "geometry": {
                    "x": 423834.41220000014,
                    "y": 4629812.9704
                }
            },
            {
                "attributes": {
                    "OBJECTID": 20,
                    "name": null,
                    "number": "20",
                    "time": "2017/12/28 16:24:16 AM UTC",
                    "date": 1514487111000
                },
                "geometry": {
                    "x": 424024.91260000039,
                    "y": 4629696.5535000004
                }
            },
            {
                "attributes": {
                    "OBJECTID": 21,
                    "name": null,
                    "number": "21",
                    "time": "2017/12/28 16:38:40 AM UTC",
                    "date": 1514487975000
                },
                "geometry": {
                    "x": 424310.66309999954,
                    "y": 4629580.1366000008
                }
            },
            {
                "attributes": {
                    "OBJECTID": 22,
                    "name": null,
                    "number": "22",
                    "time": "2017/12/28 16:53:04 AM UTC",
                    "date": 1514488839000
                },
                "geometry": {
                    "x": 424374.16330000013,
                    "y": 4629495.4697999991
                }
            },
            {
                "attributes": {
                    "OBJECTID": 23,
                    "name": null,
                    "number": "23",
                    "time": "2017/12/28 17:07:28 AM UTC",
                    "date": 1514489703000
                },
                "geometry": {
                    "x": 424352.99660000019,
                    "y": 4629315.5527999997
                }
            },
            {
                "attributes": {
                    "OBJECTID": 24,
                    "name": null,
                    "number": "24",
                    "time": "2017/12/28 17:21:52 AM UTC",
                    "date": 1514490567000
                },
                "geometry": {
                    "x": 424278.91309999954,
                    "y": 4629114.4690000005
                }
            },
            {
                "attributes": {
                    "OBJECTID": 25,
                    "name": null,
                    "number": "25",
                    "time": "2017/12/28 17:36:16 AM UTC",
                    "date": 1514491431000
                },
                "geometry": {
                    "x": 424183.66289999988,
                    "y": 4628871.0518999994
                }
            },
            {
                "attributes": {
                    "OBJECTID": 26,
                    "name": null,
                    "number": "26",
                    "time": "2017/12/28 17:50:40 AM UTC",
                    "date": 1514492295000
                },
                "geometry": {
                    "x": 424067.24600000028,
                    "y": 4628490.0511000007
                }
            },
            {
                "attributes": {
                    "OBJECTID": 27,
                    "name": null,
                    "number": "27",
                    "time": "2017/12/28 18:05:04 AM UTC",
                    "date": 1514493159000
                },
                "geometry": {
                    "x": 424046.07930000033,
                    "y": 4628278.3839999996
                }
            },
            {
                "attributes": {
                    "OBJECTID": 28,
                    "name": null,
                    "number": "28",
                    "time": "2017/12/28 18:19:28 AM UTC",
                    "date": 1514494023000
                },
                "geometry": {
                    "x": 423950.82909999974,
                    "y": 4628066.7169000003
                }
            },
            {
                "attributes": {
                    "OBJECTID": 29,
                    "name": null,
                    "number": "29",
                    "time": "2017/12/28 18:33:52 AM UTC",
                    "date": 1514494887000
                },
                "geometry": {
                    "x": 423855.57890000008,
                    "y": 4627855.0497999992
                }
            },
            {
                "attributes": {
                    "OBJECTID": 30,
                    "name": null,
                    "number": "30",
                    "time": "2017/12/28 18:48:16 AM UTC",
                    "date": 1514495751000
                },
                "geometry": {
                    "x": 423781.49540000036,
                    "y": 4627632.7993999999
                }
            },
            {
                "attributes": {
                    "OBJECTID": 31,
                    "name": null,
                    "number": "31",
                    "time": "2017/12/28 19:02:40 AM UTC",
                    "date": 1514496615000
                },
                "geometry": {
                    "x": 423548.66160000023,
                    "y": 4627823.2997999992
                }
            },
            {
                "attributes": {
                    "OBJECTID": 32,
                    "name": null,
                    "number": "32",
                    "time": "2017/12/28 19:17:04 AM UTC",
                    "date": 1514497479000
                },
                "geometry": {
                    "x": 423188.82760000043,
                    "y": 4628225.4671999998
                }
            },
            {
                "attributes": {
                    "OBJECTID": 33,
                    "name": null,
                    "number": "33",
                    "time": "2017/12/28 19:31:28 AM UTC",
                    "date": 1514498343000
                },
                "geometry": {
                    "x": 422871.32689999975,
                    "y": 4628511.2178000007
                }
            },
            {
                "attributes": {
                    "OBJECTID": 34,
                    "name": null,
                    "number": "34",
                    "time": "2017/12/28 19:45:52 AM UTC",
                    "date": 1514499207000
                },
                "geometry": {
                    "x": 422765.49340000004,
                    "y": 4628648.8014000002
                }
            },
            {
                "attributes": {
                    "OBJECTID": 35,
                    "name": null,
                    "number": "35",
                    "time": "2017/12/28 20:00:16 AM UTC",
                    "date": 1514500071000
                },
                "geometry": {
                    "x": 422649.07650000043,
                    "y": 4628807.5516999997
                }
            },
            {
                "attributes": {
                    "OBJECTID": 36,
                    "name": null,
                    "number": "36",
                    "time": "2017/12/28 20:14:40 AM UTC",
                    "date": 1514500935000
                },
                "geometry": {
                    "x": 422458.57610000018,
                    "y": 4628955.7186999992
                }
            },
            {
                "attributes": {
                    "OBJECTID": 37,
                    "name": null,
                    "number": "37",
                    "time": "2017/12/28 20:29:04 AM UTC",
                    "date": 1514501799000
                },
                "geometry": {
                    "x": 422236.32569999993,
                    "y": 4628976.8853999991
                }
            },
            {
                "attributes": {
                    "OBJECTID": 38,
                    "name": null,
                    "number": "38",
                    "time": "2017/12/28 20:43:28 AM UTC",
                    "date": 1514502663000
                },
                "geometry": {
                    "x": 421939.99170000013,
                    "y": 4628923.9685999993
                }
            },
            {
                "attributes": {
                    "OBJECTID": 39,
                    "name": null,
                    "number": "39",
                    "time": "2017/12/28 20:57:52 AM UTC",
                    "date": 1514503527000
                },
                "geometry": {
                    "x": 421770.65809999965,
                    "y": 4628998.0521000009
                }
            },
            {
                "attributes": {
                    "OBJECTID": 40,
                    "name": null,
                    "number": "40",
                    "time": "2017/12/28 21:12:16 AM UTC",
                    "date": 1514504391000
                },
                "geometry": {
                    "x": 421537.82430000044,
                    "y": 4629061.5522000007
                }
            },
            {
                "attributes": {
                    "OBJECTID": 41,
                    "name": null,
                    "number": "41",
                    "time": "2017/12/28 21:26:40 AM UTC",
                    "date": 1514505255000
                },
                "geometry": {
                    "x": 421326.15720000025,
                    "y": 4628839.3017999995
                }
            },
            {
                "attributes": {
                    "OBJECTID": 42,
                    "name": null,
                    "number": "42",
                    "time": "2017/12/28 21:41:04 AM UTC",
                    "date": 1514506119000
                },
                "geometry": {
                    "x": 421453.15739999991,
                    "y": 4628595.8847000003
                }
            },
            {
                "attributes": {
                    "OBJECTID": 43,
                    "name": null,
                    "number": "43",
                    "time": "2017/12/28 21:55:28 AM UTC",
                    "date": 1514506983000
                },
                "geometry": {
                    "x": 421929.40840000007,
                    "y": 4628447.7177000009
                }
            },
            {
                "attributes": {
                    "OBJECTID": 44,
                    "name": null,
                    "number": "44",
                    "time": "2017/12/28 22:09:52 AM UTC",
                    "date": 1514507847000
                },
                "geometry": {
                    "x": 422066.99199999962,
                    "y": 4628246.6339999996
                }
            },
            {
                "attributes": {
                    "OBJECTID": 45,
                    "name": null,
                    "number": "45",
                    "time": "2017/12/28 22:24:16 AM UTC",
                    "date": 1514508711000
                },
                "geometry": {
                    "x": 422141.07550000027,
                    "y": 4627971.4667000007
                }
            },
            {
                "attributes": {
                    "OBJECTID": 46,
                    "name": null,
                    "number": "46",
                    "time": "2017/12/28 22:38:40 AM UTC",
                    "date": 1514509575000
                },
                "geometry": {
                    "x": 422162.24220000021,
                    "y": 4627717.4661999997
                }
            },
            {
                "attributes": {
                    "OBJECTID": 47,
                    "name": null,
                    "number": "47",
                    "time": "2017/12/28 22:53:04 AM UTC",
                    "date": 1514510439000
                },
                "geometry": {
                    "x": 422193.99220000021,
                    "y": 4627389.3822000008
                }
            },
            {
                "attributes": {
                    "OBJECTID": 48,
                    "name": null,
                    "number": "48",
                    "time": "2017/12/28 23:07:28 AM UTC",
                    "date": 1514511303000
                },
                "geometry": {
                    "x": 422225.74230000004,
                    "y": 4627061.2982000001
                }
            },
            {
                "attributes": {
                    "OBJECTID": 49,
                    "name": null,
                    "number": "49",
                    "time": "2017/12/28 23:21:52 AM UTC",
                    "date": 1514512167000
                },
                "geometry": {
                    "x": 422172.82550000027,
                    "y": 4626712.0475999992
                }
            },
            {
                "attributes": {
                    "OBJECTID": 50,
                    "name": null,
                    "number": "50",
                    "time": "2017/12/28 23:36:16 AM UTC",
                    "date": 1514513031000
                },
                "geometry": {
                    "x": 421918.82500000019,
                    "y": 4626680.2974999994
                }
            },
            {
                "attributes": {
                    "OBJECTID": 51,
                    "name": null,
                    "number": "51",
                    "time": "2017/12/28 23:50:40 AM UTC",
                    "date": 1514513895000
                },
                "geometry": {
                    "x": 421685.99120000005,
                    "y": 4626680.2974999994
                }
            },
            {
                "attributes": {
                    "OBJECTID": 52,
                    "name": null,
                    "number": "52",
                    "time": "2017/12/29 0:05:04 AM UTC",
                    "date": 1514514759000
                },
                "geometry": {
                    "x": 421357.90720000025,
                    "y": 4626786.1309999991
                }
            },
            {
                "attributes": {
                    "OBJECTID": 53,
                    "name": null,
                    "number": "53",
                    "time": "2017/12/29 0:19:28 AM UTC",
                    "date": 1514515623000
                },
                "geometry": {
                    "x": 421103.90670000017,
                    "y": 4627040.1315000001
                }
            },
            {
                "attributes": {
                    "OBJECTID": 54,
                    "name": null,
                    "number": "54",
                    "time": "2017/12/29 0:33:52 AM UTC",
                    "date": 1514516487000
                },
                "geometry": {
                    "x": 421125.07340000011,
                    "y": 4627262.3819999993
                }
            },
            {
                "attributes": {
                    "OBJECTID": 55,
                    "name": null,
                    "number": "55",
                    "time": "2017/12/29 0:48:16 AM UTC",
                    "date": 1514517351000
                },
                "geometry": {
                    "x": 421135.6568,
                    "y": 4627484.6324000005
                }
            },
            {
                "attributes": {
                    "OBJECTID": 56,
                    "name": null,
                    "number": "56",
                    "time": "2017/12/29 1:02:40 AM UTC",
                    "date": 1514518215000
                },
                "geometry": {
                    "x": 421167.4068,
                    "y": 4627865.6331999991
                }
            },
            {
                "attributes": {
                    "OBJECTID": 57,
                    "name": null,
                    "number": "57",
                    "time": "2017/12/29 1:17:04 AM UTC",
                    "date": 1514519079000
                },
                "geometry": {
                    "x": 421199.15689999983,
                    "y": 4628130.2171
                }
            },
            {
                "attributes": {
                    "OBJECTID": 58,
                    "name": null,
                    "number": "58",
                    "time": "2017/12/29 1:31:28 AM UTC",
                    "date": 1514519943000
                },
                "geometry": {
                    "x": 421146.24010000005,
                    "y": 4628341.8840999994
                }
            },
            {
                "attributes": {
                    "OBJECTID": 59,
                    "name": null,
                    "number": "59",
                    "time": "2017/12/29 1:45:52 AM UTC",
                    "date": 1514520807000
                },
                "geometry": {
                    "x": 420860.48959999997,
                    "y": 4628310.1340999994
                }
            },
            {
                "attributes": {
                    "OBJECTID": 60,
                    "name": null,
                    "number": "60",
                    "time": "2017/12/29 2:00:16 AM UTC",
                    "date": 1514521671000
                },
                "geometry": {
                    "x": 420553.57230000012,
                    "y": 4628310.1340999994
                }
            },
            {
                "attributes": {
                    "OBJECTID": 61,
                    "name": null,
                    "number": "61",
                    "time": "2017/12/29 2:14:40 AM UTC",
                    "date": 1514522535000
                },
                "geometry": {
                    "x": 420394.82199999969,
                    "y": 4628394.8008999992
                }
            },
            {
                "attributes": {
                    "OBJECTID": 62,
                    "name": null,
                    "number": "62",
                    "time": "2017/12/29 2:29:04 AM UTC",
                    "date": 1514523399000
                },
                "geometry": {
                    "x": 420193.73819999956,
                    "y": 4628183.1338
                }
            },
            {
                "attributes": {
                    "OBJECTID": 63,
                    "name": null,
                    "number": "63",
                    "time": "2017/12/29 2:43:28 AM UTC",
                    "date": 1514524263000
                },
                "geometry": {
                    "x": 419939.73770000041,
                    "y": 4628172.5504999999
                }
            },
            {
                "attributes": {
                    "OBJECTID": 64,
                    "name": null,
                    "number": "64",
                    "time": "2017/12/29 2:57:52 AM UTC",
                    "date": 1514525127000
                },
                "geometry": {
                    "x": 419696.32060000021,
                    "y": 4628172.5504999999
                }
            },
            {
                "attributes": {
                    "OBJECTID": 65,
                    "name": null,
                    "number": "65",
                    "time": "2017/12/29 3:12:16 AM UTC",
                    "date": 1514525991000
                },
                "geometry": {
                    "x": 419410.5700000003,
                    "y": 4628225.4671999998
                }
            },
            {
                "attributes": {
                    "OBJECTID": 66,
                    "name": null,
                    "number": "66",
                    "time": "2017/12/29 3:26:40 AM UTC",
                    "date": 1514526855000
                },
                "geometry": {
                    "x": 419294.15309999976,
                    "y": 4628458.3010000009
                }
            },
            {
                "attributes": {
                    "OBJECTID": 67,
                    "name": null,
                    "number": "67",
                    "time": "2017/12/29 3:41:04 AM UTC",
                    "date": 1514527719000
                },
                "geometry": {
                    "x": 419495.23680000007,
                    "y": 4628744.0515999999
                }
            }
        ]
    }
    let activeClients=[];
    return {
        start(){
            wss.on('connection', function (ws) {
                console.log('client connected at '+new Date().toTimeString());
                activeClients.push(ws);
                ws.on('message', function (message) {
                    console.log('message:');
                    console.log(message);
                });
                ws.on('error',function (error) {
                    console.log('error:')
                    console.log(error)
                    delete ws;
                });
                ws.on('close',function (e) {
                    console.log('closed:')
                    console.log(e)
                    delete ws;
                });
                ws.on('open',function (e) {
                    console.log('client opened');
                });
            });
            let i=0;
            let j=22;
            let k=44;
            let imax=gisData.features.length;
            let timer=setInterval(function(){
                for(var val in activeClients){
                    let ws=activeClients[val]
                    if(ws&&ws.readyState==1)
                    {
                        let items=[gisData.features[i],gisData.features[j],gisData.features[k]];
                        ws.send(JSON.stringify(items));
                    }
                }
                i++;
                j++;
                k++;
                if(i==imax){i=0}
                if(j==imax){j=0}
                if(k==imax){k=0}
            },1000);
            console.log('server start');
        }
    }
})()