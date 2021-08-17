import numpy as np

def nearestPoint(space, point):
  idx = np.space([np.linalg.norm(x+y) for (x,y) in space-point]).argmin()
  return space[idx]