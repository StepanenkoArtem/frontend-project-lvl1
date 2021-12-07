#!/usr/bin/env node

import run from '../src/index.js';
import { task, TASK_DESCRIPTION } from '../src/games/gcd.js';

run(task, TASK_DESCRIPTION);
