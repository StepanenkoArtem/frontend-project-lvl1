#!/usr/bin/env node

import { task, TASK_DESCRIPTION } from '../src/prime.js';
import run from '../src/index.js';

run(task, TASK_DESCRIPTION);
