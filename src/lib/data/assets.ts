import js from '$lib/assets/logos/js.png';
import ts from '$lib/assets/logos/ts.png';
import dart from '$lib/assets/logos/dart.png';
import kt from '$lib/assets/logos/kotlin.png';
import java from '$lib/assets/logos/java.png';
import py from '$lib/assets/logos/python.png';

import nodejs from '$lib/assets/logos/node.png';
import deno from '$lib/assets/logos/deno.png';

import vue from '$lib/assets/logos/vue.png';
import react from '$lib/assets/logos/react.svg';
import svelte from '$lib/assets/logos/svelte.png';
import angular from '$lib/assets/logos/angular.png';
import flutter from '$lib/assets/logos/flutter.svg';
import electron from '$lib/assets/logos/electron.png';
import solidjs from '$lib/assets/logos/solid.svg';
import quasar from '$lib/assets/logos/quasar.svg';
import nuxt from '$lib/assets/logos/nuxt.png';
import android from '$lib/assets/logos/android.png';

import expressjs from '$lib/assets/logos/express.png';
import fastify from '$lib/assets/logos/fastify.svg';
import nestjs from '$lib/assets/logos/nest.svg';
import adonisjs from '$lib/assets/logos/adonis.png';

import Mmongodb from '$lib/assets/logos/mongodb.svg';
import redis from '$lib/assets/logos/redis.svg';
import postgresql from '$lib/assets/logos/postgres.png';
import firebase from '$lib/assets/logos/firebase.png';

import html from '$lib/assets/logos/html.svg';

import css from '$lib/assets/logos/css.svg';
import sass from '$lib/assets/logos/sass.png';
import tailwind from '$lib/assets/logos/tailwind.svg';

import ps from '$lib/assets/logos/photoshop.svg';
import ae from '$lib/assets/logos/after-effects.svg';
import premiere from '$lib/assets/logos/premiere.svg';
import illustrator from '$lib/assets/logos/illustrator.svg';

import unknown from '$lib/assets/logos/no-img.svg';
import csharp from '$lib/assets/logos/csharp.svg';
import xarmrin from '$lib/assets/logos/xamarin.svg';

import docker from '$lib/assets/logos/docker.svg';
import kubernetees from '$lib/assets/logos/kubernetes.svg';
import aws from '$lib/assets/logos/aws.svg';
import bootstrap from '$lib/assets/logos/bootstrap.svg';
import c from '$lib/assets/logos/c.svg';
import cpp from '$lib/assets/logos/cpp.svg';
import celery from '$lib/assets/logos/celery.svg';
import djanog from '$lib/assets/logos/django.svg';
import fastapi from '$lib/assets/logos/fastapi.svg';
import flask from '$lib/assets/logos/flask.svg';
import go from '$lib/assets/logos/go.svg';
import kafka from '$lib/assets/logos/kafka.svg';
import neo4j from '$lib/assets/logos/neo4j.svg';
import nginx from '$lib/assets/logos/nginx.svg';
import numpy from '$lib/assets/logos/numpy.svg';
import pandas from '$lib/assets/logos/pandas.svg';
import rabbitmq from '$lib/assets/logos/rabbitmq.svg';
import rust from '$lib/assets/logos/rust.svg';
import scrapy from '$lib/assets/logos/scrapy.png';
import selenium from '$lib/assets/logos/selenium.svg';
import type { Asset } from '$lib/types';
import { theme } from '$lib/stores/theme';

const a = (light: string, dark?: string): Asset => (dark ? { dark, light } : light);

const Assets = {
	AWS: a(aws),
	Bootstrap: a(bootstrap),
	C: a(c),
	Cpp: a(cpp),
	Celery: a(celery),
	Django: a(djanog),
	FastApi: a(fastapi),
	Flask: a(flask),
	Go: a(go),
	Kafka: a(kafka),
	Neo4j: a(neo4j),
	Nginx: a(nginx),
	Numpy: a(numpy),
	Pandas: a(pandas),
	RabbitMQ: a(rabbitmq),
	Rust: a(rust),
	Scrapy: a(scrapy),
	Selenium: a(selenium),
	Docker: a(docker),
	Kubernetes: a(kubernetees),
	Csharp: a(csharp),
	Xamarin: a(xarmrin),
	TypeScript: a(ts),
	VueJs: a(vue),
	ReactJs: a(react),
	Dart: a(dart),
	Kotlin: a(kt),
	Python: a(py),
	NodeJs: a(nodejs),
	Deno: a(deno),
	Svelte: a(svelte),
	ExpressJs: a(expressjs),
	JavaScript: a(js),
	Fastify: a(fastify),
	NestJs: a(nestjs),
	Quasar: a(quasar),
	SolidJs: a(solidjs),
	Electron: a(electron),
	Flutter: a(flutter),
	Java: a(java),
	AdonisJs: a(adonisjs),
	Android: a(android),
	Angular: a(angular),
	PostgreSQL: a(postgresql),
	Firebase: a(firebase),
	Sass: a(sass),
	Unknown: a(unknown),
	MongoDB: a(Mmongodb),
	Redis: a(redis),
	Tailwind: a(tailwind),
	HTML: a(html),
	Premiere: a(premiere),
	Photoshop: a(ps),
	CSS: a(css),
	AfterEffects: a(ae),
	Illustrator: a(illustrator),
	Nuxt: a(nuxt)
};

export default Assets;

let currentTheme: boolean;

theme.subscribe((v) => (currentTheme = v));

export const getAssetURL = (asset: Asset): string => {
	return typeof asset === 'string' ? asset : currentTheme ? asset.dark : asset.light;
};
