import { ITimeseriesWidgetData } from "@nova-ui/dashboards";
import moment from "moment/moment";

import { BasicTableModel } from "./table/types";

export interface IProportionalWidgetData {
    id: string;
    name: string;
    data: number[];
    link: string;
    value: string;
}

export function getMockBeerReviewCountsByCity() {
    return [
        {
            id: "Brno",
            name: "Brno",
            data: [Math.round(Math.random() * 100000)],
            link: "https://en.wikipedia.org/wiki/Brno",
            value: "Brno",
        },
        {
            id: "kyiv",
            name: "Kyiv",
            data: [Math.round(Math.random() * 100000)],
            link: "https://en.wikipedia.org/wiki/Kyiv",
            value: "Kyiv",
        },
        {
            id: "austin",
            name: "Austin",
            data: [Math.round(Math.random() * 100000)],
            link: "https://en.wikipedia.org/wiki/Austin",
            value: "Austin",
        },
        {
            id: "lisbon",
            name: "Lisbon",
            data: [Math.round(Math.random() * 100000)],
            link: "https://en.wikipedia.org/wiki/Lisbon",
            value: "Lisbon",
        },
        {
            id: "sydney",
            name: "Sydney",
            data: [Math.round(Math.random() * 100000)],
            link: "https://en.wikipedia.org/wiki/Sydney",
            value: "Sydney",
        },
        {
            id: "nur-sultan",
            name: "Nur-Sultan",
            data: [Math.round(Math.random() * 100000)],
            link: "https://en.wikipedia.org/wiki/Nur-Sultan",
            value: "Nur-Sultan",
        },
    ].sort((a, b) => a.data[0] - b.data[0]);
}

export function getMockBeerReviewCountsByCity2() {
    return [
        {
            id: "london",
            name: "London",
            data: [Math.round(Math.random() * 100000)],
            link: "https://en.wikipedia.org/wiki/London",
            value: "London",
        },
        {
            id: "paris",
            name: "Paris",
            data: [Math.round(Math.random() * 100000)],
            link: "https://en.wikipedia.org/wiki/Paris",
            value: "Paris",
        },
        {
            id: "rio",
            name: "Rio",
            data: [Math.round(Math.random() * 100000)],
            link: "https://en.wikipedia.org/wiki/Rio_de_Janeiro",
            value: "Rio",
        },
    ].sort((a, b) => a.data[0] - b.data[0]);
}

export const BEER_VS_READING_DATA: ITimeseriesWidgetData[] = [
    {
        id: "series-1",
        name: "Beer Tasting",
        description: "Havin' some suds",
        data: [
            { x: moment().subtract(10, "day"), y: 30 },
            { x: moment().subtract(9, "day"), y: 35 },
            { x: moment().subtract(8, "day"), y: 33 },
            { x: moment().subtract(7, "day"), y: 40 },
            { x: moment().subtract(6, "day"), y: 35 },
            { x: moment().subtract(5, "day"), y: 30 },
            { x: moment().subtract(4, "day"), y: 35 },
            { x: moment().subtract(3, "day"), y: 15 },
            { x: moment().subtract(2, "day"), y: 30 },
            { x: moment().subtract(1, "day"), y: 35 },
            { x: moment().subtract(24, "hour"), y: 34 },
            { x: moment().subtract(15, "hour"), y: 33 },
            { x: moment().subtract(10, "hour"), y: 35 },
            { x: moment().subtract(5, "hour"), y: 36 },
            { x: moment().subtract(1, "hour"), y: 34 },
            { x: moment().subtract(50, "minute"), y: 33 },
            { x: moment().subtract(40, "minute"), y: 30 },
            { x: moment().subtract(30, "minute"), y: 32 },
            { x: moment().subtract(20, "minute"), y: 31 },
            { x: moment().subtract(10, "minute"), y: 34 },
        ],
    },
    {
        id: "series-2",
        name: "Reading",
        description: "Hittin' the books",
        data: [
            { x: moment().subtract(10, "day"), y: 60 },
            { x: moment().subtract(9, "day"), y: 64 },
            { x: moment().subtract(8, "day"), y: 70 },
            { x: moment().subtract(7, "day"), y: 55 },
            { x: moment().subtract(6, "day"), y: 55 },
            { x: moment().subtract(5, "day"), y: 45 },
            { x: moment().subtract(4, "day"), y: 10 },
            { x: moment().subtract(3, "day"), y: 65 },
            { x: moment().subtract(2, "day"), y: 35 },
            { x: moment().subtract(1, "day"), y: 60 },
            { x: moment().subtract(24, "hour"), y: 61 },
            { x: moment().subtract(15, "hour"), y: 65 },
            { x: moment().subtract(10, "hour"), y: 63 },
            { x: moment().subtract(5, "hour"), y: 58 },
            { x: moment().subtract(1, "hour"), y: 64 },
            { x: moment().subtract(50, "minute"), y: 63 },
            { x: moment().subtract(40, "minute"), y: 60 },
            { x: moment().subtract(30, "minute"), y: 62 },
            { x: moment().subtract(20, "minute"), y: 61 },
            { x: moment().subtract(10, "minute"), y: 62 },
        ],
    },
];

