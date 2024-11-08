import firebase_helpers
import heapq

def find_top_k_total( k ):
    total_food = firebase_helpers.read_total()
    heap = [] # min heap, stores k elements and if size exceeds k, then pop elements

    for food, count in total_food.items():
        heapq.heappush( heap, (count, food) )
        if len(heap) > k:
            heapq.heappop( heap )
    
    res = []
    while heap:
        _ , name =  heapq.heappop(heap)
        res.append( name )
    
    return res[::-1]

def find_top_k_healthy( k ):
    healthy_food = firebase_helpers.read_healthy()
    heap = []
    
    for food, count in healthy_food.items():
        heapq.heappush( heap, (count, food) )
        if len(heap) > k:
            heapq.heappop( heap )
    
    res = []
    while heap:
        _, name = heapq.heappop( heap )
        res.append( name )
    
    return res[::-1]

def find_top_k_environmentally_friendly( k ):
    environmetnally_friendly_food = firebase_helpers.read_environmentally_friendly()
    heap = []

    for food, count in environmetnally_friendly_food.items():
        heapq.heappush( heap, (count, food) )
        if len(heap) > k:
            heapq.heappop()
    
    res = []
    while heap:
        _, name = heapq.heappop(heap)
        res.append(name)
    
    return res[::-1]


def main():
    print( find_top_k_total(3) )

if __name__ == "__main__":
    main()
