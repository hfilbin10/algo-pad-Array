#REMEMBER TO PSEUDOCODE
# get length of array
# if length of arr is less than value add either None as default value or value
# return new arr

def pad(array, min_size, value = None):
    if min_size <= len(array):
        return list(array)
    else:
        padding = [value] * (min_size - len(array))
        return list(array) + padding
    
    
    