export const LOUNGING_VS_ULTIMATE_FRISBEE_DATA: ITimeseriesWidgetData[] = [
    {
        id: "series-a",
        name: "Lounging",
        description: "Shootin' the Breeze",
        data: [
            { x: moment().subtract(10, "day"), y: 10 },
            { x: moment().subtract(9, "day"), y: 15 },
            { x: moment().subtract(8, "day"), y: 13 },
            { x: moment().subtract(7, "day"), y: 20 },
            { x: moment().subtract(6, "day"), y: 15 },
            { x: moment().subtract(5, "day"), y: 10 },
            { x: moment().subtract(4, "day"), y: 15 },
            { x: moment().subtract(3, "day"), y: 5 },
            { x: moment().subtract(2, "day"), y: 10 },
            { x: moment().subtract(1, "day"), y: 15 },
            { x: moment().subtract(24, "hour"), y: 14 },
            { x: moment().subtract(15, "hour"), y: 13 },
            { x: moment().subtract(10, "hour"), y: 15 },
            { x: moment().subtract(5, "hour"), y: 16 },
            { x: moment().subtract(1, "hour"), y: 14 },
            { x: moment().subtract(50, "minute"), y: 13 },
            { x: moment().subtract(40, "minute"), y: 10 },
            { x: moment().subtract(30, "minute"), y: 12 },
            { x: moment().subtract(20, "minute"), y: 11 },
            { x: moment().subtract(10, "minute"), y: 14 },
        ],
    },
    {
        id: "series-b",
        name: "Frisbee Golfing",
        description: "Golfin' with a disc",
        data: [
            { x: moment().subtract(10, "day"), y: 80 },
            { x: moment().subtract(9, "day"), y: 84 },
            { x: moment().subtract(8, "day"), y: 80 },
            { x: moment().subtract(7, "day"), y: 75 },
            { x: moment().subtract(6, "day"), y: 95 },
            { x: moment().subtract(5, "day"), y: 85 },
            { x: moment().subtract(4, "day"), y: 80 },
            { x: moment().subtract(3, "day"), y: 85 },
            { x: moment().subtract(2, "day"), y: 85 },
            { x: moment().subtract(1, "day"), y: 80 },
            { x: moment().subtract(24, "hour"), y: 81 },
            { x: moment().subtract(15, "hour"), y: 85 },
            { x: moment().subtract(10, "hour"), y: 83 },
            { x: moment().subtract(5, "hour"), y: 88 },
            { x: moment().subtract(1, "hour"), y: 84 },
            { x: moment().subtract(50, "minute"), y: 83 },
            { x: moment().subtract(40, "minute"), y: 80 },
            { x: moment().subtract(30, "minute"), y: 82 },
            { x: moment().subtract(20, "minute"), y: 81 },
            { x: moment().subtract(10, "minute"), y: 82 },
        ],
    },
];

