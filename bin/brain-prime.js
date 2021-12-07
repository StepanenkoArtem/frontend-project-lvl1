#!/usr/bin/env node

import { task, TASK_DESCRIPTION } from '../src/games/prime.js';
import run from '../src/index.js';

run(task, TASK_DESCRIPTION);