export const TABLE_DATA: BasicTableModel[] = [
    {
        position: 1,
        name: "FOCUS-SVR-02258",
        features: ["remote-access-vpn-tunnel", "patch-manager01"],
        status: "Active",
        checks: {
            icon: "status_up",
            num: 25,
        },
        "cpu-load": 86,
        firstUrl: "https://en.wikipedia.org/wiki/Brno",
        firstUrlLabel: "Brno",
        secondUrl: "https://en.wikipedia.org/wiki/VMware_Workstation",
        secondUrlLabel: "Workstation",
    },
    {
        position: 2,
        name: "FOCUS-SVR-03312",
        features: ["tools", "database", "orion-ape-backup"],
        status: "Active",
        checks: {
            icon: "status_critical",
            num: 25,
        },
        "cpu-load": 47,
        firstUrl: "https://en.wikipedia.org/wiki/Brno",
        firstUrlLabel: "Brno",
        secondUrl: "https://en.wikipedia.org/wiki/VMware_Workstation",
        secondUrlLabel: "Workstation",
    },
    {
        position: 3,
        name: "FOCUS-SVR-02258",
        features: [
            "remote-access-vpn-tunnel",
            "database",
            "orion-ape-backup",
            "patch-manager01",
        ],
        status: "Active",
        checks: {
            icon: "status_down",
            num: 25,
        },
        "cpu-load": 53,
        firstUrl: "https://en.wikipedia.org/wiki/Kyiv",
        firstUrlLabel: "Kyiv",
        secondUrl: "https://en.wikipedia.org/wiki/VMware_Workstation",
        secondUrlLabel: "Workstation",
    },
    {
        position: 4,
        name: "Man-LT-JYJ4AD5",
        features: [
            "remote-access-vpn-tunnel",
            "tools",
            "database",
            "orion-ape-backup",
        ],
        status: "Active",
        checks: {
            icon: "status_up",
            num: 25,
        },
        "cpu-load": 32,
        firstUrl: "https://en.wikipedia.org/wiki/Kyiv",
        firstUrlLabel: "Kyiv",
        secondUrl: "https://en.wikipedia.org/wiki/VirtualBox",
        secondUrlLabel: "VirtualBox",
    },
    {
        position: 5,
        name: "Man-LT-JYJ425",
        features: [
            "remote-access-vpn-tunnel",
            "tools",
            "database",
            "orion-ape-backup",
        ],
        status: "Active",
        checks: {
            icon: "status_up",
            num: 25,
        },
        "cpu-load": 22,
        firstUrl: "https://en.wikipedia.org/wiki/Kyiv",
        firstUrlLabel: "Kyiv",
        secondUrl: "https://en.wikipedia.org/wiki/VirtualBox",
        secondUrlLabel: "VirtualBox",
    },
    {
        position: 6,
        name: "Man-LT-JYJ4333",
        features: [
            "remote-access-vpn-tunnel",
            "tools",
            "database",
            "orion-ape-backup",
        ],
        status: "Active",
        checks: {
            icon: "status_up",
            num: 25,
        },
        "cpu-load": 12,
        firstUrl: "https://en.wikipedia.org/wiki/Kyiv",
        firstUrlLabel: "Kyiv",
        secondUrl: "https://en.wikipedia.org/wiki/VirtualBox",
        secondUrlLabel: "VirtualBox",
    },
    {
        position: 7,
        name: "FOCUS-SVR-02258",
        features: ["remote-access-vpn-tunnel", "patch-manager01"],
        status: "Active",
        checks: {
            icon: "status_up",
            num: 25,
        },
        "cpu-load": 86,
        firstUrl: "https://en.wikipedia.org/wiki/Austin",
        firstUrlLabel: "Austin",
        secondUrl: "https://en.wikipedia.org/wiki/VMware_Workstation",
        secondUrlLabel: "Workstation",
    },
    {
        position: 8,
        name: "Man-LT-JYJ4AD5",
        features: [
            "remote-access-vpn-tunnel",
            "tools",
            "database",
            "orion-ape-backup",
            "patch-manager01",
        ],
        status: "Active",
        checks: {
            icon: "status_inactive",
            num: 25,
        },
        "cpu-load": 35,
        firstUrl: "https://en.wikipedia.org/wiki/Austin",
        firstUrlLabel: "Austin",
        secondUrl: "https://en.wikipedia.org/wiki/VMware_Workstation",
        secondUrlLabel: "Workstation",
    },
    {
        position: 9,
        name: "Man-LT-JYJ4AD5",
        features: [
            "remote-access-vpn-tunnel",
            "tools",
            "database",
            "patch-manager01",
        ],
        status: "Active",
        checks: {
            icon: "status_up",
            num: 25,
        },
        "cpu-load": 32,
        firstUrl: "https://en.wikipedia.org/wiki/Brno",
        firstUrlLabel: "Brno",
        secondUrl: "https://en.wikipedia.org/wiki/VMware_Workstation",
        secondUrlLabel: "Workstation",
    },
    {
        position: 10,
        name: "Man-LT-JYJ4AD5",
        features: [
            "remote-access-vpn-tunnel",
            "database",
            "orion-ape-backup",
            "patch-manager01",
        ],
        status: "Active",
        checks: {
            icon: "status_up",
            num: 25,
        },
        "cpu-load": 64,
        firstUrl: "https://en.wikipedia.org/wiki/Kyiv",
        firstUrlLabel: "Kyiv",
        secondUrl: "https://en.wikipedia.org/wiki/VMware_Workstation",
        secondUrlLabel: "Workstation",
    },
    {
        position: 11,
        name: "Man-LT-111",
        features: [],
        status: "Active",
        checks: {
            icon: "status_external",
            num: 25,
        },
        "cpu-load": 55,
        firstUrl: "https://en.wikipedia.org/wiki/Brno",
        firstUrlLabel: "Brno",
        secondUrl: "https://en.wikipedia.org/wiki/VMware_Workstation",
        secondUrlLabel: "Workstation",
    },
    {
        position: 12,
        name: "Man-LT-2222",
        features: [
            "remote-access-vpn-tunnel",
            "tools",
            "database",
            "orion-ape-backup",
            "patch-manager01",
        ],
        status: "Active",
        checks: {
            icon: "status_inactive",
            num: 25,
        },
        "cpu-load": 34,
        firstUrl: "https://en.wikipedia.org/wiki/Brno",
        firstUrlLabel: "Brno",
        secondUrl: "https://en.wikipedia.org/wiki/VMware_Workstation",
        secondUrlLabel: "Workstation",
    },
    {
        position: 13,
        name: "Man-LT-333333",
        features: [
            "remote-access-vpn-tunnel",
            "tools",
            "database",
            "patch-manager01",
        ],
        status: "Active",
        checks: {
            icon: "status_up",
            num: 25,
        },
        "cpu-load": 56,
        firstUrl: "https://en.wikipedia.org/wiki/Kyiv",
        firstUrlLabel: "Kyiv",
        secondUrl: "https://en.wikipedia.org/wiki/VMware_Workstation",
        secondUrlLabel: "Workstation",
    },
    {
        position: 14,
        name: "Man-LT-444444",
        features: [
            "remote-access-vpn-tunnel",
            "database",
            "orion-ape-backup",
            "patch-manager01",
        ],
        status: "Active",
        checks: {
            icon: "status_up",
            num: 25,
        },
        "cpu-load": 26,
        firstUrl: "https://en.wikipedia.org/wiki/Kyiv",
        firstUrlLabel: "Kyiv",
        secondUrl: "https://en.wikipedia.org/wiki/VMware_Workstation",
        secondUrlLabel: "Workstation",
    },
    {
        position: 15,
        name: "Man-LT-555555",
        features: [
            "remote-access-vpn-tunnel",
            "database",
            "orion-ape-backup",
            "patch-manager01",
        ],
        status: "Active",
        checks: {
            icon: "status_up",
            num: 25,
        },
        "cpu-load": 76,
        firstUrl: "https://en.wikipedia.org/wiki/Austin",
        firstUrlLabel: "Austin",
        secondUrl: "https://en.wikipedia.org/wiki/VMware_Workstation",
        secondUrlLabel: "Workstation",
    },
    {
        position: 16,
        name: "FOCUS-SVR-02258",
        features: ["remote-access-vpn-tunnel", "patch-manager01"],
        status: "Active",
        checks: {
            icon: "status_up",
            num: 25,
        },
        "cpu-load": 86,
        firstUrl: "https://en.wikipedia.org/wiki/Brno",
        firstUrlLabel: "Brno",
        secondUrl: "https://en.wikipedia.org/wiki/VMware_Workstation",
        secondUrlLabel: "Workstation",
    },
    {
        position: 17,
        name: "FOCUS-SVR-03312",
        features: ["tools", "database", "orion-ape-backup"],
        status: "Active",
        checks: {
            icon: "status_critical",
            num: 25,
        },
        "cpu-load": 47,
        firstUrl: "https://en.wikipedia.org/wiki/Brno",
        firstUrlLabel: "Brno",
        secondUrl: "https://en.wikipedia.org/wiki/VMware_Workstation",
        secondUrlLabel: "Workstation",
    },
    {
        position: 18,
        name: "FOCUS-SVR-02258",
        features: [
            "remote-access-vpn-tunnel",
            "database",
            "orion-ape-backup",
            "patch-manager01",
        ],
        status: "Active",
        checks: {
            icon: "status_down",
            num: 25,
        },
        "cpu-load": 53,
        firstUrl: "https://en.wikipedia.org/wiki/Kyiv",
        firstUrlLabel: "Kyiv",
        secondUrl: "https://en.wikipedia.org/wiki/VMware_Workstation",
        secondUrlLabel: "Workstation",
    },
    {
        position: 19,
        name: "Man-LT-JYJ4AD5",
        features: [
            "remote-access-vpn-tunnel",
            "tools",
            "database",
            "orion-ape-backup",
        ],
        status: "Active",
        checks: {
            icon: "status_up",
            num: 25,
        },
        "cpu-load": 32,
        firstUrl: "https://en.wikipedia.org/wiki/Kyiv",
        firstUrlLabel: "Kyiv",
        secondUrl: "https://en.wikipedia.org/wiki/VirtualBox",
        secondUrlLabel: "VirtualBox",
    },
    {
        position: 20,
        name: "Man-LT-JYJ425",
        features: [
            "remote-access-vpn-tunnel",
            "tools",
            "database",
            "orion-ape-backup",
        ],
        status: "Active",
        checks: {
            icon: "status_up",
            num: 25,
        },
        "cpu-load": 22,
        firstUrl: "https://en.wikipedia.org/wiki/Kyiv",
        firstUrlLabel: "Kyiv",
        secondUrl: "https://en.wikipedia.org/wiki/VirtualBox",
        secondUrlLabel: "VirtualBox",
    },
    {
        position: 21,
        name: "Man-LT-JYJ4333",
        features: [
            "remote-access-vpn-tunnel",
            "tools",
            "database",
            "orion-ape-backup",
        ],
        status: "Active",
        checks: {
            icon: "status_up",
            num: 25,
        },
        "cpu-load": 12,
        firstUrl: "https://en.wikipedia.org/wiki/Kyiv",
        firstUrlLabel: "Kyiv",
        secondUrl: "https://en.wikipedia.org/wiki/VirtualBox",
        secondUrlLabel: "VirtualBox",
    },
    {
        position: 22,
        name: "FOCUS-SVR-02258",
        features: ["remote-access-vpn-tunnel", "patch-manager01"],
        status: "Active",
        checks: {
            icon: "status_up",
            num: 25,
        },
        "cpu-load": 86,
        firstUrl: "https://en.wikipedia.org/wiki/Austin",
        firstUrlLabel: "Austin",
        secondUrl: "https://en.wikipedia.org/wiki/VMware_Workstation",
        secondUrlLabel: "Workstation",
    },
    {
        position: 23,
        name: "Man-LT-JYJ4AD5",
        features: [
            "remote-access-vpn-tunnel",
            "tools",
            "database",
            "orion-ape-backup",
            "patch-manager01",
        ],
        status: "Active",
        checks: {
            icon: "status_inactive",
            num: 25,
        },
        "cpu-load": 35,
        firstUrl: "https://en.wikipedia.org/wiki/Austin",
        firstUrlLabel: "Austin",
        secondUrl: "https://en.wikipedia.org/wiki/VMware_Workstation",
        secondUrlLabel: "Workstation",
    },
    {
        position: 24,
        name: "Man-LT-JYJ4AD5",
        features: [
            "remote-access-vpn-tunnel",
            "tools",
            "database",
            "patch-manager01",
        ],
        status: "Active",
        checks: {
            icon: "status_up",
            num: 25,
        },
        "cpu-load": 32,
        firstUrl: "https://en.wikipedia.org/wiki/Brno",
        firstUrlLabel: "Brno",
        secondUrl: "https://en.wikipedia.org/wiki/VMware_Workstation",
        secondUrlLabel: "Workstation",
    },
    {
        position: 25,
        name: "Man-LT-JYJ4AD5",
        features: [
            "remote-access-vpn-tunnel",
            "database",
            "orion-ape-backup",
            "patch-manager01",
        ],
        status: "Active",
        checks: {
            icon: "status_up",
            num: 25,
        },
        "cpu-load": 64,
        firstUrl: "https://en.wikipedia.org/wiki/Kyiv",
        firstUrlLabel: "Kyiv",
        secondUrl: "https://en.wikipedia.org/wiki/VMware_Workstation",
        secondUrlLabel: "Workstation",
    },
    {
        position: 26,
        name: "Man-LT-111",
        features: [],
        status: "Active",
        checks: {
            icon: "status_external",
            num: 25,
        },
        "cpu-load": 55,
        firstUrl: "https://en.wikipedia.org/wiki/Brno",
        firstUrlLabel: "Brno",
        secondUrl: "https://en.wikipedia.org/wiki/VMware_Workstation",
        secondUrlLabel: "Workstation",
    },
    {
        position: 27,
        name: "Man-LT-2222",
        features: [
            "remote-access-vpn-tunnel",
            "tools",
            "database",
            "orion-ape-backup",
            "patch-manager01",
        ],
        status: "Active",
        checks: {
            icon: "status_inactive",
            num: 25,
        },
        "cpu-load": 34,
        firstUrl: "https://en.wikipedia.org/wiki/Brno",
        firstUrlLabel: "Brno",
        secondUrl: "https://en.wikipedia.org/wiki/VMware_Workstation",
        secondUrlLabel: "Workstation",
    },
    {
        position: 28,
        name: "Man-LT-333333",
        features: [
            "remote-access-vpn-tunnel",
            "tools",
            "database",
            "patch-manager01",
        ],
        status: "Active",
        checks: {
            icon: "status_up",
            num: 25,
        },
        "cpu-load": 56,
        firstUrl: "https://en.wikipedia.org/wiki/Kyiv",
        firstUrlLabel: "Kyiv",
        secondUrl: "https://en.wikipedia.org/wiki/VMware_Workstation",
        secondUrlLabel: "Workstation",
    },
    {
        position: 29,
        name: "Man-LT-444444",
        features: [
            "remote-access-vpn-tunnel",
            "database",
            "orion-ape-backup",
            "patch-manager01",
        ],
        status: "Active",
        checks: {
            icon: "status_up",
            num: 25,
        },
        "cpu-load": 26,
        firstUrl: "https://en.wikipedia.org/wiki/Kyiv",
        firstUrlLabel: "Kyiv",
        secondUrl: "https://en.wikipedia.org/wiki/VMware_Workstation",
        secondUrlLabel: "Workstation",
    },
    {
        position: 30,
        name: "Man-LT-555555",
        features: [
            "remote-access-vpn-tunnel",
            "database",
            "orion-ape-backup",
            "patch-manager01",
        ],
        status: "Active",
        checks: {
            icon: "status_up",
            num: 25,
        },
        "cpu-load": 76,
        firstUrl: "https://en.wikipedia.org/wiki/Austin",
        firstUrlLabel: "Austin",
        secondUrl: "https://en.wikipedia.org/wiki/VMware_Workstation",
        secondUrlLabel: "Workstation",
    },
    {
        position: 31,
        name: "FOCUS-SVR-02258",
        features: ["remote-access-vpn-tunnel", "patch-manager01"],
        status: "Active",
        checks: {
            icon: "status_up",
            num: 25,
        },
        "cpu-load": 86,
        firstUrl: "https://en.wikipedia.org/wiki/Brno",
        firstUrlLabel: "Brno",
        secondUrl: "https://en.wikipedia.org/wiki/VMware_Workstation",
        secondUrlLabel: "Workstation",
    },
    {
        position: 32,
        name: "FOCUS-SVR-03312",
        features: ["tools", "database", "orion-ape-backup"],
        status: "Active",
        checks: {
            icon: "status_critical",
            num: 25,
        },
        "cpu-load": 47,
        firstUrl: "https://en.wikipedia.org/wiki/Brno",
        firstUrlLabel: "Brno",
        secondUrl: "https://en.wikipedia.org/wiki/VMware_Workstation",
        secondUrlLabel: "Workstation",
    },
    {
        position: 33,
        name: "FOCUS-SVR-02258",
        features: [
            "remote-access-vpn-tunnel",
            "database",
            "orion-ape-backup",
            "patch-manager01",
        ],
        status: "Active",
        checks: {
            icon: "status_down",
            num: 25,
        },
        "cpu-load": 53,
        firstUrl: "https://en.wikipedia.org/wiki/Kyiv",
        firstUrlLabel: "Kyiv",
        secondUrl: "https://en.wikipedia.org/wiki/VMware_Workstation",
        secondUrlLabel: "Workstation",
    },
    {
        position: 34,
        name: "Man-LT-JYJ4AD5",
        features: [
            "remote-access-vpn-tunnel",
            "tools",
            "database",
            "orion-ape-backup",
        ],
        status: "Active",
        checks: {
            icon: "status_up",
            num: 25,
        },
        "cpu-load": 32,
        firstUrl: "https://en.wikipedia.org/wiki/Kyiv",
        firstUrlLabel: "Kyiv",
        secondUrl: "https://en.wikipedia.org/wiki/VirtualBox",
        secondUrlLabel: "VirtualBox",
    },
    {
        position: 35,
        name: "Man-LT-JYJ425",
        features: [
            "remote-access-vpn-tunnel",
            "tools",
            "database",
            "orion-ape-backup",
        ],
        status: "Active",
        checks: {
            icon: "status_up",
            num: 25,
        },
        "cpu-load": 22,
        firstUrl: "https://en.wikipedia.org/wiki/Kyiv",
        firstUrlLabel: "Kyiv",
        secondUrl: "https://en.wikipedia.org/wiki/VirtualBox",
        secondUrlLabel: "VirtualBox",
    },
    {
        position: 36,
        name: "Man-LT-JYJ4333",
        features: [
            "remote-access-vpn-tunnel",
            "tools",
            "database",
            "orion-ape-backup",
        ],
        status: "Active",
        checks: {
            icon: "status_up",
            num: 25,
        },
        "cpu-load": 12,
        firstUrl: "https://en.wikipedia.org/wiki/Kyiv",
        firstUrlLabel: "Kyiv",
        secondUrl: "https://en.wikipedia.org/wiki/VirtualBox",
        secondUrlLabel: "VirtualBox",
    },
    {
        position: 37,
        name: "FOCUS-SVR-02258",
        features: ["remote-access-vpn-tunnel", "patch-manager01"],
        status: "Active",
        checks: {
            icon: "status_up",
            num: 25,
        },
        "cpu-load": 86,
        firstUrl: "https://en.wikipedia.org/wiki/Austin",
        firstUrlLabel: "Austin",
        secondUrl: "https://en.wikipedia.org/wiki/VMware_Workstation",
        secondUrlLabel: "Workstation",
    },
    {
        position: 38,
        name: "Man-LT-JYJ4AD5",
        features: [
            "remote-access-vpn-tunnel",
            "tools",
            "database",
            "orion-ape-backup",
            "patch-manager01",
        ],
        status: "Active",
        checks: {
            icon: "status_inactive",
            num: 25,
        },
        "cpu-load": 35,
        firstUrl: "https://en.wikipedia.org/wiki/Austin",
        firstUrlLabel: "Austin",
        secondUrl: "https://en.wikipedia.org/wiki/VMware_Workstation",
        secondUrlLabel: "Workstation",
    },
    {
        position: 39,
        name: "Man-LT-JYJ4AD5",
        features: [
            "remote-access-vpn-tunnel",
            "tools",
            "database",
            "patch-manager01",
        ],
        status: "Active",
        checks: {
            icon: "status_up",
            num: 25,
        },
        "cpu-load": 32,
        firstUrl: "https://en.wikipedia.org/wiki/Brno",
        firstUrlLabel: "Brno",
        secondUrl: "https://en.wikipedia.org/wiki/VMware_Workstation",
        secondUrlLabel: "Workstation",
    },
    {
        position: 40,
        name: "Man-LT-JYJ4AD5",
        features: [
            "remote-access-vpn-tunnel",
            "database",
            "orion-ape-backup",
            "patch-manager01",
        ],
        status: "Active",
        checks: {
            icon: "status_up",
            num: 25,
        },
        "cpu-load": 64,
        firstUrl: "https://en.wikipedia.org/wiki/Kyiv",
        firstUrlLabel: "Kyiv",
        secondUrl: "https://en.wikipedia.org/wiki/VMware_Workstation",
        secondUrlLabel: "Workstation",
    },
    {
        position: 41,
        name: "Man-LT-111",
        features: [],
        status: "Active",
        checks: {
            icon: "status_external",
            num: 25,
        },
        "cpu-load": 55,
        firstUrl: "https://en.wikipedia.org/wiki/Brno",
        firstUrlLabel: "Brno",
        secondUrl: "https://en.wikipedia.org/wiki/VMware_Workstation",
        secondUrlLabel: "Workstation",
    },
    {
        position: 42,
        name: "Man-LT-2222",
        features: [
            "remote-access-vpn-tunnel",
            "tools",
            "database",
            "orion-ape-backup",
            "patch-manager01",
        ],
        status: "Active",
        checks: {
            icon: "status_inactive",
            num: 25,
        },
        "cpu-load": 34,
        firstUrl: "https://en.wikipedia.org/wiki/Brno",
        firstUrlLabel: "Brno",
        secondUrl: "https://en.wikipedia.org/wiki/VMware_Workstation",
        secondUrlLabel: "Workstation",
    },
    {
        position: 43,
        name: "Man-LT-333333",
        features: [
            "remote-access-vpn-tunnel",
            "tools",
            "database",
            "patch-manager01",
        ],
        status: "Active",
        checks: {
            icon: "status_up",
            num: 25,
        },
        "cpu-load": 56,
        firstUrl: "https://en.wikipedia.org/wiki/Kyiv",
        firstUrlLabel: "Kyiv",
        secondUrl: "https://en.wikipedia.org/wiki/VMware_Workstation",
        secondUrlLabel: "Workstation",
    },
    {
        position: 44,
        name: "Man-LT-444444",
        features: [
            "remote-access-vpn-tunnel",
            "database",
            "orion-ape-backup",
            "patch-manager01",
        ],
        status: "Active",
        checks: {
            icon: "status_up",
            num: 25,
        },
        "cpu-load": 26,
        firstUrl: "https://en.wikipedia.org/wiki/Kyiv",
        firstUrlLabel: "Kyiv",
        secondUrl: "https://en.wikipedia.org/wiki/VMware_Workstation",
        secondUrlLabel: "Workstation",
    },
    {
        position: 45,
        name: "Man-LT-555555",
        features: [
            "remote-access-vpn-tunnel",
            "database",
            "orion-ape-backup",
            "patch-manager01",
        ],
        status: "Active",
        checks: {
            icon: "status_up",
            num: 25,
        },
        "cpu-load": 76,
        firstUrl: "https://en.wikipedia.org/wiki/Austin",
        firstUrlLabel: "Austin",
        secondUrl: "https://en.wikipedia.org/wiki/VMware_Workstation",
        secondUrlLabel: "Workstation",
    },
];
